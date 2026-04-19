import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import CTAFooter from "@/components/CTAFooter";
import CodeBlock from "@/components/CodeBlock";
import { posts } from "@/content/posts";

const post = posts.find((p) => p.slug === "sui-instant-distribution-btcfi")!;

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
          Every blockchain foundation&apos;s job, past a certain point, is distribution. Getting the protocol
          into more apps, in front of more users, as the default option on more dashboards. That&apos;s harder
          than it sounds, because the default option is usually whatever the team&apos;s existing stack
          already supports — and most teams&apos; existing stacks were built one chain at a time.
        </p>
        <p>
          This is where the ChainFoundry pitch for the Sui Foundation gets interesting.
        </p>

        <h2>Here&apos;s the specific value chain</h2>

        <h3>1. Sui gets instant distribution to every multichain team</h3>
        <p>
          Right now, if a team building on Ethereum + Solana wants to add Sui, they need to learn the Sui
          TypeScript SDK, understand object-centric data models, handle Sui-specific RPC methods, and build a
          separate indexer. That&apos;s <strong>2–4 months of work</strong>.
        </p>
        <p>
          With ChainFoundry, they add Sui in under <strong>20 lines</strong> — in whatever language they
          already use (Python, Rust, Go, Java, TS). Every multichain team that already uses ChainFoundry
          automatically gains Sui support. That&apos;s a massive distribution win for Sui Foundation without
          them spending a dollar on developer education for those teams.
        </p>

        <h3>2. BTCFi on Sui needs multichain data</h3>
        <p>
          Sui is actively running BTCFi campaigns — Bluefin launched{" "}
          <em>&ldquo;TBTC: Powering BTCFi on Bluefin&rdquo;</em> and OKX offered over{" "}
          <strong>$2.8 million in rewards</strong> for xBTC pools on Sui. BTCFi inherently requires cross-chain
          data flows — tracking Bitcoin deposits, bridge confirmations, and Sui-side minting events.
          ChainFoundry&apos;s <code>chainindex</code> already supports both Bitcoin and Sui natively. A single
          indexer can correlate Bitcoin UTXO events with Sui object creation events. <strong>No other tool
          can do this.</strong>
        </p>

        <h3>3. Move teams get polyglot bindings for free</h3>
        <p>
          A large portion of Sui&apos;s growth is coming from teams who don&apos;t live in TypeScript — data
          scientists in Python, backend engineers in Go or Java, systems engineers in Rust. Today each of
          those audiences has a second-class experience on Sui because the official SDK is TS-first.
          ChainFoundry ships native bindings for TypeScript, Python, Go, Java, and WASM — same API, same
          semantics, same reorg-safety. Sui becomes first-class in every stack.
        </p>

        <h3>4. The compliance + forensics story</h3>
        <p>
          EU and US crypto regulation is moving fast. Any chain that wants regulated institutional volume
          needs forensics tooling that treats it as a first-class citizen, not a footnote. ChainFoundry is
          being built EU-first, open-source, with cross-chain correlation on the roadmap. When a European
          exchange needs to trace a Bitcoin inflow through a bridge to a Sui position to satisfy MiCA
          reporting, we want that to be boring — and we want it to work natively for Sui from day one.
        </p>

        <h2>What a partnership looks like, concretely</h2>
        <p>
          This isn&apos;t abstract. Here&apos;s what a Sui Foundation partnership gets in practice:
        </p>
        <ul>
          <li>
            <strong>Deep Sui decoder in chaincodec</strong> — Move event decoding with full object-type
            awareness, dynamic field tracking, and checkpoint-based querying. Timeline: ~8 weeks with focused
            work.
          </li>
          <li>
            <strong>BTCFi correlation primitives</strong> — Bitcoin-to-Sui bridge matching, UTXO tracking
            linked to Sui <code>Coin&lt;T&gt;</code> minting. Directly useful for the Bluefin / OKX campaigns
            already running.
          </li>
          <li>
            <strong>Co-marketing</strong> — ChainFoundry&apos;s docs, homepage, and AI-agent integrations
            foreground Sui examples. Sui&apos;s dev docs link ChainFoundry as a first-class option.
          </li>
          <li>
            <strong>Joint workshops</strong> — at SuiHub, at regional hackathons, and into the grant program,
            showing teams how to ship multichain apps that include Sui from day one.
          </li>
          <li>
            <strong>Grant-scale funding</strong> — $20K–$100K buys the deep-dive Sui work above, which
            compounds across every team building on Sui, not just the grant recipient.
          </li>
        </ul>

        <h2>A concrete BTCFi example</h2>
        <p>
          Here&apos;s the kind of thing that is hard today and will be one function call with ChainFoundry:
        </p>
        <CodeBlock
          language="rust"
          code={`use chainrpc::ChainClient;
use chainindex::Indexer;

// One indexer, both chains
let indexer = Indexer::sqlite("./btcfi.db")
    .chain(ChainClient::bitcoin(btc_rpc))
    .chain(ChainClient::sui(sui_rpc))
    .build()?;

// Watch Bitcoin deposits to a bridge address,
// correlate with Sui-side Coin<BTC> mints within a time window.
let btc_deposits = indexer
    .bitcoin_transfers_to(bridge_btc_address)
    .since("24h")
    .await?;

for deposit in btc_deposits {
    let sui_mint = indexer
        .sui_coin_mints::<BTC>()
        .near(deposit.timestamp, Duration::minutes(30))
        .for_recipient(resolve_sui_address(&deposit.sender))
        .await?
        .first();

    match sui_mint {
        Some(mint) => println!("✓ {} BTC → {} sBTC on Sui", deposit.amount, mint.amount),
        None => alert_missing_mint(&deposit),
    }
}`}
        />
        <p>
          This is the primitive BTCFi protocols need. It is also the primitive compliance teams need. It is
          also the primitive every cross-chain analytics dashboard needs. One integration, many constituencies
          — and Sui is on the first-class side of every single one.
        </p>

        <h2>The ask</h2>
        <p>
          If you work on ecosystem or DevRel at Sui Foundation, or you&apos;re on a BTCFi team actively
          shipping, we&apos;d like to talk. The engineering is already started. The chain coverage is already
          live for <code>chainrpc</code> and <code>chainindex</code>. A small, focused partnership closes the
          decoder gap and unlocks BTCFi correlation in a way that no closed-source vendor can match.
        </p>
        <p>
          Email <a href="mailto:info@ai2innovate.io">info@ai2innovate.io</a> or book a call via the{" "}
          <a href="/contact">contact page</a>. Distribution compounds. Let&apos;s start compounding.
        </p>
      </BlogPostLayout>
      <CTAFooter />
    </>
  );
}
