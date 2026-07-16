import Link from "next/link";
import {
  DefinitiveAnswer,
  FaqAccordion,
  PageBottomCta,
  ProofPoint,
  RelatedContent,
} from "@/components/content";
import { PageShell } from "@/components/layout/PageShell";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { FaqItem } from "@/lib/schema";

export type IndustryChallenge = {
  title: string;
  description: string;
  implication: string;
};

export type IndustryPrinciple = {
  title: string;
  description: string;
  practicalResult: string;
};

export type IndustryService = {
  label: string;
  title: string;
  description: string;
  href: string;
};

export type IndustryPageTemplateProps = {
  name: string;
  label: string;
  positioning: string;
  trustTest: string;
  definitiveAnswer: string;
  differences: {
    title: string;
    introduction: string;
    challenges: IndustryChallenge[];
    closing: string;
  };
  approach: {
    title: string;
    introduction: string;
    principles: IndustryPrinciple[];
  };
  services: {
    title: string;
    introduction: string;
    items: IndustryService[];
  };
  caseStudy: {
    eyebrow: string;
    name: string;
    title: string;
    summary: string;
    value: string;
    valueLabel: string;
    detail: string;
    source: string;
    href: string;
    linkLabel: string;
    tags: string[];
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

/**
 * Shared composition for industry pages.
 *
 * Unlike ServicePageTemplate, this template starts with domain pressures and
 * operating principles. Services only appear after the page has established
 * industry understanding and are framed as relevant capabilities, not a
 * delivery menu.
 */
export function IndustryPageTemplate({
  name,
  label,
  positioning,
  trustTest,
  definitiveAnswer,
  differences,
  approach,
  services,
  caseStudy,
  faqs,
  faqContent,
  cta,
}: IndustryPageTemplateProps) {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Industries", href: "/#industries" },
        { label: name },
      ]}
      footerCta={
        <PageBottomCta
          variant="industry"
          eyebrow={`${name} product conversations`}
          title={cta.title}
          description={cta.description}
          action={cta.action}
          href={cta.href}
        />
      }
    >
      <article>
        <header className="bg-bg-ink text-text-inverse">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-end lg:gap-20">
              <div className="animate-[fade-in_0.45s_ease-out]">
                <p className="font-mono text-label uppercase text-accent">
                  {label}
                </p>
                <h1 className="mt-7 max-w-4xl font-display text-[clamp(58px,9vw,112px)] font-extrabold leading-[0.9] tracking-[-0.06em] text-text-inverse">
                  {name}
                  <span className="text-accent">.</span>
                </h1>
                <p className="mt-9 max-w-3xl font-display text-[clamp(24px,3vw,36px)] font-semibold leading-[1.22] tracking-[-0.025em] text-text-inverse">
                  {positioning}
                </p>
              </div>

              <aside className="border-l border-accent/50 pl-6 sm:pl-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  The {name} trust test
                </p>
                <p className="mt-5 font-body text-base leading-7 text-text-inverse/70">
                  {trustTest}
                </p>
                <Link
                  href="#what-makes-it-different"
                  className="link-accent mt-7 inline-flex"
                >
                  See what changes in this industry →
                </Link>
              </aside>
            </div>

            <div className="mt-14 lg:mt-20">
              <DefinitiveAnswer
                label="Definitive answer"
                title={`What ${name} demands from a product partner`}
                answer={definitiveAnswer}
              />
            </div>
          </div>
        </header>

        <section
          id="what-makes-it-different"
          className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md"
          aria-labelledby="industry-differences-title"
        >
          <div className="grid gap-8 border-b border-border-default pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14">
            <div>
              <p className="section-label">What makes {name} different</p>
              <h2
                id="industry-differences-title"
                className="mt-5 max-w-2xl font-display text-display-lg font-extrabold text-text-primary"
              >
                {differences.title}
              </h2>
            </div>
            <p className="max-w-2xl font-body text-lg leading-8 text-text-secondary lg:justify-self-end">
              {differences.introduction}
            </p>
          </div>

          <div className="grid border-l border-border-default md:grid-cols-2">
            {differences.challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="group relative min-h-[300px] border-b border-r border-border-default bg-bg-base p-7 transition-colors duration-200 hover:bg-bg-surface sm:p-9 lg:p-10"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-accent-dark">
                  REALITY {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 max-w-md font-display text-2xl font-bold leading-8 text-text-primary">
                  {challenge.title}
                </h3>
                <p className="mt-4 max-w-xl font-body text-[15px] leading-7 text-text-secondary">
                  {challenge.description}
                </p>
                <p className="mt-7 border-l-2 border-accent pl-4 font-body text-sm font-semibold leading-6 text-text-primary">
                  Founder implication: {challenge.implication}
                </p>
              </article>
            ))}
          </div>

          <p className="border-x border-b border-accent/30 bg-accent-muted px-7 py-7 font-display text-xl font-semibold leading-8 text-text-primary sm:px-10">
            {differences.closing}
          </p>
        </section>

        <section
          className="border-y border-border-default bg-bg-surface"
          aria-labelledby="industry-approach-title"
        >
          <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="section-label">How we approach {name} projects</p>
                <h2
                  id="industry-approach-title"
                  className="mt-5 font-display text-display-md font-extrabold text-text-primary"
                >
                  {approach.title}
                </h2>
                <p className="mt-6 max-w-md font-body text-base leading-7 text-text-secondary">
                  {approach.introduction}
                </p>
              </div>

              <div className="grid gap-px border border-border-default bg-border-default sm:grid-cols-2">
                {approach.principles.map((principle, index) => (
                  <article
                    key={principle.title}
                    className="bg-bg-base p-7 sm:p-8"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-dark">
                        Principle {String(index + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden="true" className="h-2 w-2 bg-accent" />
                    </div>
                    <h3 className="mt-9 font-display text-xl font-bold leading-7 text-text-primary">
                      {principle.title}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-6 text-text-secondary">
                      {principle.description}
                    </p>
                    <p className="mt-7 border-t border-border-subtle pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-text-muted">
                      In practice: {principle.practicalResult}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
          <RelatedContent
            eyebrow={`Relevant services / ${name}`}
            title={services.title}
            introduction={services.introduction}
            items={services.items}
          />
        </section>

        <section
          className="bg-bg-ink text-text-inverse"
          aria-labelledby="industry-proof-title"
        >
          <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
            <div className="px-5 py-section-sm sm:px-8 lg:border-r lg:border-white/10 lg:px-10 lg:py-section-md">
              <p className="font-mono text-label uppercase text-accent">
                {caseStudy.eyebrow}
              </p>
              <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.12em] text-text-inverse/50">
                {caseStudy.name}
              </p>
              <h2
                id="industry-proof-title"
                className="mt-4 max-w-2xl font-display text-display-lg font-extrabold text-text-inverse"
              >
                {caseStudy.title}
              </h2>
              <p className="mt-7 max-w-2xl font-body text-base leading-7 text-text-inverse/70">
                {caseStudy.summary}
              </p>
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

            <div className="flex flex-col justify-between bg-accent-muted px-5 py-14 sm:px-8 lg:px-10 lg:py-section-md">
              <ProofPoint
                value={caseStudy.value}
                label={caseStudy.valueLabel}
                detail={caseStudy.detail}
                source={caseStudy.source}
              />
              <Link
                href={caseStudy.href}
                className="link-accent mt-10 inline-flex self-start"
              >
                {caseStudy.linkLabel}
              </Link>
            </div>
          </div>
        </section>

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
