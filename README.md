<h1 align="center">ChainFoundry</h1>

<p align="center">
  <strong>The universal blockchain data toolkit.</strong><br/>
  One API for <strong>7 blockchain architectures</strong> and <strong>500+ networks</strong>.<br/>
  Four shipped Rust crates with polyglot bindings. Open-source core.
</p>

<p align="center">
  <a href="https://chainfoundry.dev"><img alt="Website" src="https://img.shields.io/badge/website-chainfoundry.dev-0F1B2D?style=flat-square&labelColor=0F1B2D&color=1D9E75"/></a>
  <a href="https://github.com/DarshanKumar89/chainfoundry"><img alt="SDK" src="https://img.shields.io/badge/SDK-DarshanKumar89%2Fchainkit-0F1B2D?style=flat-square&logo=github&labelColor=0F1B2D&color=1D9E75"/></a>
  <a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0F1B2D?style=flat-square&labelColor=0F1B2D&color=1D9E75"/></a>
  <a href="https://crates.io/crates/chaincodec-core"><img alt="crates.io" src="https://img.shields.io/crates/v/chaincodec-core?style=flat-square&labelColor=0F1B2D&color=1D9E75&label=chaincodec"/></a>
  <a href="https://www.npmjs.com/package/@chainfoundry/chaincodec"><img alt="npm" src="https://img.shields.io/npm/v/@chainfoundry/chaincodec?style=flat-square&labelColor=0F1B2D&color=1D9E75"/></a>
</p>

<p align="center">
  <a href="https://chainfoundry.dev">Website</a> ·
  <a href="https://chainfoundry.dev/use-cases/">Use cases</a> ·
  <a href="https://chainfoundry.dev/mcp/">MCP for AI agents</a> ·
  <a href="https://chainfoundry.dev/blog/">Blog</a> ·
  <a href="https://chainfoundry.dev/press/">Press & brand kit</a> ·
  <a href="mailto:info@ai2innovate.io">Contact</a>
</p>

---

## What is ChainFoundry?

ChainFoundry is the **missing standard library for blockchain data**. Every team building AI agents, multichain dApps, compliance tools, or DeFi analytics hits the same wall: fragmented RPC clients, chain-specific decoders, indexers that break on reorgs, and error messages that are just hex strings.

ChainFoundry replaces that wall with **one coherent API** that works across every major architecture — EVM, Solana, Cosmos, Substrate, Bitcoin, Aptos, and Sui — and across every language your team already uses.

> **Decode once. Build everywhere.**

## Who it's for

- **AI-agent builders** — give Claude, Cursor, ElizaOS, LangChain, and CrewAI decoded on-chain data via MCP, self-hosted, no API keys.
- **Multichain dApp teams** — wallets, DEX aggregators, portfolio trackers, bridge UIs. Add any chain in hours, not weeks.
- **Compliance & forensics** — EU-ready, MiCA- and NIS2-aware primitives for AML/KYT and cross-chain tracing — without paying $100K+/yr for closed-source SaaS.
- **L1 / L2 foundations** — Sui, Aptos, Cosmos, Polkadot, BTCFi ecosystems. Instant distribution to every multichain team already using ChainFoundry.
- **Startups & indies** — production infrastructure as a library, $0/month, no vendor lock-in.

## What's shipped

| Crate | Status | Purpose |
|---|---|---|
| [`chaincodec`](https://github.com/DarshanKumar89/chainfoundry/tree/main/chaincodec) | `v0.1.2` · crates.io · npm · PyPI | Universal ABI decoder — EVM + Solana + Cosmos, 50+ bundled protocol schemas, CSDL portable schema format |
| [`chainrpc`](https://github.com/DarshanKumar89/chainfoundry/tree/main/chainrpc) | `v0.1.1` · crates.io · npm · PyPI | Production RPC transport — circuit breaker, 4-tier cache, CU-aware rate limiter, MEV protection, 5 failover strategies |
| [`chainindex`](https://github.com/DarshanKumar89/chainfoundry/tree/main/chainindex) | `v0.1.1` · crates.io · npm · PyPI | Reorg-safe blockchain indexer as a library (not a SaaS). SQLite / Postgres / RocksDB |
| [`chainerrors`](https://github.com/DarshanKumar89/chainfoundry/tree/main/chainerrors) | `v0.1.0` · crates.io · npm · PyPI | Decodes Solidity reverts, panics, custom errors, and Solana program failures |
| `chaincorrelate` | Planned · v2 roadmap | Cross-chain event correlation — bridge deposit/withdrawal matching |

## Chain coverage

| Architecture | Networks | Encoding | chainrpc | chainindex | chaincodec |
|---|---|---|:---:|:---:|:---:|
| **EVM** | Ethereum, Polygon, Arbitrum, Base, BSC, zkSync, 200+ | ABI | ✅ | ✅ | ✅ |
| **Solana (SVM)** | Solana, Eclipse | Borsh / Anchor IDL | ✅ | ✅ | ✅ |
| **Cosmos** | Cosmos Hub, Osmosis, dYdX, Sei, 50+ | Protobuf / IBC | ✅ | ✅ | ✅ |
| **Substrate** | Polkadot, Kusama, 100+ parachains | SCALE | ✅ | ✅ | 🔜 |
| **Bitcoin** | Bitcoin, Lightning, Ordinals, BRC-20 | Script / UTXO | ✅ | ✅ | 🔜 |
| **Aptos** | Aptos mainnet | Move bytecode | ✅ | ✅ | 🔜 |
| **Sui** | Sui mainnet | Move (object model) | ✅ | ✅ | 🔜 |

## Language bindings

All four crates ship with native bindings:

| Language | chaincodec | chainrpc | chainindex | chainerrors |
|---|:---:|:---:|:---:|:---:|
| Rust (native) | ✅ | ✅ | ✅ | ✅ |
| TypeScript (napi-rs) | ✅ | ✅ | ✅ | ✅ |
| Python (PyO3 / maturin) | ✅ | ✅ | ✅ | ✅ |
| Go (cgo) | ✅ | ✅ | ✅ | ✅ |
| Java (JNI) | ✅ | ✅ | ✅ | ✅ |
| WASM (wasm-bindgen) | ✅ | — | — | — |

---

## About this repository

This repo is the **marketing website** at [chainfoundry.dev](https://chainfoundry.dev). The SDK source — all four Rust crates, bindings, examples, and technical docs — lives in a separate repo: [**DarshanKumar89/chainfoundry**](https://github.com/DarshanKumar89/chainfoundry).

### Site stack

- [Next.js 14](https://nextjs.org) (App Router) · React Server Components
- [Tailwind CSS](https://tailwindcss.com)
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) + [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (display)
- [Lucide](https://lucide.dev) icons · inline brand SVGs
- [SendGrid](https://sendgrid.com) (newsletter subscribe API route)
- Hosted on [Netlify](https://www.netlify.com) via [`@netlify/plugin-nextjs`](https://github.com/netlify/next-runtime-minimal)

### Local development

```bash
cp .env.example .env.local    # set SENDGRID_API_KEY for newsletter API
npm install
npm run dev                    # http://localhost:3000
```

### Deployment

See [`DEPLOY.md`](./DEPLOY.md) for the full Netlify setup — environment variables, SendGrid sender verification, custom-domain DNS, and key rotation.

### Repo layout

```text
chainfoundry.dev/
├── src/
│   ├── app/              # routes (pages + /api/subscribe + sitemap + robots + RSS)
│   ├── components/       # shared UI
│   ├── content/          # blog posts + use-case data
│   └── lib/              # SEO schema helpers, external link constants
├── public/
│   ├── favicon.svg
│   └── llms.txt          # LLM-friendly site index (https://llmstxt.org)
├── netlify.toml
├── next.config.mjs
├── tailwind.config.ts
├── DEPLOY.md             # Netlify setup + key rotation
└── CHAINFOUNDRY-WEBSITE-CONTENT.md   # source spec
```

---

## For partners and investors

ChainFoundry is actively fundraising and open to ecosystem-grant partnerships with L1 / L2 foundations (Sui, Aptos, Cosmos, Polkadot, BTCFi ecosystem teams) and enterprise pilots with EU RegTech, exchanges, and forensics firms.

- **Grant range** — $20K–$100K for deep chain-specific work
- **Investor fundraising** — deck and metrics available under NDA
- **Pilots** — MiCA- and NIS2-aware, self-hosted, embeddable, auditable

**Contact:** [`info@ai2innovate.io`](mailto:info@ai2innovate.io) · [chainfoundry.dev/press](https://chainfoundry.dev/press/) · [chainfoundry.dev/contact](https://chainfoundry.dev/contact/)

## Links

- 🌐 Website — <https://chainfoundry.dev>
- 📦 SDK repo — <https://github.com/DarshanKumar89/chainfoundry>
- 📘 Blog — <https://chainfoundry.dev/blog/>
- 🧠 MCP for AI agents — <https://chainfoundry.dev/mcp/>
- 🗞️ Press & brand kit — <https://chainfoundry.dev/press/>
- 🦀 crates.io — <https://crates.io/crates/chaincodec-core>
- 📦 npm — <https://www.npmjs.com/org/chainfoundry>
- 🐍 PyPI — <https://pypi.org/project/chainfoundry-chaincodec/>
- 🐦 X — <https://x.com/darshan_aqua>
- 💼 LinkedIn — <https://www.linkedin.com/company/ai2innovate/>

## Credibility

Built by **Darsh Kumar** — Apache Committer, 25+ years of senior engineering across Rust, Java, Python, cybersecurity, and database systems. Previously led cybersecurity architecture for EU institutions. Operating entity: **AI2Innovate **.



---

<sub>
<strong>Keywords:</strong> multichain blockchain data toolkit · blockchain ABI decoder Rust · multichain RPC middleware · reorg-safe blockchain indexer · cross-chain event correlation · MCP server for AI agents · universal blockchain SDK · Chainalysis open-source alternative · Sui multichain indexer · BTCFi data · EU blockchain infrastructure · MiCA NIS2 compliance tooling · EVM Solana Cosmos Substrate Bitcoin Aptos Sui.
</sub>
