import Link from "next/link";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyVisual } from "./CaseStudyVisual";
import { caseStudies } from "./home-data";

export function WorkSection({ enabled }: { enabled: boolean }) {
  const reveal = (delay = 0) =>
    enabled
      ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.28 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        }
      : {};
  return (
    <section id="work" className="bg-bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            Proof, Not Promises<span className="text-accent">.</span>
          </h2>
          <p className="mt-5 max-w-[500px] font-body text-base leading-7 text-text-secondary">
            These are real products we designed, built, and shipped for teams
            with serious business needs, not mockups or speculative concepts.
          </p>
        </div>
        <div className="mt-16">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={study.name}
                className="border-b border-border-subtle py-14 first:pt-0 last:border-b-0 md:py-20"
              >
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[52fr_48fr] md:gap-12 lg:gap-16">
                  <motion.div
                    className={`order-1 flex flex-col items-start ${isEven ? "md:order-2" : "md:order-1"}`}
                    {...reveal()}
                  >
                    <span className="badge badge-accent">{study.badge}</span>
                    <h3 className="mt-6 font-display text-display-md font-extrabold text-text-primary">
                      {study.name}
                    </h3>
                    <p className="mt-4 max-w-[620px] font-body text-[17px] leading-7 text-text-secondary">
                      {study.description}
                    </p>
                    <div className="mt-10">
                      <p className="font-display text-display-lg font-extrabold text-accent">
                        {study.metric}
                      </p>
                      <p className="mt-2 font-mono text-label uppercase text-text-muted">
                        {study.metricLabel}
                      </p>
                    </div>
                    <p className="mt-8 max-w-[650px] font-body text-base leading-8 text-text-secondary">
                      {study.story}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {study.badges.map((badge) => (
                        <span key={badge} className="badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={study.linkHref}
                      className="link-accent mt-9 inline-flex"
                    >
                      {study.linkLabel}
                    </Link>
                  </motion.div>
                  <motion.div
                    className={`order-2 ${isEven ? "md:order-1" : "md:order-2"}`}
                    {...reveal(0.1)}
                  >
                    <div className="h-full border border-border-default bg-bg-surface transition-colors duration-200 ease-in-out hover:border-accent">
                      <CaseStudyVisual type={study.visual} />
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pt-16 text-center md:pt-20">
          <p className="font-display text-display-sm font-bold text-text-primary">
            Have a project in mind?
          </p>
          <Link href="#contact" className="link-accent mt-5 inline-flex">
            Start a Conversation →
          </Link>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
