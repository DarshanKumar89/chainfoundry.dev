import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import CTAFooter from "@/components/CTAFooter";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import { draftPosts, publishedPosts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog — ChainFoundry",
  description:
    "Technical deep dives on multichain blockchain infrastructure, L1/L2 data, Sui ecosystem, BTCFi, MCP, and the architecture behind ChainFoundry.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [featured, ...rest] = publishedPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the foundry."
        lead="Engineering deep-dives, ecosystem theses, and architectural choices. Every post ties to something already shipped on crates.io — or clearly labelled as draft."
        crumbs={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]}
      />

      {featured && (
        <section className="border-b border-ink/10 bg-white pb-12">
          <div className="container-prose">
            <Link
              href={`/blog/${featured.slug}`}
              className="reveal group grid overflow-hidden rounded-3xl border border-ink/10 bg-ink-800 text-white transition hover:-translate-y-0.5 md:grid-cols-[1.4fr_1fr]"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-medium uppercase tracking-[0.14em] text-accent">
                    Featured · {featured.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/55">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.read}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/55">{featured.date}</span>
                </div>
                <h2 className="mt-6 font-serif text-3xl leading-tight md:text-[42px]">{featured.title}</h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/70 md:text-base md:leading-8">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read the post
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="relative hidden border-l border-white/10 bg-ink-900 md:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(29,158,117,0.25),transparent_60%)]" />
                <div className="relative flex h-full items-end p-12">
                  <div className="font-serif text-[120px] leading-none text-white/10">01</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="reveal mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Published</p>
              <h2 className="h-section mt-3">Read now.</h2>
            </div>
            <p className="hidden max-w-md text-sm text-ink/60 md:block">
              {publishedPosts.length} post{publishedPosts.length === 1 ? "" : "s"}. More every 2–3 weeks.
            </p>
          </div>

          <div className="reveal grid gap-5 md:grid-cols-2">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-7 transition hover:-translate-y-0.5 hover:border-ink/30 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    <span className="font-mono text-[11px] text-ink/40">
                      #{String(i + 2).padStart(2, "0")}
                    </span>
                    {p.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-ink/50">
                    <Clock className="h-3.5 w-3.5" />
                    {p.read}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-ink md:text-[27px]">{p.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-ink/70">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-ink/50">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1.5 text-accent">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {draftPosts.length > 0 && (
        <section className="border-y border-ink/10 bg-mist-50 py-16 md:py-20">
          <div className="container-prose">
            <div className="reveal mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="eyebrow">Editorial roadmap</p>
                <h2 className="h-section mt-3">What we&apos;re writing next.</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink/65">
                  These are drafts — not published yet. Every topic is tied to something already shipped in
                  the <a href="https://github.com/DarshanKumar89/chainfoundry" className="link-underline">chainfoundry repo</a>, so the writing stays technical.
                </p>
              </div>
              <div className="w-full md:w-[360px]">
                <div className="mb-2 text-xs uppercase tracking-[0.14em] text-ink/55">
                  Get notified as they land
                </div>
                <NewsletterForm />
              </div>
            </div>

            <ol className="reveal grid gap-4 md:grid-cols-2">
              {draftPosts.map((p, i) => (
                <li
                  key={p.slug}
                  className="flex flex-col rounded-2xl border border-dashed border-ink/15 bg-white p-6 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      <span className="font-mono text-[11px] text-ink/40">
                        #{String(i + publishedPosts.length + 1).padStart(2, "0")}
                      </span>
                      {p.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-ink/50">
                      <Clock className="h-3.5 w-3.5" />
                      {p.read}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl leading-snug text-ink md:text-2xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-ink/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                    Draft · not yet published
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <CTAFooter />
    </>
  );
}
