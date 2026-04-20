import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Node runtime required — nodemailer uses `net` / `tls` (not available on Edge).
export const runtime = "nodejs";
// Never cache; always freshly send.
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = { email?: string; source?: string; hp?: string };

export async function POST(req: Request) {
  let body: Body = {};
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Hidden honeypot — real users never fill it.
  if (body.hp && body.hp.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_TO,
    MAIL_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO || !MAIL_FROM) {
    return NextResponse.json(
      {
        error: "not_configured",
        hint: "Set SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / MAIL_TO / MAIL_FROM in the deploy environment.",
      },
      { status: 503 }
    );
  }

  const source = (body.source ?? "chainfoundry.dev").toString().slice(0, 200);
  const ts = new Date().toISOString();
  const ua = req.headers.get("user-agent")?.slice(0, 200) ?? "";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "";

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Office 365 on 587 uses STARTTLS (secure=false), not implicit TLS.
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    requireTLS: port === 587,
  });

  const subject = `[ChainFoundry] New subscriber: ${email}`;
  const text =
    `New subscriber from ${source}\n\n` +
    `Email:       ${email}\n` +
    `Timestamp:   ${ts}\n` +
    `User-Agent:  ${ua}\n` +
    `IP:          ${ip}\n`;

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,Segoe UI,sans-serif;color:#0F1B2D">
      <h2 style="margin:0 0 12px;font-weight:600">New ChainFoundry subscriber</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
        <tr><td style="color:#5A6578">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="color:#5A6578">Source</td><td>${source}</td></tr>
        <tr><td style="color:#5A6578">Timestamp</td><td>${ts}</td></tr>
        <tr><td style="color:#5A6578">User-Agent</td><td style="font-family:ui-monospace,monospace;font-size:12px">${ua}</td></tr>
        <tr><td style="color:#5A6578">IP</td><td style="font-family:ui-monospace,monospace;font-size:12px">${ip}</td></tr>
      </table>
    </div>`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message.slice(0, 240) : "unknown";
    return NextResponse.json(
      { error: "send_failed", detail },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json(
    { ok: true, hint: "POST { email } here to subscribe." },
    { status: 200 }
  );
}
