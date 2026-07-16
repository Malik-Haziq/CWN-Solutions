"use client";

import { useReducedMotion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog-shared";
import { FoundationsSection } from "./FoundationsSection";
import { HeroSection } from "./HeroSection";
import { ProcessSection } from "./ProcessSection";
import { ServicesSection } from "./ServicesSection";
import { WorkSection } from "./WorkSection";
import {
  BlogSection,
  CallToAction,
  ContactSection,
  FaqSection,
  TestimonialsSection,
} from "./EngagementSections";

type HomeClientProps = {
  featuredPost: BlogPostMeta;
  posts: BlogPostMeta[];
};

export function HomeClient({ featuredPost, posts }: HomeClientProps) {
  const enabled = !useReducedMotion();

  return (
    <main className="overflow-x-hidden bg-bg-base">
      <HeroSection enabled={enabled} />
      <FoundationsSection enabled={enabled} />
      <ServicesSection enabled={enabled} />
      <WorkSection enabled={enabled} />
      <ProcessSection enabled={enabled} />
      <TestimonialsSection enabled={enabled} />
      <BlogSection
        enabled={enabled}
        featuredPost={featuredPost}
        posts={posts}
      />
      <CallToAction enabled={enabled} />
      <ContactSection enabled={enabled} />
      <FaqSection />
    </main>
  );
}
