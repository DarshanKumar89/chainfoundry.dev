import { Check, Minus } from "lucide-react";

type Cell = "yes" | "planned" | "no";

const rows: {
  arch: string;
  networks: string;
  encoding: string;
  codec: Cell;
  rpc: Cell;
  index: Cell;
  errors: Cell;
}[] = [
  {
    arch: "EVM",
    networks: "Ethereum, Polygon, Arbitrum, Base, BSC, zkSync, 200+",
    encoding: "ABI / Solidity",
    codec: "yes",
    rpc: "yes",
    index: "yes",
    errors: "yes",
  },
  {
    arch: "Solana (SVM)",
    networks: "Solana, Eclipse",
    encoding: "Borsh / Anchor IDL",
    codec: "yes",
    rpc: "yes",
    index: "yes",
    errors: "yes",
  },
  {
    arch: "Cosmos",
    networks: "Cosmos Hub, Osmosis, dYdX, Sei, 50+",
    encoding: "Protobuf / IBC",
    codec: "yes",
    rpc: "yes",
    index: "yes",
    errors: "planned",
  },
  {
    arch: "Substrate",
    networks: "Polkadot, Kusama, 100+ parachains",
    encoding: "SCALE codec",
    codec: "planned",
    rpc: "yes",
    index: "yes",
    errors: "planned",
  },
  {
    arch: "Bitcoin",
    networks: "Bitcoin, Lightning, Ordinals, BRC-20",
    encoding: "Script / UTXO",
    codec: "planned",
    rpc: "yes",
    index: "yes",
    errors: "no",
  },
  {
    arch: "Aptos",
    networks: "Aptos mainnet",
    encoding: "Move bytecode",
    codec: "planned",
    rpc: "yes",
    index: "yes",
    errors: "planned",
  },
  {
    arch: "Sui",
    networks: "Sui mainnet",
    encoding: "Move (object model)",
    codec: "planned",
    rpc: "yes",
    index: "yes",
    errors: "planned",
  },
];

export default function Architectures() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-prose">
        <div className="reveal grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow">Coverage — honest status</p>
            <h2 className="h-section mt-3">7 architectures, per-module status.</h2>
          </div>
          <p className="text-lg leading-relaxed text-ink/70 md:text-xl">
            <span className="font-mono text-ink">chainrpc</span> and{" "}
            <span className="font-mono text-ink">chainindex</span> already ship on all 7 architectures. Decode
            support (<span className="font-mono text-ink">chaincodec</span>,{" "}
            <span className="font-mono text-ink">chainerrors</span>) is live on EVM / Solana / Cosmos and
            expanding — we only claim what&apos;s published to crates.io.
          </p>
        </div>

        <div className="reveal mt-12 overflow-x-auto rounded-2xl border border-ink/10">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-mist-50 text-xs uppercase tracking-wider text-ink/55">
              <tr>
                <th className="px-5 py-4 font-medium">Architecture</th>
                <th className="hidden px-5 py-4 font-medium lg:table-cell">Networks</th>
                <th className="hidden px-5 py-4 font-medium lg:table-cell">Encoding</th>
                <th className="px-4 py-4 text-center font-medium">
                  <span className="font-mono text-[12px] normal-case text-ink/75">chaincodec</span>
                </th>
                <th className="px-4 py-4 text-center font-medium">
                  <span className="font-mono text-[12px] normal-case text-ink/75">chainrpc</span>
                </th>
                <th className="px-4 py-4 text-center font-medium">
                  <span className="font-mono text-[12px] normal-case text-ink/75">chainindex</span>
                </th>
                <th className="px-4 py-4 text-center font-medium">
                  <span className="font-mono text-[12px] normal-case text-ink/75">chainerrors</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.arch} className="border-t border-ink/10 bg-white">
                  <td className="px-5 py-4 align-top">
                    <div className="font-medium text-ink">{r.arch}</div>
                    <div className="mt-1 text-xs text-ink/55 lg:hidden">{r.networks}</div>
                    <div className="mt-1 font-mono text-[11px] text-ink/50 lg:hidden">{r.encoding}</div>
                  </td>
                  <td className="hidden px-5 py-4 align-top text-ink/70 lg:table-cell">{r.networks}</td>
                  <td className="hidden px-5 py-4 align-top font-mono text-[12px] text-ink/60 lg:table-cell">
                    {r.encoding}
                  </td>
                  <td className="px-4 py-4 text-center align-top">
                    <StatusPill v={r.codec} />
                  </td>
                  <td className="px-4 py-4 text-center align-top">
                    <StatusPill v={r.rpc} />
                  </td>
                  <td className="px-4 py-4 text-center align-top">
                    <StatusPill v={r.index} />
                  </td>
                  <td className="px-4 py-4 text-center align-top">
                    <StatusPill v={r.errors} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal mt-6 flex flex-wrap items-center gap-4 text-xs text-ink/55">
          <LegendDot color="bg-accent" label="Shipped on crates.io" />
          <LegendDot color="bg-ink/30" label="Planned / roadmap" />
          <LegendDot color="bg-mist-300" label="Not applicable" />
          <span className="ml-auto">
            Source of truth:{" "}
            <a
              href="https://github.com/DarshanKumar89/chainfoundry"
              className="link-underline"
            >
              github.com/DarshanKumar89/chainfoundry
            </a>
          </span>
        </div>

        <p className="reveal mt-6 text-sm text-ink/55">
          A 5th module, <span className="font-mono">chaincorrelate</span> (cross-chain event correlation), is on
          the v2 roadmap — not yet published. +13 additional chains (Starknet, NEAR, TON, Tron, Cardano…) are
          planned via the pluggable <span className="font-mono">ChainAdapter</span> trait.
        </p>
      </div>
    </section>
  );
}

function StatusPill({ v }: { v: Cell }) {
  if (v === "yes") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
        <Check className="h-3 w-3" /> Shipped
      </span>
    );
  }
  if (v === "planned") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-medium text-ink/55">
        Planned
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-mist-100 px-2 py-0.5 text-mist-400">
      <Minus className="h-3 w-3" />
    </span>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
