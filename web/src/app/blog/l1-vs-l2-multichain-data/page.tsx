import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import CTAFooter from "@/components/CTAFooter";
import CodeBlock from "@/components/CodeBlock";
import { posts } from "@/content/posts";

const post = posts.find((p) => p.slug === "l1-vs-l2-multichain-data")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.excerpt, type: "article" },
};

export default function Page() {
  return (
    <>
      <BlogPostLayout post={post}>
        <p>
          For most teams, the first chain is easy. You pick Ethereum, you ship a contract, you scrape logs, you
          call it done. The second chain — usually Base, Arbitrum, Optimism, or zkSync — feels like it should
          be easier still. Same EVM. Same ABI. Redeploy, repoint your RPC URL, move on.
        </p>
        <p>
          This is where the industry has been lying to itself for two years.
        </p>

        <h2>“Same architecture” is not the same as “same data”</h2>
        <p>
          An L2 is not a cheaper L1. It is a separate execution environment with a{" "}
          <strong>different finality model</strong>, a <strong>different reorg depth</strong>, a{" "}
          <strong>different fee market</strong>, and in the case of zk-rollups, a delay between the sequencer
          accepting your transaction and the L1 proving it. Your data pipeline has to understand all of that or
          it will, at some point, lie to a user about money.
        </p>
        <p>
          The failure modes stack up quickly:
        </p>
        <ul>
          <li>
            <strong>Optimistic rollups</strong> (Arbitrum, Optimism, Base) — you have soft finality from the
            sequencer in &lt; 1s, but <em>actual</em> finality (fraud-proof window closes) is ~7 days. An
            indexer that treats sequencer confirmations as final will happily emit events that later get
            rewritten during a sequencer reorg.
          </li>
          <li>
            <strong>ZK rollups</strong> (zkSync, Starknet, Linea) — the sequencer is effectively final, but the
            L1 state root lags by minutes to hours. An AI agent trading a position based on zkSync logs might
            be trading against state that won&apos;t land on L1 for 40 minutes.
          </li>
          <li>
            <strong>L1 reorgs</strong> (even on Ethereum) — 1–2 block reorgs are routine. Your indexer has to
            unwind and re-apply events, not just append them.
          </li>
          <li>
            <strong>L2 sequencer outages</strong> — Arbitrum, Optimism, and Base have all had multi-hour
            sequencer pauses. If your transport layer doesn&apos;t detect this and failover, your product silently
            stops.
          </li>
        </ul>

        <h2>What “just deploy the same contracts” leaves out</h2>
        <p>
          Deploying the same Solidity bytecode to 5 EVM chains gives you 5 copies of the same contract. It does
          not give you:
        </p>
        <ul>
          <li>A decoder that understands the per-chain variant of <code>eth_getLogs</code> CU pricing</li>
          <li>A transport layer that can failover between Alchemy, QuickNode, and Infura without leaking state</li>
          <li>A reorg-safe storage layer that knows Optimism&apos;s finality guarantees differ from Ethereum&apos;s</li>
          <li>A unified view across L1 and L2 where a bridge deposit on L1 correlates with a mint on L2</li>
        </ul>
        <p>
          This is exactly what <code>chainrpc</code> and <code>chainindex</code> are for. Both crates ship
          today, across EVM, Solana, Cosmos, Substrate, Bitcoin, Aptos, and Sui. The EVM family alone covers
          Ethereum plus 200+ L2s and sidechains behind the same API surface.
        </p>

        <h2>A concrete example</h2>
        <p>
          Say you&apos;re building an analytics dashboard that shows a user&apos;s positions across Ethereum, Base, and
          Arbitrum. The naive version:
        </p>
        <CodeBlock
          language="typescript"
          code={`// naive — three providers, three error-handling paths, zero reorg awareness
const eth = createPublicClient({ transport: http(ETH_RPC) });
const base = createPublicClient({ transport: http(BASE_RPC) });
const arb = createPublicClient({ transport: http(ARB_RPC) });

const [ethBal, baseBal, arbBal] = await Promise.all([
  eth.getBalance({ address }),
  base.getBalance({ address }),
  arb.getBalance({ address }),
]);`}
        />
        <p>
          This works on the happy path. It fails on the day Base has a 30-minute sequencer pause, or Arbitrum
          rolls back 2 blocks, or your RPC provider rate-limits you silently. With ChainFoundry:
        </p>
        <CodeBlock
          language="rust"
          code={`use chainrpc::ChainClient;
use chainindex::Indexer;

let eth = ChainClient::evm(ETH_RPC).with_failover(&[ETH_RPC_2, ETH_RPC_3]);
let base = ChainClient::evm(BASE_RPC).with_failover(&[BASE_RPC_2]);
let arb = ChainClient::evm(ARB_RPC).with_failover(&[ARB_RPC_2]);

// Reorg-safe, finality-aware indexer per chain
let indexer = Indexer::sqlite("./portfolio.db")
    .chain(eth).chain(base).chain(arb)
    .build()?;

// Same canonical event shape across all three — L1 and L2
for evt in indexer.events_for(address).await? {
    // evt.finality is Finality::Confirmed | Soft | Pending
    // evt.chain_id tells you which L1/L2 it landed on
    match evt.finality {
        Finality::Pending => show_as_unconfirmed(&evt),
        _ => update_portfolio(&evt),
    }
}`}
        />

        <h2>Why this matters for AI agents specifically</h2>
        <p>
          An AI agent that trades, monitors, or alerts on blockchain state has no way to tell a user
          &ldquo;wait, this transaction might unwind&rdquo; unless the underlying data pipeline surfaces
          finality. Today most AI agents call a single RPC, get a response, and treat it as ground truth. On
          L2s that&apos;s wrong; on L1s during a reorg it&apos;s wrong; during a sequencer outage it&apos;s
          wrong. The agent&apos;s reasoning is only as honest as the data layer underneath.
        </p>
        <p>
          ChainFoundry&apos;s job is to make that data layer honest — across 7 architectures, including the one
          that most people think is &ldquo;solved&rdquo;: Ethereum and its L2s.
        </p>

        <div className="callout">
          <p>
            <strong>TL;DR</strong> — adding &ldquo;L2 support&rdquo; is not a contract deployment problem.
            It&apos;s a data infrastructure problem, and the people who treat it as the first will ship bugs
            that the people who treat it as the second will not. <code>chainrpc</code> and{" "}
            <code>chainindex</code> are the primitives we built so your team can be in the second group.
          </p>
        </div>
      </BlogPostLayout>
      <CTAFooter />
    </>
  );
}
