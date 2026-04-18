"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setState("submitting");
    // Placeholder — wire to Buttondown / Resend later
    setTimeout(() => setState("done"), 700);
  }

  if (state === "done") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-white p-5 text-sm text-ink">
        <Check className="h-5 w-5 text-accent" />
        Thanks — we&apos;ll be in touch from <span className="font-mono">darshan@ai2innovate.io</span>.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col items-stretch gap-2 rounded-2xl border border-ink/10 bg-white p-2 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
      />
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-ink-700 disabled:opacity-60"
      >
        {state === "submitting" ? "Subscribing…" : "Subscribe"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
