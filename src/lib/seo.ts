// Schema.org JSON-LD builders. Keep this file boring — helps both Google
// rich results and LLM grounding. Use via <JsonLd data={...} /> in a page.

const SITE = "https://chainfoundry.dev";
const GITHUB = "https://github.com/DarshanKumar89/chainkit";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChainFoundry",
  legalName: "AI2Innovate SRL",
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  description:
    "The universal blockchain data toolkit. Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Darsh Kumar",
    url: "https://www.linkedin.com/in/darshankumar/",
    jobTitle: "Founder & CEO",
    sameAs: [
      "https://x.com/darshan_aqua",
      "https://www.linkedin.com/in/darshankumar/",
      "https://github.com/DarshanKumar89",
    ],
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Bratislava",
      addressCountry: "SK",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Brussels",
      addressCountry: "BE",
    },
  ],
  sameAs: [
    GITHUB,
    "https://x.com/darshan_aqua",
    "https://www.linkedin.com/company/ai2innovate/",
    "https://crates.io/crates/chaincodec-core",
    "https://www.npmjs.com/org/chainfoundry",
    "https://pypi.org/project/chainfoundry-chaincodec/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@ai2innovate.io",
      areaServed: ["EU", "US", "Worldwide"],
      availableLanguage: ["English"],
    },
  ],
};

export const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ChainFoundry",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Person", name: "Darsh Kumar" },
  sourceOrganization: { "@type": "Organization", name: "AI2Innovate SRL", url: "https://ai2innovate.io" },
  description:
    "The universal blockchain data toolkit. Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks.",
  url: SITE,
  codeRepository: GITHUB,
  license: "https://opensource.org/licenses/MIT",
  programmingLanguage: ["Rust", "TypeScript", "Python", "Go", "Java"],
  keywords:
    "multichain, blockchain, ABI decoder, RPC middleware, indexer, MCP, AI agents, cross-chain, EVM, Solana, Cosmos, Sui, Bitcoin, compliance, open-source",
};

export function webSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChainFoundry",
    url: SITE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE}${it.url}`,
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function article({
  slug,
  title,
  description,
  datePublished,
  section,
  keywords,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: "Darsh Kumar",
      url: "https://www.linkedin.com/in/darshankumar/",
    },
    publisher: {
      "@type": "Organization",
      name: "ChainFoundry",
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    mainEntityOfPage: `${SITE}/blog/${slug}/`,
    articleSection: section,
    keywords: keywords?.join(", "),
    image: `${SITE}/opengraph-image`,
    inLanguage: "en",
    isAccessibleForFree: true,
  };
}
