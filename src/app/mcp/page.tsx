import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, KeyRound, Network, ShieldCheck, Sparkles } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import CTAFooter from "@/components/CTAFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "ChainFoundry MCP Server — Blockchain Data for AI Agents",
  description:
    "Give Claude, Cursor, and any MCP-compatible AI agent access to decoded blockchain data from 500+ networks. In active development — preview coming soon.",
  alternates: { canonical: "/mcp" },
};

const tools = [
  {
    name: "decode_event",
    desc: "Decode a transaction's events on any chain",
    chains: "EVM, Solana, Cosmos, Substrate, Bitcoin, Aptos, Sui",
  },
  {
    name: "decode_call",
    desc: "Decode a function / instruction / message call",
    chains: "EVM (ABI), Solana (Anchor), Cosmos (Msg), Sui (Move entry)",
  },
  {
    name: "get_block",
    desc: "Get block header + tx list from any chain",
    chains: "All 7 architectures, canonical shape",
  },
  {
    name: "get_balance",
    desc: "Native + fungible token balances at any height",
    chains: "ERC-20, SPL, CW-20, IBC, BRC-20, Move coins",
  },
  {
    name: "get_transaction",
    desc: "Full tx details with decoded events + errors",
    chains: "Includes Solana logs, Cosmos events, Sui object changes",
  },
  {
    name: "correlate_bridge",
    desc: "Trace a bridge deposit to its withdrawal on another chain",
    chains: "Wormhole, LayerZero, Circle CCTP, IBC (v2 roadmap)",
  },
  {
    name: "list_supported_chains",
    desc: "Show all supported chains and architectures",
    chains: "500+ networks today",
  },
  {
    name: "list_schemas",
    desc: "Browse bundled protocol schemas (CSDL)",
    chains: "Uniswap, Raydium, Osmosis, Lido, Wormhole…",
  },
];

const configJson = `{
  "mcpServers": {
    "chainfoundry": {
      "command": "chainfoundry-mcp",
      "args": ["--chains", "ethereum,solana,cosmos,sui"]
    }
  }
}`;

const pipelineStages = [
  { title: "User", body: "Prompt from Claude Desktop, Cursor, or any MCP client" },
  { title: "AI agent", body: "Decides which tool to call and with what arguments" },
  { title: "MCP protocol", body: "Standard JSON-RPC transport (stdio / WS)" },
  { title: "ChainFoundry MCP", body: "Dispatches to chaincodec, chainrpc, or chainindex" },
  { title: "Chain nodes", body: "EVM · Solana · Cosmos · Substrate · Bitcoin · Aptos · Sui" },
];

const conversationTurns = [
  {
    who: "user",
    text: "Has 0xA1B2…9D moved any funds out of Ethereum in the last 24h, and did they arrive on Solana?",
  },
  {
    who: "agent",
    text: "calling get_transaction(chain=\"ethereum\", address=\"0xA1B2…9D\", since=\"24h\")",
  },
  {
    who: "agent",
    text: "calling correlate_bridge(source=\"ethereum\", dest=\"solana\", from=\"0xA1B2…9D\")",
  },
  {
    who: "answer",
    text:
      "Yes — one outbound transfer of 480 ETH to Wormhole on Ethereum, matched to a wrapped ETH mint on Solana 9m later. Time delta and amounts check out. Want the full correlation graph?",
  },
];

const exampleChains = [
  { name: "Ethereum", sample: "decode_event → Uniswap v3 Swap" },
  { name: "Solana", sample: "decode_event → Raydium swap (Anchor IDL)" },
  { name: "Cosmos", sample: "decode_call → Osmosis IBC transfer" },
  { name: "Polkadot", sample: "get_block → SCALE-encoded extrinsics" },
  { name: "Bitcoin", sample: "get_transaction → UTXO graph + Ordinals inscription" },
  { name: "Sui", sample: "decode_event → Move object mutation" },
  { name: "Aptos", sample: "get_balance → Move fungible asset store" },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="MCP server · In development"
        title="Your AI agent will soon read every blockchain."
        lead="ChainFoundry's MCP server gives AI agents decoded, structured data from 7 architectures and 500+ networks — self-hosted, no API keys. Preview coming soon."
        crumbs={[{ href: "/", label: "Home" }, { href: "/mcp", label: "MCP" }]}
      />

      <section className="border-b border-ink/10 bg-white">
        <div className="container-prose pb-10">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-medium text-ink">
                  Coming soon — the MCP server is actively in development.
                </div>
                <div className="mt-1 text-[13px] text-ink/65">
                  The underlying primitives (chaincodec, chainrpc, chainindex) already ship across 7
                  architectures. The MCP wrapper is next. Join the waitlist to get early access.
                </div>
              </div>
            </div>
            <Link href="/contact#newsletter" className="btn-primary shrink-0 text-sm">
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
            <div>
              <h2 className="h-section">What is MCP?</h2>
              <p className="mt-6 text-[17px] leading-8 text-ink/80">
                Model Context Protocol (MCP) is the open standard — created by Anthropic — that lets AI agents
                connect to external tools and data. ChainFoundry&apos;s MCP server makes blockchain data a native
                capability for any MCP-compatible AI system.
              </p>
              <p className="mt-4 text-[17px] leading-8 text-ink/80">
                Under the hood it&apos;s just our regular SDK — <span className="font-mono">chaincodec</span>,{" "}
                <span className="font-mono">chainrpc</span>, <span className="font-mono">chainindex</span>, and{" "}
                <span className="font-mono">chaincorrelate</span> — exposed as a set of tool calls the agent can
                reason about. One config, any chain, every framework.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Feature icon={<KeyRound className="h-4 w-4" />} label="No API keys" />
                <Feature icon={<ShieldCheck className="h-4 w-4" />} label="Self-hosted" />
                <Feature icon={<Bot className="h-4 w-4" />} label="Any MCP client" />
                <Feature icon={<Cpu className="h-4 w-4" />} label="Rust + Python" />
                <Feature icon={<Network className="h-4 w-4" />} label="7 architectures" />
                <Feature icon={<Sparkles className="h-4 w-4" />} label="Open-source" />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute right-3 top-3 z-10 rounded-full bg-ink-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mist-300">
                  Preview
                </div>
                <CodeBlock language="bash" code={`pip install chainfoundry-mcp   # coming soon`} />
              </div>
              <p className="mt-3 text-xs text-ink/50">
                Claude Desktop config (<span className="font-mono">claude_desktop_config.json</span>):
              </p>
              <div className="mt-2">
                <CodeBlock language="json" code={configJson} />
              </div>
              <p className="mt-4 text-sm text-ink/65">
                Then in Claude: <span className="font-mono text-ink">“Decode the last transfer event on
                Ethereum transaction 0x…”</span> or{" "}
                <span className="font-mono text-ink">“Did this wallet bridge anything to Solana in the last
                hour?”</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink-900 py-16 text-white md:py-20">
        <div className="container-prose">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">One agent, every chain</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
              How a multichain conversation actually flows.
            </h2>
            <p className="mt-5 text-lg text-white/70 md:text-xl">
              A single agent, reasoning across heterogeneous architectures, with no per-chain API integration work.
            </p>
          </div>
          <div className="reveal mt-12 mx-auto max-w-3xl space-y-3">
            {conversationTurns.map((t, i) => (
              <TurnRow key={i} who={t.who} text={t.text} />
            ))}
          </div>
          <div className="reveal mx-auto mt-10 max-w-3xl text-center text-sm text-white/55">
            Under the hood: two MCP tool calls, dispatched in parallel, each decoded against the chain&apos;s native
            encoding (ABI on EVM, Anchor IDL on Solana, Wormhole VAA matching across both).
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="reveal grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow">Tools your agent gets</p>
              <h2 className="h-section mt-3">8 primitives. Every architecture.</h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/70">
              Every tool is backed by the same battle-tested primitives used by production ChainFoundry SDKs — so
              the agent sees one schema, not seven.
            </p>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-mist-100 text-xs uppercase tracking-wider text-ink/55">
                <tr>
                  <th className="px-5 py-3 font-medium">MCP tool</th>
                  <th className="px-5 py-3 font-medium">What it does</th>
                  <th className="hidden px-5 py-3 font-medium md:table-cell">Chain coverage</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((t) => (
                  <tr key={t.name} className="border-t border-ink/10">
                    <td className="px-5 py-3 font-mono text-[13px] text-ink">{t.name}</td>
                    <td className="px-5 py-3 text-ink/75">{t.desc}</td>
                    <td className="hidden px-5 py-3 text-[13px] text-ink/55 md:table-cell">{t.chains}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-mist-50 py-16 md:py-20">
        <div className="container-prose">
          <div className="reveal grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow">Multichain by construction</p>
              <h2 className="h-section mt-3">The same agent call, translated per chain.</h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/70">
              The MCP server normalizes every chain&apos;s binary encoding into a single canonical shape — so your
              agent can reason about a Sui object change the same way it reasons about an ERC-20 Transfer.
            </p>
          </div>
          <div className="reveal mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {exampleChains.map((c) => (
              <div key={c.name} className="rounded-2xl border border-ink/10 bg-white p-5">
                <div className="text-xs uppercase tracking-[0.14em] text-accent">{c.name}</div>
                <div className="mt-2 font-mono text-[13px] text-ink">{c.sample}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="h-section mt-3">Five hops. Every chain.</h2>
          </div>
          <div className="reveal mt-12 grid gap-3 md:grid-cols-5">
            {pipelineStages.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-ink/10 bg-white p-5">
                <div className="font-mono text-[11px] text-ink/40">0{i + 1}</div>
                <div className="mt-2 text-sm font-medium text-ink">{s.title}</div>
                <div className="mt-1.5 text-xs leading-5 text-ink/60">{s.body}</div>
                {i < pipelineStages.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-ink/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm text-ink/80">
      <span className="text-accent">{icon}</span>
      {label}
    </div>
  );
}

function TurnRow({ who, text }: { who: string; text: string }) {
  const styles: Record<string, { label: string; cls: string }> = {
    user: {
      label: "user",
      cls: "border-white/15 bg-white/5 text-white/90",
    },
    agent: {
      label: "agent → tool",
      cls: "border-accent/40 bg-accent/10 text-accent",
    },
    answer: {
      label: "agent",
      cls: "border-white/20 bg-white text-ink",
    },
  };
  const s = styles[who] ?? styles.user;
  return (
    <div className={`rounded-2xl border p-4 text-sm leading-6 md:p-5 ${s.cls}`}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">{s.label}</div>
      <div className="mt-1 font-mono md:text-[15px]">{text}</div>
    </div>
  );
}
