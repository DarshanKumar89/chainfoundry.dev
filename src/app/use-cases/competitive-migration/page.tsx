import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import UseCaseLayout, { type UseCaseBlock } from "@/components/UseCaseLayout";
import { useCases } from "@/content/useCases";

const u = useCases.find((x) => x.slug === "competitive-migration")!;

export const metadata: Metadata = {
  title: u.metaTitle,
  description: u.metaDescription,
  alternates: { canonical: `/use-cases/${u.slug}` },
};

const blocks: UseCaseBlock[] = [
  { type: "h2", text: "The scenario" },
  { type: "p", text: "You've already built your product using:" },
  {
    type: "list",
    items: [
      "Alloy or ethers-rs for Rust EVM interaction",
      "viem or ethers.js for TypeScript EVM interaction",
      "The Graph or Envio for indexing",
      "Alchemy or Moralis APIs for blockchain data",
    ],
  },
  {
    type: "p",
    text:
      "And now your boss, investors, or users want you to support Solana. Or Cosmos. Or Sui. Or “all the chains.”",
  },
  { type: "h2", text: "The problem with your current stack" },
  {
    type: "table",
    headers: ["What you have", "What it covers", "What it doesn't"],
    rows: [
      ["Alloy", "EVM (Rust)", "Solana, Cosmos, Substrate, Bitcoin, Aptos, Sui"],
      ["viem", "EVM (TypeScript)", "Everything non-EVM"],
      ["The Graph", "EVM indexing", "Real-time, non-EVM chains, embeddable"],
      ["Alchemy API", "EVM + some Solana", "Self-hosted, non-EVM depth, correlation"],
    ],
  },
  { type: "h2", text: "How ChainFoundry extends your stack" },
  {
    type: "p",
    text:
      "You don't need to rip out Alloy or viem. ChainFoundry sits alongside them for non-EVM chains:",
  },
  {
    type: "code",
    language: "rust",
    code: `// Keep using Alloy for EVM — it's great at what it does
let alloy_provider = ProviderBuilder::new()
    .connect("https://eth-rpc.com")
    .await?;

// Add ChainFoundry for everything else
let sol_client = chainrpc::ChainClient::solana("https://sol-rpc.com");
let cosmos_client = chainrpc::ChainClient::cosmos("https://cosmos-rpc.com");
let sui_client = chainrpc::ChainClient::sui("https://sui-rpc.com");

// Same middleware (circuit breaker, rate limiting, caching) across all non-EVM chains
// Alloy handles EVM. ChainFoundry handles the rest.`,
  },
  { type: "h2", text: "Or replace everything with one unified interface" },
  {
    type: "code",
    language: "typescript",
    code: `// Before: 3 libraries, 3 APIs, 3 maintenance burdens
import { createPublicClient } from 'viem';
import { Connection } from '@solana/web3.js';
import { StargateClient } from '@cosmjs/stargate';

// After: 1 library, 1 API, 1 maintenance burden
import { ChainClient } from '@chainfoundry/chainrpc';
const eth = ChainClient.evm(ethRpc);
const sol = ChainClient.solana(solRpc);
const cosmos = ChainClient.cosmos(cosmosRpc);
// Same interface. Same middleware. Same error handling.`,
  },
  { type: "h2", text: "What you gain" },
  {
    type: "list",
    items: [
      "Go from “EVM-only” to “7 architectures, 500+ networks” without rewriting your EVM code",
      "Use ChainFoundry alongside Alloy/viem or as a full replacement — your choice",
      "Get production middleware (failover, caching, rate limiting) for every non-EVM chain for free",
      "Future-proof: adding chain #8 is a one-line config change",
    ],
  },
  {
    type: "audience",
    items: [
      "Teams with existing EVM products expanding to multichain",
      "Projects migrating from deprecated ethers-rs to a multichain-ready stack",
      "Teams on The Graph wanting to self-host or add non-EVM chains",
      "Anyone paying for RPC APIs who wants to reduce vendor dependency",
    ],
  },
];

export default function Page() {
  return (
    <>
      <UseCaseLayout slug="competitive-migration" blocks={blocks} />
      <CTAFooter />
    </>
  );
}
