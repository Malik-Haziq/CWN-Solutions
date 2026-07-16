import type { ReactNode } from "react";
import Link from "next/link";
import { SectionDivider } from "@/components/ui/SectionDivider";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageShellProps = {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
};

export function PageShell({ breadcrumbs, children }: PageShellProps) {
  return (
    <div className="bg-bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <div className="pt-10 sm:pt-14">{children}</div>
      <FooterCallToAction />
    </div>
  );
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
        <li>
          <Link href="/" className="transition-colors hover:text-accent-dark">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li
            key={`${item.href ?? "current"}-${item.label}`}
            className="flex items-center gap-2"
          >
            <span aria-hidden="true" className="text-border-strong">
              /
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-accent-dark"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-text-secondary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function FooterCallToAction() {
  return (
    <section className="border-y border-accent/30 bg-accent-muted">
      <div className="mx-auto flex min-h-[160px] w-full max-w-7xl flex-col justify-center gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <h2 className="font-display text-display-sm font-bold text-text-primary">
            Ready to build something secure?
          </h2>
          <p className="mt-2 text-[15px] text-text-secondary">
            Start with a focused conversation about your product.
          </p>
        </div>
        <Link
          href="/book-a-call"
          className="btn-primary self-start md:self-auto"
        >
          Book a call
        </Link>
      </div>
      <SectionDivider />
    </section>
  );
}
