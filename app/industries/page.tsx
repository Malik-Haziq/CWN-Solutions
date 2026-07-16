import type { Metadata } from "next";
import Link from "next/link";
import { PageBottomCta } from "@/components/content";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

const path = "/industries";
const description =
  "Explore seven trust-critical industries where CWN Solutions brings security-first product judgment: FinTech, LegalTech, HealthTech, Enterprise AI, Hospitality Tech, E-commerce, and Security Tech.";

export const metadata: Metadata = createPageMetadata({
  title: "Trust-Critical Industry Expertise",
  description,
  path,
  openGraphTitle: "Industry Expertise | CWN Solutions",
  openGraphDescription:
    "Seven industries where product credibility depends on understanding the data, trust, operational, and security reality behind the software.",
});

const industries = [
  {
    number: "01",
    code: "FT",
    name: "FinTech",
    href: "/fintech",
    positioning:
      "Money, identity, and financial decisions require traceable states, constrained privilege, and evidence that can survive serious scrutiny.",
    detail: "Financial data / Transactions / Compliance readiness",
    layout: "lg:col-span-7",
    tone: "dark",
  },
  {
    number: "02",
    code: "LT",
    name: "LegalTech",
    href: "/legaltech",
    positioning:
      "Client confidentiality depends on matter-aware access, dependable document history, and custody events that preserve context as well as content.",
    detail: "Confidentiality / Documents / Chain of custody",
    layout: "lg:col-span-5",
    tone: "light",
  },
  {
    number: "03",
    code: "HT",
    name: "HealthTech",
    href: "/healthtech",
    positioning:
      "Sensitive personal health information should be minimized, contextual, correctable, and available only within an accountable relationship.",
    detail: "Sensitive data / Patient trust / Contextual access",
    layout: "lg:col-span-5",
    tone: "light",
  },
  {
    number: "04",
    code: "AI",
    name: "Enterprise AI",
    href: "/enterprise-ai",
    positioning:
      "Private knowledge, inherited permissions, probabilistic output, and automated actions need one governable path from source to decision.",
    detail: "Model boundaries / Permissions / Auditability",
    layout: "lg:col-span-7",
    tone: "accent",
  },
  {
    number: "05",
    code: "HO",
    name: "Hospitality Tech",
    href: "/hospitality-tech",
    positioning:
      "Guest trust and booking truth have to move safely across properties, shifts, payments, vendors, and systems that never stop together.",
    detail: "Guest data / Booking reliability / Property operations",
    layout: "lg:col-span-7",
    tone: "light",
  },
  {
    number: "06",
    code: "EC",
    name: "E-commerce",
    href: "/e-commerce",
    positioning:
      "The commercial promise spans payment exposure, customer accounts, staff access, order accuracy, and recoverable fulfillment—not only storefront conversion.",
    detail: "Payments / Customer identity / Order integrity",
    layout: "lg:col-span-5",
    tone: "dark",
  },
  {
    number: "07",
    code: "ST",
    name: "Security Tech",
    href: "/security-tech",
    positioning:
      "When security is the product, every claim must remain true through architecture, key ownership, recovery, operations, and real user behavior.",
    detail: "Security-as-product / Zero knowledge / Evidence",
    layout: "lg:col-span-12",
    tone: "accent",
  },
] as const;

function cardTone(tone: (typeof industries)[number]["tone"]) {
  if (tone === "dark") {
    return {
      card: "border-bg-ink bg-bg-ink",
      number: "text-white/10 group-hover:text-accent/25",
      label: "text-accent",
      title: "text-text-inverse group-hover:text-accent",
      copy: "text-text-inverse/65",
      detail: "border-white/10 text-text-inverse/45",
      arrow: "text-accent",
    };
  }

  if (tone === "accent") {
    return {
      card: "border-accent/30 bg-accent-muted",
      number: "text-accent/15 group-hover:text-accent/30",
      label: "text-accent-dark",
      title: "text-text-primary group-hover:text-accent-dark",
      copy: "text-text-secondary",
      detail: "border-accent/20 text-text-muted",
      arrow: "text-accent-dark",
    };
  }

  return {
    card: "border-border-default bg-bg-surface",
    number: "text-border-subtle group-hover:text-accent/20",
    label: "text-accent-dark",
    title: "text-text-primary group-hover:text-accent-dark",
    copy: "text-text-secondary",
    detail: "border-border-subtle text-text-muted",
    arrow: "text-accent",
  };
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "CWN Solutions industry expertise",
          itemListElement: industries.map((industry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: industry.name,
            url: absoluteUrl(industry.href),
          })),
        }}
      />
      <PageShell
        breadcrumbs={[{ label: "Industries" }]}
        footerCta={
          <PageBottomCta
            variant="industry"
            title="Bring the industry reality, not a generic feature list."
            description="Tell us where trust, regulation, sensitive data, or operational failure changes the product. We’ll start the conversation there."
            action="Discuss your industry"
            href="/#contact"
          />
        }
      >
        <article>
          <header className="mx-auto w-full max-w-7xl px-5 pb-section-sm sm:px-8 lg:px-10 lg:pb-section-md">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-end lg:gap-20">
              <div className="border-l border-accent pl-6 sm:pl-8">
                <p className="section-label">Where context changes the build</p>
                <p className="mt-6 max-w-md font-body text-base leading-7 text-text-secondary">
                  The same feature can carry different obligations in a hotel,
                  law firm, health product, financial platform, or security
                  tool. Industry knowledge begins with those differences.
                </p>
              </div>
              <div className="animate-[fade-in_0.45s_ease-out] lg:text-right">
                <h1 className="font-display text-[clamp(52px,8vw,104px)] font-extrabold leading-[0.94] tracking-[-0.055em] text-text-primary">
                  Industry depth<span className="text-accent">.</span>
                </h1>
                <p className="mt-7 max-w-3xl font-display text-[clamp(20px,2.5vw,30px)] font-semibold leading-[1.35] text-text-primary lg:ml-auto">
                  Seven trust-critical domains where credibility depends on
                  understanding what the software is being trusted to protect.
                </p>
              </div>
            </div>
          </header>

          <section
            className="border-y border-border-default bg-bg-surface"
            aria-labelledby="industry-index-title"
          >
            <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10 lg:py-section-md">
              <div className="grid gap-8 border-b border-border-default pb-10 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="section-label">Industry index / 01—07</p>
                  <h2
                    id="industry-index-title"
                    className="mt-5 max-w-2xl font-display text-display-md font-extrabold text-text-primary"
                  >
                    Choose the trust reality your product has to withstand.
                  </h2>
                </div>
                <p className="max-w-md font-body text-sm leading-6 text-text-secondary md:text-right">
                  Each page explains the domain pressures first, then the
                  product approach, relevant capabilities, proof, and founder
                  questions.
                </p>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-12">
                {industries.map((industry) => {
                  const tone = cardTone(industry.tone);
                  const isSecurity = industry.code === "ST";

                  return (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className={`group relative overflow-hidden border p-7 transition-transform duration-200 hover:-translate-y-1 sm:p-9 ${industry.layout} ${tone.card} ${isSecurity ? "lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16" : "flex min-h-[400px] flex-col"}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute -right-2 -top-7 font-display text-[132px] font-extrabold leading-none tracking-[-0.09em] transition-colors sm:text-[170px] ${tone.number}`}
                      >
                        {industry.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-center justify-between gap-4">
                          <span
                            className={`font-mono text-[10px] uppercase tracking-[0.14em] ${tone.label}`}
                          >
                            {industry.code} / Industry
                          </span>
                          <span
                            aria-hidden="true"
                            className={`text-2xl transition-transform duration-200 group-hover:translate-x-1 ${tone.arrow}`}
                          >
                            →
                          </span>
                        </div>
                        <h3
                          className={`mt-14 max-w-2xl font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.02] tracking-[-0.04em] transition-colors ${tone.title}`}
                        >
                          {industry.name}
                          <span className="text-accent">.</span>
                        </h3>
                      </div>

                      <div
                        className={`relative ${isSecurity ? "mt-9 lg:mt-0" : "mt-auto pt-10"}`}
                      >
                        <p
                          className={`max-w-2xl font-body text-[15px] leading-7 ${tone.copy}`}
                        >
                          {industry.positioning}
                        </p>
                        <p
                          className={`mt-8 border-t pt-5 font-mono text-[9px] uppercase leading-5 tracking-[0.08em] ${tone.detail}`}
                        >
                          {industry.detail}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <SectionDivider />
        </article>
      </PageShell>
    </>
  );
}
