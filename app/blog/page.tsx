import type { Metadata } from "next";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { PageShell } from "@/components/layout/PageShell";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getAllCategories, getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Blog and Insights",
  description:
    "Security, FinTech, LegalTech, hospitality, AI, and founder guidance for teams building serious digital products.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <PageShell breadcrumbs={[{ label: "Blog" }]}>
      <section className="mx-auto w-full max-w-7xl px-5 pb-section-md sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            Insights & Perspectives
          </h1>
          <p className="mt-5 max-w-[620px] font-body text-[17px] leading-8 text-text-secondary">
            Practical thinking on security, product delivery, and
            industry-specific technology for teams building serious digital
            products.
          </p>
        </div>

        <div className="mt-12">
          <SectionDivider />
        </div>

        <BlogIndexClient posts={posts} categories={categories} />
      </section>
    </PageShell>
  );
}
