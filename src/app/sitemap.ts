import type { MetadataRoute } from "next";
import { subsidiaries } from "@/lib/data/subsidiaries";
import { newsArticles } from "@/lib/data/news";

const baseUrl = "https://www.ibeto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/businesses",
    "/sustainability",
    "/news",
    "/investors",
    "/careers",
    "/contact",
    "/media",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const businessRoutes = subsidiaries.map((s) => ({
    url: `${baseUrl}/businesses/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsRoutes = newsArticles.map((a) => ({
    url: `${baseUrl}/news/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...businessRoutes, ...newsRoutes];
}
