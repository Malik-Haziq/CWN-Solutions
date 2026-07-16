import type { Metadata } from "next";
import Link from "next/link";
import { PageBottomCta } from "@/components/content";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

const path = "/services";
const description =
  "Explore seven security-first product development services spanning SaaS, startup MVPs, enterprise AI, hospitality, e-commerce, security architecture, and backend systems.";

export const metadata: Metadata = createPageMetadata({
  title: "Security-First Product Development Services",
  description,
  path,
  openGraphTitle: "Product Development Services | CWN Solutions",
  openGraphDescription:
    "Seven focused ways to define, build, secure, integrate, and scale digital products in trust-critical markets.",
});

const services = [
  {
    name: "SaaS Product Development",
    href: "/saas-product-development",
    label: "Product development",
    answer:
      "An end-to-end service for founders who need a specialist team to define, design, build, secure, and launch a cloud software product without first assembling an in-house engineering organization.",
  },
  {
    name: "MVP for Startups",
    href: "/mvp-for-startups",
    label: "Startup launch",
    answer:
      "A focused engagement that converts one high-stakes customer problem into secure, production-ready software fast enough to test demand, demonstrate execution, and guide the next use of runway.",
  },
  {
    name: "Enterprise AI Integration",
    href: "/enterprise-ai-integration",
    label: "Applied AI",
    answer:
      "The disciplined connection of language models to authorized company knowledge, identity, business systems, evaluation controls, and human decision points so AI can operate safely inside day-to-day work.",
  },
  {
    name: "Hospitality Digital Transformation",
    href: "/hospitality-digital-transformation",
    label: "Hospitality technology",
    answer:
      "The coordinated redesign of guest touchpoints, staff workflows, data flows, and property-system integrations so operators can improve the stay without losing operational continuity.",
  },
  {
    name: "E-commerce Platforms",
    href: "/e-commerce-platforms",
    label: "Digital commerce",
    answer:
      "The end-to-end delivery of a secure buying system—storefront, checkout, catalog, customer accounts, integrations, and operational tools—shaped around how the business actually sells and fulfills.",
  },
  {
    name: "Security Architecture",
    href: "/security-architecture",
    label: "Product security",
    answer:
      "The design of a product's protective structure—data boundaries, identity, permissions, encryption, audit trails, infrastructure, recovery, and operating controls—before isolated fixes become the architecture.",
  },
  {
    name: "API & Backend Systems",
    href: "/api-and-backend-systems",
    label: "Product infrastructure",
    answer:
      "The product's operational core: rules, data, permissions, integrations, background work, monitoring, recovery, and scaling behavior built to remain dependable when users and other systems rely on it.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "CWN Solutions services",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.name,
            url: absoluteUrl(service.href),
          })),
        }}
      />
      <PageShell
        breadcrumbs={[{ label: "Services" }]}
        footerCta={
          <PageBottomCta
            variant="service"
            title="Start with the business problem, not a service label."
            description="Bring the product idea, operational bottleneck, or technical concern. We’ll identify the right engagement, the trust risks to handle first, and a credible next step."
            action="Book a focused scoping call"
            href="/#contact"
          />
        }
      >
        <article>
          <header className="mx-auto w-full max-w-7xl px-5 pb-section-sm sm:px-8 lg:px-10 lg:pb-section-md">
            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-16">
              <div className="animate-[fade-in_0.45s_ease-out]">
                <p className="section-label">What we build</p>
                <h1 className="mt-6 max-w-5xl font-display text-[clamp(52px,8vw,104px)] font-extrabold leading-[0.94] tracking-[-0.05em] text-text-primary">
                  Product services<span className="text-accent">.</span>
                </h1>
              </div>
              <div className="border-l border-border-default pl-6 sm:pl-8 lg:mb-2">
                <p className="font-display text-[clamp(20px,2.2vw,28px)] font-semibold leading-[1.35] text-text-primary">
                  Seven focused ways to move a trust-critical product from
                  uncertainty to working software.
                </p>
                <p className="mt-5 font-body text-sm leading-6 text-text-secondary">
                  Each service combines clear product decisions, visible
                  delivery, and security as part of the build—not a final review
                  item.
                </p>
              </div>
            </div>
          </header>

          <section
            className="border-y border-border-default bg-bg-surface"
            aria-labelledby="service-index-title"
          >
            <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-section-sm sm:px-8 lg:grid-cols-[32fr_68fr] lg:gap-20 lg:px-10 lg:py-section-md">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="section-label">Service index / 01—07</p>
                <h2
                  id="service-index-title"
                  className="mt-5 max-w-sm font-display text-display-md font-extrabold text-text-primary"
                >
                  Choose by the uncertainty you need to remove.
                </h2>
                <p className="mt-5 max-w-sm font-body text-base leading-7 text-text-secondary">
                  Every offer has a specific job. The one-line definition tells
                  you what the engagement is actually responsible for.
                </p>
                <span
                  aria-hidden="true"
                  className="mt-9 block h-px w-16 bg-accent"
                />
              </div>

              <div className="border-t border-border-default">
                {services.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`group relative grid gap-5 border-b border-border-default py-9 transition-colors duration-200 hover:bg-bg-base sm:grid-cols-[84px_1fr_auto] sm:items-start sm:px-5 sm:py-11 ${index % 2 === 1 ? "lg:ml-10" : "lg:mr-10"}`}
                  >
                    <span className="font-display text-4xl font-extrabold tracking-[-0.05em] text-border-strong transition-colors group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-dark">
                        {service.label} / Definitive answer
                      </p>
                      <h3 className="mt-3 font-display text-[clamp(24px,3vw,34px)] font-bold leading-tight tracking-[-0.025em] text-text-primary transition-colors group-hover:text-accent-dark">
                        {service.name}
                      </h3>
                      <p className="mt-4 max-w-2xl font-body text-[15px] leading-7 text-text-secondary">
                        {service.answer}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-2xl text-accent transition-transform duration-200 group-hover:translate-x-1 sm:pl-3"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <SectionDivider />
        </article>
      </PageShell>
    </>
  );
}
