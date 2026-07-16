import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/fintech";
const description =
  "FinTech product expertise for founders navigating financial data, user trust, compliance readiness, payments, identity, and secure product growth.";

export const metadata: Metadata = createPageMetadata({
  title: "FinTech Product Development & Security Expertise",
  description,
  path,
  openGraphTitle: "A Product Partner That Understands FinTech Trust",
  openGraphDescription:
    "Build with a team that treats financial data, permissions, auditability, compliance evidence, and user confidence as product fundamentals.",
});

const faqs: FaqItem[] = [
  {
    question: "How do you protect financial and personally identifiable data?",
    answer:
      "We begin by mapping which data the product collects, where it moves, who can access it, and how long it should exist. The architecture then applies narrow permissions, tenant separation, encryption in transit and at rest, protected secrets, meaningful audit events, tested recovery, and careful controls around support and administrative access. Where the product promise justifies it, we also evaluate designs in which the platform cannot decrypt selected customer content. The exact control set follows the data and threat model rather than a generic security checklist.",
  },
  {
    question: "Can you make our FinTech product compliant?",
    answer:
      "A development partner cannot certify the whole company or replace legal, risk, and compliance advisers. We can make the product more ready for the requirements in scope: map data and vendors, translate obligations into technical controls, document decisions, preserve evidence, and build workflows for access, retention, incidents, and auditability. Whether PCI DSS, SOC 2, privacy rules, or a regulated financial activity applies depends on your product, markets, partners, and operating model, so we establish that boundary before promising an outcome.",
  },
  {
    question: "Do we need to be PCI compliant if we use a payment provider?",
    answer:
      "Using a provider can greatly reduce the card-data environment, especially when card details go directly to provider-hosted fields or pages and your application receives tokens instead. It does not automatically remove every responsibility. Checkout design, server-side integrations, scripts, operational access, and the provider arrangement still determine your scope. We design to minimize sensitive payment handling and confirm the intended boundary with your payment and compliance specialists.",
  },
  {
    question:
      "What should we look for when choosing a FinTech development partner?",
    answer:
      "Ask the team to explain how it will map data flows, separate customer and staff permissions, handle failed or repeated transactions, protect logs and backups, assess third-party providers, and produce evidence for buyer or compliance review. Strong answers should include trade-offs and ownership, not only a list of security tools. You should also see how delivery progress, architecture decisions, risks, and costs will remain visible throughout the engagement.",
  },
  {
    question: "How much does a FinTech product cost to build?",
    answer:
      "Cost depends less on the FinTech label than on the number of financial workflows, user roles, integrations, data classifications, markets, and assurance requirements. A focused product using established identity and payment providers costs materially less than a multi-market platform that holds funds, calculates regulated outcomes, or needs extensive operational tooling. We start with a short discovery and risk-mapping phase, then provide a phased scope with assumptions so the first release proves the business without hiding essential trust work in a later budget.",
  },
  {
    question: "How long does it take to launch a FinTech MVP?",
    answer:
      "A tightly scoped first release may be delivered in a few months, while products with licensing dependencies, complex money movement, several integrations, or formal assurance work take longer. Timeline should include provider onboarding, legal and compliance decisions, test data, security review, operational readiness, and pilot feedback—not only coding. We identify those external dependencies early and sequence the product so useful validation can happen without pretending a production financial system is ready before its controls and operations are ready.",
  },
];

export default function FintechPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "FinTech",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="FinTech"
        label="Industry / Financial technology"
        positioning="When a product touches money, identity, or financial decisions, trust is not a brand layer. It is part of the transaction."
        trustTest="A FinTech product has to make the correct action clear, keep the financial record accurate, limit who can intervene, and produce evidence when a customer, partner, auditor, or regulator asks what happened."
        definitiveAnswer="A credible FinTech product partner understands that security, compliance readiness, transaction integrity, and user confidence are one connected product problem. The work must reduce sensitive-data exposure, make financial actions traceable and recoverable, and preserve a clear boundary between what the software can support and what licensed, legal, risk, or compliance specialists must approve."
        differences={{
          title:
            "The product is handling more than data. It is handling confidence.",
          introduction:
            "FinTech founders operate inside an unusually tight relationship between software behavior and business credibility. A confusing status, an untraceable staff action, or a duplicated event can become a financial, regulatory, and reputational problem at the same time.",
          challenges: [
            {
              title: "Financial data reveals a person, not just an account.",
              description:
                "Balances, transactions, assets, identity records, beneficiary details, and risk signals can expose wealth, relationships, habits, and future intent. Copies often spread across analytics, support tools, logs, exports, and vendors unless the data lifecycle is deliberately constrained.",
              implication:
                "You need to know where sensitive information travels before you can make a defensible promise about who can see it.",
            },
            {
              title: "Money movement requires an explainable history.",
              description:
                "Payment and ledger-adjacent workflows must cope with delayed callbacks, retries, reversals, refunds, reconciliation, and provider disagreement. The interface cannot simply display success because a request was sent; the system needs explicit states and an authoritative record.",
              implication:
                "Correct exception handling and reconciliation matter as much as the happy-path checkout or transfer flow.",
            },
            {
              title: "Compliance scope follows the business model and market.",
              description:
                "A budgeting tool, payment facilitator, lender, wallet, and investment platform do not inherit the same obligations. Product scope, geography, data, partners, custody, and regulated activities shape which privacy, payment, identity, reporting, and assurance expectations apply.",
              implication:
                "A partner should surface scope questions early, without acting as your regulator, auditor, or legal counsel.",
            },
            {
              title:
                "Internal access can be as consequential as a public breach.",
              description:
                "Support, finance, compliance, and operations teams may need to investigate accounts or correct exceptions. Broad admin permissions, shared access, invisible exports, and weak approval flows create day-to-day risk even when customer authentication is strong.",
              implication:
                "Privileged workflows need narrow roles, sensitive-action logs, and deliberate approval or review boundaries.",
            },
            {
              title: "Trust is won in edge cases and failure states.",
              description:
                "Customers become anxious when money appears missing, identity review stalls, an amount changes, or a beneficiary action is unclear. Precise status language, safe retries, support context, notifications, and recovery paths are security and retention features—not merely UX polish.",
              implication:
                "The product must tell the truth about uncertainty and give users a safe next action when dependencies fail.",
            },
            {
              title: "Third parties become part of your trust boundary.",
              description:
                "Identity, banking, payments, credit data, messaging, analytics, and cloud providers can each receive valuable information or influence a financial outcome. Their outages, webhooks, permissions, retention, and contract terms affect the product promise.",
              implication:
                "Vendor selection and integration design should be evaluated as risk architecture, not procurement after the build.",
            },
          ],
          closing:
            "The goal is not to make a young FinTech look regulated. It is to build a product whose data boundaries, financial states, privileged actions, and evidence can withstand serious questions.",
        }}
        approach={{
          title: "Start with the trust boundary, then make it operable.",
          introduction:
            "Our FinTech approach joins product decisions to the evidence and operational reality behind them. That gives founders a clearer path through partner diligence and compliance work without turning every early release into an enterprise program.",
          principles: [
            {
              title: "Establish scope before architecture",
              description:
                "We map users, financial activities, markets, data classes, money and data flows, vendors, staff roles, and known partner requirements. Legal and compliance owners validate obligations; the product team turns the confirmed boundary into buildable controls.",
              practicalResult:
                "data-flow map, responsibility boundary, risk-ranked scope",
            },
            {
              title: "Minimize what the product must be trusted with",
              description:
                "We prefer tokenized or provider-hosted payment and identity flows where appropriate, collect only necessary data, narrow retention, isolate tenants and environments, and restrict routine human access to sensitive records.",
              practicalResult:
                "smaller sensitive-data footprint and clearer vendor boundaries",
            },
            {
              title: "Design financial states for failure",
              description:
                "Integrations are modeled for delayed, duplicated, out-of-order, disputed, reversed, and partially completed events. Idempotency, reconciliation, authoritative status, and manual exception handling are designed with the user journey.",
              practicalResult:
                "traceable workflows that fail without inventing financial truth",
            },
            {
              title: "Build evidence alongside controls",
              description:
                "Architecture decisions, access boundaries, audit events, recovery tests, vendor dependencies, and control ownership stay understandable. This supports buyer diligence and later assurance work without claiming that documentation alone creates compliance.",
              practicalResult:
                "reviewable decisions, test evidence, and an owned control backlog",
            },
          ],
        }}
        services={{
          title: "Capabilities that support the FinTech trust model.",
          introduction:
            "These services are most relevant once the industry constraints are understood. The right mix depends on whether the immediate risk sits in the product foundation, security model, or systems behind financial workflows.",
          items: [
            {
              label: "01 / Product",
              title: "SaaS Product Development",
              description:
                "End-to-end SaaS delivery where customer journeys, operational tooling, data boundaries, and reliable releases are designed as one product.",
              href: "/saas-product-development",
            },
            {
              label: "02 / Trust",
              title: "Security Architecture",
              description:
                "A founder-readable model for sensitive data, identity, permissions, encryption, auditability, resilience, and compliance evidence.",
              href: "/security-architecture",
            },
            {
              label: "03 / Systems",
              title: "API & Backend Systems",
              description:
                "Reliable backend boundaries and integrations for financial states, provider events, administrative workflows, and traceable recovery.",
              href: "/api-and-backend-systems",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / LegalTech and FinTech-adjacent",
          name: "SafeHerit",
          title:
            "A financial legacy vault built around a promise the platform itself had to keep.",
          summary:
            "SafeHerit handles inheritance plans, asset records, beneficiary instructions, and private documents—information with financial and deeply personal consequences. CWN Solutions built the product around zero-knowledge encryption so the platform can support storage and handover without holding the ability to read protected customer content. The work required privacy, access, recovery, and usability decisions to agree rather than compete.",
          value: "100%",
          valueLabel: "security audit pass rate",
          detail:
            "SafeHerit demonstrates the kind of product reasoning FinTech requires: reduce operator access, make a difficult trust claim technically meaningful, and preserve a usable path through sensitive financial and family workflows.",
          source: "SafeHerit portfolio proof point",
          href: "/case-studies/safeherit",
          linkLabel: "Read the SafeHerit case study →",
          tags: [
            "Zero-knowledge encryption",
            "Financial records",
            "Access control",
            "Sensitive-data architecture",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "FinTech founder FAQ",
          title: "Questions to settle before choosing a product partner.",
          introduction:
            "Straight answers about security responsibility, compliance readiness, payment scope, partner selection, budget, and launch timing.",
        }}
        cta={{
          title: "Talk to someone who’s built in FinTech.",
          description:
            "Bring the product model, sensitive-data questions, partner requirements, and the compliance unknowns. We’ll help separate the decisions the product team can own from the ones your legal, risk, and regulatory advisers need to validate.",
          action: "Discuss your FinTech product",
          href: "/#contact",
        }}
      />
    </>
  );
}
