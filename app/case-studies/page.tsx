import type { Metadata } from "next";
import Link from "next/link";
import { PageBottomCta } from "@/components/content";
import { ProjectMedia } from "@/components/case-studies/ProjectMedia";
import { PageShell } from "@/components/layout/PageShell";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { caseStudies } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/metadata";

const path = "/case-studies";
const description =
  "Explore CWN Solutions case studies covering security-first products, measurable outcomes, and the trust decisions behind the work.";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description,
  path,
  openGraphTitle: "Client Case Studies | CWN Solutions",
  openGraphDescription:
    "The problems, product decisions, security thinking, and outcomes behind CWN Solutions client work.",
});

export default function CaseStudiesPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Case studies" }]}
      footerCta={
        <PageBottomCta
          variant="caseStudy"
          title="Bring us the problem that needs a real outcome."
          description="We’ll help define the product decision, trust requirements, and focused build that can move it forward."
          action="Discuss your project"
          href="/#contact"
        />
      }
    >
      <article>
        <header className="mx-auto w-full max-w-7xl px-5 pb-section-sm sm:px-8 lg:px-10 lg:pb-section-md">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-end lg:gap-16">
            <div className="animate-[fade-in_0.45s_ease-out]">
              <p className="section-label">Selected client work</p>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(52px,8vw,104px)] font-extrabold leading-[0.94] tracking-[-0.05em] text-text-primary">
                Proof in the work<span className="text-accent">.</span>
              </h1>
            </div>
            <div className="border-l border-accent pl-6 sm:pl-8 lg:mb-2">
              <p className="font-display text-[clamp(20px,2.2vw,28px)] font-semibold leading-[1.35] text-text-primary">
                Specific problems. Deliberate product choices. Trust designed
                into the outcome.
              </p>
              <p className="mt-5 font-body text-sm leading-6 text-text-secondary">
                Each story documents the challenge, what we built, the security
                decisions a commodity build would miss, and the impact we can
                substantiate.
              </p>
            </div>
          </div>
        </header>

        <section
          className="border-y border-border-default bg-bg-surface"
          aria-labelledby="case-study-index-title"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
            <div className="flex flex-col gap-6 border-b border-border-default pb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">Case study index</p>
                <h2
                  id="case-study-index-title"
                  className="mt-5 font-display text-display-md font-extrabold text-text-primary"
                >
                  Client outcomes, unpacked.
                </h2>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                {String(caseStudies.length).padStart(2, "0")} published
              </span>
            </div>

            {caseStudies.length > 0 ? (
              <div>
                {caseStudies.map((caseStudy, index) => {
                  const imageFirst = index % 2 === 1;

                  return (
                    <Link
                      key={caseStudy.slug}
                      href={`/case-studies/${caseStudy.slug}`}
                      className="group block border-b border-border-default py-12 last:border-b-0 md:py-16 lg:py-20"
                    >
                      <div className="grid gap-9 md:grid-cols-[52fr_48fr] md:items-stretch md:gap-12 lg:gap-16">
                        <div
                          className={`flex flex-col justify-between ${imageFirst ? "md:order-2" : "md:order-1"}`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-5">
                              <span className="badge badge-accent">
                                {caseStudy.industry}
                              </span>
                              <span className="font-display text-5xl font-extrabold tracking-[-0.06em] text-border-subtle transition-colors group-hover:text-accent/40">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                              Client
                            </p>
                            <h3 className="mt-3 font-display text-display-lg font-extrabold text-text-primary transition-colors group-hover:text-accent-dark">
                              {caseStudy.client}
                              <span className="text-accent">.</span>
                            </h3>
                            <p className="mt-6 max-w-2xl font-display text-[clamp(20px,2.4vw,28px)] font-semibold leading-[1.4] text-text-primary">
                              {caseStudy.outcome}
                            </p>
                          </div>
                          <span className="mt-10 inline-flex items-center gap-2 font-body text-sm font-medium text-accent-dark">
                            Read the case study
                            <span
                              aria-hidden="true"
                              className="transition-transform group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </span>
                        </div>
                        <div
                          className={imageFirst ? "md:order-1" : "md:order-2"}
                        >
                          <ProjectMedia
                            media={caseStudy.media.hero}
                            aspect="landscape"
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="grid border-x border-b border-border-default lg:grid-cols-[0.72fr_1.28fr]">
                <div className="flex min-h-[300px] flex-col justify-between bg-bg-ink p-7 text-text-inverse sm:p-10 lg:min-h-[420px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    Publication status / 00
                  </span>
                  <p className="max-w-md font-display text-display-md font-extrabold">
                    The work is real. The stories are being documented.
                  </p>
                </div>
                <div className="flex min-h-[300px] flex-col justify-center p-7 sm:p-10 lg:min-h-[420px] lg:p-14">
                  <p className="max-w-2xl font-body text-lg leading-8 text-text-secondary">
                    We have not filled this archive with speculative projects,
                    anonymous composites, or invented metrics. Approved client
                    case studies will appear here as they are completed.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link href="/services" className="btn-primary">
                      Explore our services
                    </Link>
                    <Link href="/industries" className="btn-ghost">
                      See our industry focus
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <SectionDivider />
      </article>
    </PageShell>
  );
}
