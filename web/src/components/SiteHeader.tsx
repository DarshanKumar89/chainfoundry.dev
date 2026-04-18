"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const nav = [
  { href: "/use-cases", label: "Use cases" },
  { href: "/mcp", label: "MCP" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-ink/10 bg-white/85 backdrop-blur"
          : "border-transparent bg-white/60 backdrop-blur"
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://docs.chainfoundry.dev"
            className="text-sm text-ink/70 transition hover:text-ink"
          >
            Docs
          </a>
          <Link href="/contact" className="btn-primary py-2 text-sm">
            Book a call
          </Link>
        </div>
        <button
          type="button"
          className="rounded-full border border-ink/15 p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <nav className="container-prose flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-ink/80 hover:bg-mist-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://docs.chainfoundry.dev"
              className="rounded-lg px-3 py-2 text-base text-ink/80 hover:bg-mist-50"
            >
              Docs
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
