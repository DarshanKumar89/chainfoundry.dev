"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export type CodeTab = { label: string; language: string; code: string };

export default function CodeTabs({ tabs }: { tabs: CodeTab[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      <div role="tablist" className="mb-3 inline-flex rounded-full border border-ink/10 bg-mist-50 p-1">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              i === active
                ? "bg-ink text-white shadow-sm"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <CodeBlock code={tab.code} language={tab.language} />
    </div>
  );
}
