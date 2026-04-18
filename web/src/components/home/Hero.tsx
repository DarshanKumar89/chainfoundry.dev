import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import TypingCode from "../TypingCode";

const heroCode = `use chaincodec::EvmDecoder;
use chainrpc::ChainClient;
use chainindex::Indexer;

let eth = ChainClient::evm(rpc_url);
let decoder = EvmDecoder::new();
let indexer = Indexer::sqlite("./data.db")
    .chain(eth)
    .decoder(decoder)
    .build()?;

// Same stack for Solana, Cosmos, Sui, Bitcoin, and 200+ more
indexer.run().await?;`;

const modules: { name: string; role: string; shipped: boolean }[] = [
  { name: "chaincodec", role: "Decode", shipped: true },
  { name: "chainrpc", role: "Transport", shipped: true },
  { name: "chainindex", role: "Index", shipped: true },
  { name: "chainerrors", role: "Diagnose", shipped: true },
  { name: "chaincorrelate", role: "Correlate · v2", shipped: false },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,27,45,0.06),transparent_60%)]" />
      </div>

      <div className="container-prose pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <p className="eyebrow">The universal blockchain data toolkit</p>
            <h1 className="h-display mt-4 text-balance">
              Decode once.
              <br />
              Build <em className="italic text-accent">everywhere.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/70 md:text-xl md:leading-relaxed">
              Four composable crates. One API for 7 architectures and 500+ networks.
            </p>
            <p className="mt-4 max-w-xl text-[15px] text-ink/60 md:text-base md:leading-relaxed">
              <span className="font-mono text-ink">chaincodec</span> decodes events.{" "}
              <span className="font-mono text-ink">chainrpc</span> handles transport.{" "}
              <span className="font-mono text-ink">chainindex</span> stores history.{" "}
              <span className="font-mono text-ink">chainerrors</span> translates reverts. Works on Ethereum,
              Solana, Cosmos, Polkadot, Bitcoin, Aptos, and Sui.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {modules.map((m) => (
                <span
                  key={m.name}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] ${
                    m.shipped
                      ? "border-ink/10 bg-white text-ink"
                      : "border-dashed border-ink/15 bg-mist-50 text-ink/60"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      m.shipped ? "bg-accent" : "bg-ink/30"
                    }`}
                  />
                  <span className="font-mono">{m.name}</span>
                  <span className="text-ink/45">· {m.role}</span>
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://docs.chainfoundry.dev" className="btn-primary">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-secondary">
                Book a call
              </Link>
              <a
                href="https://github.com/DarshanKumar89/chainkit"
                className="btn-ghost ml-1"
              >
                <BookOpen className="h-4 w-4" />
                View on GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="chip">cargo add chaincodec chainrpc chainindex</span>
              <span className="chip">npm i @chainfoundry/chaincodec</span>
              <span className="chip">pip install chaincodec</span>
            </div>
          </div>

          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-ink/10 blur-2xl" />
              <TypingCode code={heroCode} language="rust" />
              <div className="mt-3 flex items-center justify-between text-xs text-ink/50">
                <span>Decode · Transport · Index · Diagnose</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Live on crates.io · npm · PyPI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
