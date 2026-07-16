import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/hospitality-digital-transformation";
const description =
  "Hospitality digital transformation for connected booking, guest journeys, property operations, and multi-property visibility without disrupting live service.";

export const metadata: Metadata = createPageMetadata({
  title: "Hospitality Digital Transformation Services",
  description,
  path,
  openGraphTitle:
    "Connected Hospitality Digital Transformation | CWN Solutions",
  openGraphDescription:
    "Unify guest-facing journeys and property operations around the systems your teams depend on, with staged delivery designed for always-on hospitality.",
});

const faqs: FaqItem[] = [
  {
    question:
      "Do we need to replace our PMS to modernize the guest experience?",
    answer:
      "Not necessarily. If the property management system remains operationally sound and offers dependable integration options, it can continue as a system of record while a modern guest or staff experience is built around it. We first map where data originates, which system owns each update, and what the PMS can reliably expose. Replacement is recommended only when the platform itself creates an unavoidable constraint—not simply because its interface looks dated.",
  },
  {
    question: "Which hospitality journey should be digitized first?",
    answer:
      "Choose a journey with visible guest or staff friction, repeated volume, and data that can be connected safely. Pre-arrival information, digital check-in, service requests, guest messaging, room readiness, and cross-property reporting are common candidates. We compare guest impact, operational effort, integration feasibility, and adoption risk so the first release improves a complete service moment rather than adding another isolated touchpoint.",
  },
  {
    question: "Can you integrate booking, PMS, CRM, POS, and payment systems?",
    answer:
      "Yes, when those platforms provide suitable APIs, webhooks, file interfaces, or approved partner access. Discovery covers data ownership, identifiers, synchronization direction, rate limits, payment scope, failure recovery, and vendor certification requirements. We avoid assuming every system can update every other system in real time; the integration design reflects the actual capabilities and operational importance of each connection.",
  },
  {
    question:
      "How do you roll out new software without disrupting property operations?",
    answer:
      "Rollout is staged around operational reality: sandbox and test-property validation, staff walkthroughs, controlled data migration, clear fallback procedures, limited guest cohorts, and support during the first live service windows. We also account for occupancy patterns, seasonal peaks, shift handovers, and differences between properties. The objective is to learn in a contained setting before expanding—not to force a portfolio-wide cutover on one date.",
  },
  {
    question:
      "How can one platform support multiple properties without erasing local differences?",
    answer:
      "We separate shared capabilities—identity, reporting, core service types, brand standards, and integration contracts—from property-level configuration such as amenities, operating hours, escalation rules, languages, and local offers. Role-based access then gives portfolio teams a consistent view while property teams see the context they need. This avoids maintaining separate products without pretending every location operates identically.",
  },
  {
    question: "How are guest data and digital payments protected?",
    answer:
      "The design minimizes collected data, defines retention, restricts access by role and property, encrypts data in transit and at rest, logs sensitive actions, and isolates secrets and environments. For payments, we prefer hosted or tokenized flows from established payment providers so the platform does not handle card data unnecessarily. Exact privacy and compliance requirements are mapped to the markets, vendors, and guest journeys in scope.",
  },
];

export default function HospitalityDigitalTransformationPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Hospitality Digital Transformation",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="Hospitality Digital Transformation"
        label="Service / Hospitality technology"
        positioning="We connect guest journeys and property operations into digital services that feel effortless at the front desk and dependable behind it."
        definitiveAnswer="Hospitality digital transformation is the coordinated redesign of guest touchpoints, staff workflows, data flows, and property-system integrations so hotels and travel operators can deliver a more consistent experience without losing operational continuity."
        problem={{
          title:
            "Guests see one stay. Your teams manage a chain of disconnected systems.",
          introduction:
            "A booking passes through reservations, payments, property operations, guest communication, service delivery, and reporting. When those handoffs rely on duplicate entry and fragmented tools, staff carry the complexity and guests feel every missed update.",
          pressures: [
            {
              title: "Guest expectations cross system boundaries.",
              description:
                "A request made before arrival should still be visible at the property. When channels do not share context, guests repeat themselves and staff recover the experience manually.",
            },
            {
              title: "Always-on operations leave no clean cutover window.",
              description:
                "Properties cannot pause arrivals, housekeeping, payments, or service while a new platform settles in. Change must work across shifts, occupancy peaks, and uneven technical conditions.",
            },
            {
              title: "Portfolio visibility arrives too late to act.",
              description:
                "Different processes, identifiers, and reports make it difficult to compare properties, detect service issues, or understand a guest relationship across more than one stay.",
            },
          ],
          closing:
            "The service creates a connected operating layer that removes avoidable handoffs for staff and carries the right context through every guest-facing moment.",
        }}
        includedContent={{
          title: "One transformation, grounded in live hotel operations.",
          introduction:
            "Each workstream joins guest experience decisions to system ownership, staff reality, and staged adoption so improvement can land without interrupting service.",
        }}
        phases={[
          {
            title: "Guest journey & operations mapping",
            summary:
              "We trace priority journeys across guest channels, property roles, manual handoffs, current systems, service standards, and failure points, then establish a measurable target state.",
            trustReason:
              "Seeing who needs which information—and when—prevents a polished guest feature from creating hidden work or unsafe access behind the scenes.",
            output: "Service blueprint + opportunity map",
          },
          {
            title: "Experience & integration architecture",
            summary:
              "We design the guest and staff interfaces alongside system-of-record boundaries, identifiers, synchronization, property configuration, role access, and integration recovery behavior.",
            trustReason:
              "Clear ownership and failure paths keep booking, guest, and payment information consistent when a vendor or connection is delayed.",
            output: "Prototype + integration blueprint",
          },
          {
            title: "Connected product delivery",
            summary:
              "The team builds complete service slices in two-week sprints, integrating interfaces, operational views, notifications, data flows, tests, and monitoring in a representative environment.",
            trustReason:
              "End-to-end demonstrations with realistic property scenarios reveal workflow gaps before guests or busy shifts depend on the new service.",
            output: "Pilot-ready service increments",
          },
          {
            title: "Property pilot & staged expansion",
            summary:
              "We validate with selected users or a pilot property, prepare staff guidance and fallbacks, monitor live behavior, resolve adoption issues, and package a repeatable rollout plan for the wider portfolio.",
            trustReason:
              "Controlled expansion protects service continuity and turns frontline feedback into improvements before operational risk is multiplied across locations.",
            output: "Live pilot + rollout playbook",
          },
        ]}
        comparison={{
          title:
            "Transformation succeeds when the service and the system move together.",
          description:
            "We begin with the real guest-and-staff journey, then connect technology around operational ownership rather than adding another standalone channel.",
          rows: [
            {
              label: "Starting point",
              primary:
                "Map a complete service moment across guests, shifts, properties, vendors, and systems of record.",
              secondary:
                "Start from a requested app or portal and discover operational dependencies during implementation.",
            },
            {
              label: "Integration",
              primary:
                "Define data ownership, synchronization, idempotency, and recovery for each property-system connection.",
              secondary:
                "Connect available endpoints and rely on staff to reconcile delayed or conflicting records.",
            },
            {
              label: "Staff experience",
              primary:
                "Reduce duplicate work and design role-specific actions around actual service and shift patterns.",
              secondary:
                "Optimize the guest interface while transferring new administrative steps to property teams.",
            },
            {
              label: "Portfolio model",
              primary:
                "Combine shared standards with controlled property configuration and portfolio-level visibility.",
              secondary:
                "Force identical workflows everywhere or create separate implementations that drift over time.",
            },
            {
              label: "Rollout",
              primary:
                "Pilot with representative operations, documented fallbacks, live monitoring, and staged expansion.",
              secondary:
                "Treat technical release as adoption and plan a broad cutover after pre-production testing.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Multi-property hospitality",
          name: "Avian Hospitality",
          title:
            "A unified digital layer across the guest and property journey.",
          summary:
            "Avian Hospitality needed to coordinate guest experience across multiple properties without relying on disconnected tools and manual processes. CWN Solutions built a platform connecting booking, guest communication, and property management into a clearer operational view. Our work in the wider travel ecosystem, including Sabre Corporation, adds enterprise travel-technology context where reliability and precision are non-negotiable.",
          metric: "Multi-property",
          metricLabel: "connected operations",
          metricDetail:
            "The Avian Hospitality work demonstrates a transformation shaped around both sides of the stay: smoother guest interactions and usable operational visibility for the people delivering them.",
          href: "/case-studies/avian-hospitality",
          tags: [
            "Guest experience",
            "Property operations",
            "Booking systems",
            "Sabre experience",
          ],
        }}
        industries={[
          {
            code: "HO",
            name: "Hospitality Tech",
            description:
              "Connected guest, staff, and portfolio experiences for hotels and accommodation groups.",
            href: "/hospitality-tech",
          },
          {
            code: "EC",
            name: "E-commerce",
            description:
              "Direct booking and ancillary purchase journeys designed to reduce friction and abandonment.",
            href: "/e-commerce",
          },
          {
            code: "AI",
            name: "Enterprise AI",
            description:
              "Governed assistance for property knowledge, guest service, and operational decision support.",
            href: "/enterprise-ai",
          },
          {
            code: "FT",
            name: "FinTech",
            description:
              "Reliable payment, refund, identity, and reconciliation flows across guest transactions.",
            href: "/fintech",
          },
        ]}
        industriesContent={{
          title: "Connected sectors behind a seamless stay.",
          introduction:
            "Hospitality transformation crosses guest service, commerce, payments, and intelligent operations. These related capabilities support the journey end to end.",
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Hospitality transformation FAQ",
          title:
            "Operational questions to resolve before changing the guest journey.",
          introduction:
            "Direct answers about PMS strategy, integration, multi-property design, live rollout, and protection of guest and payment data.",
        }}
        cta={{
          title: "Find the broken handoff in your guest journey.",
          description:
            "Bring the property map, current systems, or recurring service issue. We’ll trace the operational cause, identify a useful first transformation, and outline a rollout that respects live hospitality.",
          action: "Map the first service journey",
          href: "/#contact",
        }}
      />
    </>
  );
}
