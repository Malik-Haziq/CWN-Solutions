import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/enterprise-ai-integration";
const description =
  "Enterprise AI integration for secure, measurable workflows, connecting private company knowledge, business systems, human approvals, and production-grade governance.";

export const metadata: Metadata = createPageMetadata({
  title: "Enterprise AI Integration for Secure Workflows",
  description,
  path,
  openGraphTitle: "Private Enterprise AI Integration | CWN Solutions",
  openGraphDescription:
    "Move from isolated AI experiments to governed tools connected to the knowledge, controls, and workflows your teams already rely on.",
});

const faqs: FaqItem[] = [
  {
    question: "Which enterprise workflow should we integrate AI into first?",
    answer:
      "Start where employees repeatedly search, summarize, classify, draft, or compare information; where source material is available; and where a person can review high-impact outputs. Strong first candidates include internal knowledge retrieval, support triage, document intake, proposal research, compliance assistance, and operational reporting. We score candidates by business value, data readiness, error cost, integration effort, and evaluation clarity before recommending a pilot.",
  },
  {
    question:
      "Can an AI assistant use private company knowledge without training on it?",
    answer:
      "Yes. A retrieval-based system can search authorized company sources at request time and provide relevant context to a model without using that content to retrain the model. The exact privacy position still depends on the selected provider, deployment model, retention settings, and contract. We design those boundaries explicitly, restrict retrieval by the requesting user's permissions, and log the system actions required for oversight.",
  },
  {
    question: "How do you reduce hallucinations in a production AI workflow?",
    answer:
      "The goal is not to promise that a generative model never makes a mistake; it is to design a workflow where errors are detectable and contained. We ground responses in approved sources, require citations where appropriate, constrain tools and output formats, test known edge cases, set confidence or abstention behavior, and keep human approval around consequential actions. Evaluation datasets then track whether changes improve or degrade real task performance.",
  },
  {
    question: "Will enterprise AI integration work with our existing systems?",
    answer:
      "Usually, provided the required systems expose a stable API, database view, event stream, export, or approved automation interface. During discovery we map identity, permissions, data formats, rate limits, failure behavior, and system ownership for each connection. When a legacy platform has no safe integration path, we identify that constraint early and can design a staged approach rather than placing brittle screen automation at the center of a critical process.",
  },
  {
    question: "How is an enterprise AI pilot evaluated before broader rollout?",
    answer:
      "Before building, we define a baseline and a small evaluation set drawn from real, de-identified or approved work. The pilot is assessed on task accuracy, groundedness, completion time, escalation rate, user adoption, failure severity, and operating cost. A rollout decision is based on those agreed measures plus security and operational review—not on a handful of impressive demonstration prompts.",
  },
  {
    question:
      "What governance remains in place after the AI integration launches?",
    answer:
      "Production governance should identify approved use cases and data sources, model and prompt versions, user access, retained logs, human approval points, incident ownership, and the conditions that trigger review or rollback. We document these controls, configure relevant monitoring, and make model or retrieval changes traceable so the system can evolve without becoming an unowned black box.",
  },
];

export default function EnterpriseAiIntegrationPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Enterprise AI Integration",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="Enterprise AI Integration"
        label="Service / Applied enterprise AI"
        positioning="We embed private, governed AI into the workflows your teams already use—so productivity gains survive security review and production reality."
        definitiveAnswer="Enterprise AI integration is the disciplined connection of language models to authorized company knowledge, identity, business systems, evaluation controls, and human decision points so a useful AI capability can operate safely inside day-to-day work."
        problem={{
          title:
            "A convincing AI demo is still a long way from an accountable system.",
          introduction:
            "Teams can prove a model is impressive in an afternoon. The hard part begins when it must respect existing permissions, use current company knowledge, take reliable actions, explain its sources, and create value under real operating constraints.",
          pressures: [
            {
              title: "Sensitive context sits behind business boundaries.",
              description:
                "The documents that make AI useful also contain customer data, commercial knowledge, and role-restricted information that cannot be copied into an uncontrolled tool.",
            },
            {
              title: "Model fluency can hide operational error.",
              description:
                "An answer may sound authoritative while using stale evidence, missing an exception, or inventing detail. Without evaluation and escalation paths, adoption multiplies the mistake.",
            },
            {
              title: "Experiments stall at the integration boundary.",
              description:
                "A standalone chat window rarely changes a process. Business value depends on identity, source systems, approvals, auditability, latency, cost, and a team prepared to own it.",
            },
          ],
          closing:
            "The service turns AI from an isolated capability into a controlled part of work, with evidence for what it can do, limits for what it cannot, and ownership for what happens next.",
        }}
        includedContent={{
          title: "One workflow, engineered from evidence to oversight.",
          introduction:
            "The engagement joins business process design, data access, AI evaluation, and operational governance so the production result is useful beyond the demonstration room.",
        }}
        phases={[
          {
            title: "Workflow selection & value baseline",
            summary:
              "We map candidate tasks, current handling time, error cost, available knowledge, decision owners, and risk, then choose a bounded workflow with a measurable reason to use AI.",
            trustReason:
              "Starting with a defined decision and baseline prevents open-ended automation from reaching sensitive processes without an accountable outcome.",
            output: "Use-case scorecard + baseline",
          },
          {
            title: "Data, identity & AI system design",
            summary:
              "We design authorized retrieval, model routing, prompts, tool access, citations, human checkpoints, retention boundaries, and integrations with the systems already used by the team.",
            trustReason:
              "The assistant sees and does only what the requesting user and approved workflow allow, rather than inheriting broad access for convenience.",
            output: "AI architecture + control map",
          },
          {
            title: "Pilot build & grounded evaluation",
            summary:
              "We build the end-to-end workflow and test it against representative tasks, measuring answer quality, source grounding, escalation behavior, speed, cost, and user experience.",
            trustReason:
              "A repeatable evaluation set reveals confident failures and regression before usage expands beyond a controlled group.",
            output: "Working pilot + evaluation report",
          },
          {
            title: "Production rollout & governance",
            summary:
              "We harden integrations, configure observability and budgets, stage access, document operating policies, train owners, and establish review triggers for models, sources, and prompts.",
            trustReason:
              "Traceable changes, monitored behavior, and named human owners keep the AI capability governable as vendors, data, and usage evolve.",
            output: "Production integration + runbook",
          },
        ]}
        comparison={{
          title: "Enterprise AI earns scale through control and measurement.",
          description:
            "We design around the business decision, the authorized evidence, and the cost of failure—not around access to a fashionable model endpoint.",
          rows: [
            {
              label: "Use-case choice",
              primary:
                "Rank workflows by value, data readiness, evaluation clarity, and consequence of error.",
              secondary:
                "Add a general chatbot and wait for employees to discover a repeatable business case.",
            },
            {
              label: "Knowledge access",
              primary:
                "Retrieve approved sources within the user's existing permissions and preserve source traceability.",
              secondary:
                "Load a broad document collection into one index with limited attention to access inheritance.",
            },
            {
              label: "Quality assurance",
              primary:
                "Evaluate representative tasks, groundedness, abstention, and severe failure modes before rollout.",
              secondary:
                "Review selected outputs manually and treat fluent responses as evidence of reliability.",
            },
            {
              label: "Human control",
              primary:
                "Place review and approval at decisions where an incorrect action would matter.",
              secondary:
                "Maximize automation first, then add intervention after edge cases appear in production.",
            },
            {
              label: "Operations",
              primary:
                "Monitor quality, latency, usage, cost, model versions, and source freshness with named owners.",
              secondary:
                "Monitor availability while prompts, models, and knowledge evolve without a shared audit trail.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Private enterprise AI",
          name: "Auxee AI",
          title:
            "An internal AI layer built for knowledge that cannot go public.",
          summary:
            "Auxee AI gives enterprise teams a private assistant for working with internal knowledge without defaulting to public consumer AI tools. Built for and deployed via PreScouter, the product demonstrates how secure data boundaries, enterprise context, and a practical employee experience can be assembled into one AI system for organizations with serious confidentiality requirements.",
          metric: "Private",
          metricLabel: "enterprise AI by design",
          metricDetail:
            "Auxee AI is the relevant proof point for connecting useful language-model workflows to sensitive organizational knowledge while keeping data control at the center of the product.",
          href: "/case-studies/auxee-ai",
          additionalLinks: [
            {
              href: "/case-studies/zyrentis-ai",
              label: "Read the Zyrentis AI case study →",
            },
          ],
          tags: [
            "Private knowledge",
            "LLM integration",
            "Enterprise workflows",
            "Data governance",
          ],
        }}
        industries={[
          {
            code: "FT",
            name: "FinTech",
            description:
              "Governed assistance for financial operations, research, support, and document-heavy review.",
            href: "/fintech",
          },
          {
            code: "HT",
            name: "HealthTech",
            description:
              "Controlled knowledge workflows where privacy, accuracy, and human judgment are essential.",
            href: "/healthtech",
          },
          {
            code: "LT",
            name: "LegalTech",
            description:
              "Source-grounded search and drafting across confidential documents and structured approvals.",
            href: "/legaltech",
          },
          {
            code: "HO",
            name: "Hospitality Tech",
            description:
              "AI assistance across guest service, property knowledge, and high-volume operations.",
            href: "/hospitality-tech",
          },
        ]}
        industriesContent={{
          title: "Where proprietary knowledge meets repeated decisions.",
          introduction:
            "Most valuable in sectors with information-heavy workflows, meaningful access boundaries, and enough repeated work to measure whether AI genuinely improves the operation.",
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Enterprise AI integration FAQ",
          title:
            "The questions that separate a pilot from a production capability.",
          introduction:
            "Practical guidance on private knowledge, hallucination controls, legacy integration, evaluation, and long-term governance.",
        }}
        cta={{
          title: "Choose an AI workflow worth putting into production.",
          description:
            "Bring the process, systems, and risk constraints. We’ll identify the strongest first use case, the data boundary it requires, and the evidence needed for a responsible rollout decision.",
          action: "Assess an AI workflow",
          href: "/#contact",
        }}
      />
    </>
  );
}
