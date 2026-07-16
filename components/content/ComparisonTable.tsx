export type ComparisonRow = {
  label: string;
  primary: string;
  secondary?: string;
};

type ComparisonTableProps = {
  rows?: ComparisonRow[];
  preset?: "agency-vs-in-house";
  eyebrow?: string;
  title?: string;
  description?: string;
  columns?: {
    label?: string;
    primary: string;
    secondary?: string;
  };
};

const comparisonPresets: Record<
  NonNullable<ComparisonTableProps["preset"]>,
  {
    rows: ComparisonRow[];
    columns: NonNullable<ComparisonTableProps["columns"]>;
  }
> = {
  "agency-vs-in-house": {
    columns: {
      label: "Decision factor",
      primary: "Specialist agency",
      secondary: "In-house team",
    },
    rows: [
      {
        label: "Time to start",
        primary:
          "An established team can begin after scope and commercial alignment.",
        secondary:
          "Recruiting and onboarding commonly precede meaningful delivery.",
      },
      {
        label: "Best fit",
        primary:
          "A defined MVP or first production release with a bounded delivery window.",
        secondary: "A validated product with a continuous, multi-year roadmap.",
      },
      {
        label: "Ownership",
        primary:
          "Requires deliberate documentation, handoff, and internal product leadership.",
        secondary:
          "Builds institutional knowledge and technical continuity directly.",
      },
      {
        label: "Cost shape",
        primary:
          "Concentrated engagement cost without permanent employment commitments.",
        secondary:
          "Ongoing salaries, benefits, hiring, tooling, and management overhead.",
      },
    ],
  },
};

const defaultColumns = {
  label: "The difference",
  primary: "CWN approach",
  secondary: "Typical agency approach",
};

/**
 * A responsive comparison/process matrix. Rename its columns for process
 * content, e.g. { label: "Stage", primary: "What happens", secondary: "Output" }.
 */
export function ComparisonTable({
  rows,
  preset,
  eyebrow = "How we work",
  title = "A process built for decisions, not theatre.",
  description,
  columns,
}: ComparisonTableProps) {
  const resolvedColumns =
    columns ?? (preset ? comparisonPresets[preset].columns : defaultColumns);
  const hasSecondary = Boolean(resolvedColumns.secondary);
  const resolvedRows = rows ?? (preset ? comparisonPresets[preset].rows : []);

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
          <span>{resolvedColumns.label}</span>
          <span className="text-accent-dark">{resolvedColumns.primary}</span>
          {hasSecondary ? <span>{resolvedColumns.secondary}</span> : null}
        </div>
        {resolvedRows.map((row, index) => (
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
                {resolvedColumns.primary}
              </p>
              <p className="font-body text-[15px] leading-6 text-text-primary">
                {row.primary}
              </p>
            </div>
            {hasSecondary ? (
              <div className="border-l border-border-subtle pl-4 md:border-l-0 md:pl-0">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted md:hidden">
                  {resolvedColumns.secondary}
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
