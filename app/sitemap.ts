import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/sanity/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adriel.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.publishedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "daily", priority: 0.9 },
    ...postUrls,
  ];
}
