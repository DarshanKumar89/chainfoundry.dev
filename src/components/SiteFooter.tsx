import Link from "next/link";
import { LogoMark } from "./Logo";
import { DiscordIcon, GithubIcon, LinkedinIcon, XIcon } from "./SocialIcons";
import { DISCORD_URL, DOCS_URL } from "@/lib/links";

const product = [
  { href: "/use-cases", label: "Use cases" },
  { href: "/mcp", label: "MCP server" },
  { href: DOCS_URL, label: "Documentation" },
  { href: "https://github.com/DarshanKumar89/chainfoundry", label: "GitHub" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const useCases = [
  { href: "/use-cases/ai-agents", label: "AI agents" },
  { href: "/use-cases/compliance", label: "Compliance & forensics" },
  { href: "/use-cases/multichain-dapps", label: "Multichain dApps" },
  { href: "/use-cases/ecosystem-growth", label: "Ecosystem growth" },
  { href: "/use-cases/startups", label: "Startups" },
  { href: "/use-cases/competitive-migration", label: "Migration guide" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink-800 text-white">
      <div className="container-prose py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" color="#ffffff" />
              <span className="text-[17px] font-semibold tracking-tight">ChainFoundry</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The universal blockchain data toolkit. 7 architectures. 500+ networks. 6 languages. One API.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="https://github.com/DarshanKumar89/chainfoundry" label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://x.com/darshan_aqua" label="X / Twitter">
                <XIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/ai2innovate/" label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
              <SocialLink href={DISCORD_URL} label="Join ChainFoundry on Discord">
                <DiscordIcon />
              </SocialLink>
            </div>
          </div>
          <FooterCol title="Product" links={product} />
          <FooterCol title="Use cases" links={useCases} />
          <FooterCol title="Company" links={company} />
        </div>

        <div className="mt-14 flex flex-col items-start gap-3 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            ChainFoundry is a product of{" "}
            <a
              href="https://ai2innovate.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              AI2Innovate
            </a>
            .
          </p>
          <p>
            © 2026{" "}
            <a
              href="https://ai2innovate.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              AI2Innovate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
    >
      {children}
    </a>
  );
}
