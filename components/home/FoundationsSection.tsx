import Link from "next/link";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TealDot } from "@/components/ui/TealDot";
import { industries, positioningFacts, tickerItems } from "./home-data";

export function FoundationsSection({ enabled }: { enabled: boolean }) {
  const reveal = enabled
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.35 },
        transition: { duration: 0.5, ease: "easeOut" as const },
      }
    : {};

  return (
    <>
      <section
        aria-label="Agency proof points"
        className="metrics-ticker h-14 overflow-hidden border-y border-border-subtle bg-bg-surface"
      >
        <div className="metrics-ticker-track flex h-full w-max items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full shrink-0 items-center">
              {tickerItems.map((item) => (
                <span
                  key={`${group}-${item}`}
                  className="flex h-full shrink-0 items-center gap-8 px-4 font-mono text-label uppercase text-text-secondary sm:gap-10 sm:px-5"
                >
                  <span className="whitespace-nowrap">{item}</span>
                  <TealDot className="h-[5px] w-[5px] shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-bg-base">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-section-md sm:px-8 md:grid-cols-[38fr_62fr] md:gap-10 lg:px-10">
          <motion.div className="relative text-left" {...reveal}>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-16 font-display text-[180px] font-semibold leading-none text-accent opacity-[0.12] sm:-left-5 sm:-top-20 sm:text-[230px]"
            >
              “
            </span>
            <div className="relative">
              <SectionLabel>Why We Exist</SectionLabel>
            </div>
          </motion.div>
          <motion.div className="max-w-[640px] text-left" {...reveal}>
            <p className="font-display text-display-md font-semibold text-text-primary">
              Most development agencies will build whatever you ask. We
              specialize in one thing: software where getting security wrong is
              not an option.
            </p>
            <div className="mt-8 space-y-4">
              {positioningFacts.map((fact) => (
                <p
                  key={fact}
                  className="flex items-start gap-3 font-mono text-sm leading-6 text-text-secondary"
                >
                  <TealDot className="mt-[9px] h-[5px] w-[5px] shrink-0" />
                  <span>{fact}</span>
                </p>
              ))}
            </div>
            <Link href="#process" className="link-accent mt-9 inline-flex">
              See how we work →
            </Link>
          </motion.div>
        </div>
        <SectionDivider />
      </section>
      <section id="industries" className="bg-bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <SectionLabel>Industries</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            We Speak Your Domain
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href="#work"
                className="group flex min-h-[276px] flex-col border border-border-default bg-transparent p-8 transition-colors duration-200 ease-in-out hover:border-accent hover:bg-accent-muted sm:p-10"
              >
                <span className="font-display text-[52px] font-bold leading-none text-text-muted transition-colors duration-200 ease-in-out group-hover:text-accent">
                  {industry.monogram}
                </span>
                <h3 className="mt-8 font-display text-xl font-bold text-text-primary">
                  {industry.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-text-secondary">
                  {industry.description}
                </p>
                {industry.clients && (
                  <p className="mt-3 font-mono text-[10px] uppercase leading-5 text-text-muted">
                    {industry.clients}
                  </p>
                )}
                <span className="mt-auto pt-8 font-body text-sm font-medium text-accent opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                  → View work
                </span>
              </Link>
            ))}
          </div>
        </div>
        <SectionDivider />
      </section>
    </>
  );
}
