import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
    "Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. One Rust core, 6 language bindings. MIT licensed.",
  keywords: [
    "multichain blockchain data toolkit",
    "blockchain ABI decoder Rust",
    "multichain RPC middleware",
    "blockchain indexer library Rust",
    "cross-chain event correlation open source",
    "MCP server blockchain AI agents",
    "blockchain data infrastructure",
    "universal ABI decoder",
  ],
  authors: [{ name: "Darsh Kumar", url: "https://www.linkedin.com/in/darshankumar/" }],
  creator: "Darsh Kumar",
  publisher: "AI2Innovate SRL",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://chainfoundry.dev",
    siteName: "ChainFoundry",
    title: "ChainFoundry — The Universal Blockchain Data Toolkit",
    description:
      "Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. MIT licensed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ChainFoundry" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@darshan_aqua",
    creator: "@darshan_aqua",
    title: "ChainFoundry — The Universal Blockchain Data Toolkit",
    description: "7 architectures. 500+ networks. 6 languages. One API.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ChainFoundry",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Darsh Kumar",
    url: "https://www.linkedin.com/in/darshankumar/",
  },
  sourceOrganization: {
    "@type": "Organization",
    name: "AI2Innovate SRL",
    url: "https://ai2innovate.io",
  },
  description:
    "The universal blockchain data toolkit. Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks.",
  url: "https://chainfoundry.dev",
  codeRepository: "https://github.com/DarshanKumar89/chainkit",
  license: "https://opensource.org/licenses/MIT",
  programmingLanguage: ["Rust", "TypeScript", "Python", "Go", "Java"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Script
          id="ld-json-app"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
      </body>
    </html>
  );
}
