import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Copy, Download, Mail } from "lucide-react";
import CTAFooter from "@/components/CTAFooter";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { LogoMark } from "@/components/Logo";
import { breadcrumbList, organization } from "@/lib/seo";
import { EMAIL, GITHUB_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Press & Brand Kit",
  description:
    "ChainFoundry press kit — company facts, founder bio, logo assets, boilerplate, and partnership / media contact.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "ChainFoundry — Press & Brand Kit",
    description:
      "Company facts, founder bio, logo assets, boilerplate, and media contact.",
    type: "article",
  },
};

const facts: [string, string][] = [
  ["Product", "ChainFoundry — the universal blockchain data toolkit"],
  ["Operating entity", "AI2Innovate"],
  ["Founded", "2026"],
  ["Headquarters", "Brussels, Belgium"],
  ["Shipped crates", "chaincodec v0.1.2 · chainrpc v0.1.1 · chainindex v0.1.1 · chainerrors v0.1.0"],
  ["Architectures covered", "EVM · Solana · Cosmos · Substrate · Bitcoin · Aptos · Sui"],
  ["Networks", "500+ (EVM alone covers 200+)"],
  ["Language bindings", "Rust · TypeScript · Python · Go · Java · WASM"],
  ["Repository", "github.com/DarshanKumar89/chainfoundry"],
  ["Media contact", "info@ai2innovate.io"],
];

const boilerplateShort =
  "ChainFoundry is the universal blockchain data toolkit. Built in Rust, it gives teams one API for reading, decoding, indexing, and correlating blockchain data across 7 architectures and 500+ networks. Open-source core, used by AI-agent, DeFi, and compliance teams.";

const boilerplateLong =
  "ChainFoundry is the universal blockchain data toolkit — a suite of four shipped Rust crates (chaincodec, chainrpc, chainindex, chainerrors) with native bindings for TypeScript, Python, Go, Java, and WASM. It replaces a wall of chain-specific SDKs with one coherent API that works across EVM, Solana, Cosmos, Substrate, Bitcoin, Aptos, and Sui. The project is open-source and self-hostable, aimed at multichain dApp teams, AI-agent builders (via its in-development MCP server), compliance and forensics teams, and blockchain L1/L2 ecosystems that want better developer tooling. ChainFoundry is built by AI2Innovate SRL, headquartered in Brussels.";

const founderQuote =
  "Blockchain data infrastructure should be open, embeddable, and work across every chain — not locked behind SaaS subscriptions or limited to one ecosystem. ChainFoundry is the missing standard library for the next decade of multichain software.";

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={[
          organization,
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Press & brand kit", url: "/press" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Press & brand kit"
        title="Everything a journalist, analyst, or partner needs in one place."
        lead="Facts, boilerplate, logo assets, and a direct media contact — no email-us-for-a-brochure nonsense."
        crumbs={[{ href: "/", label: "Home" }, { href: "/press", label: "Press" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-prose space-y-16">
          <div>
            <p className="eyebrow">One-page fact sheet</p>
            <h2 className="h-section mt-3">The essentials.</h2>
            <dl className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
              {facts.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-1 gap-1 px-5 py-4 md:grid-cols-[240px_1fr] md:gap-6 md:py-5 ${
                    i % 2 === 0 ? "bg-white" : "bg-mist-50"
                  }`}
                >
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink/55">{k}</dt>
                  <dd className="text-[15px] text-ink md:text-base">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="eyebrow">Boilerplate</p>
            <h2 className="h-section mt-3">Copy-paste descriptions.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <BoilerplateCard heading="Short (25 words)" text={boilerplateShort} />
              <BoilerplateCard heading="Long (80 words)" text={boilerplateLong} />
            </div>
          </div>

          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="h-section mt-3">Darsh Kumar, Founder &amp; CEO.</h2>
            <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-6 md:p-8">
              <blockquote className="border-l-2 border-accent pl-4 font-serif text-xl italic leading-relaxed text-ink md:text-2xl">
                “{founderQuote}”
              </blockquote>
              <p className="mt-6 text-[15px] leading-7 text-ink/75">
                25+ years of senior engineering across Rust, Java, Python, DevOps, cybersecurity, and
                databases. Apache Committer. Previously led cybersecurity architecture for EU institutions and
                built enterprise systems across Oracle, DB2, and PostgreSQL. On-chain since 2017. Publishes
                ChainFoundry on crates.io, npm, and PyPI.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <a
                  href="https://www.linkedin.com/in/darshankumar/"
                  className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-ink transition hover:border-ink"
                >
                  LinkedIn — /in/darshankumar
                </a>
                <a
                  href="https://x.com/darshan_aqua"
                  className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-ink transition hover:border-ink"
                >
                  X — @darshan_aqua
                </a>
                <span className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-ink">
                  Based in Brussels
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Brand assets</p>
            <h2 className="h-section mt-3">Logos &amp; marks.</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink/70">
              Use the mark on dark or light backgrounds. Please keep the accent (middle) link in{" "}
              <span className="font-mono">#1D9E75</span> and don&apos;t stretch, recolour, or rotate.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="flex items-center justify-center rounded-2xl border border-ink/10 bg-white p-12">
                <LogoMark className="h-16 w-auto" color="#0F1B2D" accent="#1D9E75" />
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-ink-900 p-12">
                <LogoMark className="h-16 w-auto" color="#FFFFFF" accent="#1D9E75" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/favicon.svg"
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink transition hover:border-ink"
              >
                <Download className="h-4 w-4" />
                Download favicon (SVG)
              </a>
              <a
                href="/opengraph-image"
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink transition hover:border-ink"
              >
                <Download className="h-4 w-4" />
                Download OG card (PNG, 1200×630)
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Palette</p>
            <h2 className="h-section mt-3">Colours.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-4">
              <Swatch name="Ink" hex="#0F1B2D" textColor="text-white" />
              <Swatch name="Accent" hex="#1D9E75" textColor="text-white" />
              <Swatch name="Mist 50" hex="#F7F8FA" textColor="text-ink" border />
              <Swatch name="Mist 100" hex="#EEF1F5" textColor="text-ink" border />
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-mist-50 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <p className="eyebrow">Media &amp; partnerships</p>
                <h2 className="h-section mt-3">Talk to a human.</h2>
                <p className="mt-4 text-[15px] leading-7 text-ink/70 md:text-base md:leading-8">
                  Journalists, analysts, ecosystem leads, and investors — the inbox is read same-day by the
                  founder. Expect a reply in under 24h, EU working hours.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Press%20enquiry`}
                  className="inline-flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mist-100 text-ink">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.14em] text-ink/55">
                        Press inbox
                      </span>
                      <span className="block text-sm text-ink">{EMAIL}</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink/40" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
                >
                  <span className="text-sm text-ink">Book a 30-min call (investor / partner)</span>
                  <ArrowRight className="h-4 w-4 text-ink/40" />
                </Link>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
                >
                  <span className="text-sm text-ink">View the repository on GitHub</span>
                  <ArrowRight className="h-4 w-4 text-ink/40" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}

function BoilerplateCard({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.14em] text-ink/55">{heading}</span>
        <span className="inline-flex items-center gap-1 text-xs text-ink/45">
          <Copy className="h-3.5 w-3.5" />
          select to copy
        </span>
      </div>
      <p className="mt-4 text-[15px] leading-7 text-ink/80 md:text-base md:leading-8">{text}</p>
    </div>
  );
}

function Swatch({
  name,
  hex,
  textColor,
  border,
}: {
  name: string;
  hex: string;
  textColor: string;
  border?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 ${textColor} ${border ? "border border-ink/10" : ""}`}
      style={{ backgroundColor: hex }}
    >
      <div className="text-xs uppercase tracking-[0.14em] opacity-75">{name}</div>
      <div className="mt-2 font-mono text-lg">{hex}</div>
    </div>
  );
}
