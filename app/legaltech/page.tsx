import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/legaltech";
const description =
  "LegalTech product expertise for founders handling confidential matters, sensitive documents, evidence histories, privileged access, and trust-critical legal workflows.";

export const metadata: Metadata = createPageMetadata({
  title: "LegalTech Product Development & Security Expertise",
  description,
  path,
  openGraphTitle: "A Product Partner That Understands LegalTech Trust",
  openGraphDescription:
    "Build legal technology around confidentiality, document integrity, controlled access, traceable custody, and defensible product decisions.",
});

const faqs: FaqItem[] = [
  {
    question: "How do you protect confidential client and matter data?",
    answer:
      "We map matter data from intake through storage, collaboration, export, retention, and deletion, including every vendor and administrative tool it touches. The product then applies matter-aware permissions, tenant separation, encryption, protected secrets, narrow staff access, sensitive-action logging, and tested recovery. Where the product promise warrants it, we assess stronger key-ownership models that reduce the platform operator's ability to read selected content. The design follows the real confidentiality boundary rather than assuming login alone protects a matter.",
  },
  {
    question:
      "Can the product preserve chain of custody for uploaded documents?",
    answer:
      "We can design a traceable history of when a file entered the system, which identity supplied it, which version was viewed or changed, what transformations occurred, and when it was exported or disclosed. Hashes, immutable or tamper-evident records, timestamps, versioning, and controlled administrative actions can strengthen that history. Whether a record is legally admissible or satisfies a particular court, regulator, or jurisdiction is a legal determination; technology can preserve useful evidence, not guarantee the outcome.",
  },
  {
    question:
      "How should permissions work across firms, matters, and external clients?",
    answer:
      "Permissions should reflect the legal working relationship rather than a flat company role. A person may belong to one firm, participate in selected matters, invite a client to a limited workspace, and still be excluded from restricted documents or conflicts-sensitive work. We model organization, matter, document, action, and time-based access explicitly, including what happens when someone changes team, leaves a firm, or is removed from a matter.",
  },
  {
    question: "Can you make our LegalTech product compliant?",
    answer:
      "No development company can certify a whole legal business or guarantee that software satisfies every professional, privacy, records, court, or jurisdictional obligation. We can help your legal and compliance advisers translate confirmed requirements into data boundaries, retention behavior, audit events, access controls, vendor choices, and reviewable evidence. We keep the ownership line clear so technical readiness is not presented as legal approval.",
  },
  {
    question:
      "What should we ask a LegalTech development partner before hiring them?",
    answer:
      "Ask them to explain how confidential data moves, how matter-level access differs from ordinary SaaS roles, how document versions and disclosures are recorded, how support staff reach customer data, and how exports, deletion, backups, and incidents are handled. Give them a failed invitation, mistaken disclosure, departing employee, or disputed file version and ask how the product should behave. Concrete answers reveal more domain understanding than a list of security certifications.",
  },
  {
    question:
      "How do legal review and product delivery affect cost and timeline?",
    answer:
      "The largest variables are the number of document workflows, permission boundaries, integrations, migration sources, jurisdictions, and assurance requirements. Legal review, retention decisions, template approval, and third-party access can become critical-path dependencies even when coding is on schedule. We identify those decisions during discovery, build the highest-risk workflow end to end first, and phase the scope so the budget includes confidentiality and evidence work instead of postponing it until launch.",
  },
];

export default function LegaltechPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "LegalTech",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="LegalTech"
        label="Industry / Legal technology"
        positioning="Legal software does not merely organize work. It becomes part of how confidentiality, authority, and the history of a matter are preserved."
        trustTest="A LegalTech product should be able to explain who could see a matter, which document version they acted on, what changed, when information left the system, and which administrative powers could alter that history."
        definitiveAnswer="A credible LegalTech product partner treats client confidentiality, document integrity, matter-level access, retention, and traceable custody as structural product requirements. The system should reduce accidental disclosure, preserve an understandable history of sensitive actions, and support legal owners with technical evidence—without claiming that software alone guarantees privilege, admissibility, or regulatory compliance."
        differences={{
          title:
            "A small product mistake can become a breach of professional trust.",
          introduction:
            "Legal work combines intensely confidential information with documents whose version, origin, timing, and disclosure history may matter later. The product has to protect both the content and the context that makes the content dependable.",
          challenges: [
            {
              title:
                "Confidentiality follows the matter, not just the account.",
              description:
                "A firm-wide login does not mean every colleague should see every client, matter, witness record, settlement position, or internal note. Ethical walls, conflicts, external counsel, clients, experts, and temporary teams create boundaries inside the same organization.",
              implication:
                "Access models must express matter membership and document sensitivity rather than rely on broad administrator and employee roles.",
            },
            {
              title: "Documents need identity, version, and provenance.",
              description:
                "A filename is not a reliable history. Legal teams may need to distinguish an original upload, redacted copy, signed version, OCR output, generated draft, disclosed bundle, and later correction while retaining who supplied or approved each one.",
              implication:
                "Versioning and provenance should be product concepts, not reconstruction work performed after a dispute.",
            },
            {
              title: "Chain of custody is a sequence of accountable events.",
              description:
                "When a document or record could become evidence, the useful question is not only whether it was encrypted. Teams may need a protected account of collection, access, transformation, transfer, export, and deletion, with time and identity attached.",
              implication:
                "Audit history must cover meaningful document actions and resist casual alteration without pretending to guarantee legal admissibility.",
            },
            {
              title: "Collaboration expands the disclosure surface.",
              description:
                "Secure portals, email notifications, shared links, downloads, e-signature providers, experts, and clients all move information beyond the core workspace. A correct internal permission can still be undermined by an unrestricted export or forwarded link.",
              implication:
                "Disclosure paths need deliberate expiry, recipient, download, watermarking, and revocation decisions where the workflow warrants them.",
            },
            {
              title: "Retention and deletion are not one global setting.",
              description:
                "Matter closure, legal holds, client instructions, professional obligations, privacy requests, and backup behavior can pull records in different directions. Deleting a database row may neither satisfy deletion nor preserve what must be held.",
              implication:
                "The product needs an explicit record lifecycle validated by the legal owners for each market and use case.",
            },
            {
              title: "“Good enough” security fails silently in legal work.",
              description:
                "Shared support accounts, overbroad search, copied production data, verbose logs, and invisible administrator exports may not affect the daily interface. They become consequential when one matter exposes another or the system cannot explain a disclosure.",
              implication:
                "Confidentiality has to include operations, support, analytics, backups, and vendors—not only the client-facing portal.",
            },
          ],
          closing:
            "LegalTech earns credibility when it can protect the substance of a matter and preserve a dependable account of how that substance was handled.",
        }}
        approach={{
          title:
            "Model confidentiality and custody before automating legal work.",
          introduction:
            "Our approach begins with the relationships and records the product must protect. Legal and professional-responsibility owners validate obligations; the product architecture makes those decisions operable, testable, and visible.",
          principles: [
            {
              title: "Map the matter boundary",
              description:
                "We identify firms, clients, matters, roles, restricted groups, external participants, document classes, staff access, vendors, and every route through which confidential information enters or leaves.",
              practicalResult: "matter-aware data flow and permission model",
            },
            {
              title: "Make document history a first-class feature",
              description:
                "Uploads, versions, transformations, approvals, signatures, redactions, exports, and disclosures receive explicit states and attributable events instead of being buried in generic application logs.",
              practicalResult:
                "version model, provenance events, custody evidence",
            },
            {
              title: "Constrain privileged access",
              description:
                "Support and administrative powers are separated from ordinary matter work, granted narrowly, logged around sensitive actions, and designed with review or approval where one person's access could create material exposure.",
              practicalResult:
                "least-privilege roles and reviewable admin actions",
            },
            {
              title: "Test disclosure and lifecycle edge cases",
              description:
                "We test mistaken invitations, revoked users, stale links, conflicting versions, bulk exports, matter closure, retention holds, recovery, and vendor failure—not only successful upload and search journeys.",
              practicalResult:
                "risk-based tests, recovery paths, owned exceptions",
            },
          ],
        }}
        services={{
          title: "Capabilities that reinforce LegalTech credibility.",
          introduction:
            "The right engagement depends on whether the core challenge is the confidentiality model, the end-to-end legal workflow, or the backend record and integration layer.",
          items: [
            {
              label: "01 / Trust",
              title: "Security Architecture",
              description:
                "Design matter boundaries, privileged access, encryption, document audit events, recovery, and evidence around the product's confidentiality promise.",
              href: "/security-architecture",
            },
            {
              label: "02 / Product",
              title: "SaaS Product Development",
              description:
                "Build client, professional, and operational journeys as one secure SaaS product with usable document and matter workflows.",
              href: "/saas-product-development",
            },
            {
              label: "03 / Systems",
              title: "API & Backend Systems",
              description:
                "Create reliable document services, permission boundaries, custody events, and integrations with identity, signature, storage, or practice systems.",
              href: "/api-and-backend-systems",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / LegalTech and estate technology",
          name: "SafeHerit",
          title:
            "A private inheritance vault designed around enduring confidentiality.",
          summary:
            "SafeHerit stores inheritance plans, asset records, beneficiary instructions, and private documents whose disclosure could affect families financially and personally. CWN Solutions built the product around zero-knowledge encryption so the platform can support the planning and handover journey without holding the ability to read protected customer content. Access, recovery, document handling, and usability had to support the same confidentiality promise.",
          value: "100%",
          valueLabel: "security audit pass rate",
          detail:
            "SafeHerit is legitimate LegalTech proof: an estate-planning product where document privacy, authorized future access, and customer understanding were part of the product itself—not a security layer added after the workflow.",
          source: "SafeHerit portfolio proof point",
          href: "/case-studies/safeherit",
          linkLabel: "Read the SafeHerit case study →",
          tags: [
            "Estate planning",
            "Zero-knowledge encryption",
            "Document privacy",
            "Authorized access",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "LegalTech founder FAQ",
          title: "Questions about confidentiality, custody, and partner fit.",
          introduction:
            "Practical answers about document evidence, matter permissions, compliance boundaries, partner evaluation, cost, and delivery dependencies.",
        }}
        cta={{
          title: "Talk to someone who’s built in LegalTech.",
          description:
            "Bring the matter model, document lifecycle, confidentiality concerns, and review requirements. We’ll help turn them into clear product boundaries without confusing technical controls with legal guarantees.",
          action: "Discuss your LegalTech product",
          href: "/#contact",
        }}
      />
    </>
  );
}
