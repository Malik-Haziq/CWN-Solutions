import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";
import { getStaticAppRoutes } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = getStaticAppRoutes().map(({ path, lastModified }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));

  return [
    ...staticRoutes,
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
