import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAFooter() {
  return (
    <section className="bg-mist-50">
      <div className="container-prose py-20 md:py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Get started</p>
          <h2 className="h-section mt-3">Ready to build?</h2>
          <p className="mt-5 text-lg text-ink/70 md:text-xl">
            Open-source core. EU-built. Production-grade middleware. Add any chain in hours, not weeks.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-4 md:grid-cols-3">
          <Path
            eyebrow="Developer"
            title="Get started"
            body="Read the docs, install the SDK, decode your first event in 5 minutes."
            href="https://docs.chainfoundry.dev"
            cta="Read the docs"
          />
          <Path
            eyebrow="Partner"
            title="Book a call"
            body="Ecosystem partnerships, enterprise pilots, and grant collaborations."
            href="/contact"
            cta="Book a 30-min call"
            featured
          />
          <Path
            eyebrow="Updates"
            title="Stay in the loop"
            body="Occasional updates on releases, new chains, and deep-dive blog posts."
            href="/contact#newsletter"
            cta="Subscribe"
          />
        </div>
      </div>
    </section>
  );
}

function Path({
  eyebrow,
  title,
  body,
  href,
  cta,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition ${
        featured
          ? "border-ink bg-ink text-white hover:-translate-y-0.5"
          : "border-ink/10 bg-white hover:-translate-y-0.5 hover:border-ink/30"
      }`}
    >
      <p
        className={`text-xs font-medium uppercase tracking-[0.18em] ${
          featured ? "text-accent" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-2xl md:text-3xl">{title}</h3>
      <p className={`mt-3 text-sm leading-6 ${featured ? "text-white/70" : "text-ink/70"}`}>{body}</p>
      <span
        className={`mt-8 inline-flex items-center gap-1.5 text-sm font-medium ${
          featured ? "text-white" : "text-accent"
        }`}
      >
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
