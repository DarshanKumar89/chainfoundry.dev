import { NextResponse } from "next/server";

// Runs on Vercel / Netlify / Cloudflare Pages Edge.
// Will not exist in a purely static export (GH Pages) — the form falls back to mailto.
export const runtime = "edge";

const SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
const INBOX = "info@ai2innovate.io";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = { email?: string; source?: string; hp?: string };

export async function POST(req: Request) {
  let body: Body = {};
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Basic bot trap — a hidden "hp" field. Real users never fill it.
  if (body.hp && body.hp.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "not_configured", hint: "Set SENDGRID_API_KEY in your deploy environment." },
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

  const payload = {
    personalizations: [
      {
        to: [{ email: INBOX }],
        subject: `[ChainFoundry] New subscriber: ${email}`,
      },
    ],
    from: { email: INBOX, name: "ChainFoundry Newsletter" },
    reply_to: { email },
    content: [
      {
        type: "text/plain",
        value:
          `New subscriber from ${source}\n\n` +
          `Email:       ${email}\n` +
          `Timestamp:   ${ts}\n` +
          `User-Agent:  ${ua}\n` +
          `IP:          ${ip}\n`,
      },
    ],
    categories: ["chainfoundry-newsletter"],
  };

  const r = await fetch(SENDGRID_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!r.ok) {
    const detail = (await r.text().catch(() => "")).slice(0, 240);
    return NextResponse.json(
      { error: "send_failed", status: r.status, detail },
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
