import Link from "next/link";

type AuthorBioProps = {
  name: string;
  role: string;
  credibility: string;
  type?: "Author" | "Reviewed by";
  href?: string;
};

export function AuthorBio({
  name,
  role,
  credibility,
  type = "Author",
  href,
}: AuthorBioProps) {
  const identity = (
    <>
      <p className="font-display text-[17px] font-bold text-text-primary">
        {name}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent-dark">
        {role}
      </p>
    </>
  );

  return (
    <aside
      className="grid border-y border-border-default sm:grid-cols-[auto_minmax(0,1fr)]"
      aria-label={`${type}: ${name}`}
    >
      <div className="flex min-h-[120px] w-full items-center justify-between border-b border-border-default bg-bg-surface p-6 sm:w-[150px] sm:border-b-0 sm:border-r">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
          {type}
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-accent font-display text-sm font-bold text-text-primary sm:hidden">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
      <div className="flex items-start gap-5 p-6 sm:p-7">
        <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-accent font-display text-[15px] font-bold text-text-primary sm:grid">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </span>
        <div className="min-w-0">
          {href ? (
            <Link href={href} className="group inline-block">
              {identity}
              <span className="mt-1 block h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </Link>
          ) : (
            identity
          )}
          <p className="mt-4 max-w-2xl font-body text-sm leading-6 text-text-secondary">
            {credibility}
          </p>
        </div>
      </div>
    </aside>
  );
}
