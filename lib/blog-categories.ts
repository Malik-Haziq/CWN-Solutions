export const BLOG_CATEGORIES = [
  "Security",
  "FinTech",
  "LegalTech",
  "Hospitality",
  "AI",
  "Founder Advice",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogCategoryRelatedLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type BlogCategoryDefinition = {
  name: BlogCategory;
  slug: string;
  description: string;
  related: BlogCategoryRelatedLink[];
};

export const BLOG_CATEGORY_DEFINITIONS: BlogCategoryDefinition[] = [
  {
    name: "Security",
    slug: "security",
    description:
      "Practical architecture, privacy, and risk guidance for teams building products that need to earn and keep customer trust.",
    related: [
      {
        title: "Security Architecture",
        description:
          "Build identity, permissions, auditability, and data protection into the product foundation.",
        href: "/security-architecture",
        label: "Service",
      },
      {
        title: "Security Technology",
        description:
          "Explore secure product engineering for trust-critical systems and workflows.",
        href: "/security-tech",
        label: "Industry",
      },
      {
        title: "API & Backend Systems",
        description:
          "Design reliable application foundations with clear access boundaries and operational visibility.",
        href: "/api-and-backend-systems",
        label: "Service",
      },
    ],
  },
  {
    name: "FinTech",
    slug: "fintech",
    description:
      "Product, integration, and security thinking for financial software where accuracy, compliance, and trust shape every decision.",
    related: [
      {
        title: "FinTech Product Development",
        description:
          "Build secure financial workflows, platforms, and customer experiences for regulated markets.",
        href: "/fintech",
        label: "Industry",
      },
      {
        title: "Security Architecture",
        description:
          "Plan access controls, audit trails, and data protection before they become retrofit projects.",
        href: "/security-architecture",
        label: "Service",
      },
      {
        title: "API & Backend Systems",
        description:
          "Create dependable transaction, data, and integration layers for complex financial products.",
        href: "/api-and-backend-systems",
        label: "Service",
      },
    ],
  },
  {
    name: "LegalTech",
    slug: "legaltech",
    description:
      "Guidance for turning sensitive legal processes into clear, secure, and auditable digital products.",
    related: [
      {
        title: "LegalTech Development",
        description:
          "Build secure platforms for matters, documents, evidence, and client collaboration.",
        href: "/legaltech",
        label: "Industry",
      },
      {
        title: "Enterprise AI Integration",
        description:
          "Connect AI to governed workflows without losing control of sensitive context and outputs.",
        href: "/enterprise-ai-integration",
        label: "Service",
      },
      {
        title: "Security Architecture",
        description:
          "Make confidentiality, permissions, and auditability part of the system design.",
        href: "/security-architecture",
        label: "Service",
      },
    ],
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    description:
      "Operationally grounded guidance on hotel technology, guest journeys, integrations, and digital transformation.",
    related: [
      {
        title: "Hospitality Technology",
        description:
          "Build connected guest and staff experiences around the realities of property operations.",
        href: "/hospitality-tech",
        label: "Industry",
      },
      {
        title: "Hospitality Digital Transformation",
        description:
          "Plan the systems, integrations, and workflows that make transformation operationally useful.",
        href: "/hospitality-digital-transformation",
        label: "Service",
      },
      {
        title: "E-commerce Platforms",
        description:
          "Improve high-intent digital journeys with dependable content, payment, and conversion flows.",
        href: "/e-commerce-platforms",
        label: "Service",
      },
    ],
  },
  {
    name: "AI",
    slug: "ai",
    description:
      "Clear-eyed guidance on enterprise AI systems, integrations, governance, and the product decisions behind useful automation.",
    related: [
      {
        title: "Enterprise AI",
        description:
          "Design focused AI products around real workflows, controlled data, and measurable outcomes.",
        href: "/enterprise-ai",
        label: "Industry",
      },
      {
        title: "Enterprise AI Integration",
        description:
          "Connect models to business systems with the controls production use requires.",
        href: "/enterprise-ai-integration",
        label: "Service",
      },
      {
        title: "API & Backend Systems",
        description:
          "Build the dependable data and orchestration layer behind production AI workflows.",
        href: "/api-and-backend-systems",
        label: "Service",
      },
    ],
  },
  {
    name: "Founder Advice",
    slug: "founder-advice",
    description:
      "Practical decisions for founders choosing teams, scope, architecture, and delivery models for serious digital products.",
    related: [
      {
        title: "MVPs for Startups",
        description:
          "Turn a focused market thesis into a credible first release without building a disposable foundation.",
        href: "/mvp-for-startups",
        label: "Service",
      },
      {
        title: "SaaS Product Development",
        description:
          "Move from product definition through launch with an experienced full-stack delivery team.",
        href: "/saas-product-development",
        label: "Service",
      },
      {
        title: "Services",
        description:
          "Explore product strategy, design, engineering, integration, and security capabilities.",
        href: "/services",
        label: "Overview",
      },
    ],
  },
];

export function getBlogCategoryByName(name: string) {
  return BLOG_CATEGORY_DEFINITIONS.find((category) => category.name === name);
}

export function getBlogCategoryBySlug(slug: string) {
  return BLOG_CATEGORY_DEFINITIONS.find((category) => category.slug === slug);
}

export function getBlogCategorySlug(name: BlogCategory) {
  const category = getBlogCategoryByName(name);

  if (!category) {
    throw new Error(`Unknown blog category "${name}".`);
  }

  return category.slug;
}
