import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import PageHero from "./PageHero";
import { publishedPosts, type Post } from "@/content/posts";

export default function BlogPostLayout({
  post,
  children,
}: {
  post: Post;
  children: React.ReactNode;
}) {
  const idx = publishedPosts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? publishedPosts[idx - 1] : null;
  const next = idx < publishedPosts.length - 1 ? publishedPosts[idx + 1] : null;

  return (
    <>
      <PageHero
        eyebrow={`${post.tag} · ${post.read} · ${post.date}`}
        title={post.title}
        lead={post.excerpt}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${post.slug}`, label: post.tag },
        ]}
      />

      <article className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="post-prose space-y-7">{children}</div>

          <div className="mt-16 rounded-2xl border border-ink/10 bg-mist-50 p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.14em] text-ink/55">Liked this?</div>
            <div className="mt-2 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <p className="text-[15px] leading-7 text-ink/75">
                New posts every 2–3 weeks. Engineering deep-dives, not fluff.
              </p>
              <Link href="/contact#newsletter" className="btn-primary">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-3 border-t border-ink/10 pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col rounded-xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-ink/50">
                  <ArrowLeft className="h-3.5 w-3.5" /> Previous post
                </span>
                <span className="mt-2 font-serif text-lg leading-snug text-ink group-hover:text-accent">
                  {prev.title}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-ink/50">
                  <Clock className="h-3 w-3" />
                  {prev.read}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col rounded-xl border border-ink/10 bg-white p-5 text-right transition hover:border-ink/30 sm:items-end"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-ink/50">
                  Next post <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="mt-2 font-serif text-lg leading-snug text-ink group-hover:text-accent">
                  {next.title}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-ink/50">
                  <Clock className="h-3 w-3" />
                  {next.read}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
