# CHAINFOUNDRY.DEV — Complete Website Content & Build Spec

## For: Claude Code VSCode Plugin
## Owner: Darsh Kumar (@darshan_aqua)
## Date: April 2026

---

# SITE ARCHITECTURE

```
chainfoundry.dev/
├── / ........................ Landing page (one long scroll)
├── /use-cases ............... Use cases hub (6 scenario cards → detail pages)
│   ├── /use-cases/ai-agents
│   ├── /use-cases/compliance
│   ├── /use-cases/multichain-dapps
│   ├── /use-cases/ecosystem-growth
│   ├── /use-cases/startups
│   └── /use-cases/competitive-migration
├── /mcp ..................... MCP Server for AI agents (hot page)
├── /blog .................... Technical blog (SEO engine)
├── /about ................... Founder + company + vision
└── /contact ................. Book a call + newsletter
```

Separate subdomain:
```
docs.chainfoundry.dev/ ....... Technical docs (Docusaurus or mdBook)
```

---

# TECH STACK (for Claude Code)

- Framework: Next.js 14+ (App Router) or Astro (for static + fast)
- Styling: Tailwind CSS
- Fonts: Use Google Fonts — "DM Sans" for body, "Instrument Serif" for headings
- Animations: CSS only (intersection observer for scroll reveals)
- Icons: Lucide icons
- Deployment: Vercel or Cloudflare Pages
- Analytics: Plausible (privacy-friendly, GDPR compliant)
- Contact form: Formspree or Resend
- Newsletter: Buttondown or Resend

---

# LOGO CONCEPT

Simple, geometric, monochrome. The logo should work at 16x16 favicon size.

Concept: A stylized chain link that also looks like a code bracket `{ }` — representing "chain" + "code foundation."

SVG logo spec:
- Two interlocking rounded rectangles forming a chain link shape
- The negative space between them forms `{ }` brackets
- Colors: primary dark (#0F1B2D) on light, white (#FFFFFF) on dark
- Wordmark: "ChainFoundry" in DM Sans 600 weight, all one word
- Favicon: Just the chain-link/bracket icon, no wordmark

---

# SOCIAL LINKS (use everywhere)

- GitHub: https://github.com/DarshanKumar89/chainkit (do NOT show star count)
- X/Twitter: https://x.com/darshan_aqua
- LinkedIn: https://www.linkedin.com/company/ai2innovate/
- Discord: darshankumar89

---

# SEO & GEO STRATEGY

## Primary keywords (target in titles, H1s, meta descriptions):
- "multichain blockchain data toolkit"
- "blockchain ABI decoder Rust"
- "multichain RPC middleware"
- "blockchain indexer library Rust"
- "cross-chain event correlation open source"
- "MCP server blockchain AI agents"
- "blockchain data infrastructure"
- "universal ABI decoder"

## Secondary keywords (use in body text, blog posts):
- "chaincodec" "chainrpc" "chainindex" "chainerrors"
- "Solana ABI decoder" "Cosmos IBC decoder" "Substrate SCALE decoder"
- "blockchain forensics open source"
- "NIS2 blockchain compliance" "MiCA compliance tools"
- "AI agent on-chain data"
- "alternative to Chainalysis"

## GEO signals (for EU market positioning):
- Mention "EU-based" / "Bratislava & Brussels" in footer and about page
- Reference MiCA, NIS2, GDPR compliance throughout
- Use .dev TLD (globally neutral, developer-friendly)
- Add hreflang if multilingual later

## Technical SEO:
- Every page needs unique <title> and <meta description>
- Structured data: Organization, SoftwareApplication, FAQPage schemas
- Sitemap.xml auto-generated
- robots.txt allowing all
- Open Graph + Twitter Card meta tags on every page
- Canonical URLs
- Fast Core Web Vitals (static site or SSG)

---

# PAGE 1: LANDING PAGE (/)

## Meta
- Title: "ChainFoundry — The Universal Blockchain Data Toolkit"
- Description: "Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. One Rust core, 6 language bindings. MIT licensed."

## Section 1: Hero

**Headline:** Decode once. Build everywhere.

**Subheadline:** The universal blockchain data toolkit. One API for 7 architectures and 500+ networks.

**Body:** Every blockchain speaks a different language. ChainFoundry translates all of them — so you write your data pipeline once and it works on Ethereum, Solana, Cosmos, Polkadot, Bitcoin, Aptos, and Sui.

**CTA buttons:**
- Primary: "Get Started" → docs.chainfoundry.dev
- Secondary: "Book a Call" → /contact

**Code snippet (animated typing effect):**
```rust
use chaincodec_evm::EvmDecoder;

let decoder = EvmDecoder::new();
let event = decoder.decode_event(&raw_log, &schema)?;
println!("{}: {:?}", event.schema, event.fields);
// Works on Ethereum, Polygon, Arbitrum, Base, BSC, and 200+ more
```

**Small badges below code:** `cargo add chaincodec` · `npm i @chainfoundry/chaincodec` · `pip install chaincodec`

---

## Section 2: The Problem (with visual)

**Headline:** 7 languages. Zero translators.

**Visual:** Show 7 blockchain logos (Ethereum, Solana, Cosmos, Polkadot, Bitcoin, Aptos, Sui) each with a different data format flowing out — ABI, Borsh, Protobuf, SCALE, Script, Move, Move-object — all converging into one ChainFoundry output.

**Body:**
Blockchains don't agree on anything. Ethereum uses ABI encoding. Solana uses Borsh. Cosmos uses Protobuf. Substrate uses SCALE. Bitcoin uses Script. Aptos and Sui use Move bytecode — but in incompatible ways.

Today, building anything that reads data from multiple chains means learning each system from scratch, maintaining separate codebases, and hoping nothing breaks when one chain upgrades.

ChainFoundry fixes this. One toolkit. Every architecture. Every language you already use.

---

## Section 3: What It Does (4 capability cards)

**Headline:** Four primitives. Infinite possibilities.

**Card 1: Decode**
- Icon: Code brackets
- Title: chaincodec
- Body: Universal ABI decoder. 50+ protocol schemas bundled. EVM events, Solana instructions, Cosmos messages, Substrate extrinsics. Decode >1M events/sec.
- Link: "See decode examples →"

**Card 2: Transport**
- Icon: Network/layers
- Title: chainrpc
- Body: Production RPC middleware. Circuit breaker, CU-aware rate limiting, MEV protection, 5 failover strategies. Works with any RPC provider across all 7 architectures.
- Link: "See transport examples →"

**Card 3: Index**
- Icon: Database/stack
- Title: chainindex
- Body: Reorg-safe blockchain indexer as a library — not a SaaS. Pluggable storage (SQLite, Postgres, RocksDB). Embed it in your own binary. You own the data.
- Link: "See indexer examples →"

**Card 4: Correlate**
- Icon: Shield/link
- Title: chaincorrelate
- Body: Cross-chain event correlation. Trace a bridge deposit on Ethereum to its withdrawal on Solana. Build chain-hop graphs across heterogeneous architectures. (Coming v2.0)
- Link: "See the roadmap →"

---

## Section 4: Code Examples (tabbed)

**Headline:** 3 lines to decode. Any chain. Any language.

**Tab 1: Rust**
```rust
use chaincodec_evm::EvmDecoder;

let decoder = EvmDecoder::new();
let event = decoder.decode_event(&log, &schema)?;
println!("Transfer: {} → {} ({})", event.fields["from"], event.fields["to"], event.fields["value"]);
```

**Tab 2: TypeScript**
```typescript
import { EvmDecoder } from '@chainfoundry/chaincodec';

const decoder = new EvmDecoder();
const event = decoder.decodeEvent(rawLog, schema);
console.log(`Transfer: ${event.fields.from} → ${event.fields.to} (${event.fields.value})`);
```

**Tab 3: Python**
```python
from chaincodec import EvmDecoder

decoder = EvmDecoder()
event = decoder.decode_event(raw_log, schema)
print(f"Transfer: {event.fields['from']} → {event.fields['to']} ({event.fields['value']})")
```

---

## Section 5: Who Builds With ChainFoundry

**Headline:** Built for builders. At every scale.

**Column 1: AI Agent Builders**
Your agents need to read the blockchain. ChainFoundry's MCP server gives them decoded, structured data from 500+ networks — self-hosted, no API keys, no vendor lock-in.
→ "See AI agent use case"

**Column 2: Compliance & Forensics Teams**
Trace funds across bridges. Decode transactions across chains. Build audit trails. Open-source cross-chain correlation — without paying $100K/yr for Chainalysis.
→ "See compliance use case"

**Column 3: Multichain dApp Developers**
Add a new chain to your app in hours, not weeks. One import, one API. Wallet, DEX aggregator, portfolio tracker, bridge UI — all work across every supported architecture.
→ "See developer use case"

**Column 4: Blockchain Ecosystems**
Better developer tooling = more developers = more apps = more users. Support ChainFoundry through grants or partnerships and get your chain supported out of the box.
→ "See ecosystem use case"

---

## Section 6: The Numbers

**Headline:** Shipped, tested, published.

Stats in large font, side by side:
- **89** features shipped
- **698+** tests passing
- **500+** networks covered
- **6** language bindings
- **52+** runnable examples
- **4** published crates

Small text: "Published on crates.io · npm · PyPI · MIT Licensed"

---

## Section 7: Architecture Coverage

**Headline:** 7 architectures, not 7 chains.

**Subheadline:** Competitors count EVM clones. We solve fundamentally different blockchain architectures — each one covers dozens to hundreds of networks.

Table:
| Architecture | Networks | Encoding | Status |
|---|---|---|---|
| EVM | Ethereum, Polygon, Arbitrum, Base, BSC, zkSync, 200+ | ABI / Solidity | ✓ Shipped |
| Solana (SVM) | Solana, Eclipse | Borsh / Anchor IDL | ✓ Shipped |
| Cosmos | Cosmos Hub, Osmosis, dYdX, Sei, 50+ | Protobuf / IBC | ✓ Shipped |
| Substrate | Polkadot, Kusama, 100+ parachains | SCALE codec | ✓ Shipped |
| Bitcoin | Bitcoin, Lightning, Ordinals, BRC-20 | Script / UTXO | ✓ Shipped |
| Aptos | Aptos mainnet | Move bytecode | ✓ Shipped |
| Sui | Sui mainnet | Move (object model) | ✓ Shipped |

**Footer text:** +13 chains on roadmap (Starknet, NEAR, TON, Tron, Cardano...) via the pluggable ChainAdapter trait. Anyone can contribute a new chain.

---

## Section 8: Open Source

**Headline:** MIT licensed. Built in the open.

**Body:** ChainFoundry's core SDK is fully open-source under the MIT license. 197 features are free forever. Enterprise cloud and managed services are coming for teams that need hosted infrastructure.

**GitHub button:** View on GitHub (link to repo, no star count shown)

---

## Section 9: Founder

**Photo placeholder + bio:**

**Darsh Kumar**
Founder & CEO

25+ years of senior engineering spanning Rust, Java, Python, cybersecurity, databases, and blockchain. Apache Committer. Publishes ChainFoundry on crates.io, npm, and PyPI. Based in Bratislava and Brussels. Consults for EU public sector on healthcare data infrastructure.

**Links:** LinkedIn · X · Discord

---

## Section 10: CTA Footer

**Headline:** Ready to build?

Three paths:
- **I'm a developer** → Get Started (docs link)
- **I want to partner** → Book a Call (Calendly)
- **I want to learn more** → Subscribe to updates (email capture)

**Footer:**
- ChainFoundry is a product of AI2Innovate SRL
- EU-based: Bratislava, Slovakia · Brussels, Belgium
- Links: GitHub · X · LinkedIn · Discord · Blog · Docs
- MIT Licensed · © 2026 AI2Innovate SRL

---

# PAGE 2: USE CASES HUB (/use-cases)

## Meta
- Title: "ChainFoundry Use Cases — Who Needs Multichain Blockchain Data?"
- Description: "See how AI agent builders, compliance teams, multichain developers, blockchain ecosystems, and startups use ChainFoundry to solve real problems."

## Hub page layout:
6 cards, each linking to a detailed use case page.

---

# USE CASE 1: AI AGENTS (/use-cases/ai-agents)

## Meta
- Title: "ChainFoundry for AI Agents — MCP Server for Multichain Blockchain Data"
- Description: "Give your AI agents decoded blockchain data from 500+ networks via MCP. Self-hosted, no API keys. Works with Claude, Cursor, ElizaOS, LangChain."

## Content:

### The scenario
You're building an AI agent that trades on DeFi protocols, monitors wallets, or manages portfolios across multiple chains. Your agent needs to:
- Read decoded events from Uniswap on Ethereum AND Raydium on Solana
- Check balances across EVM, Solana, and Cosmos chains
- Decode transaction errors when trades fail
- Track bridge transfers as assets move between chains

### The problem today
- **Moralis/Alchemy APIs**: You pay per request, hit rate limits, and are locked to their uptime. If their API goes down, your agent goes blind.
- **Build it yourself**: You'd need to integrate Alloy (EVM only), anchor-client (Solana only), cosmrs (Cosmos only) — three separate libraries, three codebases, three maintenance burdens.
- **No MCP server exists**: Claude Desktop, Cursor, and other AI tools can't natively query blockchain data from multiple chains.

### How ChainFoundry solves it
```python
# Install the MCP server
pip install chainfoundry-mcp

# Your AI agent can now call:
# - decode_event(chain="ethereum", tx_hash="0x...")
# - decode_event(chain="solana", tx_hash="...")
# - get_balance(chain="cosmos", address="cosmos1...")
# - correlate_bridge(source="ethereum", dest="solana", tx_hash="0x...")

# All from one MCP server. Self-hosted. No API keys.
```

### What changes for you
- **One dependency** instead of 3+ chain-specific libraries
- **Self-hosted** — runs in your infra, no API costs, no rate limits
- **Works with any AI framework** — Claude MCP, ElizaOS, LangChain, CrewAI
- **Decoded data, not raw bytes** — your agent gets structured JSON, not hex blobs

### Who this is for
- AI agent startups building trading bots, portfolio managers, or wallet assistants
- Teams using Claude Desktop or Cursor who want blockchain data in their workflow
- DeFi protocol teams building automated monitoring agents

---

# USE CASE 2: COMPLIANCE & FORENSICS (/use-cases/compliance)

## Meta
- Title: "ChainFoundry for Compliance — Open-Source Cross-Chain Tracing"
- Description: "Trace funds across bridges. Decode transactions on 7 architectures. Build NIS2/MiCA-ready compliance tools without paying $100K/yr for Chainalysis."

## Content:

### The scenario
You're a compliance team at an EU crypto exchange, a law firm doing digital forensics, or a RegTech startup building AML monitoring tools. You need to:
- Trace a deposit on Ethereum through a Wormhole bridge to its withdrawal on Solana
- Decode transaction data across multiple chain types to build audit trails
- Generate regulatory reports for MiCA and NIS2 compliance
- Screen addresses against sanctions lists across all chains you support

### The problem today
- **Chainalysis/TRM/Elliptic**: $100K+/year. Closed source. You can't embed their logic in your own product. You're renting intelligence, not building capability.
- **Building from scratch**: Cross-chain correlation is a multi-year engineering effort. You'd need to understand bridge protocols (Wormhole VAAs, LayerZero messages, Circle CCTP), index events on both sides, and match deposits to withdrawals across incompatible chains.
- **$21B+ laundered through cross-chain bridges**: The problem is getting worse, and the tools to fight it are locked behind enterprise paywalls.

### How ChainFoundry solves it
```rust
use chaincorrelate::BridgeMatcher;
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
    &indexer
).await?;

println!("Deposit: {} ETH on Ethereum", correlation.source_amount);
println!("Withdrawal: {} on Solana at {}", correlation.dest_amount, correlation.dest_tx);
println!("Time delta: {}s", correlation.time_delta_seconds);
```

### What changes for you
- **Embeddable** — build cross-chain tracing into YOUR product, not rent it from someone else
- **Open source** — audit the correlation logic yourself, no black box
- **EU-ready** — built by an EU-based team, designed for MiCA/NIS2 compliance workflows
- **10x cheaper** — MIT-licensed core vs. $100K/year proprietary SaaS

### Who this is for
- EU crypto exchanges needing MiCA compliance tooling
- Law firms doing blockchain forensics and digital investigations
- RegTech startups building AML/KYT monitoring products
- Government agencies and financial regulators

---

# USE CASE 3: MULTICHAIN DAPP DEVELOPERS (/use-cases/multichain-dapps)

## Meta
- Title: "ChainFoundry for dApp Developers — Add Any Chain in Hours"
- Description: "Build wallets, DEX aggregators, and portfolio trackers across 7 blockchain architectures with one library. Rust, TypeScript, Python, Go, Java, WASM."

## Content:

### The scenario
You're building a multichain wallet, a DEX aggregator, a portfolio tracker, or a bridge monitoring dashboard. Every time you add support for a new chain, you need:
- A new RPC client with retry logic, rate limiting, and failover
- A new ABI decoder for that chain's event format
- A new indexer for historical data
- New error handling for that chain's failure modes

### The problem today
- **Adding Solana to an EVM app**: You go from ethers.js/Alloy to @solana/web3.js — completely different API, different data model, different error handling.
- **Adding Cosmos**: Now you need cosmjs — yet another library, another learning curve.
- **Each chain = weeks of integration work**: Provider setup, error handling, retry logic, rate limiting — you rebuild the same plumbing every time.
- **6 languages, no shared solution**: Your Rust backend uses Alloy. Your TypeScript frontend uses viem. Your Python analytics pipeline uses web3.py. None of them share a common interface.

### How ChainFoundry solves it

```typescript
import { ChainClient } from '@chainfoundry/chainrpc';
import { EvmDecoder, SolanaDecoder } from '@chainfoundry/chaincodec';

// Same API, different chains
const eth = ChainClient.evm("https://eth-rpc.example.com");
const sol = ChainClient.solana("https://sol-rpc.example.com");
const cosmos = ChainClient.cosmos("https://cosmos-rpc.example.com");

// Same decode pattern, different architectures
const ethEvent = EvmDecoder.decode(ethLog, uniswapSchema);
const solEvent = SolanaDecoder.decode(solLog, raydiumSchema);

// Same middleware stack everywhere
// Circuit breaker, rate limiting, caching, failover — all built in
```

### What changes for you
- **Hours, not weeks** to add a new chain
- **One API** across Rust, TypeScript, Python, Go, Java, and WASM
- **Production middleware built in** — you don't write retry logic, failover, rate limiting, or cache invalidation ever again
- **Embeddable** — it's a library in your binary, not a SaaS you depend on

### Who this is for
- Cross-chain wallet teams (Phantom, Backpack, etc. competitors)
- DEX aggregators (need to decode swaps from Uniswap + Raydium + Osmosis)
- Portfolio trackers (need balances + tx history across all chains)
- Block explorer teams adding multichain support
- Bridge monitoring dashboards

---

# USE CASE 4: BLOCKCHAIN ECOSYSTEMS (/use-cases/ecosystem-growth)

## Meta
- Title: "ChainFoundry for Blockchain Ecosystems — Better Developer Tooling for Your Chain"
- Description: "Help your developers build faster. ChainFoundry supports Sui, Cosmos, Polkadot, and more — with deep chain-specific features."

## Content:

### The scenario (written for Sui Foundation, Cosmos, Polkadot, Aptos ecosystem teams)

You run developer relations or ecosystem growth for a Layer 1 or Layer 2 blockchain. Your job is to attract developers and help them ship apps on your chain. But your developers keep hitting the same problems:
- "The tooling on [your chain] is not as mature as Ethereum's"
- "I can't find a good indexer that works with [your chain]"
- "I want to build a multichain app but adding [your chain] is too much work"

### The problem today
- **Ethereum has Alloy, Foundry, The Graph, Envio** — mature, well-documented, battle-tested tooling
- **Your chain has... less**: Maybe a basic RPC client. Maybe a chain-specific indexer. Definitely not polyglot bindings in 6 languages.
- **Developer churn**: Developers try your chain, find the tooling lacking, and go back to EVM

### How ChainFoundry helps your ecosystem

ChainFoundry already includes:
- **[Your chain] RPC client** with production middleware (circuit breaker, rate limiting, failover)
- **[Your chain] indexer** with reorg-safe storage and checkpoint resume
- **[Your chain] event decoder** with chain-specific awareness (e.g., Sui object types, Cosmos IBC messages, Substrate pallets)
- All accessible in **Rust, TypeScript, Python, Go, Java, and WASM**
- All **open-source under MIT license**

### What an ecosystem partnership looks like
1. **Grant funding** ($20K–$100K) to deepen chain-specific support — more schemas, chain-specific features, performance tuning
2. **Co-marketing** — ChainFoundry lists your chain prominently, you list ChainFoundry in your developer docs
3. **Engineering collaboration** — your solutions engineering team works with us on chain-specific optimizations
4. **Developer workshops** — joint sessions showing developers how to build multichain apps that include your chain

### Specific Sui Foundation value prop
ChainFoundry already ships:
- Sui chain client in chainrpc (transport, failover, rate limiting)
- Sui indexer in chainindex (reorg-safe, checkpoint-native)
- Roadmap: Sui Move event decoding with object-type awareness, dynamic field tracking, checkpoint-based querying

When developers use ChainFoundry, they can add Sui support to their existing multichain app in hours — not weeks. That means more apps on Sui, faster.

### Who this is for
- Sui Foundation, Aptos Foundation
- Cosmos ecosystem fund, Polkadot/Web3 Foundation
- Any L1/L2 running a developer grants program
- Chain-specific accelerators (SuiHub, Cosmos HackAtom, Substrate Builders)

---

# USE CASE 5: STARTUPS & SMEs (/use-cases/startups)

## Meta
- Title: "ChainFoundry for Startups — Ship Multichain Products Without a Team of 10"
- Description: "You don't need a dedicated blockchain infrastructure team. ChainFoundry gives you production-grade multichain data tooling as a single library."

## Content:

### The scenario
You're a 2-5 person startup building a crypto product. You have a great idea — maybe a multichain analytics dashboard, an AI-powered trading assistant, or a compliance monitoring tool for small exchanges. But you don't have the budget for:
- A dedicated blockchain infrastructure engineer
- Multiple SaaS subscriptions for RPC, indexing, and data APIs
- Months of integration work per chain

### The problem today
- **Alchemy + Moralis + Envio + Chainalysis** = $500–$5,000/month before you have a single customer
- **Building from scratch** = 3–6 months of infrastructure work before you can build your actual product
- **Hiring blockchain infra engineers** = $150K+/year salary in a competitive market

### How ChainFoundry solves it
```bash
# One install. Production infrastructure.
cargo add chaincodec chainrpc chainindex

# or
npm install @chainfoundry/chaincodec @chainfoundry/chainrpc

# You now have:
# - ABI decoding for 50+ protocols
# - RPC transport with circuit breaker and failover
# - Reorg-safe indexing with SQLite storage
# - All for $0/month. MIT licensed.
```

### What changes for you
- **$0 infrastructure cost** to start — no SaaS subscriptions needed
- **Ship in weeks, not months** — the blockchain plumbing is handled
- **Scale when you're ready** — start with the free SDK, upgrade to managed cloud when you have revenue
- **No vendor lock-in** — you own every line of code running in your product

### Who this is for
- Pre-seed and seed-stage crypto startups
- Small development teams (2–10 people) building multichain products
- Indie developers and hackathon teams
- Agencies building crypto products for clients

---

# USE CASE 6: MIGRATING FROM COMPETITORS (/use-cases/competitive-migration)

## Meta
- Title: "Migrating to ChainFoundry from Alloy, ethers.js, viem, or The Graph"
- Description: "Already using an EVM-only library or SaaS indexer? ChainFoundry extends your stack to 7 architectures without rewriting everything."

## Content:

### The scenario
You've already built your product using:
- **Alloy or ethers-rs** for Rust EVM interaction
- **viem or ethers.js** for TypeScript EVM interaction
- **The Graph** or **Envio** for indexing
- **Alchemy or Moralis APIs** for blockchain data

And now your boss/investors/users want you to support Solana. Or Cosmos. Or Sui. Or "all the chains."

### The problem with your current stack
| What you have | What it covers | What it doesn't |
|---|---|---|
| Alloy | EVM (Rust) | Solana, Cosmos, Substrate, Bitcoin, Aptos, Sui |
| viem | EVM (TypeScript) | Everything non-EVM |
| The Graph | EVM indexing | Real-time, non-EVM chains, embeddable |
| Alchemy API | EVM + some Solana | Self-hosted, non-EVM depth, correlation |

### How ChainFoundry extends your stack
You don't need to rip out Alloy or viem. ChainFoundry sits alongside them for non-EVM chains:

```rust
// Keep using Alloy for EVM — it's great at what it does
let alloy_provider = ProviderBuilder::new().connect("https://eth-rpc.com").await?;

// Add ChainFoundry for everything else
let sol_client = chainrpc::ChainClient::solana("https://sol-rpc.com");
let cosmos_client = chainrpc::ChainClient::cosmos("https://cosmos-rpc.com");
let sui_client = chainrpc::ChainClient::sui("https://sui-rpc.com");

// Same middleware (circuit breaker, rate limiting, caching) across all non-EVM chains
// Alloy handles EVM. ChainFoundry handles the rest.
```

### Or replace everything with one unified interface
```typescript
// Before: 3 libraries, 3 APIs, 3 maintenance burdens
import { createPublicClient } from 'viem';        // EVM only
import { Connection } from '@solana/web3.js';       // Solana only
import { StargateClient } from '@cosmjs/stargate';  // Cosmos only

// After: 1 library, 1 API, 1 maintenance burden
import { ChainClient } from '@chainfoundry/chainrpc';
const eth = ChainClient.evm(ethRpc);
const sol = ChainClient.solana(solRpc);
const cosmos = ChainClient.cosmos(cosmosRpc);
// Same interface. Same middleware. Same error handling.
```

### What you gain
- Go from "EVM-only" to "7 architectures, 500+ networks" without rewriting your EVM code
- Use ChainFoundry alongside Alloy/viem or as a full replacement — your choice
- Get production middleware (failover, caching, rate limiting) for every non-EVM chain for free
- Future-proof: when you need to add chain #8, it's a one-line config change

### Who this is for
- Teams with existing EVM products expanding to multichain
- Projects migrating from deprecated ethers-rs to a multichain-ready stack
- Teams on The Graph wanting to self-host or add non-EVM chains
- Anyone paying for RPC APIs who wants to reduce vendor dependency

---

# PAGE 3: MCP SERVER (/mcp)

## Meta
- Title: "ChainFoundry MCP Server — Blockchain Data for AI Agents"
- Description: "Give Claude, Cursor, and any MCP-compatible AI agent access to decoded blockchain data from 500+ networks. Self-hosted, no API keys."

## Content:

### Hero
**Headline:** Your AI agent can now read every blockchain.

**Subheadline:** ChainFoundry's MCP server gives AI agents decoded, structured data from 7 architectures and 500+ networks. Self-hosted. No API keys.

### What is MCP?
Model Context Protocol (MCP) is the open standard (created by Anthropic) that lets AI agents connect to external tools and data. ChainFoundry's MCP server makes blockchain data a native capability for any MCP-compatible AI system.

### Available tools
| MCP Tool | What it does |
|---|---|
| `decode_event` | Decode a transaction's events on any chain |
| `decode_call` | Decode a function call on any chain |
| `get_block` | Get block data from any chain |
| `get_balance` | Check address balance on any chain |
| `get_transaction` | Get full transaction details on any chain |
| `list_supported_chains` | Show all supported chains and architectures |
| `list_schemas` | Browse available protocol schemas |

### Quick start
```bash
pip install chainfoundry-mcp
```

Claude Desktop config (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "chainfoundry": {
      "command": "chainfoundry-mcp",
      "args": ["--chains", "ethereum,solana,cosmos"]
    }
  }
}
```

Then in Claude: "Decode the last transfer event on Ethereum transaction 0x..."

### How it works
Architecture diagram: User → AI Agent (Claude/Cursor/ElizaOS) → MCP Protocol → ChainFoundry MCP Server → chaincodec/chainrpc → Blockchain Nodes (7 architectures)

---

# PAGE 4: BLOG (/blog)

## Launch posts (write these before any investor call):

### Post 1: "Why We Built ChainFoundry"
- The origin story: 7 incompatible architectures, no universal toolkit
- The USB-C analogy
- What we shipped (89 features) and what's next
- SEO target: "multichain blockchain data toolkit"

### Post 2: "7 Architectures, Not 7 Chains: Why Chain Count Is a Misleading Metric"
- The EVM clone problem
- Deep dive into what makes each architecture different
- Why SubQuery's "300 chains" and ChainFoundry's "7 families" are actually comparable
- SEO target: "blockchain architecture comparison"

### Post 3: "Building an MCP Server for Blockchain Data"
- Technical deep dive on the MCP implementation
- How dual-mode (Rust PyO3 + Python fallback) works
- Claude Desktop and Cursor integration guide
- SEO target: "MCP server blockchain"

### Post 4: "CSDL: A Portable Schema Format for Blockchain Events"
- Why The Graph's subgraph manifests and Envio's configs are framework-locked
- How CSDL works, with examples
- How to contribute schemas
- SEO target: "blockchain event schema format"

---

# PAGE 5: ABOUT (/about)

## Meta
- Title: "About ChainFoundry — Built by Darsh Kumar"
- Description: "ChainFoundry is built by Darsh Kumar, an Apache Committer with 25+ years of engineering experience. Based in Bratislava and Brussels."

## Content:

### About ChainFoundry
ChainFoundry is the universal blockchain data toolkit — the missing standard library for building anything that reads, decodes, indexes, or correlates blockchain data across every major chain architecture.

We believe blockchain data infrastructure should be open, embeddable, and work across every chain. Not locked behind SaaS subscriptions. Not limited to one ecosystem. Not requiring you to learn a new framework for every chain you add.

### The company
ChainFoundry is a product of AI2Innovate SRL, a Belgian company focused on blockchain infrastructure and AI systems.

- **Operating entity:** AI2Innovate SRL (Belgium) / Defixium s.r.o. (Slovakia)
- **Founded:** 2026
- **Headquarters:** Bratislava, Slovakia · Brussels, Belgium
- **License:** MIT (open-source core)

### The founder

**Darsh Kumar**
Founder & CEO

25+ years of senior engineering experience spanning Rust, Java, Python, DevOps, cybersecurity, database systems, and blockchain infrastructure. Apache Committer. Publishes ChainFoundry on crates.io, npm, and PyPI. Consults for EU public sector on healthcare data infrastructure.

Previously built enterprise systems across Oracle, DB2, PostgreSQL, and led cybersecurity architecture for EU institutions. On-chain since 2017, with deep experience across DeFi protocols.

LinkedIn: https://www.linkedin.com/company/ai2innovate/
X: https://x.com/darshan_aqua
Discord: darshankumar89

---

# PAGE 6: CONTACT (/contact)

## Meta
- Title: "Contact ChainFoundry — Book a Call or Get in Touch"
- Description: "Interested in using ChainFoundry, partnering with us, or learning more? Book a call or send us a message."

## Content:

### Get in touch

Three paths:

**I'm a developer**
Get started with ChainFoundry in 5 minutes → docs.chainfoundry.dev

**I want to partner or invest**
Book a 30-minute call → [Calendly link]

**I just want updates**
Subscribe to our newsletter → [email capture form]

### Direct contact
- Email: info@ai2innovate.io
- X: @darshan_aqua
- LinkedIn: ai2innovate
- Discord: darshankumar89
- GitHub: DarshanKumar89/chainkit

---

# STRUCTURED DATA (JSON-LD for SEO)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ChainFoundry",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Cross-platform",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Darsh Kumar",
    "url": "https://www.linkedin.com/company/ai2innovate/"
  },
  "sourceOrganization": {
    "@type": "Organization",
    "name": "AI2Innovate SRL",
    "url": "https://ai2innovate.io"
  },
  "description": "The universal blockchain data toolkit. Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks.",
  "url": "https://chainfoundry.dev",
  "codeRepository": "https://github.com/DarshanKumar89/chainkit",
  "license": "https://opensource.org/licenses/MIT",
  "programmingLanguage": ["Rust", "TypeScript", "Python", "Go", "Java"]
}
```

---

# OPEN GRAPH & TWITTER CARD (for every page)

```html
<meta property="og:title" content="ChainFoundry — The Universal Blockchain Data Toolkit" />
<meta property="og:description" content="Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. MIT licensed." />
<meta property="og:image" content="https://chainfoundry.dev/og-image.png" />
<meta property="og:url" content="https://chainfoundry.dev" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@darshan_aqua" />
<meta name="twitter:title" content="ChainFoundry — The Universal Blockchain Data Toolkit" />
<meta name="twitter:description" content="7 architectures. 500+ networks. 6 languages. One API." />
<meta name="twitter:image" content="https://chainfoundry.dev/og-image.png" />
```

---

# OG IMAGE SPEC (1200x630px)

Dark background (#0F1B2D)
Left side: ChainFoundry logo + wordmark in white
Right side: "7 architectures · 500+ networks · 6 languages" in teal (#1D9E75)
Bottom: "chainfoundry.dev" in gray

---

# CLAUDE CODE BUILD INSTRUCTIONS

## Step 1: Initialize project
```bash
npx create-next-app@latest chainfoundry-dev --typescript --tailwind --app --src-dir
cd chainfoundry-dev
```

## Step 2: Install dependencies
```bash
npm install lucide-react
```

## Step 3: Set up fonts
In `layout.tsx`, import DM Sans and Instrument Serif from Google Fonts.

## Step 4: Build pages
Follow the content above section by section. Each section of the landing page should be a separate component.

## Step 5: Deploy
```bash
vercel deploy
```

Point chainfoundry.dev DNS to Vercel.

---

END OF CONTENT SPEC
