import { publishedPosts } from "@/content/posts";

const SITE = "https://chainfoundry.dev";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date().toUTCString();
  const items = publishedPosts
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}/`;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${now}</pubDate>
      <description>${escape(p.excerpt)}</description>
      <category>${escape(p.tag)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ChainFoundry</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Engineering deep-dives, ecosystem theses, and architectural notes from the team building the universal blockchain data toolkit.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>ChainFoundry Next.js</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
