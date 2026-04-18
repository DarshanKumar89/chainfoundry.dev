import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import CTAFooter from "@/components/CTAFooter";
import CodeBlock from "@/components/CodeBlock";
import { posts } from "@/content/posts";

const post = posts.find((p) => p.slug === "sui-ecosystem-playbook")!;

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
          Sui has the best developer ergonomics of any new L1 in the last five years. The Move language is
          safer than Solidity. The object-centric model is a genuinely better primitive than accounts for most
          real-world applications. Parallel execution is not a marketing slide, it&apos;s a real property of
          the VM. All of this is true.
        </p>
        <p>
          And yet, every team I&apos;ve watched go live on Sui loses roughly one engineering month on
          non-differentiated data-layer work before they ship a single user-facing feature. Let&apos;s talk
          about why — and what to do about it.
        </p>

        <h2>The Move object model is not optional to understand</h2>
        <p>
          On Ethereum, a &ldquo;token balance&rdquo; is a row in a mapping inside a contract. On Sui, a token
          balance is one or more <code>Coin&lt;T&gt;</code> objects you own, which can be split, merged, and
          moved independently. Events are attached to these objects. The indexer contract — whether yours or
          a SaaS — has to understand object mutations, not just log lines.
        </p>
        <p>
          Most generic indexers were built for account-model chains. They index blocks and emit
          &ldquo;transfer events&rdquo; as if the world were EVM-shaped. On Sui that&apos;s a lie — and the
          lie gets expensive the moment you try to do anything non-trivial:
        </p>
        <ul>
          <li>Dynamic fields (child objects referenced at runtime) — miss these and your state is wrong</li>
          <li>Object wrapping (an object that now lives inside another) — miss these and you &ldquo;lose&rdquo; assets</li>
          <li>Shared-object contention — important for UX but invisible to naive indexers</li>
          <li>Checkpoint-based querying — Sui&apos;s native pagination primitive, not block-based</li>
        </ul>

        <h2>What Sui teams actually rebuild, over and over</h2>
        <p>
          Pick any five Sui teams that shipped in the last six months. You will find five independent
          implementations of the same four things:
        </p>
        <ol>
          <li>A Sui RPC client with retries, failover, and sane error handling</li>
          <li>A checkpoint-based indexer with reorg awareness (yes, Sui has reorgs during epoch changes)</li>
          <li>A Move event decoder that understands object mutations and dynamic fields</li>
          <li>Glue to push that data into whatever their frontend or analytics stack needs</li>
        </ol>
        <p>
          None of this is Sui&apos;s competitive advantage. None of it is what their users pay them for. And
          every one of those four problems is solved once in <code>chainrpc</code> and <code>chainindex</code>{" "}
          — for Sui plus six other architectures.
        </p>

        <h2>The 20-line migration</h2>
        <p>
          A team that has already integrated ChainFoundry for Ethereum and Solana can add Sui support like
          this:
        </p>
        <CodeBlock
          language="rust"
          code={`use chainrpc::ChainClient;
use chainindex::Indexer;

// Before: eth + solana only
let indexer = Indexer::sqlite("./data.db")
    .chain(ChainClient::evm(eth_rpc))
    .chain(ChainClient::solana(sol_rpc))
    .build()?;

// After: add Sui — one line, same shape
let indexer = Indexer::sqlite("./data.db")
    .chain(ChainClient::evm(eth_rpc))
    .chain(ChainClient::solana(sol_rpc))
    .chain(ChainClient::sui(sui_rpc))       // <— this
    .build()?;

// Canonical event stream — the agent, the UI, the analytics
// pipeline all read the same shape whether the event came from
// Ethereum, Solana, or Sui
for evt in indexer.events().await? {
    process(evt);
}`}
        />
        <p>
          That is the full story. One line. The Move-specific decoding, the checkpoint handling, the
          object-type awareness — all of that is inside the crate, maintained once, tested across every
          release.
        </p>

        <h2>What Sui Foundation gets from this</h2>
        <p>
          Developer relations at a blockchain foundation is, at the end of the day, a time-to-integration
          problem. If an existing multichain team needs 2–4 months to add Sui, most of them will push Sui to
          Q3, then Q4, then &ldquo;next year.&rdquo; If they need 20 minutes, Sui ships with the product.
        </p>
        <p>
          ChainFoundry is free distribution into every multichain app that already uses us for other chains.
          Every time a team running ChainFoundry on Ethereum + Solana decides to add one more chain, Sui is
          already in the menu — no per-chain integration contract, no new vendor, no new engineer to hire.
          That&apos;s worth more than any grant program.
        </p>

        <h2>What&apos;s shipped vs. what&apos;s next</h2>
        <p>
          Today on Sui we ship:
        </p>
        <ul>
          <li>
            <strong>chainrpc</strong> — production RPC transport for Sui, including failover, rate limiting,
            and caching
          </li>
          <li>
            <strong>chainindex</strong> — reorg-safe checkpoint-native indexer for Sui, pluggable storage
          </li>
        </ul>
        <p>
          On the roadmap — and where we&apos;re actively looking for ecosystem collaboration:
        </p>
        <ul>
          <li>
            <strong>chaincodec</strong> — full Sui Move event decoder with object-type awareness, dynamic
            field tracking, and checkpoint-based querying
          </li>
          <li>
            <strong>chaincorrelate</strong> — Bitcoin ↔ Sui correlation for BTCFi use cases (more on this in
            the <a href="/blog/sui-instant-distribution-btcfi">next post</a>)
          </li>
        </ul>
        <p>
          If you work on Sui DevRel or ecosystem funding and any of this sounds useful,{" "}
          <a href="/contact">get in touch</a>. A small grant buys a lot of engineering here, and the output
          compounds across every team building on Sui.
        </p>
      </BlogPostLayout>
      <CTAFooter />
    </>
  );
}
