import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import UseCaseCard from "@/components/UseCaseCard";
import CTAFooter from "@/components/CTAFooter";
import { useCases } from "@/content/useCases";

export const metadata: Metadata = {
  title: "Use Cases — Who Needs Multichain Blockchain Data?",
  description:
    "See how AI agent builders, compliance teams, multichain developers, blockchain ecosystems, and startups use ChainFoundry to solve real problems.",
  alternates: { canonical: "/use-cases" },
};

const outcomes = [
  { label: "chains added in", value: "hours", body: "not weeks of per-chain integration" },
  { label: "SaaS bill reduced by", value: "10×", body: "vs. Chainalysis / Moralis / Alchemy" },
  { label: "languages supported", value: "6", body: "Rust, TS, Python, Go, Java, WASM" },
  { label: "lock-in", value: "none", body: "open-source, self-hosted, embeddable" },
];

export default function UseCasesHub() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="Six teams. One toolkit."
        lead="From AI agents reading Ethereum and Solana, to EU compliance teams tracing bridge flows, to startups shipping multichain products without a dedicated infra team — here's how ChainFoundry replaces the wall of fragmented libraries and expensive SaaS."
        crumbs={[{ href: "/", label: "Home" }, { href: "/use-cases", label: "Use cases" }]}
      />

      <section className="border-b border-ink/10 bg-white pb-12">
        <div className="container-prose">
          <div className="reveal grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 md:grid-cols-4">
            {outcomes.map((o) => (
              <div key={o.label} className="flex min-h-[200px] flex-col bg-white p-6 md:p-7">
                <div className="font-serif text-4xl leading-[1] text-ink md:text-5xl">
                  {o.value}
                </div>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                  {o.label}
                </div>
                <p className="mt-auto pt-3 text-[13px] leading-[1.55] text-ink/65 md:text-[14px] md:leading-[1.6]">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <UseCaseCard key={u.slug} u={u} />
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
