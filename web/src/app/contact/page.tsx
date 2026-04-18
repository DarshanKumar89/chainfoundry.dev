import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Mail, MessageCircle } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact — Book a Call or Get in Touch",
  description:
    "Interested in using ChainFoundry, partnering with us, or learning more? Book a call, send us a message, or subscribe to the newsletter.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Three ways in."
        lead="Developer, partner, or subscriber — pick the path that matches what you need."
        crumbs={[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="reveal grid gap-5 md:grid-cols-3">
            <Path
              eyebrow="Developer"
              title="I'm a developer"
              body="Get started with ChainFoundry in 5 minutes."
              cta="Read the docs"
              href="https://docs.chainfoundry.dev"
            />
            <Path
              eyebrow="Partner"
              title="I want to partner or invest"
              body="Book a 30-minute call to discuss ecosystem partnerships, enterprise pilots, or investment."
              cta="Book a call"
              href="mailto:info@ai2innovate.io?subject=ChainFoundry%20partnership"
              featured
            />
            <Path
              eyebrow="Updates"
              title="I just want updates"
              body="Occasional updates on releases, new chains, and deep-dive blog posts."
              cta="Subscribe below"
              href="#newsletter"
            />
          </div>

          <div id="newsletter" className="reveal mt-16 rounded-3xl border border-ink/10 bg-mist-50 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="eyebrow">Newsletter</p>
                <h2 className="h-section mt-3">Stay in the loop.</h2>
                <p className="mt-4 text-[15px] leading-7 text-ink/70 md:text-base md:leading-8">
                  Release notes, new chain support, and engineering deep-dives. No spam. One email every 2–3 weeks.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>

          <div className="reveal mt-16">
            <h2 className="h-section">Direct contact</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Contactile
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value="info@ai2innovate.io"
                href="mailto:info@ai2innovate.io"
              />
              <Contactile
                icon={<XIcon />}
                label="X / Twitter"
                value="@darshan_aqua"
                href="https://x.com/darshan_aqua"
              />
              <Contactile
                icon={<LinkedinIcon />}
                label="LinkedIn"
                value="/in/darshankumar"
                href="https://www.linkedin.com/in/darshankumar/"
              />
              <Contactile
                icon={<MessageCircle className="h-4 w-4" />}
                label="Discord"
                value="darshankumar89"
                href="#"
              />
              <Contactile
                icon={<GithubIcon />}
                label="GitHub"
                value="DarshanKumar89/chainkit"
                href="https://github.com/DarshanKumar89/chainkit"
              />
              <Contactile
                icon={<Calendar className="h-4 w-4" />}
                label="Book a call"
                value="30 minutes · EU / US"
                href="mailto:info@ai2innovate.io?subject=ChainFoundry%20call"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Path({
  eyebrow,
  title,
  body,
  cta,
  href,
  featured,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  featured?: boolean;
}) {
  const inner = (
    <>
      <p className={`text-xs font-medium uppercase tracking-[0.18em] ${featured ? "text-accent" : "text-accent"}`}>
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
        <ArrowRight className="h-4 w-4" />
      </span>
    </>
  );

  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={`group flex flex-col rounded-2xl border p-8 transition ${
          featured
            ? "border-ink bg-ink text-white hover:-translate-y-0.5"
            : "border-ink/10 bg-white hover:-translate-y-0.5 hover:border-ink/30"
        }`}
      >
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={`group flex flex-col rounded-2xl border p-8 transition ${
        featured
          ? "border-ink bg-ink text-white hover:-translate-y-0.5"
          : "border-ink/10 bg-white hover:-translate-y-0.5 hover:border-ink/30"
      }`}
    >
      {inner}
    </a>
  );
}

function Contactile({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mist-100 text-ink">{icon}</span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.14em] text-ink/50">{label}</div>
        <div className="mt-0.5 truncate text-sm text-ink">{value}</div>
      </div>
    </a>
  );
}
