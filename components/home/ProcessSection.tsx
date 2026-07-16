"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "./home-data";

export function ProcessSection({ enabled }: { enabled: boolean }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 50%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  return (
    <section id="process" className="bg-bg-ink text-text-inverse">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-inverse">
            How We Work
          </h2>
          <p className="mt-5 max-w-[560px] font-body text-base leading-7 text-[#9BAEAE]">
            We run a transparent, sprint-based process so you always know what
            is being built, why it matters, and where the work stands with no
            black box development.
          </p>
        </div>
        <div ref={timelineRef} className="relative mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-[2px] bg-white/10 lg:left-1/2"
          />
          {enabled ? (
            <motion.div
              aria-hidden="true"
              className="absolute bottom-0 left-[7px] top-0 z-10 w-[3px] origin-top -translate-x-px bg-accent lg:left-1/2"
              style={{ scaleY }}
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[7px] top-0 z-10 w-[3px] -translate-x-px bg-accent lg:left-1/2"
            />
          )}
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[28px_1fr] items-start lg:grid-cols-[1fr_56px_1fr]"
                >
                  <motion.div
                    className={`col-start-2 w-full border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.055] sm:p-8 lg:w-[88%] ${isLeft ? "lg:col-start-1 lg:justify-self-start" : "lg:col-start-3 lg:justify-self-end"}`}
                    {...(enabled
                      ? {
                          initial: { opacity: 0, x: isLeft ? -20 : 20 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true, amount: 0.32 },
                          transition: { duration: 0.45, ease: "easeOut" },
                        }
                      : {})}
                  >
                    <p className="font-mono text-label uppercase text-accent">
                      {step.number}
                    </p>
                    <h3 className="mt-3 font-display text-display-sm font-bold text-text-inverse">
                      {step.name}
                    </h3>
                    <p className="mt-4 font-body text-[15px] leading-7 text-[#9BAEAE]">
                      {step.description}
                    </p>
                    <p className="mt-5 border-t border-white/10 pt-5 font-mono text-[10px] uppercase leading-5 text-[#718686]">
                      {step.callout}
                    </p>
                  </motion.div>
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-8 flex h-[14px] w-[28px] items-center lg:left-1/2 lg:w-[calc(6%+32px)] ${isLeft ? "lg:-translate-x-full lg:justify-end" : "lg:translate-x-px lg:justify-start"}`}
                  >
                    <span className="h-[2px] flex-1 bg-white/20" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute left-[8px] top-8 z-20 h-[14px] w-[14px] -translate-x-1/2 border-[3px] border-bg-ink bg-accent lg:left-1/2"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-xl text-center md:mt-20">
          <p className="font-body text-[15px] leading-7 text-[#9BAEAE]">
            Every engagement starts with a free discovery call. No pitch. No
            pressure.
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-flex min-h-[52px] items-center bg-accent px-6 font-display text-sm font-bold text-bg-ink transition-colors hover:bg-[#69D0D3]"
          >
            Book a free call →
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="h-px bg-white/10" />
    </section>
  );
}
