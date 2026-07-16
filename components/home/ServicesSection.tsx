"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "./home-data";

export function ServicesSection({ enabled }: { enabled: boolean }) {
  const [activeService, setActiveService] = useState<(typeof services)[number]>(
    services[0],
  );

  return (
    <section id="services" className="bg-bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            Our Solutions
          </h2>
          <p className="mt-5 max-w-[520px] font-body text-base leading-7 text-text-secondary">
            We build end-to-end digital products for founders and operators in
            trust-critical industries where reliability, clarity, and user
            confidence drive growth.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[32fr_68fr] md:gap-14">
          <div className="md:sticky md:top-[100px] md:self-start">
            <div className="-mx-5 flex overflow-x-auto border-b border-border-subtle px-5 sm:-mx-8 sm:px-8 md:mx-0 md:block md:overflow-visible md:border-b-0 md:px-0">
              {services.map((service) => {
                const isActive = activeService.name === service.name;
                return (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`shrink-0 border-b-2 px-1 pb-4 pr-6 text-left font-display text-[15px] font-semibold transition-all duration-150 ease-in-out hover:text-text-secondary md:block md:w-full md:border-b-0 md:border-l-2 md:py-4 md:pl-5 md:pr-4 md:text-[17px] ${isActive ? "border-accent text-text-primary md:pl-7 md:font-bold" : "border-transparent text-text-muted"}`}
                  >
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.name}
                {...(enabled
                  ? {
                      initial: { opacity: 0, y: 14 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -8 },
                      transition: { duration: 0.24, ease: "easeOut" },
                    }
                  : {})}
              >
                <h3 className="max-w-3xl font-display text-display-sm font-bold text-text-primary">
                  {activeService.summary}
                </h3>
                <p className="mt-6 max-w-2xl font-body text-base leading-8 text-text-secondary">
                  {activeService.detail}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {activeService.badges.map((badge) => (
                    <span key={badge} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
                <Link href="#work" className="link-accent mt-9 inline-flex">
                  Relevant work → {activeService.work}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
