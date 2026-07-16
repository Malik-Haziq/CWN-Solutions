import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/saas-product-development";
const description =
  "Security-first SaaS product development for pre-seed and seed founders, from product scope and UX through architecture, launch, and handoff.";

export const metadata: Metadata = createPageMetadata({
  title: "SaaS Product Development for Funded Startups",
  description,
  path,
  openGraphTitle: "Security-First SaaS Product Development | CWN Solutions",
  openGraphDescription:
    "Turn a validated SaaS idea into a secure, launch-ready product with a senior team built for trust-critical markets.",
});

const faqs: FaqItem[] = [
  {
    question: "How long does SaaS MVP development take?",
    answer:
      "A focused SaaS MVP usually takes 8–16 weeks from discovery to a production release. Allow roughly 1–2 weeks for product definition, 1–3 weeks for UX and technical design, 6–10 weeks for iterative development, and 1–2 weeks for hardening and launch. Complex permissions, regulated data, mobile apps, legacy migrations, or several third-party integrations can extend that range. We demo working software every two weeks so you can correct course before time is lost.",
  },
  {
    question: "How much does secure SaaS development cost?",
    answer:
      "For planning purposes, a focused agency-built SaaS MVP often starts around US$40,000–$80,000; a more complex product with multiple user roles, payments, sensitive data, audit trails, or deep integrations commonly falls between US$80,000 and $150,000+. The reliable way to price the work is to define the smallest credible release, identify security and integration risks, and estimate that written scope. A cheaper quote that omits architecture, testing, or launch hardening usually moves those costs—and the risk—until later.",
  },
  {
    question:
      "What should be included in a SaaS MVP for a pre-seed or seed startup?",
    answer:
      "A credible SaaS MVP should include one complete journey for a clearly defined customer: secure account creation, the core job they are paying to complete, role-appropriate access, basic billing or a documented billing workflow, essential operational visibility, error monitoring, analytics, backups, and a deployable production environment. It should not attempt every future feature. The goal is enough product to test demand and retention without creating avoidable security or rebuild debt.",
  },
  {
    question: "How do you protect our users' data during SaaS development?",
    answer:
      "Protection starts with deciding what data the product truly needs and mapping who can access it. We then design least-privilege roles, encryption in transit and at rest, secret management, secure authentication and session handling, auditability for sensitive actions, isolated environments, dependency checks, backups, and tested recovery paths. Controls are reviewed during delivery and again before launch; they are not saved for a final penetration test.",
  },
  {
    question:
      "Should I hire an agency or an in-house team to build my first SaaS product?",
    answer:
      "Choose an experienced agency when speed to a first release matters and you need product, design, engineering, DevOps, and security capability immediately. Choose in-house when you have enough runway and technical leadership to recruit, manage, and retain that team, and the product already needs continuous parallel development. Many seed-stage companies use an agency to reach product evidence, then hire internally with a working system, documentation, and clearer role requirements.",
  },
  {
    question: "Who owns the SaaS code and infrastructure after launch?",
    answer:
      "The client should own the production code, cloud accounts, domains, data, and project documentation. Our engagements are structured for that ownership: repositories and environments are handed over, architectural decisions are documented, and the team receives a knowledge-transfer session plus 30 days of post-launch support. Any third-party licenses or recurring infrastructure costs are identified before handoff.",
  },
];

export default function SaasProductDevelopmentPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "SaaS Product Development",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="SaaS Product Development"
        label="Service / Product development"
        positioning="We turn a validated SaaS idea into a secure product customers can trust, investors can evaluate, and your future team can extend."
        definitiveAnswer="SaaS product development is an end-to-end service for pre-seed and seed founders who need a specialist team to define, design, build, secure, and launch a cloud software product without first assembling an in-house engineering organization."
        problem={{
          title: "You need to ship proof—not inherit a technical gamble.",
          introduction:
            "As a non-technical founder, you are expected to make expensive product and security decisions before you have the team to challenge them. The danger is not simply a late launch; it is spending runway on software that works in a demo but fails diligence, buyer review, or real-world use.",
          pressures: [
            {
              title: "The scope keeps moving.",
              description:
                "Customers, investors, and advisors all want something different. Without a product filter, the MVP becomes a collection of requests instead of one convincing reason to buy.",
            },
            {
              title: "You cannot see hidden technical risk.",
              description:
                "Authentication, permissions, data handling, backups, and integrations look like implementation details until one blocks a launch—or appears in an enterprise security questionnaire.",
            },
            {
              title: "You are accountable without clear visibility.",
              description:
                "A vague timeline and occasional status call leave you unable to tell whether the product is genuinely progressing, whether shortcuts are accumulating, or when customers can use it.",
            },
          ],
          closing:
            "The service replaces that uncertainty with a build you can inspect, explain, and confidently put in front of users.",
        }}
        phases={[
          {
            title: "Product definition & threat-aware scoping",
            summary:
              "We turn the business promise into a narrow first release: priority users, complete journeys, acceptance criteria, integrations, data categories, and the assumptions that still need testing.",
            trustReason:
              "Sensitive data and abuse cases are identified before they get buried in screens and tickets, preventing unsafe scope from becoming expensive code.",
            output: "Product brief + risk map",
          },
          {
            title: "UX, permissions & technical design",
            summary:
              "We design the customer experience and the system beneath it together, including user roles, access boundaries, information flows, architecture, and the production environment.",
            trustReason:
              "Customers experience security through clear consent, predictable permissions, safe defaults, and recovery paths—not through a policy page alone.",
            output: "Testable prototype + architecture",
          },
          {
            title: "Sprint-based product build",
            summary:
              "The team builds vertical slices in two-week sprints, connecting interface, application logic, data, integrations, tests, monitoring, and deployment into working software.",
            trustReason:
              "Security controls are implemented and reviewed alongside each workflow, while frequent demos expose misunderstandings before they harden into the product.",
            output: "Production-ready increments",
          },
          {
            title: "Hardening, launch & ownership transfer",
            summary:
              "Before release, we test critical paths, access controls, failure handling, backups, observability, and deployment. Then we document the system and transfer operational knowledge.",
            trustReason:
              "A secure product must remain understandable and recoverable after launch. Clean ownership, documented decisions, and monitored systems prevent dependence on hidden agency knowledge.",
            output: "Launch review + full handoff",
          },
        ]}
        comparison={{
          title: "Security changes how the product gets built.",
          description:
            "Our process is designed to leave founders with evidence of progress and control of the system—not simply a repository at the end.",
          rows: [
            {
              label: "MVP scope",
              primary:
                "Define the smallest complete customer journey and its trust requirements before estimating the build.",
              secondary:
                "Translate a feature wishlist into a quote, leaving product and risk assumptions unresolved.",
            },
            {
              label: "Architecture",
              primary:
                "Model data sensitivity, user roles, failure modes, and likely scale before selecting patterns and services.",
              secondary:
                "Start from a familiar stack or boilerplate and revisit architecture once constraints appear.",
            },
            {
              label: "Delivery visibility",
              primary:
                "Demo working, deployed software every two weeks and tie progress to agreed acceptance criteria.",
              secondary:
                "Report ticket counts and percentage-complete estimates until a large end-of-project reveal.",
            },
            {
              label: "Security",
              primary:
                "Build authentication, least-privilege access, auditability, secrets, backups, and monitoring into each relevant workflow.",
              secondary:
                "Run a checklist or penetration test shortly before launch, when structural fixes are most expensive.",
            },
            {
              label: "Ownership",
              primary:
                "Keep code, environments, decisions, and runbooks clear enough for your next technical hire to take over.",
              secondary:
                "Retain key operational context inside the agency, making future changes dependent on the original team.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Zero-knowledge SaaS",
          name: "SafeHerit",
          title: "A private vault the platform itself cannot read.",
          summary:
            "SafeHerit handles inheritance plans, financial records, and beneficiary instructions—data with almost no margin for a trust failure. CWN Solutions built its SaaS foundation around zero-knowledge encryption so sensitive content remains private even from the platform operator, while still supporting the access and handover experience families need.",
          metric: "100%",
          metricLabel: "security audit pass rate",
          metricDetail:
            "The portfolio result demonstrates that product usability and rigorous data protection can be designed as one system, rather than traded against each other at the end.",
          href: "/case-studies/safeherit",
          tags: [
            "Zero-knowledge encryption",
            "Access control",
            "LegalTech",
            "FinTech",
          ],
        }}
        industries={[
          {
            code: "FT",
            name: "FinTech",
            description:
              "Products handling money, identity, permissions, and financial records.",
            href: "/fintech",
          },
          {
            code: "LT",
            name: "LegalTech",
            description:
              "Platforms where confidentiality, auditability, and document integrity matter.",
            href: "/legaltech",
          },
          {
            code: "HT",
            name: "HealthTech",
            description:
              "Patient and provider software built around sensitive personal data.",
            href: "/healthtech",
          },
          {
            code: "AI",
            name: "Enterprise AI",
            description:
              "AI workflows that must protect company knowledge and keep people in control.",
            href: "/enterprise-ai",
          },
        ]}
        faqs={faqs}
        cta={{
          title: "Turn the product idea into a buildable plan.",
          description:
            "Bring the deck, customer notes, or rough requirements. We’ll identify the smallest credible release, the trust risks to solve early, and a realistic path to launch.",
          action: "Book a free scoping call",
          href: "/#contact",
        }}
      />
    </>
  );
}
