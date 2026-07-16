import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageTemplate } from "@/components/case-studies/CaseStudyPageTemplate";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/metadata";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) return {};

  return createPageMetadata({
    title: `${caseStudy.client} Case Study`,
    description: caseStudy.description,
    path: `/case-studies/${caseStudy.slug}`,
    image: caseStudy.media.hero.src,
    type: "article",
    publishedTime: caseStudy.publishedAt,
    modifiedTime: caseStudy.updatedAt,
    openGraphTitle: `${caseStudy.client}: ${caseStudy.outcome}`,
  });
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) notFound();

  return <CaseStudyPageTemplate caseStudy={caseStudy} />;
}
