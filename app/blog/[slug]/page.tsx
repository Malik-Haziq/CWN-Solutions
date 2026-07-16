import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { PostToc } from "@/components/blog/PostToc";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TealDot } from "@/components/ui/TealDot";
import { getAllPosts, getHeadingsFromMdx, getPostBySlug } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-shared";
import { useMDXComponents } from "@/mdx-components";

const agencyName = "CWN Solutions";
const siteUrl = "https://cwnsolutions.com";

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

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${agencyName}`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const headings = getHeadingsFromMdx(post.content);
  const components = useMDXComponents({});
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: agencyName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: agencyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };

  return (
    <main className="bg-bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
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

            <div className="mt-12 border border-border-default bg-bg-surface p-10">
              <h2 className="font-display text-display-sm font-bold text-text-primary">
                Working on something that needs to be built right?
              </h2>
              <p className="mt-4 font-body text-base leading-7 text-text-secondary">
                Book a discovery call and get clear on the safest path from idea
                to launch.
              </p>
              <a href="/#contact" className="btn-primary mt-7">
                Book a Free Call →
              </a>
            </div>
          </div>

          <PostToc headings={headings} />
        </div>
      </article>
    </main>
  );
}
