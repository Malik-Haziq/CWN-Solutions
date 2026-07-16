import {
  PageBottomCta,
  ProofPoint,
  RelatedContent,
} from "@/components/content";
import { PageShell } from "@/components/layout/PageShell";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { CaseStudy } from "@/lib/case-studies";
import { ProjectMedia } from "./ProjectMedia";

type CaseStudyPageTemplateProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyPageTemplate({
  caseStudy,
}: CaseStudyPageTemplateProps) {
  const services = caseStudy.related.services.map((item) => ({
    ...item,
    label: item.label ?? "Service",
  }));
  const industries = caseStudy.related.industries.map((item) => ({
    ...item,
    label: item.label ?? "Industry",
  }));
  const relatedItems = [
    services[0],
    industries[0],
    industries[1] ?? services[1],
  ]
    .filter((item) => item !== undefined)
    .map((item) => ({
      ...item,
    }));

  return (
    <PageShell
      breadcrumbs={[
        { label: "Case studies", href: "/case-studies" },
        { label: caseStudy.client },
      ]}
      footerCta={
        <PageBottomCta
          variant="caseStudy"
          title={caseStudy.cta?.title}
          description={caseStudy.cta?.description}
          action={caseStudy.cta?.action}
          href="/#contact"
        />
      }
    >
      <article>
        <header className="mx-auto w-full max-w-7xl px-5 pb-section-sm sm:px-8 lg:px-10 lg:pb-section-md">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] lg:items-end lg:gap-20">
            <div className="animate-[fade-in_0.45s_ease-out]">
              <span className="badge badge-accent">{caseStudy.industry}</span>
              <p className="mt-8 font-mono text-label uppercase text-text-muted">
                Client / {caseStudy.client}
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-[clamp(52px,8vw,104px)] font-extrabold leading-[0.94] tracking-[-0.05em] text-text-primary">
                {caseStudy.client}
                <span className="text-accent">.</span>
              </h1>
            </div>
            <div className="border-l border-accent pl-6 sm:pl-8 lg:mb-2">
              <p className="font-display text-[clamp(22px,2.6vw,32px)] font-semibold leading-[1.28] tracking-[-0.02em] text-text-primary">
                {caseStudy.outcome}
              </p>
              <p className="mt-5 font-body text-sm leading-6 text-text-secondary">
                {caseStudy.description}
              </p>
            </div>
          </div>

          <div className="mt-14 lg:mt-20">
            <ProjectMedia media={caseStudy.media.hero} aspect="hero" priority />
          </div>
        </header>

        <section
          className="border-y border-border-default bg-bg-surface"
          aria-labelledby="challenge-title"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-section-sm sm:px-8 lg:grid-cols-[32fr_68fr] lg:gap-20 lg:px-10 lg:py-section-md">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-label">01 / The challenge</p>
              <span className="mt-8 block h-px w-16 bg-accent" />
            </div>
            <div>
              <h2
                id="challenge-title"
                className="max-w-3xl font-display text-display-lg font-extrabold text-text-primary"
              >
                {caseStudy.challenge.title}
              </h2>
              <div className="mt-8 max-w-3xl space-y-6">
                {caseStudy.challenge.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-body text-[17px] leading-8 text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md"
          aria-labelledby="solution-title"
        >
          <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-20">
            <div>
              <p className="section-label">02 / What we built</p>
              <h2
                id="solution-title"
                className="mt-5 max-w-xl font-display text-display-lg font-extrabold text-text-primary"
              >
                {caseStudy.solution.title}
              </h2>
              <p className="mt-7 max-w-xl font-body text-[17px] leading-8 text-text-secondary">
                {caseStudy.solution.introduction}
              </p>
            </div>

            <div className="border-t border-border-default">
              {caseStudy.solution.details.map((detail, index) => (
                <div
                  key={detail.title}
                  className={`grid gap-5 border-b border-border-default py-8 sm:grid-cols-[64px_1fr] sm:py-10 ${index % 2 === 1 ? "lg:ml-10" : "lg:mr-10"}`}
                >
                  <span className="font-display text-3xl font-extrabold tracking-[-0.05em] text-border-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {detail.title}
                    </h3>
                    <p className="mt-3 font-body text-[15px] leading-7 text-text-secondary">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <ProjectMedia media={caseStudy.media.solution} aspect="landscape" />
          </div>
        </section>

        <section
          className="bg-bg-ink text-text-inverse"
          data-nav-theme="dark"
          aria-labelledby="trust-title"
        >
          <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-[40fr_60fr]">
            <div className="px-5 py-14 sm:px-8 sm:py-16 lg:border-r lg:border-white/10 lg:px-10 lg:py-section-md">
              <p className="font-mono text-label uppercase text-accent">
                03 / Security &amp; trust
              </p>
              <h2
                id="trust-title"
                className="mt-5 max-w-lg font-display text-display-lg font-extrabold text-text-inverse"
              >
                {caseStudy.trust.title}
              </h2>
              <p className="mt-7 max-w-lg font-body text-base leading-7 text-text-inverse/65">
                {caseStudy.trust.introduction}
              </p>
            </div>
            <div className="border-t border-white/10 lg:border-t-0">
              {caseStudy.trust.decisions.map((decision, index) => (
                <div
                  key={decision.title}
                  className="grid gap-4 border-b border-white/10 px-5 py-8 last:border-b-0 sm:grid-cols-[72px_1fr] sm:px-8 sm:py-10 lg:px-12"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    Trust {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-inverse">
                      {decision.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-[15px] leading-7 text-text-inverse/65">
                      {decision.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-border-default bg-bg-surface"
          aria-labelledby="results-title"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
            <div className="grid gap-8 border-b border-border-default pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:pb-14">
              <div>
                <p className="section-label">04 / Results &amp; impact</p>
                <h2
                  id="results-title"
                  className="mt-5 font-display text-display-lg font-extrabold text-text-primary"
                >
                  What changed<span className="text-accent">.</span>
                </h2>
              </div>
              <p className="max-w-2xl font-body text-lg leading-8 text-text-secondary lg:justify-self-end">
                {caseStudy.results.introduction}
              </p>
            </div>

            {caseStudy.results.type === "quantitative" ? (
              <div className="mt-10 space-y-4">
                {caseStudy.results.proofPoints.map((proofPoint, index) => (
                  <ProofPoint
                    key={`${proofPoint.value}-${proofPoint.label}`}
                    {...proofPoint}
                    index={index + 1}
                  />
                ))}
              </div>
            ) : (
              <div className="border-l border-border-default md:grid md:grid-cols-2">
                {caseStudy.results.outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="min-h-[220px] border-b border-r border-border-default p-7 sm:p-9"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-dark">
                      Outcome {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-9 max-w-xl font-display text-xl font-semibold leading-8 text-text-primary">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {caseStudy.media.results ? (
              <div className="mt-12">
                <ProjectMedia
                  media={caseStudy.media.results}
                  aspect="landscape"
                />
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
          <RelatedContent
            eyebrow="05 / Related services & industries"
            title="Explore the capabilities behind the work."
            introduction="The services used to deliver this project and the industry context that shaped the decisions."
            items={relatedItems}
          />
        </section>

        <SectionDivider />
      </article>
    </PageShell>
  );
}
