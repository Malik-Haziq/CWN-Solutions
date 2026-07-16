import { absoluteUrl, site } from "@/lib/site";

export type JsonLd = Record<string, unknown>;

export type FaqItem = {
  question: string;
  answer: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
};

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
};

const areaServed = [
  "UAE",
  "Saudi Arabia",
  "Germany",
  "Switzerland",
  "Sweden",
  "Norway",
  "Denmark",
  "Australia",
  "Singapore",
];

const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  sameAs: [site.social.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
    email: site.email,
  },
};

export function sitewideSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#professional-service`,
        name: site.name,
        url: site.url,
        description: site.description,
        areaServed,
        provider: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed: serviceAreaServed = areaServed,
}: ServiceSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: serviceAreaServed,
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    ...(image ? { image: absoluteUrl(image) } : {}),
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function faqPageSchema(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
