import type { MetadataRoute } from "next";

// Explicitly welcome AI crawlers — this is how you get cited in
// ChatGPT, Claude, Perplexity, Gemini, and Google's AI Overviews.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
  "CCBot",
  "Bytespider",
  "Meta-ExternalAgent",
  "FacebookBot",
  "DuckAssistBot",
  "YouBot",
  "Diffbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: "https://chainfoundry.dev/sitemap.xml",
    host: "https://chainfoundry.dev",
  };
}
