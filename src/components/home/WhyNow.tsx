const signals = [
  {
    stat: "3+",
    label: "chains per serious product",
    body: "Wallets, DEX aggregators, bridge UIs, AI agents. Single-chain products are a dying category.",
  },
  {
    stat: "MCP",
    label: "the new AI-agent standard",
    body: "Claude, Cursor, ElizaOS, LangChain all speak it. Nobody else ships a multichain MCP server.",
  },
  {
    stat: "$21B+",
    label: "laundered across bridges",
    body: "Crypto regulation is live globally. Forensics is a billion-dollar market — all closed-source SaaS. An open alternative doesn't exist yet.",
  },
  {
    stat: "Months",
    label: "wasted per chain, per team",
    body: "Every multichain team rebuilds the same RPC, decoder, indexer, error handler. No standard library — until now.",
  },
];

export default function WhyNow() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-prose relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Why now
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
            Multichain is the default.
            <br />
            <span className="italic text-accent">The tooling hasn&apos;t caught up.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 md:text-xl md:leading-relaxed">
            Four forces are converging. The first team to ship the missing standard library wins the decade.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
          {signals.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3 bg-ink-900 p-8 md:p-10"
            >
              <div className="font-serif text-5xl leading-none text-white md:text-6xl">
                {s.stat}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {s.label}
              </div>
              <p className="mt-2 text-[15px] leading-7 text-white/70 md:text-base md:leading-8">
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
