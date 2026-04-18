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
  { label: "lock-in", value: "none", body: "MIT-licensed, self-hosted, embeddable" },
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
          <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-4">
            {outcomes.map((o) => (
              <div key={o.label} className="bg-white p-5 md:p-6">
                <div className="font-serif text-3xl text-ink md:text-4xl">{o.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/50">{o.label}</div>
                <div className="mt-2 text-[13px] leading-5 text-ink/60">{o.body}</div>
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
