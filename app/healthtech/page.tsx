import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/healthtech";
const description =
  "HealthTech product expertise for founders handling sensitive personal health information, patient trust, careful access, reliable records, and responsible data use.";

export const metadata: Metadata = createPageMetadata({
  title: "HealthTech Product Development & Sensitive Data Expertise",
  description,
  path,
  openGraphTitle: "HealthTech Products Built Around Patient Trust",
  openGraphDescription:
    "A responsible product approach to sensitive health information, patient access, clinical context, operational roles, and data minimization.",
});

const faqs: FaqItem[] = [
  {
    question: "How do you approach sensitive personal health information?",
    answer:
      "We first identify which information is necessary for the product purpose, where it originates, where it moves, who needs it, and when it should be removed. We then design narrow role and record access, tenant and environment separation, encryption, protected secrets, meaningful audit events, safe support access, retention behavior, backups, and incident visibility around that map. This is our engineering approach to sensitive data; it is not a compliance certification or a legal guarantee.",
  },
  {
    question:
      "Can you guarantee HIPAA, GDPR, or another health privacy requirement?",
    answer:
      "No. Applicability and compliance depend on the product, market, data, contracts, vendors, policies, workforce practices, and legal interpretation—not only the codebase. Your privacy, security, and legal specialists must establish the requirements and validate the overall program. We can translate confirmed requirements into technical controls, documentation, tests, and evidence while being explicit about the organizational work that remains outside software delivery.",
  },
  {
    question: "How do you decide which health data the product should collect?",
    answer:
      "We connect each field to a defined patient, care, research, operational, or product need and ask whether a less sensitive signal could achieve the same result. We also examine downstream copies in analytics, logs, notifications, exports, support tools, and third parties. Data that has no clear purpose, owner, retention decision, or user explanation is a liability rather than future optionality.",
  },
  {
    question:
      "How do you handle access for patients, clinicians, carers, and operations teams?",
    answer:
      "We model what each role needs to see and do in the context of a specific relationship, organization, episode, or delegated permission. The product should distinguish viewing, editing, exporting, correcting, approving, and administering, and should define what changes when a clinician leaves, a patient revokes access, or a carer relationship ends. Emergency or exceptional access, if required, needs its own visible and reviewable path rather than a hidden broad permission.",
  },
  {
    question: "Can you integrate with existing health or laboratory systems?",
    answer:
      "Where the systems provide supported interfaces, we can design integrations around agreed identifiers, consent and authorization boundaries, source-of-truth ownership, data quality, retries, reconciliation, and outage behavior. The technical connection is only one part: the product also needs to show users when information is delayed, incomplete, corrected, or sourced from another organization rather than presenting every record as equally current.",
  },
  {
    question: "What affects the cost and timeline of a HealthTech product?",
    answer:
      "Major variables include user roles, sensitivity and volume of data, integration readiness, migration, consent and delegation flows, clinical or operational review, accessibility, assurance work, and pilot constraints. External system access, contract review, representative test data, and subject-matter decisions often determine the schedule. We surface those dependencies early and phase delivery around one complete, reviewable workflow instead of estimating from screens alone.",
  },
];

export default function HealthtechPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "HealthTech",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="HealthTech"
        label="Industry / Health technology"
        positioning="Health information is intimate, persistent, and consequential. People need to understand why it is collected and trust every handoff around it."
        trustTest="A HealthTech product should collect only what it can justify, reveal information only within an authorized care or service relationship, represent uncertainty honestly, and preserve an accountable history of sensitive access and change."
        definitiveAnswer="A credible HealthTech product partner treats personal health information as data that can affect dignity, relationships, access to services, and real decisions. Responsible handling means minimizing collection, making access contextual, protecting every copy and integration, designing for correction and recovery, and supporting your legal and compliance owners with clear technical evidence—not claiming that secure code alone certifies the product or guarantees compliance."
        differences={{
          title: "Sensitive information sits inside a human relationship.",
          introduction:
            "Health technology connects patients, clinicians, carers, administrators, researchers, and vendors around information that may be incomplete, emotionally charged, or difficult to change once exposed. Product trust depends on context, not just database security.",
          challenges: [
            {
              title: "Health data is difficult to make private again.",
              description:
                "Symptoms, diagnoses, medications, reproductive information, disability, mental health notes, biometrics, and family history can remain sensitive for a lifetime. Even ordinary profile fields can reveal health context when combined with appointments or service use.",
              implication:
                "Collection and retention need a clear purpose before the product creates copies across analytics, logs, support tools, and vendors.",
            },
            {
              title: "Access depends on a care or service relationship.",
              description:
                "A clinician, carer, receptionist, payer, researcher, and patient may each need a different view of the same record. Organization membership alone rarely explains whether someone should see a particular episode, note, attachment, or contact detail.",
              implication:
                "Permissions should reflect role, relationship, context, and action rather than broad staff-versus-patient categories.",
            },
            {
              title: "Accuracy and uncertainty both matter.",
              description:
                "A record can be correctly transmitted yet clinically outdated, patient-reported, provisional, duplicated, or associated with the wrong identity. Interfaces that flatten those distinctions can make unreliable information appear authoritative.",
              implication:
                "Source, time, status, correction history, and confidence need to remain visible wherever they affect interpretation.",
            },
            {
              title: "Consent is a product journey, not a checkbox.",
              description:
                "People may need to understand what information supports which purpose, which organization or person receives it, and what happens after they change their mind. Delegated access for carers, guardians, or family members adds expiry and scope questions.",
              implication:
                "Permission and consent choices must be understandable, recorded, revisable, and reflected downstream where the use case requires them.",
            },
            {
              title: "Integrations carry meaning as well as fields.",
              description:
                "A laboratory, device, provider system, scheduling tool, or messaging vendor can return delayed, partial, corrected, or differently coded information. A successful API response does not prove that the receiving workflow understood the record correctly.",
              implication:
                "Integration design needs source ownership, identity matching, error queues, reconciliation, and honest user-facing status.",
            },
            {
              title: "Patient trust can be lost outside the clinical screen.",
              description:
                "Notification previews, support screenshots, production copies, call-center search, analytics events, exports, and shared devices may expose sensitive context even when the central record is encrypted and the primary login is strong.",
              implication:
                "The privacy review must include operational tools and communication channels, not only the health record interface.",
            },
          ],
          closing:
            "Responsible HealthTech makes the minimum necessary information available to the right relationship, with enough context to use it safely and enough evidence to review what happened.",
        }}
        approach={{
          title: "Design around necessity, context, and accountable access.",
          introduction:
            "Our approach helps product, clinical, privacy, security, and operational owners turn sensitive-data decisions into a system people can understand and teams can maintain. It supports readiness; it does not replace their formal review.",
          principles: [
            {
              title: "Start with purpose and minimum data",
              description:
                "We connect each data class to a defined workflow and owner, trace downstream copies, identify higher-sensitivity combinations, and challenge collection or retention that the product cannot clearly justify.",
              practicalResult:
                "purpose-led data map and minimized sensitive footprint",
            },
            {
              title: "Model relationship-based access",
              description:
                "Patients, clinicians, carers, administrators, and services receive explicit capabilities around records and actions, with delegation, removal, exceptional access, and privileged support treated as designed states.",
              practicalResult:
                "contextual roles, access events, and review boundaries",
            },
            {
              title: "Preserve source and correction context",
              description:
                "We design records and integrations so source, time, status, correction, and synchronization remain visible. Failed, delayed, conflicting, and misidentified data have recovery paths instead of being silently accepted.",
              practicalResult:
                "traceable records and operable integration exceptions",
            },
            {
              title: "Build reviewable evidence without overclaiming",
              description:
                "Technical decisions, vendor boundaries, access logs, retention behavior, security tests, and recovery checks remain understandable for the specialists responsible for privacy, security, and organizational compliance.",
              practicalResult:
                "control evidence and an explicitly owned readiness backlog",
            },
          ],
        }}
        services={{
          title: "Capabilities for responsible HealthTech foundations.",
          introduction:
            "These services support the product and technical side of sensitive health-data handling. Formal legal, privacy, clinical, and certification decisions remain with the appropriately qualified owners.",
          items: [
            {
              label: "01 / Trust",
              title: "Security Architecture",
              description:
                "Map sensitive information, contextual access, encryption, privileged workflows, audit events, vendor boundaries, and recovery before isolated controls drift apart.",
              href: "/security-architecture",
            },
            {
              label: "02 / Product",
              title: "SaaS Product Development",
              description:
                "Deliver patient, professional, and operational journeys as one usable product with privacy and data context designed into each workflow.",
              href: "/saas-product-development",
            },
            {
              label: "03 / Systems",
              title: "API & Backend Systems",
              description:
                "Build controlled data services and integrations with explicit ownership, identity matching, retries, reconciliation, correction, and monitoring behavior.",
              href: "/api-and-backend-systems",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Transferable proof / Sensitive-data architecture",
          name: "SafeHerit privacy pattern",
          title:
            "Reducing operator access when exposure would break the product promise.",
          summary:
            "CWN Solutions built SafeHerit around zero-knowledge encryption because its inheritance plans, financial records, beneficiary instructions, and private documents could not be treated like ordinary SaaS content. SafeHerit is not a clinical case study and we do not present it as one. It is relevant evidence of a broader discipline HealthTech also demands: question whether the platform needs readable access at all, join key ownership to recovery and usability, and make sensitive-data boundaries part of the product model.",
          value: "Minimum",
          valueLabel: "necessary platform access",
          detail:
            "The transferable proof is the decision process: reduce the information the operator can expose, make access promises technically meaningful, and document the usability and recovery trade-offs instead of relying on a generic encryption claim.",
          source: "SafeHerit sensitive-data architecture pattern",
          href: "/security-architecture",
          linkLabel: "Explore our security architecture approach →",
          tags: [
            "Data minimization",
            "Encryption architecture",
            "Access boundaries",
            "Honest proof scope",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "HealthTech founder FAQ",
          title: "Questions about sensitive data, trust, and responsibility.",
          introduction:
            "Clear boundaries around privacy claims, patient and professional access, integrations, data minimization, review ownership, budget, and timing.",
        }}
        cta={{
          title: "Talk to someone who understands sensitive HealthTech data.",
          description:
            "Bring the user relationships, data map, integration questions, and review constraints. We’ll help shape the technical approach while keeping legal, clinical, privacy, and certification ownership where it belongs.",
          action: "Discuss your HealthTech product",
          href: "/#contact",
        }}
      />
    </>
  );
}
