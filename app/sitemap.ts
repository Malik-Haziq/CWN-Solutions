import type { MetadataRoute } from "next";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";
import { BLOG_CATEGORY_DEFINITIONS } from "@/lib/blog-categories";
import { caseStudies } from "@/lib/case-studies";
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
    ...caseStudies.map((caseStudy) => ({
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
      lastModified: new Date(caseStudy.updatedAt ?? caseStudy.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...BLOG_CATEGORY_DEFINITIONS.map((category) => {
      const posts = getPostsByCategory(category.name);
      const latestPost = posts[0];

      return {
        url: absoluteUrl(`/blog/category/${category.slug}`),
        lastModified: new Date(
          latestPost?.updatedAt ?? latestPost?.publishedAt ?? "2026-07-16",
        ),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    }),
  ];
}
