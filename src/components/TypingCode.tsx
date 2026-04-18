"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingCode({ code, language = "rust" }: { code: string; language?: string }) {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (shown >= code.length) return;
    // chunked typing for performance
    const step = shown < 60 ? 1 : 3;
    const t = setTimeout(() => setShown((v) => Math.min(code.length, v + step)), 14);
    return () => clearTimeout(t);
  }, [started, shown, code.length]);

  const visible = code.slice(0, shown);
  const done = shown >= code.length;

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-3 font-mono text-[11px] uppercase tracking-wider text-mist-400">
        {language}
      </div>
      <pre className="code-block pt-10">
        <code
          dangerouslySetInnerHTML={{
            __html:
              highlight(visible) +
              (done ? "" : '<span class="tok-p animate-blink">▍</span>'),
          }}
        />
      </pre>
    </div>
  );
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function highlight(code: string) {
  const e = esc(code);
  return e
    .replace(/("([^"\\]|\\.)*")/g, '<span class="tok-s">$1</span>')
    .replace(/(^|\s)(\/\/[^\n]*)/g, '$1<span class="tok-c">$2</span>')
    .replace(
      /\b(use|let|fn|pub|mut|const|new|return|if|else|match|as|in|impl|struct|enum|trait|println!)\b/g,
      '<span class="tok-k">$1</span>'
    )
    .replace(/\b(0x[0-9a-fA-F]+|\d+)\b/g, '<span class="tok-n">$1</span>');
}
