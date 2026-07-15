import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import {
  slugifyHeading,
  type BlogPost,
  type BlogPostMeta,
  type TocHeading,
} from '@/lib/blog-shared';

export type { BlogPost, BlogPostMeta, TocHeading } from '@/lib/blog-shared';

const postsDirectory = path.join(process.cwd(), 'content/blog');

function assertString(value: unknown, field: string, slug: string) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Post "${slug}" is missing required frontmatter field "${field}".`);
  }

  return value;
}

function assertBoolean(value: unknown, field: string, slug: string) {
  if (typeof value !== 'boolean') {
    throw new Error(`Post "${slug}" is missing required boolean frontmatter field "${field}".`);
  }

  return value;
}

function readPostFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(source);
  const description = assertString(data.description, 'description', slug);

  if (description.length > 155) {
    throw new Error(`Post "${slug}" description must be 155 characters or fewer.`);
  }

  return {
    slug,
    title: assertString(data.title, 'title', slug),
    description,
    publishedAt: assertString(data.publishedAt, 'publishedAt', slug),
    category: assertString(data.category, 'category', slug),
    readTime: assertString(data.readTime, 'readTime', slug),
    featured: assertBoolean(data.featured, 'featured', slug),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
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
    throw new Error(`Expected exactly one featured blog post, found ${featuredPosts.length}.`);
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

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((post) => post.category)));
}

export function getHeadingsFromMdx(content: string): TocHeading[] {
  return content
    .split('\n')
    .filter((line) => line.startsWith('## ') && !line.startsWith('### '))
    .map((line) => {
      const text = line.replace(/^##\s+/, '').trim();

      return {
        id: slugifyHeading(text),
        text,
      };
    });
}
