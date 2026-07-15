import type { MDXComponents } from 'mdx/types';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { slugifyHeading } from '@/lib/blog-shared';

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join('');
  }

  if (typeof children === 'number') {
    return String(children);
  }

  return '';
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-display-lg font-extrabold text-text-primary">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id ?? slugifyHeading(getTextFromChildren(children))}
        className="scroll-mt-28 font-display text-display-md font-bold text-text-primary"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-display-sm font-bold text-text-primary">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-body text-[17px] leading-[1.75] text-text-secondary">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a href={href} className="link-accent">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-accent-muted px-1.5 py-0.5 font-mono text-[0.9em] text-accent-dark">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="overflow-x-auto border border-border-default bg-bg-surface p-6 font-mono text-sm leading-7 text-text-primary">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-6 italic text-text-secondary">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
    hr: () => <SectionDivider />,
    ul: ({ children }) => (
      <ul className="space-y-3 pl-5 font-body text-[17px] leading-[1.75] text-text-secondary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-3 pl-5 font-body text-[17px] leading-[1.75] text-text-secondary">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    ...components,
  };
}
