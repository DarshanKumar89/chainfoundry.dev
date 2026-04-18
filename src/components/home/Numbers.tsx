const stats = [
  { value: "4", label: "shipped crates", sub: "codec · rpc · index · errors" },
  { value: "7", label: "architectures", sub: "in chainrpc + chainindex" },
  { value: "500+", label: "networks", sub: "EVM alone covers 200+" },
  { value: "50+", label: "protocol schemas", sub: "Uniswap · Aave · Lido · …" },
  { value: "5", label: "language bindings", sub: "Rust core + TS · Py · Go · Java · WASM" },
  { value: "MIT", label: "license", sub: "open-source core" },
];

export default function Numbers() {
  return (
    <section className="border-y border-ink/10 bg-mist-50 py-20 md:py-28">
      <div className="container-prose">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">The numbers — verifiable</p>
          <h2 className="h-section mt-3">What&apos;s actually published.</h2>
          <p className="mt-4 text-base text-ink/60 md:text-lg">
            Every figure below matches the{" "}
            <a
              href="https://github.com/DarshanKumar89/chainkit"
              className="link-underline"
            >
              chainkit
            </a>{" "}
            monorepo and the live crates.io · npm · PyPI entries.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8">
              <div className="font-serif text-4xl text-ink md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-ink/55">
                {s.label}
              </div>
              <div className="mt-1.5 text-[13px] leading-5 text-ink/55">{s.sub}</div>
            </div>
          ))}
        </div>

        <p className="reveal mt-6 text-center text-sm text-ink/55">
          Published on{" "}
          <a href="https://crates.io" className="link-underline">
            crates.io
          </a>{" "}
          ·{" "}
          <a href="https://www.npmjs.com" className="link-underline">
            npm
          </a>{" "}
          ·{" "}
          <a href="https://pypi.org" className="link-underline">
            PyPI
          </a>{" "}
          · MIT Licensed
        </p>
      </div>
    </section>
  );
}
