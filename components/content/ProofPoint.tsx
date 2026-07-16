type ProofPointProps = {
  value: string;
  label: string;
  detail: string;
  source?: string;
  index?: number;
};

export function ProofPoint({
  value,
  label,
  detail,
  source,
  index = 1,
}: ProofPointProps) {
  return (
    <aside className="relative grid overflow-hidden border border-border-default bg-bg-surface p-6 sm:grid-cols-[minmax(180px,0.78fr)_minmax(0,1fr)] sm:gap-10 sm:p-9">
      <span
        aria-hidden="true"
        className="absolute right-5 top-3 font-mono text-[70px] font-medium leading-none tracking-[-0.08em] text-text-primary/[0.045] sm:right-8 sm:text-[100px]"
      >
        {String(index).padStart(2, "0")}
      </span>
      <div className="relative">
        <p className="font-display text-[clamp(48px,7vw,84px)] font-extrabold leading-none tracking-[-0.065em] text-text-primary">
          {value}
        </p>
        <p className="mt-3 font-mono text-label uppercase text-accent-dark">
          {label}
        </p>
      </div>
      <div className="relative mt-7 border-t border-border-subtle pt-5 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-1">
        <p className="max-w-xl font-body text-base leading-7 text-text-secondary">
          {detail}
        </p>
        {source ? (
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
            {source}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
