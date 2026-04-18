"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({
  code,
  language,
  className = "",
}: {
  code: string;
  language?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={`relative ${className}`}>
      {language && (
        <div className="absolute left-4 top-3 font-mono text-[11px] uppercase tracking-wider text-mist-400">
          {language}
        </div>
      )}
      <button
        type="button"
        onClick={onCopy}
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-mist-300 transition hover:border-white/20 hover:text-white"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className={`code-block ${language ? "pt-10" : ""}`}>
        <code dangerouslySetInnerHTML={{ __html: highlight(code, language) }} />
      </pre>
    </div>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlight(code: string, lang?: string): string {
  const esc = escapeHtml(code);

  if (lang === "json") {
    return esc
      .replace(/"([^"\n]*)"(\s*:)/g, '<span class="tok-t">"$1"</span>$2')
      .replace(/:\s*"([^"\n]*)"/g, ': <span class="tok-s">"$1"</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="tok-k">$1</span>');
  }

  if (lang === "bash" || lang === "shell") {
    return esc
      .replace(/(^|\n)(#[^\n]*)/g, '$1<span class="tok-c">$2</span>')
      .replace(/\b(npm|pip|cargo|npx|yarn|brew|vercel)\b/g, '<span class="tok-f">$1</span>')
      .replace(/\b(install|add|deploy|run)\b/g, '<span class="tok-k">$1</span>');
  }

  // generic Rust / TS / Python-ish highlighter
  const keywords =
    /\b(use|let|fn|async|await|mut|pub|const|import|from|export|default|new|return|if|else|for|while|match|as|in|impl|struct|enum|trait|type|class|def|print|println!|println|println|this|self|unwrap|Some|None|Ok|Err|True|False|None)\b/g;
  const strings = /("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g;
  const comments = /(^|\s)(\/\/[^\n]*|#[^\n]*)/g;
  const numbers = /\b(0x[0-9a-fA-F]+|\d+)\b/g;

  return esc
    .replace(strings, '<span class="tok-s">$1</span>')
    .replace(comments, '$1<span class="tok-c">$2</span>')
    .replace(keywords, '<span class="tok-k">$1</span>')
    .replace(numbers, '<span class="tok-n">$1</span>');
}
