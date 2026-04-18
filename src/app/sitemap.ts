import type { MetadataRoute } from "next";
import { publishedPosts } from "@/content/posts";
import { useCases } from "@/content/useCases";

const base = "https://chainfoundry.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/use-cases", "/mcp", "/blog", "/about", "/contact", "/press"];
  const now = new Date();

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r === "/" ? 1 : 0.8,
    })),
    ...useCases.map((u) => ({
      url: `${base}/use-cases/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...publishedPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
