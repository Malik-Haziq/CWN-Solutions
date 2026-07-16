import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/hospitality-tech";
const description =
  "Hospitality technology expertise for operators protecting guest data, booking accuracy, payment trust, property operations, and always-on service reliability.";

export const metadata: Metadata = createPageMetadata({
  title: "Hospitality Technology, Guest Trust & Reliability Expertise",
  description,
  path,
  openGraphTitle: "A Product Partner That Understands Hospitality Operations",
  openGraphDescription:
    "Build hospitality technology around guest-data responsibility, dependable booking states, property workflows, and always-on service.",
});

const faqs: FaqItem[] = [
  {
    question: "How should a hospitality product protect guest data?",
    answer:
      "Start by recognizing that guest data extends beyond a booking record. Identity details, travel dates, companions, preferences, messages, room access, location context, payments, and service history can reveal when and where a person will be. We map each data flow across booking channels, properties, staff tools, vendors, analytics, and support, then minimize collection, restrict access by role and property, protect secrets and environments, log sensitive actions, and define retention and deletion. The exact privacy obligations still depend on your markets and operating model.",
  },
  {
    question:
      "What happens when a booking or property-system integration fails?",
    answer:
      "The product needs explicit states for requests that are pending, rejected, duplicated, delayed, or only partly synchronized. We define which system owns reservation, rate, inventory, payment, and guest status; use idempotent operations where possible; monitor queues and webhooks; and provide staff with reconciliation and fallback paths. A guest should never receive false confirmation merely because one API call was accepted.",
  },
  {
    question: "Can one platform safely support several properties?",
    answer:
      "Yes, when shared portfolio capabilities are separated from property-level data, configuration, staff roles, vendors, and operational rules. Central teams may need aggregate visibility while a front-desk user should only reach the properties and actions required for their shift. Tenant and property boundaries, delegated administration, audit history, and controlled configuration are designed before portfolio expansion multiplies a mistake.",
  },
  {
    question: "How do you protect payments without making booking harder?",
    answer:
      "We prefer established payment providers, hosted fields or pages, and tokenization so the hospitality platform handles less card data. The experience still needs precise deposit, authorization, capture, cancellation, refund, chargeback, and failure states across booking channels and property operations. Payment scope and compliance responsibilities depend on the final flow and providers, so we minimize exposure and validate the intended boundary with the appropriate specialists.",
  },
  {
    question: "Why choose a hospitality-focused development partner?",
    answer:
      "Hospitality software operates across guests, reservations, properties, shifts, channels, payments, housekeeping, service teams, and vendors that cannot pause together for a release. Ask a partner how it handles occupancy peaks, property variation, system-of-record conflicts, degraded integrations, staff handovers, and guest communication during uncertainty. A team that understands those realities will scope operational safety, not only the visible guest interface.",
  },
  {
    question:
      "What determines the timeline for a hospitality technology project?",
    answer:
      "The critical variables are usually vendor access, certification or partnership processes, data quality, property variation, migration, staff workflows, payment scope, and the availability of a representative pilot environment. We map those dependencies before committing to a rollout date, deliver one complete guest-and-staff journey first, and expand through a property or cohort pilot with documented fallback rather than treating code completion as operational readiness.",
  },
];

export default function HospitalityTechPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "Hospitality Tech",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="Hospitality Tech"
        label="Industry / Travel and guest technology"
        positioning="Hospitality technology has to protect guest trust while coordinating systems and teams that remain live through every arrival, stay, and departure."
        trustTest="A hospitality product should know which system owns the booking, which property and role may see the guest, how payment and service states recover, and what staff can do when a vendor is delayed during a live stay."
        definitiveAnswer="A credible hospitality technology partner understands that guest experience, data responsibility, booking accuracy, payment state, and property operations are inseparable. The product must carry the right context across channels and shifts, limit access across properties and vendors, and degrade honestly when connected systems fail—because the hotel cannot pause service while software catches up."
        differences={{
          title: "The digital journey lands inside a live property operation.",
          introduction:
            "Hospitality is underserved by security-conscious development partners because its risk sits between worlds: consumer-facing convenience, sensitive travel data, payment workflows, old and new vendor systems, and frontline teams working around the clock.",
          challenges: [
            {
              title:
                "Guest data can reveal presence, absence, and relationships.",
              description:
                "Reservation dates, companions, contact details, preferences, messages, identity documents, room information, and service requests create a detailed picture of a person's movements and private circumstances.",
              implication:
                "Access, notifications, analytics, exports, retention, and support tools need the same care as the booking database.",
            },
            {
              title: "A reservation crosses several sources of truth.",
              description:
                "Brand sites, online travel agencies, central reservation systems, PMS platforms, channel managers, payment providers, and property tools may each hold part of the booking state and update on different schedules.",
              implication:
                "Ownership, identifiers, retries, duplication, reconciliation, and guest-facing status must be designed before integration code.",
            },
            {
              title: "Reliability is judged at the front desk.",
              description:
                "A delayed message, missing room status, failed key workflow, or incorrect payment state becomes a human service problem immediately. Staff often absorb system failure while the guest waits in front of them.",
              implication:
                "Critical workflows need monitored failure states, usable fallback, and enough context for staff to recover the experience safely.",
            },
            {
              title: "Property access changes across shifts and portfolios.",
              description:
                "Front desk, reservations, housekeeping, finance, management, contractors, and central teams need different actions at different properties. Broad portfolio access may be convenient while exposing far more guest data than the role requires.",
              implication:
                "Roles should express property, function, shift, and sensitive action—not simply staff versus guest.",
            },
            {
              title:
                "Payment status follows the stay, not one checkout screen.",
              description:
                "Deposits, pre-authorizations, captures, incidentals, no-show charges, cancellations, refunds, and channel payments can span days and systems. A successful request and settled financial outcome are not the same event.",
              implication:
                "Payment exposure should be minimized and every financial state should remain traceable through booking and property operations.",
            },
            {
              title: "There is no clean maintenance window for hospitality.",
              description:
                "Guests arrive across time zones while properties run uneven connectivity, different vendors, seasonal peaks, and shift handovers. A portfolio-wide release can multiply a small assumption across many live service moments.",
              implication:
                "Rollout requires representative pilots, staged expansion, observability, staff guidance, and a rehearsed fallback path.",
            },
          ],
          closing:
            "Hospitality technology earns trust when it makes service feel continuous while keeping guest information, booking truth, and operational authority properly bounded behind the scenes.",
        }}
        approach={{
          title: "Secure the guest journey through the operational handoffs.",
          introduction:
            "Our hospitality approach follows a service moment across guest channels, property roles, systems of record, vendors, payments, and recovery. That is where reliability and privacy decisions become usable operations.",
          principles: [
            {
              title: "Map one stay across every system",
              description:
                "We trace booking, identity, payment, communication, arrival, service, departure, and follow-up through the systems and people responsible for each state, including manual workarounds and vendor limits.",
              practicalResult:
                "guest data map, service blueprint, system ownership",
            },
            {
              title: "Limit access by property and purpose",
              description:
                "Guest and operational information is separated by portfolio, property, role, workflow, and sensitive action, with central oversight and support powers granted deliberately and logged where they matter.",
              practicalResult:
                "property-aware roles and reviewable privileged access",
            },
            {
              title: "Design integrations for degraded service",
              description:
                "We define authoritative states, idempotent events, queues, reconciliation, alerting, and staff-facing exception paths for delayed or unavailable booking, PMS, CRM, messaging, and payment dependencies.",
              practicalResult:
                "observable integrations and operational recovery paths",
            },
            {
              title: "Pilot around real property conditions",
              description:
                "Representative properties, roles, devices, connectivity, occupancy patterns, and shift changes shape testing and rollout. Expansion follows evidence rather than one portfolio-wide launch assumption.",
              practicalResult:
                "live pilot, fallback plan, and staged rollout evidence",
            },
          ],
        }}
        services={{
          title: "Capabilities for dependable hospitality technology.",
          introduction:
            "Industry understanding comes first. These services support the connected guest, staff, integration, and security work required once the operational trust model is clear.",
          items: [
            {
              label: "01 / Transformation",
              title: "Hospitality Digital Transformation",
              description:
                "Connect guest journeys, property workflows, systems, and staged adoption without treating a new interface as the whole transformation.",
              href: "/hospitality-digital-transformation",
            },
            {
              label: "02 / Systems",
              title: "API & Backend Systems",
              description:
                "Build reliable booking, guest, property, payment, and vendor integration boundaries with monitored recovery behavior.",
              href: "/api-and-backend-systems",
            },
            {
              label: "03 / Trust",
              title: "Security Architecture",
              description:
                "Map guest data, property access, third-party exposure, auditability, and resilience into one understandable security model.",
              href: "/security-architecture",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Property and enterprise travel technology",
          name: "Avian Hospitality + Sabre Corporation",
          title:
            "Hospitality context from multi-property operations to global travel technology.",
          summary:
            "For Avian Hospitality, CWN Solutions built a unified digital layer connecting booking, guest communication, and property management across multiple properties. Work in the wider travel ecosystem, including Sabre Corporation, adds enterprise context where travel systems, scale, reliability, and precision are non-negotiable. Together they demonstrate familiarity with both the operational reality of the stay and the technology infrastructure around it.",
          value: "2 levels",
          valueLabel: "property operations to travel scale",
          detail:
            "Avian demonstrates connected guest and property workflows; Sabre experience demonstrates delivery context inside enterprise travel technology. The combination is why hospitality is a domain capability, not a generic vertical label.",
          source: "CWN Solutions hospitality and travel portfolio",
          href: "/case-studies/avian-hospitality",
          linkLabel: "Read the Avian Hospitality case study →",
          secondaryHref: "/case-studies/sabre-corporation",
          secondaryLinkLabel: "Read the Sabre Corporation case study →",
          tags: [
            "Multi-property operations",
            "Guest journeys",
            "Booking systems",
            "Enterprise travel technology",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Hospitality Tech leader FAQ",
          title: "Questions about guest trust and always-on operations.",
          introduction:
            "Practical answers about guest data, booking reliability, property access, payments, specialist partner fit, pilots, and rollout timing.",
        }}
        cta={{
          title: "Talk to someone who’s built in Hospitality Tech.",
          description:
            "Bring the guest journey, property workflows, vendor map, and reliability concerns. We’ll help identify where trust and service continuity need to shape the product before the next integration is added.",
          action: "Discuss your hospitality product",
          href: "/#contact",
        }}
      />
    </>
  );
}
