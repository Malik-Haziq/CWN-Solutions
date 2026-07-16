import type { BlogCategory } from "@/lib/blog-categories";

export type BlogImage = {
  src: string;
  alt: string;
  placeholder: boolean;
  brief?: string;
  caption?: string;
};

export type BlogAuthor = {
  id: string;
  name: string;
  role: string;
  credibility: string;
  schemaType: "Person" | "Organization";
  url?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  readTime: string;
  featured: boolean;
  author: BlogAuthor;
  coverImage: BlogImage;
  definitiveAnswer?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type TocHeading = {
  id: string;
  text: string;
};

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
