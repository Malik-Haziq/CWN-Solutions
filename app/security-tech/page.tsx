import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/security-tech";
const description =
  "Security technology product expertise for founders whose encryption, identity, evidence, monitoring, recovery, and trust guarantees are the product itself.";

export const metadata: Metadata = createPageMetadata({
  title: "Security Technology Product Development & Architecture Expertise",
  description,
  path,
  openGraphTitle: "When Security Is the Product Promise",
  openGraphDescription:
    "Build security products around explicit guarantees, adversarial behavior, constrained privilege, usable recovery, and evidence that can support serious scrutiny.",
});

const faqs: FaqItem[] = [
  {
    question: "What is different about building a security product?",
    answer:
      "In an ordinary product, a security control supports the value proposition. In Security Tech, the control and the claim around it are often the value proposition. Architecture, onboarding, defaults, recovery, administration, telemetry, documentation, and support must preserve the same guarantee. A misleading phrase such as 'zero knowledge,' 'end-to-end encrypted,' or 'tamper-proof' can be more damaging than omitting the phrase because sophisticated buyers will test exactly where the guarantee stops.",
  },
  {
    question:
      "How do you validate a security claim before using it in marketing?",
    answer:
      "We write the claim as a technical statement: which asset is protected, from which actor, during which states, by which keys or boundary, and with which exceptions. Then we map data flow, privileged access, recovery, logs, clients, servers, vendors, and operational tooling against it. Threat modeling, design review, automated tests, targeted adversarial testing, and independent assessment where appropriate provide different evidence. Marketing language should follow that evidence rather than define the architecture retroactively.",
  },
  {
    question: "When is zero-knowledge architecture appropriate?",
    answer:
      "It is appropriate when the product promise requires the platform operator to be technically unable to read selected customer content, not merely contractually forbidden. That choice changes search, sharing, multi-device use, key recovery, support, abuse response, metadata, and integrations. We evaluate whether those consequences fit the use case and explain which information still remains visible. Zero knowledge is a boundary with trade-offs, not a universal badge of superiority.",
  },
  {
    question: "How do you design account recovery without defeating security?",
    answer:
      "Recovery begins by deciding who is trusted to restore which capability and what must remain impossible. Options may involve recovery keys, trusted devices, organization administrators, split knowledge, delayed recovery, or permanent loss, each with different attack and usability consequences. We test takeover, device loss, staff intervention, social engineering, and partial recovery paths. The interface must tell users the truth before loss occurs rather than discovering the trust model during an emergency.",
  },
  {
    question:
      "Should a security product have a vulnerability disclosure process?",
    answer:
      "If external researchers or customers can discover material weaknesses, they need a clear, monitored, and safe way to report them. The organization should define scope, contact, acknowledgment, triage, remediation ownership, communication, and coordinated disclosure expectations appropriate to its maturity. The product also needs version and deployment visibility so the team can identify affected customers and verify a fix. This is an operating capability, not simply a security.txt file.",
  },
  {
    question:
      "How do security depth and independent review affect cost and timeline?",
    answer:
      "The largest variables are the strength of the product claim, adversaries in scope, cryptographic and key-management choices, supported clients and platforms, recovery requirements, privileged operations, evidence expectations, and external assessment. We sequence architecture and threat decisions before expensive implementation, build critical boundaries as testable slices, and schedule independent review early enough to change the product. A security audit should validate a coherent design, not become the first time the design is examined.",
  },
];

export default function SecurityTechPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "Security Tech",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="Security Tech"
        label="Industry / Security products"
        positioning="Here, security is not one quality of the product. It is the promise customers are evaluating, buying, and trusting under pressure."
        trustTest="A security product should state precisely what it protects, from whom, where the guarantee ends, which privileged paths remain, how recovery changes the threat model, and what evidence supports every public claim."
        definitiveAnswer="A credible Security Tech product partner understands security-as-product: protective guarantees must survive data flow, identity, key ownership, recovery, administration, telemetry, support, and real user behavior. The team needs enough technical depth to model adversaries and verify boundaries, and enough product judgment to make strong controls usable without turning nuanced architecture into absolute marketing claims."
        differences={{
          title:
            "The product will be judged by the boundary it claims to hold.",
          introduction:
            "Security buyers and researchers look past feature lists. They examine keys, trust assumptions, privileged paths, failure behavior, defaults, evidence, and language. A product that cannot explain those things cannot outsource credibility to a badge.",
          challenges: [
            {
              title: "Every security adjective creates a testable promise.",
              description:
                "Encrypted, private, zero-knowledge, end-to-end, immutable, anonymous, and secure-by-design each imply different actors, assets, states, and exceptions. Loose language invites users to assume a stronger guarantee than the system provides.",
              implication:
                "Claims should be written from the threat model and architecture, with visible limitations, before they become positioning.",
            },
            {
              title: "Privileged paths define the real product boundary.",
              description:
                "Support tools, deployment access, recovery systems, analytics, crash reports, key services, administrative overrides, and vendors may reach information the main interface appears to protect.",
              implication:
                "The trust model must include operators and dependencies, not only unauthenticated attackers and customer permissions.",
            },
            {
              title: "Recovery can contradict the protection claim.",
              description:
                "Customers expect help after lost devices, forgotten secrets, staff departure, or organization change. A convenient reset may create a hidden decryption or takeover route; irreversible loss may make the secure product unusable.",
              implication:
                "Recovery authority, delay, evidence, user communication, and permanent-loss scenarios are architecture decisions, not support policy later.",
            },
            {
              title: "Metadata can undermine content protection.",
              description:
                "Even when content is strongly encrypted, identities, timing, IP addresses, object sizes, relationships, access patterns, notifications, and billing records may reveal sensitive context.",
              implication:
                "The product must distinguish protected content from visible metadata and minimize or explain both honestly.",
            },
            {
              title:
                "Usability determines whether controls survive contact with users.",
              description:
                "People bypass confusing sharing, copy recovery secrets into unsafe places, approve warnings they cannot interpret, or abandon controls that block routine work. Secure defaults fail when the product teaches unsafe workarounds.",
              implication:
                "Critical security journeys require user testing, clear mental models, safe defaults, and explicit high-risk transitions.",
            },
            {
              title: "Evidence must keep pace with a changing attack surface.",
              description:
                "New clients, libraries, models, vendors, features, and infrastructure change assumptions. A passed review describes a version and scope, not permanent safety, while vulnerabilities need triage and coordinated response.",
              implication:
                "Threat models, tests, dependency ownership, disclosure, monitoring, and review evidence must remain part of product operations.",
            },
          ],
          closing:
            "Security Tech credibility comes from a narrow, understandable guarantee that remains true through implementation, recovery, operations, and the words used to sell it.",
        }}
        approach={{
          title: "Turn the security claim into a verifiable product model.",
          introduction:
            "Our portfolio requires security to carry product value, not merely reduce background risk. We connect threat reasoning, architecture, user experience, implementation evidence, and operating ownership around the exact promise being made.",
          principles: [
            {
              title: "Define the guarantee and adversaries",
              description:
                "We identify assets, actors, capabilities, trust assumptions, protected states, visible metadata, exclusions, and unacceptable outcomes, then translate the product claim into testable technical statements.",
              practicalResult:
                "threat model, guarantee boundary, and claim language",
            },
            {
              title: "Design keys, identity, and privilege together",
              description:
                "Encryption and key ownership are joined to authentication, device trust, sharing, tenant boundaries, operator access, secrets, vendors, and high-impact administrative actions.",
              practicalResult:
                "security architecture and privileged-access map",
            },
            {
              title: "Make recovery part of the product promise",
              description:
                "We prototype onboarding, key handling, device change, sharing, revocation, organization recovery, and permanent-loss paths so users understand the consequences before controls are locked into code.",
              practicalResult:
                "usable recovery model and tested security journeys",
            },
            {
              title: "Layer evidence and ongoing response",
              description:
                "Automated boundary tests, review records, audit events, dependency monitoring, external assessment, incident ownership, and vulnerability intake are selected according to the maturity and strength of the claim.",
              practicalResult:
                "verification plan, evidence trail, and response runbook",
            },
          ],
        }}
        services={{
          title: "Capabilities behind security-as-product.",
          introduction:
            "Security products need architecture depth and complete product delivery. These services help turn a trust claim into a usable system and keep its evidence maintainable as the product evolves.",
          items: [
            {
              label: "01 / Architecture",
              title: "Security Architecture",
              description:
                "Define adversaries, data and key boundaries, identity, privilege, auditability, resilience, evidence, and recovery around the exact product claim.",
              href: "/security-architecture",
            },
            {
              label: "02 / Product",
              title: "SaaS Product Development",
              description:
                "Deliver secure onboarding, everyday use, sharing, administration, recovery, and operations as one coherent security product.",
              href: "/saas-product-development",
            },
            {
              label: "03 / Systems",
              title: "API & Backend Systems",
              description:
                "Build narrow service boundaries, key and identity integrations, protected events, privileged workflows, monitoring, and reliable recovery behavior.",
              href: "/api-and-backend-systems",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Technical depth / Zero-knowledge product architecture",
          name: "SafeHerit",
          title:
            "A privacy claim implemented as the product's operating boundary.",
          summary:
            "SafeHerit stores inheritance plans, financial records, beneficiary instructions, and private documents. CWN Solutions built its foundation around zero-knowledge encryption so the platform can provide storage and future handover without holding what is needed to read protected customer content. That decision shaped key ownership, access, recovery, document behavior, and the user experience. It is evidence of security-as-product reasoning, not a marketing claim attached to ordinary encrypted storage.",
          value: "100%",
          valueLabel: "security audit pass rate",
          detail:
            "SafeHerit demonstrates the technical and product depth behind our Security Tech position: define who must be unable to read content, implement that boundary, preserve usable recovery and access journeys, and submit the result to security review.",
          source: "SafeHerit portfolio proof point",
          href: "/case-studies/safeherit",
          linkLabel: "Read the SafeHerit case study →",
          tags: [
            "Zero-knowledge architecture",
            "Key ownership",
            "Recovery design",
            "Verified trust claim",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Security Tech founder FAQ",
          title: "Questions where architecture and product claims meet.",
          introduction:
            "Clear answers about security-as-product, claim validation, zero knowledge, recovery, vulnerability disclosure, independent review, cost, and timing.",
        }}
        cta={{
          title: "Talk to someone who understands security-as-product.",
          description:
            "Bring the threat model, trust claim, recovery dilemma, or buyer scrutiny. We’ll help turn the promise into an architecture and user experience that can support serious technical questions.",
          action: "Discuss your security product",
          href: "/#contact",
        }}
      />
    </>
  );
}
