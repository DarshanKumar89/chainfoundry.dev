import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import UseCaseLayout, { type UseCaseBlock } from "@/components/UseCaseLayout";
import { useCases } from "@/content/useCases";

const u = useCases.find((x) => x.slug === "compliance")!;

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
      "You're a compliance team at an EU crypto exchange, a law firm doing digital forensics, or a RegTech startup building AML monitoring tools. You need to:",
  },
  {
    type: "list",
    items: [
      "Trace a deposit on Ethereum through a Wormhole bridge to its withdrawal on Solana",
      "Decode transaction data across multiple chain types to build audit trails",
      "Generate regulatory reports for MiCA and NIS2 compliance",
      "Screen addresses against sanctions lists across all chains you support",
    ],
  },
  { type: "h2", text: "The problem today" },
  {
    type: "problemList",
    items: [
      {
        title: "Chainalysis / TRM / Elliptic",
        body:
          "$100K+/year. Closed source. You can't embed their logic in your own product. You're renting intelligence, not building capability.",
      },
      {
        title: "Building from scratch",
        body:
          "Cross-chain correlation is a multi-year engineering effort. You'd need to understand bridge protocols (Wormhole VAAs, LayerZero messages, Circle CCTP), index events on both sides, and match deposits to withdrawals across incompatible chains.",
      },
      {
        title: "$21B+ laundered through cross-chain bridges",
        body:
          "The problem is getting worse, and the tools to fight it are locked behind enterprise paywalls.",
      },
    ],
  },
  { type: "h2", text: "How ChainFoundry solves it" },
  {
    type: "code",
    language: "rust",
    code: `use chaincorrelate::BridgeMatcher;
use chainindex::MultiChainIndexer;

// Index both chains
let indexer = MultiChainIndexer::new()
    .add_chain("ethereum", eth_rpc)
    .add_chain("solana", sol_rpc)
    .build();

// Correlate bridge transfers
let matcher = BridgeMatcher::wormhole();
let correlation = matcher.match_deposit_to_withdrawal(
    &eth_deposit_tx,
    &indexer,
).await?;

println!("Deposit: {} ETH on Ethereum", correlation.source_amount);
println!("Withdrawal: {} on Solana at {}", correlation.dest_amount, correlation.dest_tx);
println!("Time delta: {}s", correlation.time_delta_seconds);`,
  },
  { type: "h2", text: "What changes for you" },
  {
    type: "list",
    items: [
      "Embeddable — build cross-chain tracing into YOUR product, not rent it from someone else",
      "Open source — audit the correlation logic yourself, no black box",
      "Designed for MiCA and NIS2 compliance workflows from day one",
      "10x cheaper — open-source core vs. $100K/year proprietary SaaS",
    ],
  },
  {
    type: "audience",
    items: [
      "EU crypto exchanges needing MiCA compliance tooling",
      "Law firms doing blockchain forensics and digital investigations",
      "RegTech startups building AML/KYT monitoring products",
      "Government agencies and financial regulators",
    ],
  },
];

export default function Page() {
  return (
    <>
      <UseCaseLayout slug="compliance" blocks={blocks} />
      <CTAFooter />
    </>
  );
}
