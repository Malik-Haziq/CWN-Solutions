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
  introduction?: string;
  variant?: "default" | "industries";
};

export function RelatedContent({
  items,
  title = "Related content",
  eyebrow = "Keep exploring",
  introduction,
  variant = "default",
}: RelatedContentProps) {
  const relatedItems = items.slice(0, variant === "industries" ? 4 : 3);

  if (relatedItems.length === 0) {
    return null;
  }

  if (variant === "industries") {
    return (
      <section
        className="border-y border-border-default"
        aria-labelledby="industries-title"
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-label">{eyebrow}</p>
              <h2
                id="industries-title"
                className="mt-5 font-display text-display-md font-extrabold text-text-primary"
              >
                {title}
              </h2>
            </div>
            {introduction ? (
              <p className="max-w-md font-body text-sm leading-6 text-text-secondary md:text-right">
                {introduction}
              </p>
            ) : null}
          </div>

          <div className="mt-10 grid border-l border-t border-border-default sm:grid-cols-2 lg:grid-cols-4">
            {relatedItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-h-[220px] border-b border-r border-border-default bg-bg-base p-6 transition-colors duration-200 hover:bg-bg-surface sm:p-7"
              >
                <span className="font-mono text-[10px] tracking-[0.12em] text-accent-dark">
                  {item.label}
                </span>
                <h3 className="mt-10 font-display text-xl font-bold text-text-primary group-hover:text-accent-dark">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 inline-block text-accent transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
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
