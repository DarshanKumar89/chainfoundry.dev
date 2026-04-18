import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "./PageHero";
import CodeBlock from "./CodeBlock";
import { useCases } from "@/content/useCases";

type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "problemList"; items: { title: string; body: string }[] }
  | { type: "code"; language: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "audience"; items: string[] };

export default function UseCaseLayout({
  slug,
  blocks,
}: {
  slug: string;
  blocks: Block[];
}) {
  const u = useCases.find((x) => x.slug === slug)!;
  const idx = useCases.findIndex((x) => x.slug === slug);
  const prev = useCases[(idx - 1 + useCases.length) % useCases.length];
  const next = useCases[(idx + 1) % useCases.length];

  return (
    <>
      <PageHero
        eyebrow={u.eyebrow}
        title={u.title}
        lead={u.lead}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/use-cases", label: "Use cases" },
          { href: `/use-cases/${u.slug}`, label: u.eyebrow },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="space-y-10">
            {blocks.map((b, i) => renderBlock(b, i))}
          </div>

          <div className="mt-20 flex flex-col items-stretch justify-between gap-3 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
            <Link
              href={`/use-cases/${prev.slug}`}
              className="inline-flex items-center gap-2 text-sm text-ink/60 transition hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" /> {prev.eyebrow}
            </Link>
            <Link href="/use-cases" className="text-sm font-medium text-ink/60 hover:text-ink">
              All use cases
            </Link>
            <Link
              href={`/use-cases/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-accent"
            >
              {next.eyebrow} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
          {b.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-[17px] leading-8 text-ink/80">
          {b.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="space-y-3">
          {b.items.map((it, j) => (
            <li key={j} className="flex gap-3 text-[17px] leading-7 text-ink/80">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-accent" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "problemList":
      return (
        <div key={i} className="space-y-4">
          {b.items.map((it, j) => (
            <div
              key={j}
              className="rounded-xl border border-ink/10 bg-mist-50 p-5 md:p-6"
            >
              <div className="font-medium text-ink">{it.title}</div>
              <div className="mt-2 text-[15px] leading-7 text-ink/75">{it.body}</div>
            </div>
          ))}
        </div>
      );
    case "code":
      return (
        <div key={i}>
          <CodeBlock code={b.code} language={b.language} />
        </div>
      );
    case "table":
      return (
        <div key={i} className="overflow-hidden rounded-2xl border border-ink/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-mist-50 text-xs uppercase tracking-wider text-ink/55">
              <tr>
                {b.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, j) => (
                <tr key={j} className="border-t border-ink/10 bg-white">
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-3 text-ink/75">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "audience":
      return (
        <div key={i} className="rounded-2xl border border-ink/10 bg-ink-900 p-6 text-white md:p-8">
          <h3 className="font-serif text-xl md:text-2xl">Who this is for</h3>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {b.items.map((it, j) => (
              <li key={j} className="flex gap-2 text-sm text-white/80">
                <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export type UseCaseBlock = Block;
