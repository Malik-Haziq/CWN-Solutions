import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { industrySchema, type FaqItem } from "@/lib/schema";

const path = "/e-commerce";
const description =
  "E-commerce industry expertise for businesses protecting payment trust, customer accounts, personal data, order integrity, and reliable fulfillment operations.";

export const metadata: Metadata = createPageMetadata({
  title: "E-commerce Security, Payment Trust & Operations Expertise",
  description,
  path,
  openGraphTitle: "E-commerce Treated as a Trust-Critical Industry",
  openGraphDescription:
    "A security-first industry perspective on checkout, customer data, accounts, fraud, refunds, integrations, and operational truth.",
});

const faqs: FaqItem[] = [
  {
    question: "Why treat e-commerce as a security-first industry?",
    answer:
      "A commerce business continuously combines payment events, customer identities, addresses, order history, support records, promotions, inventory, and staff actions. Attackers value the accounts and transactions, while customers judge the brand by whether payment, delivery, and refunds feel dependable. Security is therefore part of conversion and retention: it protects the buyer's confidence that the price, charge, order, and use of personal data are legitimate.",
  },
  {
    question: "Should our commerce systems ever receive raw card details?",
    answer:
      "Usually the safer goal is to avoid it. Provider-hosted pages or fields and tokenized payment methods can send card details directly to an established payment provider while your platform receives a token and transaction state. Exact PCI scope still depends on scripts, integrations, infrastructure, contracts, and operating practices, so the implementation should minimize exposure and be reviewed against the actual flow by the relevant payment and compliance specialists.",
  },
  {
    question:
      "How do you protect customer accounts without hurting conversion?",
    answer:
      "The answer is risk-based friction, not maximum friction everywhere. We secure sessions and recovery, monitor suspicious behavior, protect high-impact actions such as address or payment changes, avoid revealing whether sensitive accounts exist, and give customers clear confirmation when material details change. Guest checkout, passkeys, multi-factor authentication, or step-up verification can be applied according to customer value, account capability, and the consequence of takeover.",
  },
  {
    question: "How should staff access orders and customer information?",
    answer:
      "Support, fulfillment, finance, merchandising, and administrators need different fields and actions. We separate viewing, editing, refunding, exporting, impersonating, and configuration changes; restrict bulk access; and log sensitive operations. A support agent may need to resolve a shipment without seeing full payment details or every historical customer attribute. Back-office convenience should not create an invisible data-exposure channel.",
  },
  {
    question: "How do you prevent duplicate orders, charges, and refunds?",
    answer:
      "We model requests and provider events with stable identifiers, idempotent handling, authoritative states, and reconciliation. Retries, delayed webhooks, browser refreshes, partial failures, and staff intervention are expected behavior rather than rare edge cases. The product also needs honest customer and staff messaging so a pending state is not shown as failure and retried into a duplicate financial action.",
  },
  {
    question: "What should we ask an e-commerce development partner?",
    answer:
      "Ask how the team minimizes payment scope, protects account recovery, limits staff and vendor access, handles failed and repeated payment events, assigns sources of truth across inventory and orders, rehearses migration, and monitors checkout through fulfillment. A commodity storefront pitch starts with themes and features. A credible commerce partner can explain how the business keeps its promise when fraud, integrations, refunds, and operational exceptions arrive.",
  },
];

export default function EcommerceIndustryPage() {
  return (
    <>
      <JsonLd
        schema={industrySchema({
          name: "E-commerce",
          description,
          path,
        })}
      />
      <IndustryPageTemplate
        name="E-commerce"
        label="Industry / Digital commerce"
        positioning="Every checkout asks a customer to trust the price, the payment, the delivery promise, and what happens to their identity after the sale."
        trustTest="An e-commerce business should be able to explain where payment data goes, who can act on a customer or order, which system owns each commercial state, and how buyers are protected when providers, inventory, or fulfillment disagree."
        definitiveAnswer="A credible e-commerce product partner treats commerce as a trust-critical operating system, not a commodity storefront. Payment boundaries, account security, customer-data use, fraud controls, order accuracy, staff access, refunds, and fulfillment evidence must support the same commercial promise—because conversion gained through a polished checkout is quickly lost through an unexplained charge, exposed account, or order the operation cannot fulfill."
        differences={{
          title: "The storefront is only the public edge of the trust system.",
          introduction:
            "Commerce brings money, identity, persuasion, and operational state into one continuous journey. The visible experience can be fast while risk accumulates in account recovery, scripts, support tools, payment events, exports, and system reconciliation.",
          challenges: [
            {
              title: "Checkout concentrates trust and attack value.",
              description:
                "Card data, payment tokens, addresses, promotions, high-value inventory, and purchase intent converge in a flow optimized to reduce friction. Malicious scripts, bot abuse, credential attacks, and fraud exploit the same speed customers expect.",
              implication:
                "Payment exposure, third-party scripts, session security, and fraud signals have to be designed with conversion rather than attached afterward.",
            },
            {
              title: "Customer identity persists beyond one transaction.",
              description:
                "Accounts accumulate addresses, order history, saved preferences, support messages, loyalty value, returns, and sometimes stored payment tokens. Recovery and staff impersonation can become more attractive targets than checkout itself.",
              implication:
                "Account recovery, sensitive changes, session behavior, and support access deserve explicit threat and usability decisions.",
            },
            {
              title: "A payment response is not the whole financial truth.",
              description:
                "Authorization, capture, settlement, partial capture, cancellation, refund, dispute, and chargeback may unfold across providers and staff tools. Retries or delayed events can create duplicate or contradictory outcomes.",
              implication:
                "Stable identifiers, idempotency, reconciliation, audit events, and honest pending states are core product requirements.",
            },
            {
              title: "Third-party code enters the buying boundary.",
              description:
                "Analytics, personalization, chat, reviews, advertising, fraud, tag managers, and payment scripts may observe or influence the checkout journey. Each dependency changes performance, privacy, integrity, and incident exposure.",
              implication:
                "Scripts and vendors need purpose, ownership, permissions, change control, and a plan for failure or removal.",
            },
            {
              title:
                "Operational access can expose the full customer relationship.",
              description:
                "Support, warehouse, finance, marketing, and administrators work across order data and customer profiles. Bulk export, refund power, account impersonation, and shared dashboards can turn routine operations into high-impact access.",
              implication:
                "Back-office roles, sensitive actions, approvals, export limits, and auditability must be designed as carefully as customer login.",
            },
            {
              title: "Trust is completed by fulfillment and recovery.",
              description:
                "Inventory drift, tax errors, split shipments, address changes, cancellations, returns, and provider outages happen after the conversion event. If systems disagree, customers experience broken promises and staff absorb reconciliation.",
              implication:
                "Order state needs clear ownership and recoverable integration behavior from purchase through refund—not only a successful confirmation page.",
            },
          ],
          closing:
            "Security-first commerce protects the complete promise: the customer is legitimate, the charge is intentional, the order is accurate, the data is constrained, and exceptions can be explained and recovered.",
        }}
        approach={{
          title: "Follow trust from first session to final resolution.",
          introduction:
            "This industry lens comes before platform selection or build scope. We map the buyer, payment, customer-data, staff, vendor, and fulfillment boundaries that determine whether a commerce operation remains trustworthy at scale.",
          principles: [
            {
              title: "Minimize the payment and identity footprint",
              description:
                "We prefer provider-hosted or tokenized payment flows, collect only useful customer data, constrain retention, secure sessions and recovery, and challenge scripts or vendors that expand the trust boundary without proportional value.",
              practicalResult:
                "smaller payment scope and explicit customer-data map",
            },
            {
              title: "Model every commercial state",
              description:
                "Order, payment, inventory, refund, shipment, and return states receive owners and transition rules, including delayed, duplicated, conflicting, disputed, and manually corrected events.",
              practicalResult:
                "authoritative state model and reconciliation paths",
            },
            {
              title: "Treat back-office tools as high-trust surfaces",
              description:
                "Staff roles separate customer view, edit, refund, export, impersonation, pricing, and configuration powers. Sensitive actions are logged and higher-impact changes receive appropriate review or step-up controls.",
              practicalResult:
                "least-privilege operations and reviewable actions",
            },
            {
              title: "Test the journey under abuse and failure",
              description:
                "We test bot and account abuse, failed authentication, repeated payment events, provider delays, inventory conflicts, partial refunds, migration reconciliation, and recovery alongside performance and conversion behavior.",
              practicalResult:
                "risk-based tests, monitoring, and incident-ready runbooks",
            },
          ],
        }}
        services={{
          title: "Capabilities that support the commerce trust system.",
          introduction:
            "This page explains why commerce requires domain judgment. The E-commerce Platforms service explains the delivery engagement used when a custom storefront, checkout, or operational platform is the right response.",
          items: [
            {
              label: "01 / Commerce",
              title: "E-commerce Platforms",
              description:
                "Design and deliver storefront, checkout, customer accounts, integrations, and operational tools around the way the business sells and fulfills.",
              href: "/e-commerce-platforms",
            },
            {
              label: "02 / Trust",
              title: "Security Architecture",
              description:
                "Define payment, identity, customer-data, staff, vendor, logging, and recovery boundaries before isolated controls create blind spots.",
              href: "/security-architecture",
            },
            {
              label: "03 / Systems",
              title: "API & Backend Systems",
              description:
                "Build dependable order, inventory, payment, refund, fulfillment, and vendor integration behavior with traceable recovery.",
              href: "/api-and-backend-systems",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Shipped commerce delivery",
          name: "Selected E-commerce Builds",
          title:
            "Commerce delivery that extends beyond catalogue and checkout.",
          summary:
            "CWN Solutions has shipped e-commerce builds spanning customer-facing purchase journeys and the operational capabilities behind them. That work informs how we contain payment exposure, protect customer accounts and information, assign truth across systems, and handle the exceptions between order and fulfillment. The industry position is security-first because real commerce is an accountable transaction system—not because a storefront needs extra security copy.",
          value: "Shipped",
          valueLabel: "proven commerce delivery",
          detail:
            "The proof is practical commerce work across checkout and operations, approached with the same security discipline used for other trust-critical products rather than sold as a theme-led storefront package.",
          source: "CWN Solutions commerce portfolio",
          href: "/#work",
          linkLabel: "Explore selected delivery work →",
          tags: [
            "Payment boundaries",
            "Customer accounts",
            "Commerce operations",
            "System integrations",
          ],
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "E-commerce leader FAQ",
          title: "Questions about payment, identity, and operational trust.",
          introduction:
            "Industry-level answers about security-first commerce, payment exposure, account protection, staff access, transaction integrity, and partner selection.",
        }}
        cta={{
          title: "Talk to someone who treats E-commerce as trust-critical.",
          description:
            "Bring the transaction model, customer-data questions, vendor map, and operational exceptions. We’ll help identify where security and commercial reliability need to become the same product decision.",
          action: "Discuss your commerce platform",
          href: "/#contact",
        }}
      />
    </>
  );
}
