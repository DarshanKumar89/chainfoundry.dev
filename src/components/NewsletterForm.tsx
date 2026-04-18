"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlertCircle, ArrowRight, Check } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INBOX = "info@ai2innovate.io";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "done" }
  | { kind: "error"; message: string };

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [state, setState] = useState<State>({ kind: "idle" });
  const pathname = usePathname() || "/";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!EMAIL_RE.test(value)) {
      setState({ kind: "error", message: "That doesn't look like a valid email." });
      return;
    }
    setState({ kind: "submitting" });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, source: `chainfoundry.dev${pathname}`, hp }),
      });

      if (res.ok) {
        setState({ kind: "done" });
        return;
      }

      // API exists but isn't configured (no SENDGRID_API_KEY). Fall back to mailto.
      if (res.status === 503) {
        openMailtoFallback(value);
        setState({ kind: "done" });
        return;
      }

      const data = await res.json().catch(() => ({}));
      setState({
        kind: "error",
        message:
          data?.error === "invalid_email"
            ? "That doesn't look like a valid email."
            : "Couldn't subscribe right now. Try again in a minute, or email us directly.",
      });
    } catch {
      // Network / 404 (static host without API) — open mailto fallback.
      openMailtoFallback(value);
      setState({ kind: "done" });
    }
  }

  if (state.kind === "done") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-white p-5 text-sm text-ink">
        <Check className="mt-0.5 h-5 w-5 flex-none text-accent" />
        <div>
          <div className="font-medium">Thanks — you&apos;re on the list.</div>
          <div className="mt-1 text-ink/60">
            First dispatch lands when the first post is ready. Reply to any of our emails anytime.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex w-full flex-col gap-2">
      <div className="relative flex flex-col items-stretch gap-2 rounded-2xl border border-ink/10 bg-white p-2 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state.kind === "error") setState({ kind: "idle" });
          }}
          className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
        />
        {/* honeypot — bots auto-fill every visible field; hidden from real users */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden
        />
        <button
          type="submit"
          disabled={state.kind === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-ink-700 disabled:opacity-60"
        >
          {state.kind === "submitting" ? "Subscribing…" : "Subscribe"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {state.kind === "error" && (
        <div className="inline-flex items-center gap-2 px-1 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" /> {state.message}{" "}
          <a href={`mailto:${INBOX}?subject=Subscribe%20me`} className="underline underline-offset-2">
            email us
          </a>
          .
        </div>
      )}
      <p className="px-1 text-[11px] text-ink/45">
        We&apos;ll send your address to{" "}
        <span className="font-mono">{INBOX}</span>. No third parties. Unsubscribe anytime.
      </p>
    </form>
  );
}

function openMailtoFallback(email: string) {
  if (typeof window === "undefined") return;
  const subject = encodeURIComponent("Subscribe me to ChainFoundry updates");
  const body = encodeURIComponent(
    `Please add ${email} to the ChainFoundry newsletter.\n\n— sent from chainfoundry.dev`
  );
  window.location.href = `mailto:${INBOX}?subject=${subject}&body=${body}`;
}
