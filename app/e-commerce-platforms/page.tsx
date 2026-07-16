import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema, type FaqItem } from "@/lib/schema";

const path = "/e-commerce-platforms";
const description =
  "Security-first e-commerce platform development for custom storefronts, checkout, catalog, integrations, and operational tooling backed by proven delivery work.";

export const metadata: Metadata = createPageMetadata({
  title: "Security-First E-commerce Platform Development",
  description,
  path,
  openGraphTitle: "Custom E-commerce Platforms That Protect Conversion",
  openGraphDescription:
    "Proven commerce delivery across storefront, checkout, customer data, and back-office operations—with payment risk handled as part of the product.",
});

const faqs: FaqItem[] = [
  {
    question: "Do we need a custom platform, a headless build, or Shopify?",
    answer:
      "Use a standard hosted platform when its catalog, checkout, promotions, and operational model already fit the business. A headless or custom build is justified when the buying journey, pricing rules, integrations, multi-market needs, or back-office workflow create a real competitive constraint. We compare total operating complexity—not just launch appearance—before recommending an approach, and we avoid custom code where a reliable platform capability already solves the problem.",
  },
  {
    question: "Will our platform need to store customers' card details?",
    answer:
      "Usually it should not. We prefer hosted payment fields, redirects, or tokenization from an established payment provider so sensitive card details go directly to that provider rather than through your application. Your exact PCI responsibilities still depend on the checkout design, integrations, infrastructure, and operating practices, but reducing the amount of card data your systems touch is one of the clearest ways to reduce risk.",
  },
  {
    question: "How do you protect customer accounts and personal data?",
    answer:
      "We minimize the information collected, separate staff and customer permissions, use secure authentication and session handling, encrypt data in transit and at rest, protect secrets, log sensitive administrative actions, and define retention and deletion behavior. We also design support and order-management tools carefully because overly broad staff access is often a greater day-to-day risk than the public storefront itself.",
  },
  {
    question:
      "Can you connect inventory, ERP, fulfillment, tax, and CRM systems?",
    answer:
      "Yes, where those platforms provide stable APIs, webhooks, feeds, or approved partner interfaces. Before building, we identify which system owns products, stock, prices, customers, orders, refunds, and shipment status; then define synchronization and recovery rules. That prevents a fast storefront from creating overselling, duplicate orders, or manual reconciliation behind the scenes.",
  },
  {
    question:
      "How do you migrate an existing store without losing orders or SEO?",
    answer:
      "The migration plan inventories products, customers, order history, content, URLs, redirects, analytics, integrations, and legal records, then rehearses transformation and reconciliation before launch. We define a cutover window, freeze or synchronization strategy, rollback path, and post-launch checks. Search visibility is protected through URL mapping, metadata, structured content, crawl controls, and monitoring rather than assuming the new frontend will inherit existing performance automatically.",
  },
  {
    question:
      "What should we measure after the new commerce experience launches?",
    answer:
      "Track the complete buying and operating journey: product discovery, add-to-cart rate, checkout progression, payment failure reasons, conversion, average order value, refund and cancellation patterns, fulfillment exceptions, support contacts, page performance, and error rates. Metrics should be segmented by device, market, channel, and customer type where useful so the team can distinguish a design issue from a payment, inventory, or operational failure.",
  },
];

export default function EcommercePlatformsPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "E-commerce Platforms",
          description,
          path,
        })}
      />
      <ServicePageTemplate
        name="E-commerce Platforms"
        label="Service / Digital commerce"
        positioning="We build commerce experiences that convert without treating payments, customer data, and operational accuracy as somebody else's problem."
        definitiveAnswer="E-commerce platform development is the end-to-end design and delivery of a secure buying system—storefront, checkout, catalog, customer accounts, integrations, and operational tools—shaped around how the business actually sells and fulfills."
        problem={{
          title:
            "The storefront can look simple while the risk underneath compounds.",
          introduction:
            "A customer sees products, a basket, and a payment button. The business must keep prices, inventory, identity, tax, orders, refunds, fulfillment, and personal data consistent across several systems. Conversion suffers when any one of those handoffs becomes slow or unreliable.",
          pressures: [
            {
              title: "Checkout concentrates trust and abandonment.",
              description:
                "Customers leave when payment feels slow or uncertain, but rushing the flow can expand PCI exposure, weaken fraud controls, or create duplicate charges and orders.",
            },
            {
              title: "Customer data spreads into operations.",
              description:
                "Addresses, order histories, messages, refunds, and support notes move beyond the storefront. Unclear staff access and retention turn routine service into a privacy risk.",
            },
            {
              title: "A polished launch can hide broken fulfillment.",
              description:
                "If stock, pricing, tax, warehouse, and shipment updates disagree, staff absorb the reconciliation and customers experience cancellations the interface never predicted.",
            },
          ],
          closing:
            "Our proven commerce delivery approach treats conversion, payment safety, and operational truth as one product—not three separate projects joined at launch.",
        }}
        includedContent={{
          title: "One buying journey, secured from click to fulfillment.",
          introduction:
            "The engagement connects commercial goals to platform choice, payment boundaries, customer-data handling, and the back-office workflows that keep every promise made at checkout.",
        }}
        phases={[
          {
            title: "Commerce model & risk-aware scope",
            summary:
              "We map customers, catalog structure, pricing, markets, checkout, returns, fulfillment, staff roles, integrations, and the conversion assumptions the release must improve.",
            trustReason:
              "Payment scope, personal-data flows, and high-risk administrative actions are visible before platform and feature decisions lock them in.",
            output: "Commerce blueprint + risk map",
          },
          {
            title: "Journey, platform & integration design",
            summary:
              "We design discovery through post-purchase service while selecting the right hosted, headless, or custom boundaries and defining ownership for product, stock, order, and customer data.",
            trustReason:
              "Customers receive a consistent promise because each system has a clear source of truth and failed synchronization has a recovery path.",
            output: "Prototype + platform architecture",
          },
          {
            title: "Storefront, checkout & operations build",
            summary:
              "We deliver vertical slices spanning responsive experience, catalog, accounts, tokenized payments, promotions, orders, staff tooling, integrations, tests, analytics, and monitoring.",
            trustReason:
              "Security and failure behavior are tested inside real purchase and refund workflows rather than attached to a finished storefront.",
            output: "Production-ready commerce slices",
          },
          {
            title: "Migration, launch & optimization handoff",
            summary:
              "We rehearse data migration and cutover, verify redirects and analytics, test payment and fulfillment exceptions, monitor launch, and leave the team with operational documentation and a ranked improvement plan.",
            trustReason:
              "Reconciliation, rollback, and monitoring protect revenue and customer confidence while the new platform begins handling live orders.",
            output: "Live store + optimization backlog",
          },
        ]}
        comparison={{
          title:
            "Commerce performance depends on what happens after the button.",
          description:
            "We design the customer experience and the operational system together, drawing payment and data boundaries early enough to keep both conversion and trust intact.",
          rows: [
            {
              label: "Platform choice",
              primary:
                "Match hosted, headless, and custom boundaries to differentiation, integration needs, and long-term operating cost.",
              secondary:
                "Default to a familiar platform or custom stack before the commercial and operational constraints are known.",
            },
            {
              label: "Payments",
              primary:
                "Minimize card-data exposure through provider-hosted or tokenized flows and design explicit failure and refund states.",
              secondary:
                "Connect a gateway after checkout design, leaving PCI scope and exception handling to late implementation.",
            },
            {
              label: "Customer data",
              primary:
                "Define collection, staff access, retention, deletion, and auditability across storefront and operations.",
              secondary:
                "Protect the public account flow while allowing broad access inside support and administration tools.",
            },
            {
              label: "Integrations",
              primary:
                "Assign sources of truth and test delayed, repeated, conflicting, and failed inventory or order events.",
              secondary:
                "Build the happy-path connection and rely on manual cleanup when systems drift.",
            },
            {
              label: "Launch success",
              primary:
                "Monitor conversion, payment failures, order accuracy, fulfillment exceptions, performance, and support demand.",
              secondary:
                "Measure the release by visual completion and top-line orders without separating operational failure causes.",
            },
          ],
        }}
        caseStudy={{
          eyebrow: "Relevant proof / Shipped commerce delivery",
          name: "Selected E-commerce Builds",
          title:
            "Commerce systems delivered beyond the catalogue and checkout demo.",
          summary:
            "CWN Solutions has shipped e-commerce builds covering customer-facing purchase journeys and the operational capabilities behind them. That delivery experience informs how we make platform trade-offs, contain payment exposure, handle customer information, and connect the systems that must agree before an order can be fulfilled reliably.",
          metric: "Shipped",
          metricLabel: "proven commerce delivery",
          metricDetail:
            "This is an established delivery capability, applied with the same security-first discipline used across trust-critical products—not a generic storefront package assembled from a theme.",
          href: "/#work",
          linkLabel: "Explore selected delivery work →",
          sourceLabel: "CWN Solutions commerce portfolio",
          tags: [
            "Secure checkout",
            "Customer accounts",
            "Commerce operations",
            "System integrations",
          ],
        }}
        industries={[
          {
            code: "EC",
            name: "E-commerce",
            description:
              "Custom storefronts, conversion journeys, catalogs, accounts, and operational commerce tools.",
            href: "/e-commerce",
          },
          {
            code: "FT",
            name: "FinTech",
            description:
              "Payment, identity, refund, and reconciliation workflows where transaction trust matters.",
            href: "/fintech",
          },
          {
            code: "HO",
            name: "Hospitality Tech",
            description:
              "Direct booking and ancillary purchase experiences connected to live service operations.",
            href: "/hospitality-tech",
          },
          {
            code: "ST",
            name: "Security Tech",
            description:
              "Controls and monitoring for customer data, privileged operations, and payment-adjacent systems.",
            href: "/security-tech",
          },
        ]}
        industriesContent={{
          title: "Where transactions, identity, and operations meet.",
          introduction:
            "Commerce delivery draws on more than storefront design. These adjacent sectors shape how payments, customer trust, and fulfillment are handled end to end.",
        }}
        faqs={faqs}
        faqContent={{
          eyebrow: "E-commerce platform FAQ",
          title:
            "Decisions that affect revenue after the storefront goes live.",
          introduction:
            "Straight answers on platform fit, payment scope, customer data, operational integrations, migration, and measurement.",
        }}
        cta={{
          title: "Build the buying journey and the operation behind it.",
          description:
            "Bring the current store, commercial model, or integration problem. We’ll identify what should stay standard, what deserves custom work, and where payment or customer-data risk needs an early boundary.",
          action: "Scope the commerce platform",
          href: "/#contact",
        }}
      />
    </>
  );
}
