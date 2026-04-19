import type { Metadata } from "next";
import CTAFooter from "@/components/CTAFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About ChainFoundry",
  description:
    "Why we're building the universal blockchain data toolkit — and the 25-year engineering path that led Darsh Kumar here.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The missing standard library for blockchain data."
        lead="ChainFoundry exists because every chain speaks a different language — and no one has built the translator."
        crumbs={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-14">
          <article className="space-y-6">
            <h2 className="h-section">Why we&apos;re building ChainFoundry</h2>
            <p className="text-[17px] leading-8 text-ink/80">
              Every year, tens of billions of dollars move across blockchains. Not one, not two — seven
              fundamentally different architectures, each with its own encoding, each with its own idea of what a
              “transaction” or “event” even is. And every team building on top of them pays the same tax: rebuild
              the plumbing, chain by chain, until they run out of money or patience.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              It&apos;s the most expensive copy-paste problem in the industry. A wallet team bolting on Solana rewrites
              the retry logic they already had for Ethereum. A compliance team licenses a $100K/yr SaaS because
              open-source correlation “doesn&apos;t exist.” An AI agent startup gives up on Cosmos because decoding
              Protobuf in their stack is too painful. Every single one of them solves the same problem in
              isolation, and the work never compounds.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              We think this is a missing standard-library problem. Rust has one. Python has one. The web has
              libcurl and libssl. Blockchains have… a graveyard of chain-specific SDKs and a handful of walled
              SaaS providers. That&apos;s what ChainFoundry exists to fix — not another framework to learn, but the
              quiet, boring, reliable substrate underneath whatever you&apos;re trying to build.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              Our bet is simple: the next decade of on-chain software gets built by teams who don&apos;t have time to
              reinvent RPC middleware. Give them a decode layer, a transport layer, an indexer, and a correlator
              — four crates, one API, open-source — and the work starts to compound across an entire industry
              instead of disappearing into repo after private repo.
            </p>
          </article>

          <article className="space-y-6">
            <p className="eyebrow">Origin story</p>
            <h2 className="h-section">How Darsh got here</h2>
            <p className="text-[17px] leading-8 text-ink/80">
              Twenty-five years ago, Darsh Kumar was writing Java for early-internet banks, watching transactions
              clear through half-a-dozen message formats that nobody could agree on. A decade later he was deep
              in Oracle, DB2, and Postgres internals, wiring data out of systems that were never meant to talk to
              each other. A decade after that he was doing cybersecurity architecture for EU institutions,
              auditing the same kind of multi-system data flows — except now the stakes were public-sector
              healthcare and critical infrastructure.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              He went on-chain in 2017, and the pattern felt oddly familiar. Different encodings, different
              assumptions, different failure modes. And the same lazy industry response: “just pick one chain and
              stay there.” Except real money — and soon, real regulation — wasn&apos;t going to respect that.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              The tipping point came while working on EU public-sector data infrastructure. Watching MiCA and
              NIS2 land, it was obvious that the compliance side of crypto was about to collide with the
              fragmented tooling side at full speed — and there was no open, embeddable primitive that could hold
              both up. You could rent intelligence from Chainalysis for $100K a year, or you could rebuild it
              yourself and fail. That was the whole menu.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              So he started writing one. In Rust, because performance and memory safety aren&apos;t optional when
              you&apos;re decoding a million events a second. With bindings in TypeScript, Python, Go, Java, and WASM,
              because no real team lives in a single language. Open-source, because the mistake of the
              last decade was locking this layer behind contracts. And with a specific bias toward EU builders —
              regulated exchanges, law firms, RegTech startups, public-sector teams — who have been underserved
              by a US-centric tooling market.
            </p>
            <p className="text-[17px] leading-8 text-ink/80">
              That&apos;s what ChainFoundry is. A 25-year engineering career, pointed at one deeply unglamorous
              problem: making blockchain data infrastructure boring, reliable, and free.
            </p>
          </article>

          <article className="space-y-6">
            <p className="eyebrow">The principles</p>
            <h2 className="h-section">What we refuse to compromise on</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Open by default",
                  body:
                    "Open-source core. No enterprise-only features baked into the primitives. If you can&apos;t audit it, you can&apos;t trust it.",
                },
                {
                  title: "Embeddable, not hosted",
                  body:
                    "ChainFoundry is a library in your binary. You own your data, your infra, your uptime. SaaS is optional, never required.",
                },
                {
                  title: "Polyglot from day one",
                  body:
                    "Rust core, bindings everywhere. Your backend team and your frontend team get the same API, not a dialect war.",
                },
                {
                  title: "EU-built, globally useful",
                  body:
                    "Designed with MiCA, NIS2, and GDPR workflows in mind — but nothing in here is region-locked.",
                },
              ].map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-ink/10 bg-white p-5"
                  dangerouslySetInnerHTML={{
                    __html: `<div class="font-medium text-ink">${p.title}</div><div class="mt-2 text-[15px] leading-7 text-ink/70">${p.body}</div>`,
                  }}
                />
              ))}
            </ul>
          </article>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
