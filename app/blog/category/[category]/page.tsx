import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageShell } from "@/components/layout/PageShell";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getPostsByCategory } from "@/lib/blog";
import {
  BLOG_CATEGORY_DEFINITIONS,
  getBlogCategoryBySlug,
} from "@/lib/blog-categories";
import { createPageMetadata } from "@/lib/metadata";

type BlogCategoryPageProps = {
  params: {
    category: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_CATEGORY_DEFINITIONS.map((category) => ({
    category: category.slug,
  }));
}

export function generateMetadata({ params }: BlogCategoryPageProps): Metadata {
  const category = getBlogCategoryBySlug(params.category);

  if (!category) {
    return {};
  }

  return createPageMetadata({
    title: `${category.name} Articles`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  });
}

export default function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const category = getBlogCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.name);

  return (
    <PageShell
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: category.name }]}
    >
      <section className="mx-auto w-full max-w-7xl px-5 pb-section-md sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Blog category</SectionLabel>
            <h1 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
              {category.name}
            </h1>
          </div>
          <p className="font-body text-[17px] leading-8 text-text-secondary">
            {category.description}
          </p>
        </div>

        <div className="mt-12">
          <SectionDivider />
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
            {String(posts.length).padStart(2, "0")} published{" "}
            {posts.length === 1 ? "article" : "articles"}
          </p>
          <Link href="/blog" className="link-accent text-sm">
            Browse all categories →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-9 border-y border-border-default bg-bg-surface px-6 py-14 sm:px-10">
            <p className="font-display text-xl font-bold text-text-primary">
              The category is ready for its first article.
            </p>
            <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-text-secondary">
              The route, metadata, image-inclusive card system, and category
              description are in place. Published {category.name} posts will be
              listed here automatically.
            </p>
          </div>
        )}
      </section>
    </PageShell>
  );
}
