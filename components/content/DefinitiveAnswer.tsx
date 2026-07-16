type DefinitiveAnswerProps = {
  answer: string;
  title?: string;
  label?: string;
};

/** A self-contained answer intended to make sense when quoted out of context. */
export function DefinitiveAnswer({
  answer,
  title = "The definitive answer",
  label = "In brief",
}: DefinitiveAnswerProps) {
  return (
    <aside
      aria-label={title}
      className="relative overflow-hidden border-y border-border-default bg-bg-surface px-6 py-7 sm:px-9 sm:py-9"
    >
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-[3px] bg-accent"
      />
      <div className="grid gap-5 sm:grid-cols-[minmax(120px,0.42fr)_minmax(0,1fr)] sm:gap-9">
        <div>
          <p className="font-mono text-label uppercase text-accent-dark">
            {label}
          </p>
          <h2 className="mt-3 font-display text-[17px] font-bold leading-6 text-text-primary">
            {title}
          </h2>
        </div>
        <p className="max-w-3xl font-display text-[clamp(20px,2.2vw,28px)] font-medium leading-[1.42] tracking-[-0.015em] text-text-primary">
          {answer}
        </p>
      </div>
    </aside>
  );
}
