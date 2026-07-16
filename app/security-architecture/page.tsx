import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/security-architecture";
const description =
  "Security architecture for SaaS products handling sensitive data, translating threats, access, encryption, auditability, recovery, and compliance needs into a buildable plan.";

export const metadata: Metadata = createPageMetadata({
  title: "Security Architecture for SaaS Products",
  description,
  path,
  openGraphTitle: "Founder-Readable Security Architecture | CWN Solutions",
  openGraphDescription:
    "Turn sensitive-data risk and buyer requirements into clear product boundaries, technical controls, and evidence your team can actually implement.",
});

const faqs: FaqItem[] = [
  {
    question: "What is security architecture, in plain English?",
    answer:
      "Security architecture is the plan for where valuable information lives, who can reach it, what each person or system is allowed to do, how misuse is noticed, and how the product recovers when something fails. Think of designing a building: locks matter, but so do separate rooms, staff-only areas, visitor records, alarms, fire exits, and knowing who holds each key. The goal is a system whose safe behavior comes from its layout, not from asking everyone to be careful.",
  },
  {
    question: "What does zero-knowledge architecture mean?",
    answer:
      "In a zero-knowledge product, sensitive content is encrypted so the service operator does not hold what is needed to read it. A useful analogy is a sealed box stored in our warehouse when only you possess the key: we can protect and deliver the box, but cannot inspect what is inside. This can dramatically reduce certain privacy risks, but it also changes search, sharing, password recovery, support, and account recovery, so it should be chosen because the product promise requires it—not as a decorative security label.",
  },
  {
    question:
      "How is encryption at rest different from zero-knowledge encryption?",
    answer:
      "Encryption at rest is like placing records in a locked filing cabinet when they are not being used. It protects the stored disks or database files, but the application usually has a key so it can open the cabinet and serve authorized users. Zero-knowledge design goes further by arranging the product so the platform operator does not possess the key to the protected content. Both are useful, but they protect against different risks and create different product trade-offs.",
  },
  {
    question: "When does a product need audit logs?",
    answer:
      "Audit logs matter when the business may need to answer who viewed, changed, exported, approved, or deleted sensitive information. They are especially important for administrative access, financial or legal records, permission changes, and regulated workflows. A useful audit trail records meaningful actions with identity and time, protects those records from casual editing, and avoids copying secrets or unnecessary personal data into the log itself.",
  },
  {
    question:
      "Will security architecture make us SOC 2, HIPAA, or PCI compliant?",
    answer:
      "Architecture can establish many of the technical foundations those programs expect, but a diagram or secure codebase does not make an organization compliant on its own. Compliance also involves policies, vendors, employee practices, evidence collection, incident handling, contracts, and an assessment against the exact scope. We map product decisions to the requirements relevant to you and make evidence easier to produce, while being clear about which organizational and audit work remains outside the software build.",
  },
  {
    question:
      "Can you review an existing product instead of designing a new one?",
    answer:
      "Yes. We can map the current system, data flows, roles, infrastructure, integrations, deployment process, and known buyer requirements, then identify material gaps and sequence improvements. The output should not be a frightening list of every theoretical weakness. It should distinguish urgent exposure, structural risk, quick hardening work, and longer-term changes so founders can invest in the controls that reduce the most meaningful risk first.",
  },
];

export default function SecurityArchitecturePage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Security Architecture",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="Security Architecture"
        label="Service / Product security"
        positioning="We turn the security questions founders cannot yet answer into clear product boundaries their team can build, buyers can examine, and users can trust."
        definitiveAnswer="Security architecture is the design of a product's protective structure—data boundaries, identity, permissions, encryption, audit trails, infrastructure, recovery, and operating controls—before isolated security fixes become an expensive substitute for a coherent system."
        problem={{
          title:
            "Security becomes expensive when every decision is made in isolation.",
          introduction:
            "Founders are asked whether data is encrypted, access is logged, backups are tested, and enterprise requirements are covered. A yes-or-no checklist misses the more important question: do those controls work together around the actual risks and promises of the product?",
          pressures: [
            {
              title: "Sensitive data has no agreed map.",
              description:
                "If the team cannot show where information enters, is copied, is decrypted, and leaves, it cannot confidently limit access, retention, or the impact of a compromised system.",
            },
            {
              title: "Security words conceal different guarantees.",
              description:
                "Encryption at rest is a locked filing cabinet whose key the application can use. Zero-knowledge is closer to storing a sealed box when only the customer holds the key. They solve different problems.",
            },
            {
              title: "Buyer diligence arrives before evidence is ready.",
              description:
                "Questionnaires expose undocumented permissions, shared cloud accounts, unclear logging, and untested recovery. Retrofitting answers during a sales cycle puts revenue and architecture under the same deadline.",
            },
          ],
          closing:
            "The service replaces scattered controls and vague assurances with one understandable security model: what is protected, from whom, by which boundary, and with what evidence.",
        }}
        includedContent={{
          title: "From product promise to defensible security model.",
          introduction:
            "Four workstreams translate business risk into plain-language decisions, technical designs, implementation priorities, and proof the team can maintain after the engagement.",
        }}
        phases={[
          {
            title: "Asset, data-flow & threat mapping",
            summary:
              "We identify valuable data and actions, trace where they move, name likely misuse and failure scenarios, and rank them by business impact and realistic exposure.",
            trustReason:
              "The team protects what actually matters instead of applying the same checklist to public marketing content and confidential customer records.",
            output: "Data-flow map + risk register",
          },
          {
            title: "Identity, encryption & boundary design",
            summary:
              "We define user and service identities, least-privilege roles, tenant separation, encryption and key ownership, secret handling, infrastructure boundaries, audit events, and third-party trust.",
            trustReason:
              "Clear compartments limit how far one mistake or compromised account can travel—like watertight doors preventing one leak from flooding the whole ship.",
            output: "Security architecture + control map",
          },
          {
            title: "Implementation guidance & verification",
            summary:
              "We convert the design into buildable requirements, review critical workflows and configurations, test access boundaries and failure cases, and help the delivery team resolve gaps by priority.",
            trustReason:
              "The architecture becomes working behavior rather than a diagram that slowly diverges from the product.",
            output: "Control backlog + review evidence",
          },
          {
            title: "Recovery, evidence & ownership transfer",
            summary:
              "We document security decisions, logging and alerting, backup and recovery expectations, incident responsibilities, vendor dependencies, and evidence needed for buyer or compliance review.",
            trustReason:
              "A secure system must remain understandable during staff change, a customer question, or an incident—not only while its original architect is available.",
            output: "Security runbook + evidence plan",
          },
        ]}
        comparison={{
          title:
            "A secure product is arranged to limit harm, not decorated with controls.",
          description:
            "We connect security decisions to real data, users, business promises, and recovery needs so a founder can explain the model without pretending to be a cryptographer.",
          rows: [
            {
              label: "Risk model",
              primary:
                "Rank realistic threats against valuable data, critical actions, customer promises, and business impact.",
              secondary:
                "Apply a broad checklist without agreeing which failures would materially damage this product.",
            },
            {
              label: "Data protection",
              primary:
                "Choose encryption and key ownership based on who must be technically unable—not merely unauthorized—to read data.",
              secondary:
                "State that data is encrypted without explaining where it is decrypted or who controls the keys.",
            },
            {
              label: "Access",
              primary:
                "Model customer, staff, service, and vendor permissions with narrow boundaries and sensitive-action logging.",
              secondary:
                "Secure customer login while giving internal tools and background services broad standing access.",
            },
            {
              label: "Resilience",
              primary:
                "Define monitored failures, tested recovery objectives, protected backups, and named incident ownership.",
              secondary:
                "Enable automated backups and assume recovery will work when it is eventually needed.",
            },
            {
              label: "Evidence",
              primary:
                "Keep decisions, control ownership, tests, logs, and exceptions understandable for buyers and future staff.",
              secondary:
                "Reconstruct security evidence from code and cloud settings whenever a questionnaire or audit arrives.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Zero-knowledge architecture",
          name: "SafeHerit",
          title: "A private vault designed so the platform cannot read it.",
          summary:
            "SafeHerit stores inheritance plans, financial records, and beneficiary instructions—information whose exposure would break the product promise. CWN Solutions built the foundation around zero-knowledge encryption: like storing a locked vault for a customer without holding the key that opens its contents, while still enabling the access and inheritance journey the product exists to provide.",
          metric: "100%",
          metricLabel: "security audit pass rate",
          metricDetail:
            "SafeHerit demonstrates architecture as a product capability: privacy, access, recovery decisions, and usability were designed together and verified against the trust claim.",
          href: "/case-studies/safeherit",
          additionalLinks: [
            {
              href: "/case-studies/expertarm",
              label: "Read the ExpertArm case study →",
            },
            {
              href: "/case-studies/vurke",
              label: "Read the Vurke case study →",
            },
          ],
          tags: [
            "Zero-knowledge design",
            "Encryption architecture",
            "Access control",
            "Audit-ready evidence",
          ],
        }}
        industries={[
          {
            code: "FT",
            name: "FinTech",
            description:
              "Architectures protecting financial identity, transactions, records, and privileged operations.",
            href: "/fintech",
          },
          {
            code: "LT",
            name: "LegalTech",
            description:
              "Confidential document and decision systems requiring controlled access and defensible history.",
            href: "/legaltech",
          },
          {
            code: "HT",
            name: "HealthTech",
            description:
              "Sensitive patient and provider platforms designed around privacy and accountable disclosure.",
            href: "/healthtech",
          },
          {
            code: "ST",
            name: "Security Tech",
            description:
              "Products where protective controls, evidence, and safe failure are part of the core value.",
            href: "/security-tech",
          },
        ]}
        industriesContent={{
          title: "Where the trust promise needs technical proof.",
          introduction:
            "Most relevant when sensitive records, regulated actions, or enterprise diligence make the product's protective structure part of the buying decision.",
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Security architecture FAQ",
          title:
            "Technical ideas explained well enough to make a business decision.",
          introduction:
            "Plain-language answers about encryption models, auditability, compliance boundaries, and how to prioritize an existing product's risk.",
        }}
        cta={{
          title: "Make the product's security model explainable.",
          description:
            "Bring the architecture diagram, buyer questionnaire, or simply the product promise. We’ll map what needs protection, clarify the boundaries that matter, and turn the highest risks into a buildable plan.",
          action: "Map the security architecture",
          href: "/#contact",
        }}
      />
    </>
  );
}
