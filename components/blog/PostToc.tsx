'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { TocHeading } from '@/lib/blog-shared';

type PostTocProps = {
  headings: TocHeading[];
};

export function PostToc({ headings }: PostTocProps) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-100px 0px -65% 0px',
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const list = (
    <nav aria-label="Table of contents" className="space-y-3">
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={() => setIsOpen(false)}
          className={`block font-body text-sm leading-6 transition-colors duration-150 hover:text-accent ${
            activeId === heading.id ? 'text-accent' : 'text-text-secondary'
          }`}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <div className="border border-border-default bg-bg-surface p-5 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex w-full items-center justify-between font-mono text-label uppercase text-text-muted"
          aria-expanded={isOpen}
        >
          <span>On this page</span>
          <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen ? <div className="mt-5 border-t border-border-subtle pt-5">{list}</div> : null}
      </div>

      <motion.aside
        className="sticky top-[100px] hidden w-[240px] self-start lg:block"
        {...(!shouldReduceMotion
          ? {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.35, delay: 0.16, ease: 'easeOut' },
            }
          : {})}
      >
        <p className="mb-5 font-mono text-label uppercase text-text-muted">On this page</p>
        {list}
      </motion.aside>
    </>
  );
}
