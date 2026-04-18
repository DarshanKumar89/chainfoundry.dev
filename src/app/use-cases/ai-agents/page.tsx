import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import UseCaseLayout, { type UseCaseBlock } from "@/components/UseCaseLayout";
import { useCases } from "@/content/useCases";

const u = useCases.find((x) => x.slug === "ai-agents")!;

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
      "You're building an AI agent that trades on DeFi protocols, monitors wallets, or manages portfolios across multiple chains. Your agent needs to:",
  },
  {
    type: "list",
    items: [
      "Read decoded events from Uniswap on Ethereum AND Raydium on Solana",
      "Check balances across EVM, Solana, and Cosmos chains",
      "Decode transaction errors when trades fail",
      "Track bridge transfers as assets move between chains",
    ],
  },
  { type: "h2", text: "The problem today" },
  {
    type: "problemList",
    items: [
      {
        title: "Moralis / Alchemy APIs",
        body:
          "You pay per request, hit rate limits, and are locked to their uptime. If their API goes down, your agent goes blind.",
      },
      {
        title: "Build it yourself",
        body:
          "You'd need to integrate Alloy (EVM only), anchor-client (Solana only), cosmrs (Cosmos only) — three separate libraries, three codebases, three maintenance burdens.",
      },
      {
        title: "No MCP server exists",
        body:
          "Claude Desktop, Cursor, and other AI tools can't natively query blockchain data from multiple chains.",
      },
    ],
  },
  { type: "h2", text: "How ChainFoundry solves it" },
  {
    type: "code",
    language: "python",
    code: `# Install the MCP server
pip install chainfoundry-mcp

# Your AI agent can now call:
# - decode_event(chain="ethereum", tx_hash="0x...")
# - decode_event(chain="solana", tx_hash="...")
# - get_balance(chain="cosmos", address="cosmos1...")
# - correlate_bridge(source="ethereum", dest="solana", tx_hash="0x...")

# All from one MCP server. Self-hosted. No API keys.`,
  },
  { type: "h2", text: "What changes for you" },
  {
    type: "list",
    items: [
      "One dependency instead of 3+ chain-specific libraries",
      "Self-hosted — runs in your infra, no API costs, no rate limits",
      "Works with any AI framework — Claude MCP, ElizaOS, LangChain, CrewAI",
      "Decoded data, not raw bytes — your agent gets structured JSON, not hex blobs",
    ],
  },
  {
    type: "audience",
    items: [
      "AI agent startups building trading bots, portfolio managers, or wallet assistants",
      "Teams using Claude Desktop or Cursor who want blockchain data in their workflow",
      "DeFi protocol teams building automated monitoring agents",
    ],
  },
];

export default function Page() {
  return (
    <>
      <UseCaseLayout slug="ai-agents" blocks={blocks} />
      <CTAFooter />
    </>
  );
}
