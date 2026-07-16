import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getBlogAuthor } from "@/lib/blog-authors";
import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-categories";
import {
  slugifyHeading,
  type BlogImage,
  type BlogPost,
  type BlogPostMeta,
  type TocHeading,
} from "@/lib/blog-shared";

export type { BlogPost, BlogPostMeta, TocHeading } from "@/lib/blog-shared";

const postsDirectory = path.join(process.cwd(), "content/blog");

function assertString(value: unknown, field: string, slug: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `Post "${slug}" is missing required frontmatter field "${field}".`,
    );
  }

  return value;
}

function assertBoolean(value: unknown, field: string, slug: string) {
  if (typeof value !== "boolean") {
    throw new Error(
      `Post "${slug}" is missing required boolean frontmatter field "${field}".`,
    );
  }

  return value;
}

function optionalString(value: unknown, field: string, slug: string) {
  if (value === undefined || value === null) {
    return undefined;
  }

  return assertString(value, field, slug);
}

function assertCategory(value: unknown, slug: string): BlogCategory {
  const category = assertString(value, "category", slug);

  if (!BLOG_CATEGORIES.includes(category as BlogCategory)) {
    throw new Error(
      `Post "${slug}" has unsupported category "${category}". Expected one of: ${BLOG_CATEGORIES.join(", ")}.`,
    );
  }

  return category as BlogCategory;
}

function assertImage(value: unknown, field: string, slug: string): BlogImage {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(
      `Post "${slug}" is missing required image metadata "${field}".`,
    );
  }

  const image = value as Record<string, unknown>;
  const alt = assertString(image.alt, `${field}.alt`, slug);

  if (alt.length < 20) {
    throw new Error(
      `Post "${slug}" field "${field}.alt" must describe the intended image in at least 20 characters.`,
    );
  }

  return {
    src: assertString(image.src, `${field}.src`, slug),
    alt,
    placeholder: assertBoolean(image.placeholder, `${field}.placeholder`, slug),
    brief: optionalString(image.brief, `${field}.brief`, slug),
    caption: optionalString(image.caption, `${field}.caption`, slug),
  };
}

function readPostFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  const description = assertString(data.description, "description", slug);

  if (description.length > 155) {
    throw new Error(
      `Post "${slug}" description must be 155 characters or fewer.`,
    );
  }

  const authorId = assertString(data.author, "author", slug);
  const author = getBlogAuthor(authorId);

  if (!author) {
    throw new Error(`Post "${slug}" references unknown author "${authorId}".`);
  }

  return {
    slug,
    title: assertString(data.title, "title", slug),
    description,
    publishedAt: assertString(data.publishedAt, "publishedAt", slug),
    updatedAt: optionalString(data.updatedAt, "updatedAt", slug),
    category: assertCategory(data.category, slug),
    readTime: assertString(data.readTime, "readTime", slug),
    featured: assertBoolean(data.featured, "featured", slug),
    author,
    coverImage: assertImage(data.coverImage, "coverImage", slug),
    definitiveAnswer: optionalString(
      data.definitiveAnswer,
      "definitiveAnswer",
      slug,
    ),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readPostFile)
    .map(({ content: _content, ...post }) => post)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getFeaturedPost(): BlogPostMeta {
  const featuredPosts = getAllPosts().filter((post) => post.featured);

  if (featuredPosts.length !== 1) {
    throw new Error(
      `Expected exactly one featured blog post, found ${featuredPosts.length}.`,
    );
  }

  return featuredPosts[0];
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fileName = `${slug}.mdx`;
  const fullPath = path.join(postsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return readPostFile(fileName);
}

export function getAllCategories(): BlogCategory[] {
  return [...BLOG_CATEGORIES];
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(
  currentPost: BlogPostMeta,
  limit = 3,
): BlogPostMeta[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentPost.slug)
    .sort((a, b) => {
      const aMatchesCategory = a.category === currentPost.category ? 1 : 0;
      const bMatchesCategory = b.category === currentPost.category ? 1 : 0;

      return bMatchesCategory - aMatchesCategory;
    })
    .slice(0, limit);
}

export function getHeadingsFromMdx(content: string): TocHeading[] {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## ") && !line.startsWith("### "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();

      return {
        id: slugifyHeading(text),
        text,
      };
    });
}
