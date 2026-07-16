import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/mvp-for-startups";
const description =
  "Fast, security-first MVP development for pre-seed startups, from ruthless product scope and prototype through production launch and founder handoff.";

export const metadata: Metadata = createPageMetadata({
  title: "MVP Development for Pre-Seed Startups",
  description,
  path,
  openGraphTitle: "Fast, Security-First MVP Development | CWN Solutions",
  openGraphDescription:
    "Reach real users quickly without baking avoidable security and architecture debt into your startup's first product.",
});

const faqs: FaqItem[] = [
  {
    question: "What evidence should we have before starting an MVP build?",
    answer:
      "You do not need a finished specification, but you should be able to name the first customer, the painful job they need to complete, and the assumption the release must test. Customer interviews, a waitlist, a design partner, a manual version of the service, or early letters of intent are all useful signals. During discovery, we turn that evidence into one measurable release objective so the MVP is built to answer a business question rather than merely demonstrate features.",
  },
  {
    question: "How quickly can a pre-seed startup get an MVP to market?",
    answer:
      "A tightly scoped web MVP can often reach production in 8–12 weeks. The schedule depends less on the number of screens than on workflow complexity, user roles, data sensitivity, integrations, and how quickly founders can make decisions. We protect the date by agreeing on one complete core journey, delivering it in vertical slices, and moving nonessential requests into a clearly ranked post-launch backlog.",
  },
  {
    question: "How do you keep security from slowing down an early launch?",
    answer:
      "We focus first on controls that are difficult or dangerous to retrofit: trustworthy authentication, least-privilege access, secure data boundaries, secret management, isolated environments, backups, logging, and safe deployment. Applying proven patterns while the architecture is still small is faster than rebuilding after a customer security review or incident. Lower-risk enhancements can then be prioritized against actual traction after launch.",
  },
  {
    question: "What should deliberately stay out of the first release?",
    answer:
      "The first release should usually exclude speculative user types, deep customization, edge-case automation, broad reporting suites, and integrations no active design partner needs. We retain anything required for the primary user to receive the promised value safely, including operational tools the founding team needs to support them. Every deferred item stays documented with the evidence that would justify bringing it back into scope.",
  },
  {
    question: "Is this a clickable prototype or production software?",
    answer:
      "The engagement produces deployable production software, not a disposable demo. Prototypes are used early to test the experience cheaply, then the approved journey is built with a real data model, tested access controls, monitoring, backups, analytics, and repeatable deployment. That gives you something customers can use and a technical foundation a future engineering hire can evaluate and extend.",
  },
  {
    question:
      "What happens if customer feedback changes the product after launch?",
    answer:
      "That is expected. The architecture is designed around stable business boundaries rather than a rigid pile of screens, and the handoff includes the codebase, environments, decision records, and a prioritized backlog. During delivery, two-week demonstrations create regular opportunities to adjust details; larger changes are assessed against the release objective so a useful learning cycle is not derailed by every new request.",
  },
];

export default function MvpForStartupsPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "MVP for Startups",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="MVP for Startups"
        label="Service / Startup launch"
        positioning="We help pre-seed founders reach real users at investor speed without turning the first release into tomorrow's security rewrite."
        definitiveAnswer="MVP development for startups is a focused product engagement that converts one high-stakes customer problem into secure, production-ready software fast enough to test demand, demonstrate execution, and guide the next use of runway."
        problem={{
          title: "The market wants speed. Your future product needs restraint.",
          introduction:
            "Pre-seed founders are racing a short runway, but the shortcuts that create a convincing demo can make the first real customer unsafe to onboard. You need to learn quickly without committing the company to fragile authentication, unclear data access, or a codebase the next team has to replace.",
          pressures: [
            {
              title: "Every week without users weakens the signal.",
              description:
                "Investor conversations and customer interviews eventually need working evidence. A long discovery phase or oversized backlog delays the feedback that should shape the company.",
            },
            {
              title: "A demo is not a safe first release.",
              description:
                "Real accounts introduce passwords, personal data, permissions, failures, and support responsibilities. Those foundations cannot be treated as polish after traction arrives.",
            },
            {
              title: "Runway disappears inside untested scope.",
              description:
                "Founders often fund features for several imagined customer types before one complete journey has proved valuable. More surface area creates more cost, more risk, and less learning.",
            },
          ],
          closing:
            "The engagement creates the fastest responsible route to evidence: one launchable promise, protected from day one, in the hands of users while the learning still matters.",
        }}
        includedContent={{
          title: "From risky assumption to responsible launch.",
          introduction:
            "Four connected workstreams compress the path to market while protecting the product decisions that become costly to reverse after customers arrive.",
        }}
        phases={[
          {
            title: "Validation target & release boundary",
            summary:
              "We select the customer, job, and business assumption this release must test, then define the smallest complete journey, measurable success signal, and explicit not-now list.",
            trustReason:
              "A clear boundary prevents speed pressure from removing essential controls or adding speculative features that expand the attack surface.",
            output: "MVP brief + release scorecard",
          },
          {
            title: "Prototype & secure foundation",
            summary:
              "We test the critical flow with a prototype while designing roles, data boundaries, authentication, architecture, environments, and deployment around the approved journey.",
            trustReason:
              "Experience mistakes are corrected before code, while identity and sensitive data decisions are made before they become structural debt.",
            output: "Validated flow + build plan",
          },
          {
            title: "Rapid vertical-slice delivery",
            summary:
              "In two-week sprints, we build usable slices from interface through data and deployment, demo them in a live environment, and keep founder decisions tied to the launch objective.",
            trustReason:
              "Frequent, deployed increments expose product and security gaps early without waiting for a final integration phase.",
            output: "Working product increments",
          },
          {
            title: "Launch, measurement & handoff",
            summary:
              "We harden the core journey, test access and recovery, configure monitoring and product analytics, release to the first cohort, and transfer the system with clear documentation.",
            trustReason:
              "A small team can detect failures, protect early users, and learn from real behavior without remaining dependent on hidden agency knowledge.",
            output: "Production MVP + learning backlog",
          },
        ]}
        comparison={{
          title: "Speed comes from sharper decisions, not missing foundations.",
          description:
            "We shorten the route to customer evidence by reducing uncertainty and scope—not by postponing the responsibilities that begin with the first real account.",
          rows: [
            {
              label: "Release goal",
              primary:
                "Tie one complete user journey to a testable customer or fundraising assumption.",
              secondary:
                "Package the founder's feature list into a polished demonstration with no defined learning target.",
            },
            {
              label: "Scope control",
              primary:
                "Maintain an explicit not-now list and require new work to improve the release signal.",
              secondary:
                "Accept additions throughout the build, allowing the timeline and budget to drift together.",
            },
            {
              label: "Security baseline",
              primary:
                "Implement identity, access, data protection, backups, and monitoring with the first production workflow.",
              secondary:
                "Optimize for the demo, then plan to secure or rebuild the system after early traction.",
            },
            {
              label: "Founder visibility",
              primary:
                "Review deployed software every two weeks against acceptance criteria and the target launch date.",
              secondary:
                "Share design files and ticket reports while integration risk accumulates behind the scenes.",
            },
            {
              label: "After launch",
              primary:
                "Instrument the key behavior, document decisions, and hand over a ranked evidence-led backlog.",
              secondary:
                "Measure completion at release and move directly into another undifferentiated feature phase.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Secure product launch",
          name: "SafeHerit",
          title:
            "A trust-critical idea built for real users, not just the pitch.",
          summary:
            "SafeHerit's first product had to make a difficult promise immediately: families could store inheritance plans and financial records without exposing them even to the platform operator. The product foundation combined a clear customer journey with zero-knowledge encryption, proving that an early release can move quickly while treating security as part of the value proposition.",
          metric: "100%",
          metricLabel: "security audit pass rate",
          metricDetail:
            "The result shows what security-from-day-one makes possible: a launchable product that can earn trust early without scheduling a foundational rebuild after validation.",
          href: "/case-studies/safeherit",
          tags: [
            "Pre-seed product",
            "Zero-knowledge encryption",
            "Production launch",
            "LegalTech",
          ],
        }}
        industries={[
          {
            code: "FT",
            name: "FinTech",
            description:
              "Early products involving payments, identity, financial records, or investor scrutiny.",
            href: "/fintech",
          },
          {
            code: "LT",
            name: "LegalTech",
            description:
              "Focused tools for confidential documents, regulated workflows, and high-trust decisions.",
            href: "/legaltech",
          },
          {
            code: "HT",
            name: "HealthTech",
            description:
              "Patient and provider MVPs where privacy cannot wait for a later product stage.",
            href: "/healthtech",
          },
          {
            code: "EC",
            name: "E-commerce",
            description:
              "Commerce concepts that need to test conversion with dependable checkout and operations.",
            href: "/e-commerce",
          },
        ]}
        industriesContent={{
          title: "Early markets where trust accelerates adoption.",
          introduction:
            "Best suited to startup categories where the first users need both a compelling outcome and confidence that the product is ready to hold their data or transactions.",
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Startup MVP FAQ",
          title:
            "What founders need to settle before the runway starts moving.",
          introduction:
            "Clear answers about validation, speed, scope, and the security baseline for a real first release.",
        }}
        cta={{
          title: "Put a secure first release on the calendar.",
          description:
            "Bring the deck, interview notes, or prototype. We’ll isolate the assumption worth funding, define the fastest credible release, and flag the security decisions that belong at the start.",
          action: "Scope the MVP",
          href: "/#contact",
        }}
      />
    </>
  );
}
