export type UseCase = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  icon: "bot" | "shield" | "gitbranch" | "sparkles" | "rocket" | "switch";
};

export const useCases: UseCase[] = [
  {
    slug: "ai-agents",
    eyebrow: "AI Agents",
    title: "MCP server for multichain blockchain data",
    lead:
      "Give your AI agents decoded blockchain data from 500+ networks via MCP. Self-hosted, no API keys. Works with Claude, Cursor, ElizaOS, LangChain.",
    metaTitle: "ChainFoundry for AI Agents — MCP Server for Multichain Blockchain Data",
    metaDescription:
      "Give your AI agents decoded blockchain data from 500+ networks via MCP. Self-hosted, no API keys. Works with Claude, Cursor, ElizaOS, LangChain.",
    icon: "bot",
  },
  {
    slug: "compliance",
    eyebrow: "Compliance & Forensics",
    title: "Open-source cross-chain tracing",
    lead:
      "Trace funds across bridges. Decode transactions on 7 architectures. Build NIS2/MiCA-ready compliance tools without paying $100K/yr for Chainalysis.",
    metaTitle: "ChainFoundry for Compliance — Open-Source Cross-Chain Tracing",
    metaDescription:
      "Trace funds across bridges. Decode transactions on 7 architectures. Build NIS2/MiCA-ready compliance tools without paying $100K/yr for Chainalysis.",
    icon: "shield",
  },
  {
    slug: "multichain-dapps",
    eyebrow: "Multichain dApps",
    title: "Add any chain in hours, not weeks",
    lead:
      "Build wallets, DEX aggregators, and portfolio trackers across 7 blockchain architectures with one library. Rust, TypeScript, Python, Go, Java, WASM.",
    metaTitle: "ChainFoundry for dApp Developers — Add Any Chain in Hours",
    metaDescription:
      "Build wallets, DEX aggregators, and portfolio trackers across 7 blockchain architectures with one library. Rust, TypeScript, Python, Go, Java, WASM.",
    icon: "gitbranch",
  },
  {
    slug: "ecosystem-growth",
    eyebrow: "Blockchain Ecosystems",
    title: "Better developer tooling for your chain",
    lead:
      "Help your developers build faster. ChainFoundry supports Sui, Cosmos, Polkadot, and more — with deep chain-specific features.",
    metaTitle:
      "ChainFoundry for Blockchain Ecosystems — Better Developer Tooling for Your Chain",
    metaDescription:
      "Help your developers build faster. ChainFoundry supports Sui, Cosmos, Polkadot, and more — with deep chain-specific features.",
    icon: "sparkles",
  },
  {
    slug: "startups",
    eyebrow: "Startups & SMEs",
    title: "Ship multichain without a team of 10",
    lead:
      "You don't need a dedicated blockchain infrastructure team. ChainFoundry gives you production-grade multichain data tooling as a single library.",
    metaTitle: "ChainFoundry for Startups — Ship Multichain Products Without a Team of 10",
    metaDescription:
      "You don't need a dedicated blockchain infrastructure team. ChainFoundry gives you production-grade multichain data tooling as a single library.",
    icon: "rocket",
  },
  {
    slug: "competitive-migration",
    eyebrow: "Migration",
    title: "Migrating from Alloy, viem, ethers.js, or The Graph",
    lead:
      "Already using an EVM-only library or SaaS indexer? ChainFoundry extends your stack to 7 architectures without rewriting everything.",
    metaTitle: "Migrating to ChainFoundry from Alloy, ethers.js, viem, or The Graph",
    metaDescription:
      "Already using an EVM-only library or SaaS indexer? ChainFoundry extends your stack to 7 architectures without rewriting everything.",
    icon: "switch",
  },
];

export const iconMap = {
  bot: "Bot",
  shield: "ShieldCheck",
  gitbranch: "GitBranch",
  sparkles: "Sparkles",
  rocket: "Rocket",
  switch: "RefreshCcw",
} as const;
