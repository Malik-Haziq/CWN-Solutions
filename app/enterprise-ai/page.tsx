import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/enterprise-ai";
const description =
  "Enterprise AI expertise for organizations managing private knowledge, third-party model risk, permission-aware retrieval, output auditability, and governed AI adoption.";

export const metadata: Metadata = createPageMetadata({
  title: "Enterprise AI Integration, Security & Governance Expertise",
  description,
  path,
  openGraphTitle: "Enterprise AI That Respects Organizational Trust",
  openGraphDescription:
    "Deploy useful AI around private data boundaries, inherited access control, traceable sources, evaluation, human review, and operational ownership.",
});

const faqs: FaqItem[] = [
  {
    question: "Will our company data be used to train a third-party AI model?",
    answer:
      "That depends on the provider, product tier, endpoint, configuration, contract, retention policy, and any subprocessors involved. We do not assume a consumer tool's behavior is suitable for enterprise data. During architecture we document what leaves your environment, which provider receives it, what may be retained or logged, and which contractual and technical controls apply. Your legal, procurement, privacy, and security owners validate the final arrangement before sensitive use cases are approved.",
  },
  {
    question: "Can an AI assistant respect our existing document permissions?",
    answer:
      "Yes, if access is designed into ingestion, indexing, retrieval, caching, conversation history, citations, and administrative tooling. The assistant should evaluate the requesting identity and current source permissions rather than treating an index as one shared knowledge pool. We also define what happens when access is revoked, a document moves, a group changes, or generated text has already incorporated content the user should no longer retrieve.",
  },
  {
    question: "How do you audit an AI answer?",
    answer:
      "Useful auditability connects an output to the user, use case, model and version, prompt or policy configuration, retrieved sources, relevant tool actions, time, and review outcome—while avoiding unnecessary sensitive content in logs. Not every model response can be reproduced byte for byte, so the goal is a defensible operational history: what evidence was available, which system acted, and where human approval was required.",
  },
  {
    question: "How do you reduce hallucinations and unreliable answers?",
    answer:
      "We narrow the use case, retrieve approved sources, require citations where useful, instruct the system to abstain when evidence is weak, constrain tool actions, and evaluate representative tasks and serious failure modes. Human review remains at decisions where a wrong answer carries material consequence. A fluent demo is not an acceptance test; quality needs a maintained evaluation set and monitored production feedback.",
  },
  {
    question: "Should we build our own model or use an enterprise provider?",
    answer:
      "Most organizations should first compare provider-hosted, privately deployed, open-weight, and specialized models against data sensitivity, output quality, latency, cost, portability, operational capability, and contract terms. Training a foundation model is rarely the first requirement. The differentiating work is often permission-aware knowledge, workflow integration, evaluation, and governance around a suitable model rather than ownership of model weights.",
  },
  {
    question:
      "How long does an enterprise AI pilot take, and what should it prove?",
    answer:
      "A focused pilot can often be built in weeks, but production adoption depends on identity, source access, procurement, security review, representative evaluation data, integration, and change ownership. The pilot should prove a measurable workflow outcome, acceptable failure behavior, permission enforcement, source traceability, cost and latency assumptions, and a credible operating model. It should not merely prove that a model can answer selected demonstration questions.",
  },
];

export default function EnterpriseAiPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "Enterprise AI",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="Enterprise AI"
        label="Industry / Organizational AI"
        positioning="Inside a large organization, an AI answer inherits the sensitivity, permissions, and consequences of the knowledge used to produce it."
        trustTest="An enterprise AI system should be able to explain what data left the organization, why this user could retrieve each source, which model and policy produced an output, and where a human remained accountable for the result."
        definitiveAnswer="A credible enterprise AI partner treats the model as one dependency inside a governed organizational system. Trust requires explicit third-party data boundaries, permission-aware knowledge access, source traceability, representative evaluation, constrained actions, human review at consequential decisions, and operational records that remain understandable as models, prompts, vendors, and source data change."
        differences={{
          title: "The model is new. The organization's duties are not.",
          introduction:
            "Enterprise AI can cross boundaries faster than conventional search or workflow software: one prompt may combine private records, external model infrastructure, probabilistic output, and an automated action. Each layer needs an owner and a visible trust decision.",
          challenges: [
            {
              title: "A prompt can become an unapproved data transfer.",
              description:
                "Employees paste contracts, customer records, strategy, source code, research, and personal data into convenient tools. Depending on provider terms and configuration, that content may leave approved environments, be retained, appear in logs, or pass through subprocessors.",
              implication:
                "Model choice must include endpoint, contract, retention, region, telemetry, and subprocessor boundaries—not only output quality.",
            },
            {
              title: "Retrieval can flatten years of access control.",
              description:
                "A shared vector index can make restricted folders, business units, client work, legal holds, and executive documents searchable through one friendly interface. Correct authentication does not help if retrieval ignores source-level authorization.",
              implication:
                "Permissions must follow content through ingestion, indexing, retrieval, caching, citations, and revocation.",
            },
            {
              title: "Confident language hides uncertain reasoning.",
              description:
                "A response may be fluent while unsupported, stale, incomplete, or based on the wrong source. Employees can over-trust it precisely because the interface removes the friction and qualifications present in the original material.",
              implication:
                "Grounding, citations, abstention, evaluation, and user guidance need to be designed around the consequence of error.",
            },
            {
              title: "AI behavior changes without a conventional release.",
              description:
                "Providers update models, indexes ingest new documents, permissions change, prompts evolve, and tools gain capabilities. Quality or risk can move even when the application code has not been deployed.",
              implication:
                "Versions, evaluations, source freshness, policy changes, cost, and serious failures need continuous operational ownership.",
            },
            {
              title: "Auditability is more than storing chat history.",
              description:
                "A useful record may need to connect user identity, use case, sources, model, policy configuration, tool calls, approvals, and outcome. Raw conversations alone can expose more sensitive data while still failing to explain why the system acted.",
              implication:
                "Logs should preserve decision evidence and accountability without becoming an uncontrolled archive of private prompts.",
            },
            {
              title: "Automation changes authority, not just efficiency.",
              description:
                "When AI drafts, classifies, recommends, sends, updates, or approves, it can influence customers, employees, finances, and regulated work. A human nominally 'in the loop' may still rubber-stamp output if review is poorly placed or overloaded.",
              implication:
                "Tool permissions, approval thresholds, reversibility, and named human responsibility must follow the consequence of each action.",
            },
          ],
          closing:
            "Enterprise AI becomes trustworthy when knowledge access, model behavior, and organizational authority remain bounded and reviewable as the system evolves.",
        }}
        approach={{
          title: "Govern the complete knowledge-to-action path.",
          introduction:
            "Our approach begins with a valuable workflow and follows every trust boundary around it—from source permission and provider exposure to evaluation, human judgment, action, and ongoing operational change.",
          principles: [
            {
              title: "Choose use cases by value and consequence",
              description:
                "We rank workflows by measurable benefit, data readiness, evaluation clarity, sensitivity, reversibility, and cost of error instead of beginning with a general chatbot looking for adoption.",
              practicalResult:
                "bounded use case, success measure, and risk owner",
            },
            {
              title: "Draw the provider and permission boundary",
              description:
                "We document model endpoints, retention, regions, subprocessors, source systems, identity, inherited permissions, indexes, caches, logs, and administration before private knowledge enters the workflow.",
              practicalResult:
                "approved data flow and permission-aware retrieval design",
            },
            {
              title: "Evaluate failure before scaling access",
              description:
                "Representative tasks test grounding, citations, abstention, permission isolation, prompt attacks, stale sources, severe errors, latency, and cost. Human review is placed where evidence or reversibility demands it.",
              practicalResult:
                "evaluation set, release threshold, and review workflow",
            },
            {
              title: "Operate models as changing dependencies",
              description:
                "We keep model, prompt, source, tool, and policy versions traceable; monitor quality, cost, latency, usage, and exceptions; and define who can change each layer and how rollback or disablement works.",
              practicalResult:
                "AI runbook, audit events, monitoring, and change ownership",
            },
          ],
        }}
        services={{
          title: "Capabilities for governed enterprise AI adoption.",
          introduction:
            "Enterprise AI needs more than model access. These services connect a useful workflow to secure architecture and the reliable systems required to operate it inside a real organization.",
          items: [
            {
              label: "01 / AI",
              title: "Enterprise AI Integration",
              description:
                "Select and deliver bounded AI workflows with permission-aware knowledge, evaluation, human review, production monitoring, and change ownership.",
              href: "/enterprise-ai-integration",
            },
            {
              label: "02 / Trust",
              title: "Security Architecture",
              description:
                "Define sensitive-data boundaries, model and vendor exposure, identity, access, audit evidence, recovery, and control ownership before rollout expands.",
              href: "/security-architecture",
            },
            {
              label: "03 / Systems",
              title: "API & Backend Systems",
              description:
                "Build the identity, retrieval, tool, event, and integration layer that keeps AI workflows reliable, observable, and constrained in production.",
              href: "/api-and-backend-systems",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Private enterprise AI",
          name: "Auxee AI / PreScouter",
          title:
            "An internal AI layer for knowledge that cannot be treated as public input.",
          summary:
            "Auxee AI gives enterprise teams a private assistant for working with internal knowledge without defaulting to uncontrolled consumer AI tools. Built for and deployed via PreScouter, the product joins secure data boundaries, enterprise context, model integration, and a practical employee workflow for organizations with serious confidentiality requirements. The proof is not a chatbot demo; it is the controlled system around the model.",
          value: "Private",
          valueLabel: "enterprise AI by design",
          detail:
            "Auxee AI demonstrates how identity, sensitive organizational context, model access, and production operations can be assembled around a usable enterprise workflow while data control remains central to the architecture.",
          source: "Auxee AI, built for and deployed via PreScouter",
          href: "/case-studies/auxee-ai",
          linkLabel: "Read the Auxee AI case study →",
          additionalLinks: [
            {
              href: "/case-studies/zyrentis-ai",
              label: "Read the Zyrentis AI case study →",
            },
          ],
          tags: [
            "Private knowledge",
            "Permission-aware AI",
            "LLM integration",
            "Enterprise operations",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "Enterprise AI leader FAQ",
          title: "Questions to answer before private data meets a model.",
          introduction:
            "Practical guidance on provider data use, inherited permissions, auditability, evaluation, model strategy, pilot scope, and production readiness.",
        }}
        cta={{
          title: "Talk to someone who’s built in Enterprise AI.",
          description:
            "Bring the workflow, knowledge sources, model constraints, security review, and adoption questions. We’ll help define a useful system whose data boundaries and operating responsibilities can survive beyond the pilot.",
          action: "Discuss your enterprise AI use case",
          href: "/#contact",
        }}
      />
    </>
  );
}
