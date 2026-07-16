import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogImage } from "@/components/blog/BlogImage";
import { PostToc } from "@/components/blog/PostToc";
import {
  AuthorBio,
  DefinitiveAnswer,
  RelatedContent,
} from "@/components/content";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TealDot } from "@/components/ui/TealDot";
import {
  getAllPosts,
  getHeadingsFromMdx,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-shared";
import {
  getBlogCategoryByName,
  getBlogCategorySlug,
} from "@/lib/blog-categories";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { useMDXComponents } from "@/mdx-components";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    image: post.coverImage.src,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const headings = getHeadingsFromMdx(post.content);
  const components = useMDXComponents({});
  const relatedPosts = getRelatedPosts(post);
  const category = getBlogCategoryByName(post.category);
  const jsonLd = articleSchema({
    headline: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    image: post.coverImage.src,
    author: {
      name: post.author.name,
      type: post.author.schemaType,
      url: post.author.url,
    },
  });

  return (
    <PageShell
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
    >
      <JsonLd schema={jsonLd} />

      <article className="mx-auto w-full max-w-7xl px-5 pb-section-md sm:px-8 lg:px-10">
        <div className="animate-[fade-in_0.45s_ease-out]">
          <Link
            href={`/blog/category/${getBlogCategorySlug(post.category)}`}
            className="badge badge-accent"
          >
            {post.category}
          </Link>
          <h1 className="mt-7 max-w-5xl font-display text-display-lg font-extrabold text-text-primary">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-[18px] leading-8 text-text-secondary">
            {post.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-label uppercase text-text-muted">
            <span>Published {formatPostDate(post.publishedAt)}</span>
            <TealDot className="h-[5px] w-[5px]" />
            {post.updatedAt ? (
              <>
                <span>Updated {formatPostDate(post.updatedAt)}</span>
                <TealDot className="h-[5px] w-[5px]" />
              </>
            ) : null}
            <span>{post.readTime}</span>
          </div>
          <div className="mt-10">
            <BlogImage {...post.coverImage} variant="hero" priority />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <div className="lg:hidden">
            <PostToc headings={headings} />
          </div>

          <div className="mx-auto w-full max-w-[680px]">
            <div className="space-y-8">
              <AuthorBio
                name={post.author.name}
                role={post.author.role}
                credibility={post.author.credibility}
                href={post.author.url}
              />
              {post.definitiveAnswer ? (
                <DefinitiveAnswer answer={post.definitiveAnswer} />
              ) : null}
              <MDXRemote source={post.content} components={components} />
            </div>
          </div>

          <PostToc headings={headings} />
        </div>

        {relatedPosts.length > 0 ? (
          <section
            className="mt-20 border-t border-border-default pt-12"
            aria-labelledby="related-posts-title"
          >
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="section-label">Continue reading</p>
                <h2
                  id="related-posts-title"
                  className="mt-4 font-display text-display-sm font-bold text-text-primary"
                >
                  Related posts
                </h2>
              </div>
              <Link href="/blog" className="link-accent text-sm">
                View all articles →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        ) : null}

        {category ? (
          <div className="mt-20">
            <RelatedContent
              items={category.related}
              eyebrow="Related expertise"
              title="Related services & industries"
              introduction="Explore the product and industry capabilities connected to this article."
            />
          </div>
        ) : null}

        <div className="mt-16">
          <SectionDivider />
          <Link href="/blog" className="link-accent mt-8 inline-block">
            Back to all articles
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
