import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { PostToc } from "@/components/blog/PostToc";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TealDot } from "@/components/ui/TealDot";
import { getAllPosts, getHeadingsFromMdx, getPostBySlug } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-shared";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { useMDXComponents } from "@/mdx-components";

const agencyName = "CWN Solutions";

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
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const headings = getHeadingsFromMdx(post.content);
  const components = useMDXComponents({});
  const jsonLd = articleSchema({
    headline: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    datePublished: post.publishedAt,
  });

  return (
    <PageShell
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
    >
      <JsonLd schema={jsonLd} />

      <article className="mx-auto w-full max-w-7xl px-5 pb-section-md sm:px-8 lg:px-10">
        <div className="animate-[fade-in_0.45s_ease-out]">
          <span className="badge badge-accent">{post.category}</span>
          <h1 className="mt-7 font-display text-display-lg font-extrabold text-text-primary">
            {post.title}
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-label uppercase text-text-muted">
            <span>{agencyName}</span>
            <TealDot className="h-[5px] w-[5px]" />
            <span>{formatPostDate(post.publishedAt)}</span>
            <TealDot className="h-[5px] w-[5px]" />
            <span>{post.readTime}</span>
          </div>
          <div className="mt-12">
            <SectionDivider />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <div className="lg:hidden">
            <PostToc headings={headings} />
          </div>

          <div className="mx-auto w-full max-w-[680px]">
            <div className="space-y-8">
              <MDXRemote source={post.content} components={components} />
            </div>

            <div className="mt-16">
              <SectionDivider />
            </div>

            <div className="mt-8">
              <a href="/blog" className="link-accent">
                Back to all articles
              </a>
            </div>
          </div>

          <PostToc headings={headings} />
        </div>
      </article>
    </PageShell>
  );
}
