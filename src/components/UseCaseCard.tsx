import Link from "next/link";
import { ArrowRight, Bot, GitBranch, RefreshCcw, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import type { UseCase } from "@/content/useCases";

const icons = {
  bot: Bot,
  shield: ShieldCheck,
  gitbranch: GitBranch,
  sparkles: Sparkles,
  rocket: Rocket,
  switch: RefreshCcw,
} as const;

export default function UseCaseCard({ u }: { u: UseCase }) {
  const Icon = icons[u.icon];
  return (
    <Link
      href={`/use-cases/${u.slug}`}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-7 transition hover:-translate-y-0.5 hover:border-ink/30 md:p-8"
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{u.eyebrow}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist-100 text-ink">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-snug text-ink">{u.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-6 text-ink/70">{u.lead}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read use case
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
