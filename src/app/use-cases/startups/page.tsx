import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import UseCaseLayout, { type UseCaseBlock } from "@/components/UseCaseLayout";
import { useCases } from "@/content/useCases";

const u = useCases.find((x) => x.slug === "startups")!;

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
      "You're a 2–5 person startup building a crypto product. You have a great idea — a multichain analytics dashboard, an AI-powered trading assistant, or a compliance monitoring tool for small exchanges. But you don't have the budget for:",
  },
  {
    type: "list",
    items: [
      "A dedicated blockchain infrastructure engineer",
      "Multiple SaaS subscriptions for RPC, indexing, and data APIs",
      "Months of integration work per chain",
    ],
  },
  { type: "h2", text: "The problem today" },
  {
    type: "problemList",
    items: [
      {
        title: "Alchemy + Moralis + Envio + Chainalysis",
        body: "$500–$5,000/month before you have a single customer.",
      },
      {
        title: "Building from scratch",
        body: "3–6 months of infrastructure work before you can build your actual product.",
      },
      {
        title: "Hiring blockchain infra engineers",
        body: "$150K+/year salary in a competitive market.",
      },
    ],
  },
  { type: "h2", text: "How ChainFoundry solves it" },
  {
    type: "code",
    language: "bash",
    code: `# One install. Production infrastructure.
cargo add chaincodec chainrpc chainindex

# or
npm install @chainfoundry/chaincodec @chainfoundry/chainrpc

# You now have:
# - ABI decoding for 50+ protocols
# - RPC transport with circuit breaker and failover
# - Reorg-safe indexing with SQLite storage
# - All for $0/month. MIT licensed.`,
  },
  { type: "h2", text: "What changes for you" },
  {
    type: "list",
    items: [
      "$0 infrastructure cost to start — no SaaS subscriptions needed",
      "Ship in weeks, not months — the blockchain plumbing is handled",
      "Scale when you're ready — start with the free SDK, upgrade to managed cloud when you have revenue",
      "No vendor lock-in — you own every line of code running in your product",
    ],
  },
  {
    type: "audience",
    items: [
      "Pre-seed and seed-stage crypto startups",
      "Small development teams (2–10 people) building multichain products",
      "Indie developers and hackathon teams",
      "Agencies building crypto products for clients",
    ],
  },
];

export default function Page() {
  return (
    <>
      <UseCaseLayout slug="startups" blocks={blocks} />
      <CTAFooter />
    </>
  );
}
