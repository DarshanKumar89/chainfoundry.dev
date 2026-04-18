import { ArrowRight } from "lucide-react";

const chains = [
  { name: "Ethereum", format: "ABI", color: "#627EEA" },
  { name: "Solana", format: "Borsh", color: "#14F195" },
  { name: "Cosmos", format: "Protobuf", color: "#2E3148" },
  { name: "Polkadot", format: "SCALE", color: "#E6007A" },
  { name: "Bitcoin", format: "Script", color: "#F7931A" },
  { name: "Aptos", format: "Move", color: "#0EA5E9" },
  { name: "Sui", format: "Move-obj", color: "#4DA2FF" },
];

export default function Problem() {
  return (
    <section className="border-y border-ink/10 bg-mist-50 py-20 md:py-28">
      <div className="container-prose">
        <div className="reveal grid items-end gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="h-section mt-3">7 languages. Zero translators.</h2>
          </div>
          <div className="text-ink/70">
            <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
              Blockchains don&apos;t agree on anything. Each architecture speaks its own binary dialect — and until
              today, you had to learn every one from scratch.
            </p>
          </div>
        </div>

        <div className="reveal mt-14">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {chains.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-3"
                >
                  <span
                    className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full text-[11px] font-semibold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.name.slice(0, 2)}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-ink">{c.name}</div>
                    <div className="truncate font-mono text-[11px] text-ink/50">{c.format}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center py-4 md:py-0">
              <ArrowRight className="h-6 w-6 text-ink/30" />
            </div>

            <div className="rounded-2xl border border-ink/10 bg-ink-800 p-6 text-white">
              <div className="text-xs uppercase tracking-[0.18em] text-accent">One output</div>
              <div className="mt-3 font-serif text-2xl md:text-3xl">ChainFoundry</div>
              <p className="mt-3 text-sm text-white/70">
                Unified structured events, balances, transactions, and correlations — across every supported
                architecture.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] text-white/70">
                <span className="rounded-full border border-white/15 px-2 py-0.5">decoded</span>
                <span className="rounded-full border border-white/15 px-2 py-0.5">typed</span>
                <span className="rounded-full border border-white/15 px-2 py-0.5">canonical</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-12 max-w-3xl text-ink/70">
          <p className="text-base leading-7 md:text-lg md:leading-8">
            Ethereum uses ABI encoding. Solana uses Borsh. Cosmos uses Protobuf. Substrate uses SCALE. Bitcoin uses
            Script. Aptos and Sui use Move — but in incompatible ways. Today, building anything multichain means
            learning each system from scratch, maintaining separate codebases, and hoping nothing breaks when one
            chain upgrades.
          </p>
          <p className="mt-4 text-base leading-7 text-ink md:text-lg md:leading-8">
            ChainFoundry fixes this. One toolkit. Every architecture. Every language you already use.
          </p>
        </div>
      </div>
    </section>
  );
}
