'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { formatPostDate, type BlogPostMeta } from '@/lib/blog-shared';

type BlogIndexClientProps = {
  posts: BlogPostMeta[];
  categories: string[];
};

export function BlogIndexClient({ posts, categories }: BlogIndexClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();
  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <div className="-mx-5 mt-10 flex gap-7 overflow-x-auto border-b border-border-subtle px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        {['All', ...categories].map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 border-b-2 pb-4 font-body text-sm transition-colors duration-150 ${
                isActive
                  ? 'border-accent font-semibold text-text-primary'
                  : 'border-transparent text-text-muted hover:text-text-secondary'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            {...(!shouldReduceMotion
              ? {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.38, delay: index * 0.05, ease: 'easeOut' },
                }
              : {})}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex min-h-[318px] flex-col border border-border-default bg-transparent p-7 transition-colors duration-150 hover:border-accent hover:bg-accent-muted"
            >
              <span className="badge badge-accent self-start">{post.category}</span>
              <h2 className="mt-6 line-clamp-2 font-display text-xl font-bold leading-snug text-text-primary transition-colors duration-150 group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-4 line-clamp-3 font-body text-sm leading-6 text-text-secondary">
                {post.description}
              </p>
              <div className="mt-auto flex items-center justify-between gap-4 pt-10 font-mono text-label uppercase text-text-muted">
                <span>{formatPostDate(post.publishedAt)}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
