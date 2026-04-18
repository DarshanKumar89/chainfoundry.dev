import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import UseCaseLayout, { type UseCaseBlock } from "@/components/UseCaseLayout";
import { useCases } from "@/content/useCases";

const u = useCases.find((x) => x.slug === "multichain-dapps")!;

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
      "You're building a multichain wallet, a DEX aggregator, a portfolio tracker, or a bridge monitoring dashboard. Every time you add support for a new chain, you need:",
  },
  {
    type: "list",
    items: [
      "A new RPC client with retry logic, rate limiting, and failover",
      "A new ABI decoder for that chain's event format",
      "A new indexer for historical data",
      "New error handling for that chain's failure modes",
    ],
  },
  { type: "h2", text: "The problem today" },
  {
    type: "problemList",
    items: [
      {
        title: "Adding Solana to an EVM app",
        body:
          "You go from ethers.js/Alloy to @solana/web3.js — completely different API, different data model, different error handling.",
      },
      {
        title: "Adding Cosmos",
        body: "Now you need cosmjs — yet another library, another learning curve.",
      },
      {
        title: "Each chain = weeks of integration work",
        body:
          "Provider setup, error handling, retry logic, rate limiting — you rebuild the same plumbing every time.",
      },
      {
        title: "6 languages, no shared solution",
        body:
          "Your Rust backend uses Alloy. Your TypeScript frontend uses viem. Your Python analytics pipeline uses web3.py. None of them share a common interface.",
      },
    ],
  },
  { type: "h2", text: "How ChainFoundry solves it" },
  {
    type: "code",
    language: "typescript",
    code: `import { ChainClient } from '@chainfoundry/chainrpc';
import { EvmDecoder, SolanaDecoder } from '@chainfoundry/chaincodec';

// Same API, different chains
const eth = ChainClient.evm("https://eth-rpc.example.com");
const sol = ChainClient.solana("https://sol-rpc.example.com");
const cosmos = ChainClient.cosmos("https://cosmos-rpc.example.com");

// Same decode pattern, different architectures
const ethEvent = EvmDecoder.decode(ethLog, uniswapSchema);
const solEvent = SolanaDecoder.decode(solLog, raydiumSchema);

// Same middleware stack everywhere
// Circuit breaker, rate limiting, caching, failover — all built in`,
  },
  { type: "h2", text: "What changes for you" },
  {
    type: "list",
    items: [
      "Hours, not weeks to add a new chain",
      "One API across Rust, TypeScript, Python, Go, Java, and WASM",
      "Production middleware built in — you don't write retry logic, failover, rate limiting, or cache invalidation ever again",
      "Embeddable — it's a library in your binary, not a SaaS you depend on",
    ],
  },
  {
    type: "audience",
    items: [
      "Cross-chain wallet teams (Phantom, Backpack, and competitors)",
      "DEX aggregators (decoding swaps from Uniswap + Raydium + Osmosis)",
      "Portfolio trackers (balances + tx history across all chains)",
      "Block explorer teams adding multichain support",
      "Bridge monitoring dashboards",
    ],
  },
];

export default function Page() {
  return (
    <>
      <UseCaseLayout slug="multichain-dapps" blocks={blocks} />
      <CTAFooter />
    </>
  );
}
