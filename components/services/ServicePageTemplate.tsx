import Link from "next/link";
import {
  ComparisonTable,
  DefinitiveAnswer,
  FaqAccordion,
  PageBottomCta,
  ProofPoint,
  RelatedContent,
  type ComparisonRow,
} from "@/components/content";
import { PageShell } from "@/components/layout/PageShell";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { FaqItem } from "@/lib/schema";

export type ServicePhase = {
  title: string;
  summary: string;
  trustReason: string;
  output: string;
};

export type ServiceIndustry = {
  name: string;
  description: string;
  href: string;
  code: string;
};

export type ServicePageTemplateProps = {
  name: string;
  label: string;
  positioning: string;
  definitiveAnswer: string;
  problem: {
    title: string;
    introduction: string;
    pressures: { title: string; description: string }[];
    closing: string;
  };
  includedContent: {
    title: string;
    introduction: string;
  };
  phases: ServicePhase[];
  comparison: {
    title: string;
    description: string;
    rows: ComparisonRow[];
  };
  caseStudy: {
    eyebrow: string;
    name: string;
    title: string;
    summary: string;
    metric: string;
    metricLabel: string;
    metricDetail: string;
    href: string;
    linkLabel?: string;
    sourceLabel?: string;
    additionalLinks?: { href: string; label: string }[];
    tags: string[];
  };
  industries: ServiceIndustry[];
  industriesContent: {
    title: string;
    introduction: string;
  };
  faqs: FaqItem[];
  faqContent: {
    eyebrow: string;
    title: string;
    introduction: string;
  };
  cta: {
    title: string;
    description: string;
    action: string;
    href: string;
  };
};

export function ServicePageTemplate({
  name,
  label,
  positioning,
  definitiveAnswer,
  problem,
  includedContent,
  phases,
  comparison,
  caseStudy,
  industries,
  industriesContent,
  faqs,
  faqContent,
  cta,
}: ServicePageTemplateProps) {
  return (
    <PageShell
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: name }]}
      footerCta={
        <PageBottomCta
          variant="service"
          title={cta.title}
          description={cta.description}
          action={cta.action}
          href={cta.href}
        />
      }
    >
      <article>
        <header className="mx-auto w-full max-w-7xl px-5 pb-section-sm sm:px-8 lg:px-10 lg:pb-section-md">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(310px,0.55fr)] lg:gap-16">
            <div className="animate-[fade-in_0.45s_ease-out]">
              <p className="section-label">{label}</p>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7.4vw,92px)] font-extrabold leading-[0.98] tracking-[-0.045em] text-text-primary">
                {name}
                <span className="text-accent">.</span>
              </h1>
            </div>

            <div className="border-l border-border-default pl-6 sm:pl-8 lg:mb-2">
              <p className="font-display text-[clamp(20px,2.2vw,28px)] font-semibold leading-[1.35] text-text-primary">
                {positioning}
              </p>
              <Link href="#included" className="link-accent mt-7 inline-flex">
                See what the engagement includes →
              </Link>
            </div>
          </div>

          <div className="mt-14 lg:mt-20">
            <DefinitiveAnswer
              label="Definitive answer"
              title="What this service is"
              answer={definitiveAnswer}
            />
          </div>
        </header>

        <section
          className="bg-bg-ink text-text-inverse"
          aria-labelledby="service-problem-title"
        >
          <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-[40fr_60fr]">
            <div className="px-5 py-14 sm:px-8 sm:py-16 lg:border-r lg:border-white/10 lg:px-10 lg:py-24">
              <p className="font-mono text-label uppercase text-accent">
                The problem
              </p>
              <h2
                id="service-problem-title"
                className="mt-5 max-w-md font-display text-display-md font-extrabold text-text-inverse"
              >
                {problem.title}
              </h2>
              <p className="mt-6 max-w-md font-body text-base leading-7 text-text-inverse/65">
                {problem.introduction}
              </p>
            </div>

            <div className="border-t border-white/10 lg:border-t-0">
              {problem.pressures.map((pressure, index) => (
                <div
                  key={pressure.title}
                  className="grid gap-4 border-b border-white/10 px-5 py-8 last:border-b-0 sm:grid-cols-[64px_1fr] sm:px-8 sm:py-10 lg:px-12"
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-inverse">
                      {pressure.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-[15px] leading-7 text-text-inverse/65">
                      {pressure.description}
                    </p>
                  </div>
                </div>
              ))}
              <p className="border-t border-accent/30 bg-accent/10 px-5 py-7 font-display text-lg font-semibold leading-7 text-text-inverse sm:px-8 lg:px-12">
                {problem.closing}
              </p>
            </div>
          </div>
        </section>

        <section
          id="included"
          className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-section-sm sm:px-8 lg:grid-cols-[32fr_68fr] lg:gap-20 lg:px-10 lg:py-section-md"
          aria-labelledby="included-title"
        >
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">What&apos;s included</p>
            <h2
              id="included-title"
              className="mt-5 font-display text-display-md font-extrabold text-text-primary"
            >
              {includedContent.title}
            </h2>
            <p className="mt-5 max-w-sm font-body text-base leading-7 text-text-secondary">
              {includedContent.introduction}
            </p>
          </div>

          <div className="border-t border-border-default">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className={`relative grid gap-5 border-b border-border-default py-9 sm:grid-cols-[92px_1fr] sm:py-11 ${index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"}`}
              >
                <div>
                  <span className="font-display text-4xl font-extrabold tracking-[-0.05em] text-border-default">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    {phase.title}
                  </h3>
                  <p className="mt-4 font-body text-[15px] leading-7 text-text-secondary">
                    {phase.summary}
                  </p>
                  <div className="mt-6 grid gap-4 border-l-2 border-accent bg-accent-muted px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <p className="font-body text-sm leading-6 text-text-primary">
                      <span className="font-semibold">
                        Why it matters for trust:
                      </span>{" "}
                      {phase.trustReason}
                    </p>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent-dark sm:max-w-[150px] sm:text-right">
                      Output: {phase.output}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-y border-border-default bg-bg-surface">
          <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
            <ComparisonTable
              eyebrow="How we work differently"
              title={comparison.title}
              description={comparison.description}
              columns={{
                label: "Decision area",
                primary: "How we do it",
                secondary: "Typical agency",
              }}
              rows={comparison.rows}
            />
          </div>
        </div>

        <section
          className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md"
          aria-labelledby="case-study-title"
        >
          <div className="grid overflow-hidden border border-border-default lg:grid-cols-[52fr_48fr]">
            <div className="flex flex-col justify-between bg-bg-ink p-7 sm:p-10 lg:p-14">
              <div>
                <p className="font-mono text-label uppercase text-accent">
                  {caseStudy.eyebrow}
                </p>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-text-inverse/50">
                  {caseStudy.name}
                </p>
                <h2
                  id="case-study-title"
                  className="mt-3 max-w-xl font-display text-display-md font-extrabold text-text-inverse"
                >
                  {caseStudy.title}
                </h2>
                <p className="mt-6 max-w-xl font-body text-base leading-7 text-text-inverse/65">
                  {caseStudy.summary}
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-text-inverse/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-accent-muted p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-accent/20"
              >
                <span className="absolute inset-10 rounded-full border border-accent/25" />
                <span className="absolute inset-20 rounded-full border border-accent/30" />
                <span className="absolute inset-[118px] rounded-full bg-accent" />
              </div>
              <div className="relative mt-24 lg:mt-32">
                <ProofPoint
                  value={caseStudy.metric}
                  label={caseStudy.metricLabel}
                  detail={caseStudy.metricDetail}
                  source={
                    caseStudy.sourceLabel ??
                    `${caseStudy.name} portfolio proof point`
                  }
                />
              </div>
              <div className="relative mt-8 flex flex-col items-start gap-4">
                <Link href={caseStudy.href} className="link-accent inline-flex">
                  {caseStudy.linkLabel ??
                    `Read the ${caseStudy.name} case study →`}
                </Link>
                {caseStudy.additionalLinks?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="link-accent inline-flex"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedContent
          variant="industries"
          eyebrow="Best-fit industries"
          title={industriesContent.title}
          introduction={industriesContent.introduction}
          items={industries.map((industry) => ({
            label: industry.code,
            title: industry.name,
            description: industry.description,
            href: industry.href,
          }))}
        />

        <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
          <FaqAccordion
            items={faqs}
            eyebrow={faqContent.eyebrow}
            title={faqContent.title}
            introduction={faqContent.introduction}
          />
        </div>

        <SectionDivider />
      </article>
    </PageShell>
  );
}
