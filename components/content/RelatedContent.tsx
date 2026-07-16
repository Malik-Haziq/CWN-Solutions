import Link from "next/link";

export type RelatedContentItem = {
  title: string;
  description: string;
  href: string;
  label?: string;
};

type RelatedContentProps = {
  items: RelatedContentItem[];
  title?: string;
  eyebrow?: string;
};

export function RelatedContent({
  items,
  title = "Related content",
  eyebrow = "Keep exploring",
}: RelatedContentProps) {
  const relatedItems = items.slice(0, 3);

  if (relatedItems.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-content-title">
      <div className="flex flex-col gap-5 border-b border-border-default pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">{eyebrow}</p>
          <h2
            id="related-content-title"
            className="mt-4 font-display text-display-sm font-bold text-text-primary"
          >
            {title}
          </h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
          {String(relatedItems.length).padStart(2, "0")} selected
        </span>
      </div>

      <div className="grid border-b border-border-default md:grid-cols-3">
        {relatedItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex min-h-[220px] flex-col px-6 py-7 transition-colors duration-200 hover:bg-bg-surface sm:p-8 ${index < relatedItems.length - 1 ? "border-b border-border-subtle md:border-b-0 md:border-r" : ""} ${index === 1 ? "md:translate-y-7 md:border-t md:border-border-default md:bg-bg-surface" : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent-dark">
                {item.label ?? `0${index + 1}`}
              </span>
              <span className="font-body text-xl leading-none text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                →
              </span>
            </div>
            <h3 className="mt-9 font-display text-[20px] font-bold leading-7 text-text-primary transition-colors duration-200 group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-3 max-w-sm font-body text-sm leading-6 text-text-secondary">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
