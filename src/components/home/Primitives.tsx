import Link from "next/link";
import { AlertTriangle, ArrowRight, Braces, Database, Network, Shield } from "lucide-react";

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  tag: string;
  version?: string;
  body: string;
  href: string;
  cta: string;
  status: "shipped" | "planned";
};

const cards: Card[] = [
  {
    icon: Braces,
    name: "chaincodec",
    tag: "Decode",
    version: "v0.1.2 · crates.io · npm · PyPI",
    body: "Universal ABI decoder. 50+ bundled protocol schemas. EVM events + calls, Solana Anchor IDL, Cosmos Protobuf. Parallel batch decode with Rayon.",
    href: "/use-cases/multichain-dapps",
    cta: "See decode examples",
    status: "shipped",
  },
  {
    icon: Network,
    name: "chainrpc",
    tag: "Transport",
    version: "v0.1.1 · crates.io · npm · PyPI",
    body: "Production RPC middleware for all 7 architectures. Circuit breaker, 4-tier cache, CU-aware rate limiter, MEV protection, 5 failover strategies, dedup, batching.",
    href: "/use-cases/multichain-dapps",
    cta: "See transport examples",
    status: "shipped",
  },
  {
    icon: Database,
    name: "chainindex",
    tag: "Index",
    version: "v0.1.1 · crates.io · npm · PyPI",
    body: "Reorg-safe blockchain indexer as a library — not a SaaS. Pluggable storage (SQLite, Postgres, RocksDB). Embed it in your own binary. You own the data.",
    href: "/use-cases/startups",
    cta: "See indexer examples",
    status: "shipped",
  },
  {
    icon: AlertTriangle,
    name: "chainerrors",
    tag: "Diagnose",
    version: "v0.1.0 · crates.io · npm · PyPI",
    body: "Decode Solidity reverts, panics, custom errors, and Solana program failures from raw bytes. Turns 0x08c379a0… into a human-readable reason.",
    href: "/use-cases/multichain-dapps",
    cta: "Why your agent needs this",
    status: "shipped",
  },
  {
    icon: Shield,
    name: "chaincorrelate",
    tag: "Correlate",
    version: "Planned — not yet published",
    body: "Cross-chain event correlation. Trace a bridge deposit on Ethereum to its withdrawal on Solana. Build chain-hop graphs across heterogeneous architectures.",
    href: "/use-cases/compliance",
    cta: "See the v2 roadmap",
    status: "planned",
  },
];

export default function Primitives() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-prose">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">What it does</p>
          <h2 className="h-section mt-3">Four shipped primitives. One on the roadmap.</h2>
          <p className="mt-5 text-lg text-ink/70 md:text-xl">
            Every crate below is either live on crates.io · npm · PyPI, or clearly flagged as planned. No
            vapourware.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            const shipped = c.status === "shipped";
            return (
              <article
                key={c.name}
                className={`group relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-0.5 md:p-8 ${
                  shipped
                    ? "border-ink/10 bg-white hover:border-ink/30"
                    : "border-dashed border-ink/15 bg-mist-50 hover:border-ink/30"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{c.tag}</p>
                    <h3 className="mt-2 font-mono text-xl text-ink">{c.name}</h3>
                  </div>
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      shipped ? "bg-ink-800 text-white" : "bg-ink/5 text-ink/55"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      shipped
                        ? "bg-accent/10 text-accent"
                        : "bg-ink/5 text-ink/55"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${shipped ? "bg-accent" : "bg-ink/40"}`}
                    />
                    {shipped ? "Shipped" : "Planned"}
                  </span>
                  {c.version && (
                    <span className="ml-2 text-[11px] text-ink/50">{c.version}</span>
                  )}
                </div>

                <p className="mt-5 text-[15px] leading-7 text-ink/75">{c.body}</p>

                <div className="mt-7">
                  <Link href={c.href} className="btn-ghost">
                    {c.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
