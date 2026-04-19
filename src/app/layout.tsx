import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { organization, softwareApplication, webSite } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chainfoundry.dev"),
  title: {
    default: "ChainFoundry — The Universal Blockchain Data Toolkit",
    template: "%s — ChainFoundry",
  },
  description:
    "Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. 4 shipped Rust crates, 5 language bindings. Used by AI-agent, DeFi, compliance, and Sui/Bitcoin BTCFi teams.",
  keywords: [
    "multichain blockchain data toolkit",
    "blockchain ABI decoder Rust",
    "multichain RPC middleware",
    "blockchain indexer library Rust",
    "cross-chain event correlation open source",
    "MCP server blockchain AI agents",
    "blockchain data infrastructure",
    "universal ABI decoder",
    "Sui multichain indexer",
    "BTCFi data toolkit",
    "Chainalysis open source alternative",
    "EU blockchain infrastructure MiCA NIS2",
  ],
  authors: [{ name: "Darsh Kumar", url: "https://www.linkedin.com/in/darshankumar/" }],
  creator: "Darsh Kumar",
  publisher: "AI2Innovate",
  category: "Developer Tools · Blockchain Infrastructure",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "ChainFoundry blog" }],
    },
  },
  openGraph: {
    type: "website",
    url: "https://chainfoundry.dev",
    siteName: "ChainFoundry",
    title: "ChainFoundry — The Universal Blockchain Data Toolkit",
    description:
      "Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. 4 shipped Rust crates.",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ChainFoundry — universal blockchain data toolkit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@darshan_aqua",
    creator: "@darshan_aqua",
    title: "ChainFoundry — The Universal Blockchain Data Toolkit",
    description: "7 architectures. 500+ networks. 5 languages. One API.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="ChainFoundry blog" href="/rss.xml" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={[organization, softwareApplication, webSite()]} />
        <Analytics />
      </body>
    </html>
  );
}
