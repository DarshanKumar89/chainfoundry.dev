import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import UseCaseLayout, { type UseCaseBlock } from "@/components/UseCaseLayout";
import { useCases } from "@/content/useCases";

const u = useCases.find((x) => x.slug === "ecosystem-growth")!;

export const metadata: Metadata = {
  title: u.metaTitle,
  description: u.metaDescription,
  alternates: { canonical: `/use-cases/${u.slug}` },
};

const blocks: UseCaseBlock[] = [
  { type: "h2", text: "The scenario" },
  {
    type: "p",
    text:
      "You run developer relations or ecosystem growth for a Layer 1 or Layer 2 blockchain. Your job is to attract developers and help them ship apps on your chain. But your developers keep hitting the same problems:",
  },
  {
    type: "list",
    items: [
      "“The tooling on [your chain] is not as mature as Ethereum's”",
      "“I can't find a good indexer that works with [your chain]”",
      "“I want to build a multichain app but adding [your chain] is too much work”",
    ],
  },
  { type: "h2", text: "The problem today" },
  {
    type: "problemList",
    items: [
      {
        title: "Ethereum has Alloy, Foundry, The Graph, Envio",
        body: "Mature, well-documented, battle-tested tooling.",
      },
      {
        title: "Your chain has… less",
        body:
          "Maybe a basic RPC client. Maybe a chain-specific indexer. Definitely not polyglot bindings in 6 languages.",
      },
      {
        title: "Developer churn",
        body: "Developers try your chain, find the tooling lacking, and go back to EVM.",
      },
    ],
  },
  { type: "h2", text: "How ChainFoundry helps your ecosystem" },
  { type: "p", text: "ChainFoundry already includes:" },
  {
    type: "list",
    items: [
      "Your chain's RPC client with production middleware (circuit breaker, rate limiting, failover)",
      "Your chain's indexer with reorg-safe storage and checkpoint resume",
      "Your chain's event decoder with chain-specific awareness (Sui object types, Cosmos IBC messages, Substrate pallets)",
      "All accessible in Rust, TypeScript, Python, Go, Java, and WASM",
      "All open-source",
    ],
  },
  { type: "h2", text: "What an ecosystem partnership looks like" },
  {
    type: "list",
    items: [
      "Grant funding ($20K–$100K) to deepen chain-specific support — more schemas, features, and performance tuning",
      "Co-marketing — ChainFoundry lists your chain prominently; you list ChainFoundry in your developer docs",
      "Engineering collaboration — your solutions engineering team works with us on chain-specific optimizations",
      "Developer workshops — joint sessions showing builders how to ship multichain apps that include your chain",
    ],
  },
  { type: "h2", text: "Example: Sui Foundation value prop" },
  { type: "p", text: "ChainFoundry already ships:" },
  {
    type: "list",
    items: [
      "Sui chain client in chainrpc (transport, failover, rate limiting)",
      "Sui indexer in chainindex (reorg-safe, checkpoint-native)",
      "Roadmap: Sui Move event decoding with object-type awareness, dynamic field tracking, checkpoint-based querying",
    ],
  },
  {
    type: "p",
    text:
      "When developers use ChainFoundry, they can add Sui support to their existing multichain app in hours — not weeks. That means more apps on Sui, faster.",
  },
  {
    type: "audience",
    items: [
      "Sui Foundation, Aptos Foundation",
      "Cosmos ecosystem fund, Polkadot / Web3 Foundation",
      "Any L1/L2 running a developer grants program",
      "Chain-specific accelerators (SuiHub, Cosmos HackAtom, Substrate Builders)",
    ],
  },
];

export default function Page() {
  return (
    <>
      <UseCaseLayout slug="ecosystem-growth" blocks={blocks} />
      <CTAFooter />
    </>
  );
}
