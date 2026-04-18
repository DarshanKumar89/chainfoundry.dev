import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LinkedinIcon, XIcon } from "../SocialIcons";

export default function Founder() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-prose">
        <div className="reveal grid gap-12 rounded-3xl border border-ink/10 bg-mist-50 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-14">
          <div className="mx-auto md:mx-0">
            <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-ink-700 to-ink-900 text-white md:h-44 md:w-44">
              <span className="font-serif text-5xl md:text-6xl">DK</span>
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
          </div>
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="h-section mt-3">Darsh Kumar</h2>
            <p className="mt-1 text-sm text-ink/60">Founder &amp; CEO</p>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink/75 md:text-base md:leading-8">
              25+ years of senior engineering spanning Rust, Java, Python, cybersecurity, databases, and blockchain.
              Apache Committer. Publishes ChainFoundry on crates.io, npm, and PyPI. Based in Bratislava and Brussels.
              Consults for EU public sector on healthcare data infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href="https://www.linkedin.com/in/darshankumar/"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3 py-1.5 text-sm text-ink transition hover:border-ink"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                href="https://x.com/darshan_aqua"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3 py-1.5 text-sm text-ink transition hover:border-ink"
              >
                <XIcon />
                @darshan_aqua
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3 py-1.5 text-sm text-ink">
                <MessageCircle className="h-4 w-4" />
                darshankumar89
              </span>
              <Link
                href="/about"
                className="ml-1 inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover"
              >
                Read the full bio →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
