import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://chainfoundry.dev/sitemap.xml",
    host: "https://chainfoundry.dev",
  };
}
