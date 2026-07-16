export type ComparisonRow = {
  label: string;
  primary: string;
  secondary?: string;
};

type ComparisonTableProps = {
  rows: ComparisonRow[];
  eyebrow?: string;
  title?: string;
  description?: string;
  columns?: {
    label?: string;
    primary: string;
    secondary?: string;
  };
};

/**
 * A responsive comparison/process matrix. Rename its columns for process
 * content, e.g. { label: "Stage", primary: "What happens", secondary: "Output" }.
 */
export function ComparisonTable({
  rows,
  eyebrow = "How we work",
  title = "A process built for decisions, not theatre.",
  description,
  columns = {
    label: "The difference",
    primary: "CWN approach",
    secondary: "Typical agency approach",
  },
}: ComparisonTableProps) {
  const hasSecondary = Boolean(columns.secondary);

  return (
    <section aria-labelledby="comparison-title">
      <div className="max-w-2xl">
        <p className="section-label">{eyebrow}</p>
        <h2
          id="comparison-title"
          className="mt-5 font-display text-display-md font-extrabold text-text-primary"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-5 font-body text-base leading-7 text-text-secondary">
            {description}
          </p>
        ) : null}
      </div>

      <div className="mt-10 overflow-hidden border-y border-border-default">
        <div
          className={`hidden border-b border-border-default bg-bg-surface px-6 py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted md:grid ${hasSecondary ? "md:grid-cols-[24fr_38fr_38fr]" : "md:grid-cols-[30fr_70fr]"}`}
        >
          <span>{columns.label}</span>
          <span className="text-accent-dark">{columns.primary}</span>
          {hasSecondary ? <span>{columns.secondary}</span> : null}
        </div>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`group grid gap-x-7 gap-y-4 border-b border-border-subtle px-6 py-7 last:border-b-0 md:gap-y-0 md:py-8 ${hasSecondary ? "md:grid-cols-[24fr_38fr_38fr]" : "md:grid-cols-[30fr_70fr]"}`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] tracking-[0.1em] text-accent-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[16px] font-bold leading-6 text-text-primary">
                {row.label}
              </h3>
            </div>
            <div>
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-accent-dark md:hidden">
                {columns.primary}
              </p>
              <p className="font-body text-[15px] leading-6 text-text-primary">
                {row.primary}
              </p>
            </div>
            {hasSecondary ? (
              <div className="border-l border-border-subtle pl-4 md:border-l-0 md:pl-0">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted md:hidden">
                  {columns.secondary}
                </p>
                <p className="font-body text-[15px] leading-6 text-text-secondary">
                  {row.secondary ?? "—"}
                </p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
