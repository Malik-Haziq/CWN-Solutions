import Link from "next/link";
import { BlogImage } from "@/components/blog/BlogImage";
import { formatPostDate, type BlogPostMeta } from "@/lib/blog-shared";
import { getBlogCategorySlug } from "@/lib/blog-categories";

type BlogCardProps = {
  post: BlogPostMeta;
  variant?: "standard" | "featured";
};

export function BlogCard({ post, variant = "standard" }: BlogCardProps) {
  const postHref = `/blog/${post.slug}`;
  const categoryHref = `/blog/category/${getBlogCategorySlug(post.category)}`;

  if (variant === "featured") {
    return (
      <article className="grid overflow-hidden border border-border-default bg-bg-surface transition-colors duration-200 hover:border-accent md:grid-cols-[1.08fr_0.92fr]">
        <Link href={postHref} aria-label={`Read ${post.title}`}>
          <BlogImage
            {...post.coverImage}
            variant="featured"
            priority
            label="Featured cover pending"
          />
        </Link>
        <div className="flex flex-col p-7 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-dark">
              {post.featured ? "Featured insight" : "Latest insight"}
            </span>
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-accent"
            />
            <Link href={categoryHref} className="badge badge-accent">
              {post.category}
            </Link>
          </div>
          <h2 className="mt-7 font-display text-display-md font-extrabold text-text-primary">
            <Link
              href={postHref}
              className="transition-colors duration-150 hover:text-accent-dark"
            >
              {post.title}
            </Link>
          </h2>
          <p className="mt-5 font-body text-base leading-7 text-text-secondary">
            {post.description}
          </p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10 font-mono text-label uppercase text-text-muted">
            <span>{formatPostDate(post.publishedAt)}</span>
            <span>{post.readTime}</span>
          </div>
          <Link href={postHref} className="link-accent mt-7 self-start text-sm">
            Read the article →
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border-default bg-bg-surface transition-colors duration-150 hover:border-accent">
      <Link href={postHref} aria-label={`Read ${post.title}`}>
        <BlogImage {...post.coverImage} variant="card" />
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <Link href={categoryHref} className="badge badge-accent self-start">
          {post.category}
        </Link>
        <h2 className="mt-6 line-clamp-3 font-display text-xl font-bold leading-snug text-text-primary transition-colors duration-150 group-hover:text-accent-dark">
          <Link href={postHref}>{post.title}</Link>
        </h2>
        <p className="mt-4 line-clamp-3 font-body text-sm leading-6 text-text-secondary">
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-9 font-mono text-label uppercase text-text-muted">
          <span>{formatPostDate(post.publishedAt)}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
