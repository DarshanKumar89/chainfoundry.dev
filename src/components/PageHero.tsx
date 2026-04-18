import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-ink/10 blur-3xl" />
      </div>
      <div className="container-prose py-16 md:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-6 flex items-center text-xs text-ink/50" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.href} className="inline-flex items-center">
                {i > 0 && <ChevronRight className="mx-1.5 h-3.5 w-3.5 text-ink/30" />}
                <Link href={c.href} className="transition hover:text-ink">
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="h-display mt-3 max-w-4xl text-balance">{title}</h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg text-ink/70 md:text-xl md:leading-relaxed">{lead}</p>
        )}
      </div>
    </section>
  );
}
