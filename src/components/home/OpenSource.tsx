import { GithubIcon } from "../SocialIcons";

export default function OpenSource() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-prose">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Open source</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
            MIT licensed. Built in the open.
          </h2>
          <p className="mt-6 text-lg text-white/70 md:text-xl md:leading-relaxed">
            ChainFoundry&apos;s core SDK is fully open-source under the MIT license. 197 features are free forever.
            Enterprise cloud and managed services are coming for teams that need hosted infrastructure.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="https://github.com/DarshanKumar89/chainkit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-mist-100"
            >
              <GithubIcon />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
