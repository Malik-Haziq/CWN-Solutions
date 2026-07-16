"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPostMeta } from "@/lib/blog-shared";
import { getBlogCategorySlug, type BlogCategory } from "@/lib/blog-categories";

type BlogIndexClientProps = {
  posts: BlogPostMeta[];
  categories: BlogCategory[];
};

export function BlogIndexClient({ posts, categories }: BlogIndexClientProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>(
    "All",
  );
  const shouldReduceMotion = useReducedMotion();
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);
  const featuredPost =
    filteredPosts.find((post) => post.featured) ?? filteredPosts[0];
  const remainingPosts = featuredPost
    ? filteredPosts.filter((post) => post.slug !== featuredPost.slug)
    : [];
  const filterCategories: Array<"All" | BlogCategory> = ["All", ...categories];

  return (
    <>
      <div
        className="-mx-5 mt-10 flex gap-7 overflow-x-auto border-b border-border-subtle px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
        role="group"
        aria-label="Filter articles by category"
      >
        {filterCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`shrink-0 border-b-2 pb-4 font-body text-sm transition-colors duration-150 ${
                isActive
                  ? "border-accent font-semibold text-text-primary"
                  : "border-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {activeCategory !== "All" ? (
        <div className="mt-5 flex justify-end">
          <Link
            href={`/blog/category/${getBlogCategorySlug(activeCategory)}`}
            className="link-accent text-sm"
          >
            Open the {activeCategory} category page →
          </Link>
        </div>
      ) : null}

      {featuredPost ? (
        <motion.div
          className="mt-12"
          {...(!shouldReduceMotion
            ? {
                initial: { opacity: 0, y: 18 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.42, ease: "easeOut" },
              }
            : {})}
        >
          <BlogCard post={featuredPost} variant="featured" />
        </motion.div>
      ) : (
        <div className="mt-12 border-y border-border-default bg-bg-surface px-6 py-12 text-center sm:px-10">
          <p className="font-display text-xl font-bold text-text-primary">
            No articles in this category yet.
          </p>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm leading-6 text-text-secondary">
            The category architecture is ready. New articles will appear here as
            soon as they are published.
          </p>
        </div>
      )}

      {remainingPosts.length > 0 ? (
        <div className="mt-14">
          <div className="flex items-end justify-between gap-6 border-b border-border-default pb-5">
            <h2 className="font-display text-display-sm font-bold text-text-primary">
              More insights
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
              {String(remainingPosts.length).padStart(2, "0")} articles
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                className="h-full"
                {...(!shouldReduceMotion
                  ? {
                      initial: { opacity: 0, y: 18 },
                      animate: { opacity: 1, y: 0 },
                      transition: {
                        duration: 0.38,
                        delay: 0.08 + index * 0.05,
                        ease: "easeOut",
                      },
                    }
                  : {})}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
