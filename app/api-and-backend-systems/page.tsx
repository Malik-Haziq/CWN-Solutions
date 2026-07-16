import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/api-and-backend-systems";
const description =
  "Reliable, secure, scalable API and backend system development for founders who need clear technical expectations, production visibility, and infrastructure built to survive growth.";

export const metadata: Metadata = createPageMetadata({
  title: "Secure API and Backend System Development",
  description,
  path,
  openGraphTitle: "Reliable APIs and Backend Systems | CWN Solutions",
  openGraphDescription:
    "Know what to ask your development team for: clear contracts, access boundaries, failure handling, observability, recovery, and a credible route to scale.",
});

const faqs: FaqItem[] = [
  {
    question:
      "What should a founder ask to see before approving a backend launch?",
    answer:
      "Ask for an architecture overview, a list of data and service owners, API documentation, access-role definitions, critical test results, monitoring and alerting coverage, backup and restore evidence, deployment and rollback steps, known limits, and an incident owner. You should also be able to see a working staging environment and understand which failures wake someone up. These are not requests for technical theatre; they are the basic evidence that the system can be operated after launch.",
  },
  {
    question: "Should our API use REST, GraphQL, or something else?",
    answer:
      "The right style depends on consumers, data shape, caching, team experience, and integration needs. REST is often a clear default for business APIs; GraphQL can help clients that need flexible, connected data; events or queues suit asynchronous workflows. The more important founder questions are whether the contract is documented, permissions are enforced consistently, changes are versioned safely, failures are predictable, and the team can support the chosen approach.",
  },
  {
    question:
      "How do backend systems prevent duplicate charges or repeated actions?",
    answer:
      "Networks retry and users click twice, so important operations should be designed to recognize the same request and avoid performing it twice. Engineers call this idempotency; a simple analogy is a numbered claim ticket that can be presented again without receiving a second item. We use request identifiers, database constraints, transaction boundaries, and explicit state transitions where duplicate payments, bookings, messages, or imports would cause harm.",
  },
  {
    question: "What happens when traffic suddenly grows?",
    answer:
      "A credible system has measured limits and a plan for the first bottlenecks rather than a vague claim that the cloud scales automatically. We test important paths, keep services stateless where useful, use caching and queues deliberately, protect dependencies with rate limits and timeouts, and make capacity visible. The goal is not infinite scale on day one; it is predictable behavior, graceful degradation, and enough evidence to expand the right component before growth becomes an outage.",
  },
  {
    question:
      "How should API changes be made without breaking customers or apps?",
    answer:
      "Contracts should evolve compatibly where possible: add before removing, document behavior, test consumers, and give deprecated fields or versions a clear retirement window. Database changes need the same care because old and new application versions may run during deployment. We design migrations and release sequences so a rollback remains possible instead of requiring every connected system to change at exactly the same moment.",
  },
  {
    question:
      "Who should own the cloud accounts, data, and backend documentation?",
    answer:
      "The client should own production cloud accounts, domains, code repositories, data, credentials or credential authority, vendor contracts, and operational documentation. Access for a delivery partner should be role-based and removable. Our handoff identifies services, environments, costs, dashboards, alerts, backups, deployment steps, known limits, and architecture decisions so ownership is practical rather than a line in the contract.",
  },
];

export default function ApiAndBackendSystemsPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "API & Backend Systems",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="API & Backend Systems"
        label="Service / Product infrastructure"
        positioning="We build the reliable, secure system behind the interface—and give founders the questions, evidence, and ownership they should be asking their dev team for and probably aren't."
        definitiveAnswer="API and backend system development is the design and delivery of the product's operational core: the rules, data, permissions, integrations, background work, monitoring, recovery, and scaling behavior that must remain dependable when users and other systems rely on it."
        problem={{
          title:
            "The backend stays invisible until its assumptions become your outage.",
          introduction:
            "A founder can review every screen and still have no way to see whether permissions are consistent, repeated requests create duplicates, backups restore, integrations recover, or the system provides enough evidence to diagnose a failure under pressure.",
          pressures: [
            {
              title: "Working once is mistaken for reliability.",
              description:
                "Demos follow the happy path. Production includes retries, timeouts, partial updates, bad input, delayed vendors, concurrent users, and deployments that must be reversible.",
            },
            {
              title: "Security decisions are scattered through code.",
              description:
                "When authentication, permissions, service credentials, and data boundaries lack one model, different endpoints quietly enforce different rules.",
            },
            {
              title: "Scale is promised without measurable limits.",
              description:
                "‘Cloud-native’ does not explain which dependency fails first, what traffic the system has handled, how costs behave, or what users experience when capacity is reached.",
            },
          ],
          closing:
            "The service gives founders something more useful than technical reassurance: a backend whose contracts, limits, failures, controls, and operating evidence can be inspected and owned.",
        }}
        includedContent={{
          title: "The invisible product, made dependable and visible.",
          introduction:
            "Four workstreams turn business rules into explicit API contracts, protected data, recoverable workflows, and production signals a founder and future technical team can understand.",
        }}
        phases={[
          {
            title: "Domain, data & service-boundary design",
            summary:
              "We map business rules, critical records, user and system roles, integrations, consistency needs, expected usage, and failure impact before dividing responsibilities across APIs, databases, jobs, and vendors.",
            trustReason:
              "Clear ownership prevents important rules and sensitive data from being duplicated across services that can drift or expose different behavior.",
            output: "Backend blueprint + risk map",
          },
          {
            title: "API contracts & reliability architecture",
            summary:
              "We define endpoints or events, validation, authentication, authorization, versioning, idempotency, transactions, queues, timeouts, rate limits, error behavior, storage, caching, and deployment boundaries.",
            trustReason:
              "Consumers know what the system guarantees, and repeated or partial requests cannot silently create unsafe business outcomes.",
            output: "API specification + architecture",
          },
          {
            title: "Backend build & failure-path testing",
            summary:
              "The team delivers production slices with database migrations, integration adapters, background jobs, automated tests, infrastructure configuration, structured logs, metrics, traces, and secure secret handling.",
            trustReason:
              "Timeouts, retries, access violations, duplicate events, and dependency failures are exercised before real users discover them.",
            output: "Deployed backend increments",
          },
          {
            title: "Load evidence, recovery & handoff",
            summary:
              "We measure critical paths, tune known bottlenecks, test backup and restore, configure alerts and budgets, document deployment and rollback, and transfer cloud and operational ownership.",
            trustReason:
              "The team leaves with measured limits, recovery evidence, and useful production visibility instead of an unsupported promise that the backend will scale.",
            output: "Production runbook + scale plan",
          },
        ]}
        comparison={{
          title: "Founders deserve evidence about the system they cannot see.",
          description:
            "We make backend quality legible through explicit contracts, tested failure behavior, operational signals, and client ownership—not architecture vocabulary alone.",
          rows: [
            {
              label: "API contract",
              primary:
                "Document inputs, outputs, permissions, errors, limits, ownership, and compatible change rules before consumers depend on them.",
              secondary:
                "Treat the current implementation as the specification and explain behavior when integration begins.",
            },
            {
              label: "Data integrity",
              primary:
                "Design transactions, idempotency, constraints, and state transitions around duplicate and partial work.",
              secondary:
                "Validate the normal request path and repair conflicting records with support scripts later.",
            },
            {
              label: "Access control",
              primary:
                "Apply one permission model across users, administrators, services, jobs, and integration credentials.",
              secondary:
                "Secure public endpoints while internal services and operational tooling inherit broad access.",
            },
            {
              label: "Production visibility",
              primary:
                "Connect structured logs, metrics, traces, alerts, and business events to named response ownership.",
              secondary:
                "Collect server logs and add dashboards after the first failure proves what was missing.",
            },
            {
              label: "Scalability",
              primary:
                "Measure critical workloads, identify constraints, protect dependencies, and plan capacity from evidence.",
              secondary:
                "Choose scalable technologies and assume infrastructure automation will handle growth uniformly.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Private enterprise platform",
          name: "Auxee AI",
          title:
            "A secure backend layer connecting AI to enterprise knowledge.",
          summary:
            "Auxee AI had to do more than place a chat interface in front of a model. Its backend needed to connect enterprise knowledge and AI workflows while respecting private deployment expectations and the operational needs of organizations that cannot send sensitive context through uncontrolled consumer tools. Built for and deployed via PreScouter, it demonstrates backend architecture shaped by data boundaries and real enterprise use.",
          metric: "Enterprise-grade",
          metricLabel: "private AI foundation",
          metricDetail:
            "Auxee AI is proof of backend delivery where identity, sensitive context, model integration, and operational reliability must work as one controlled system.",
          href: "/case-studies/auxee-ai",
          tags: [
            "Secure APIs",
            "Private data flows",
            "AI integration",
            "Enterprise backend",
          ],
        }}
        industries={[
          {
            code: "AI",
            name: "Enterprise AI",
            description:
              "Private knowledge, model, tool, and evaluation services with governed access boundaries.",
            href: "/enterprise-ai",
          },
          {
            code: "FT",
            name: "FinTech",
            description:
              "Transaction and record systems requiring consistent authorization and durable data integrity.",
            href: "/fintech",
          },
          {
            code: "HO",
            name: "Hospitality Tech",
            description:
              "Booking, guest, property, and vendor integrations that must recover across always-on operations.",
            href: "/hospitality-tech",
          },
          {
            code: "EC",
            name: "E-commerce",
            description:
              "Inventory, order, payment, fulfillment, and customer services behind dependable buying journeys.",
            href: "/e-commerce",
          },
        ]}
        industriesContent={{
          title: "Where reliable system behavior carries the business.",
          introduction:
            "Most relevant when several products, vendors, or high-value workflows depend on the same data and services behaving consistently under pressure.",
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "API and backend FAQ",
          title:
            "The technical questions a founder should not have to invent alone.",
          introduction:
            "A practical guide to launch evidence, API choices, duplicate actions, traffic growth, compatible change, and real system ownership.",
        }}
        cta={{
          title: "Ask better questions of the system behind your product.",
          description:
            "Bring the product, integration plan, architecture diagram, or recurring incident. We’ll identify the guarantees the backend owes the business and the evidence your development team should be able to show.",
          action: "Review the backend plan",
          href: "/#contact",
        }}
      />
    </>
  );
}
