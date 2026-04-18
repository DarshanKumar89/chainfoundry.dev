import Link from "next/link";
import { ArrowRight, Bot, GitBranch, ShieldCheck, Sparkles } from "lucide-react";

const cols = [
  {
    icon: Bot,
    title: "AI agent builders",
    body:
      "Your agents need to read the blockchain. ChainFoundry's MCP server gives them decoded, structured data from 500+ networks — self-hosted, no API keys, no vendor lock-in.",
    href: "/use-cases/ai-agents",
    cta: "See AI agent use case",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & forensics teams",
    body:
      "Trace funds across bridges. Decode transactions across chains. Build audit trails. Open-source cross-chain correlation — without paying $100K/yr for Chainalysis.",
    href: "/use-cases/compliance",
    cta: "See compliance use case",
  },
  {
    icon: GitBranch,
    title: "Multichain dApp developers",
    body:
      "Add a new chain to your app in hours, not weeks. One import, one API. Wallet, DEX aggregator, portfolio tracker, bridge UI — all work across every architecture.",
    href: "/use-cases/multichain-dapps",
    cta: "See developer use case",
  },
  {
    icon: Sparkles,
    title: "Blockchain ecosystems",
    body:
      "Better developer tooling = more developers = more apps = more users. Support ChainFoundry through grants or partnerships and get your chain supported out of the box.",
    href: "/use-cases/ecosystem-growth",
    cta: "See ecosystem use case",
  },
];

export default function Audiences() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-prose">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Who builds with ChainFoundry</p>
          <h2 className="h-section mt-3">Built for builders. At every scale.</h2>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cols.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                href={c.href}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-ink/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist-100 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-sans text-lg font-medium text-ink">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink/70">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
