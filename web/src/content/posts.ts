export type PostStatus = "published" | "draft";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  read: string;
  date: string;
  status: PostStatus;
};

export const posts: Post[] = [
  {
    slug: "l1-vs-l2-multichain-data",
    title: "L1 and L2 — the multichain data problem you thought you'd already solved",
    excerpt:
      "You shipped on Ethereum. Then Base, Arbitrum, Optimism, zkSync. Same architecture, same ABI — different finality, different reorg depths, different CU costs. Why 'just deploy the same contracts' is not a data strategy.",
    tag: "Engineering",
    read: "9 min",
    date: "Apr 2026",
    status: "published",
  },
  {
    slug: "sui-ecosystem-playbook",
    title: "The Sui ecosystem playbook — why Move teams need multichain from day one",
    excerpt:
      "Sui has great developer ergonomics and a genuinely different execution model. It also has a tooling gap that costs every team going live a month of integration work. Here's how we close it.",
    tag: "Ecosystem",
    read: "10 min",
    date: "Apr 2026",
    status: "published",
  },
  {
    slug: "sui-instant-distribution-btcfi",
    title: "Sui gets instant distribution to every multichain team",
    excerpt:
      "If a team building on Ethereum + Solana wants to add Sui today, it's 2–4 months of work. With ChainFoundry, it's 20 lines. That is a distribution win for the Sui Foundation — and BTCFi on Sui is the first obvious dividend.",
    tag: "Thesis",
    read: "11 min",
    date: "Apr 2026",
    status: "published",
  },
  {
    slug: "why-we-built-chainfoundry",
    title: "Why we built ChainFoundry",
    excerpt:
      "Seven incompatible architectures, no universal toolkit. The USB-C analogy. What we've shipped on crates.io, and what's next.",
    tag: "Origin",
    read: "8 min",
    date: "Coming",
    status: "draft",
  },
  {
    slug: "7-architectures-not-7-chains",
    title: "7 architectures, not 7 chains — why chain count is a misleading metric",
    excerpt:
      "Ethereum vs. its 200+ EVM forks. Why SubQuery's “300 chains” and ChainFoundry's “7 families” are comparable numbers.",
    tag: "Deep dive",
    read: "12 min",
    date: "Coming",
    status: "draft",
  },
  {
    slug: "building-mcp-server-blockchain",
    title: "Building an MCP server for blockchain data",
    excerpt:
      "Dual-mode (Rust PyO3 + Python fallback). Claude Desktop and Cursor integration. Tool schema design for multichain agents.",
    tag: "Engineering",
    read: "10 min",
    date: "Coming",
    status: "draft",
  },
  {
    slug: "csdl-portable-schema-format",
    title: "CSDL — a portable schema format for blockchain events",
    excerpt:
      "Why The Graph's subgraph manifests and Envio's configs are framework-locked. How CSDL works. How to contribute schemas.",
    tag: "Architecture",
    read: "9 min",
    date: "Coming",
    status: "draft",
  },
  {
    slug: "chainerrors-0x08c379a0",
    title: "0x08c379a0 — turning revert bytes into readable errors",
    excerpt:
      "How chainerrors decodes Solidity reverts, panics, custom errors, and Solana program failures — and why your AI agent needs it.",
    tag: "Engineering",
    read: "7 min",
    date: "Coming",
    status: "draft",
  },
];

export const publishedPosts = posts.filter((p) => p.status === "published");
export const draftPosts = posts.filter((p) => p.status === "draft");
