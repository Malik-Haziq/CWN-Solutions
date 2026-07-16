import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TealDot } from "@/components/ui/TealDot";
import { trustSignals } from "./home-data";

export function HeroSection({ enabled }: { enabled: boolean }) {
  const animation = enabled
    ? (delay: number, y: number) => ({
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay },
      })
    : () => ({});

  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden bg-bg-ink text-text-inverse">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-white/20"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-7 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="relative mx-auto flex w-full max-w-[1040px] flex-1 flex-col items-center justify-center text-center">
          <h1 className="max-w-[1020px] font-display text-[clamp(44px,7.3vw,94px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-text-inverse">
            <motion.span className="block" {...animation(0.1, 24)}>
              Turn your idea into
            </motion.span>
            <motion.span
              className="mt-2 block text-accent sm:mt-3"
              {...animation(0.2, 24)}
            >
              a product people trust.
            </motion.span>
          </h1>
          <motion.p
            className="mt-7 max-w-[670px] font-body text-[17px] leading-8 text-[#AFC0C0] sm:mt-8 sm:text-lg"
            {...animation(0.36, 16)}
          >
            Bring the vision. We shape the strategy, design the experience, and
            build the secure product—so you can launch with confidence and grow
            without rebuilding.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
            {...animation(0.48, 14)}
          >
            <Link
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 bg-accent px-7 font-display text-base font-bold text-bg-ink transition-colors duration-200 hover:bg-[#69D0D3]"
            >
              Start a conversation <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 font-body text-[15px] font-medium text-text-inverse transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              See products we’ve built
            </Link>
          </motion.div>
          <motion.div
            className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#819595]"
            {...animation(0.62, 0)}
          >
            {trustSignals.map((signal, index) => (
              <span key={signal} className="inline-flex items-center gap-4">
                {index > 0 && <TealDot className="h-1 w-1" />}
                <span>{signal}</span>
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid border border-white/20 bg-bg-ink sm:grid-cols-3 lg:mt-16"
          {...animation(0.72, 16)}
        >
          {[
            [
              "01",
              "Clarity before code",
              "We turn your idea into a focused product roadmap.",
            ],
            [
              "02",
              "One senior product team",
              "Strategy, design, and engineering move together.",
            ],
            [
              "03",
              "Confidence after launch",
              "Secure foundations that support your next stage.",
            ],
          ].map(([number, title, copy]) => (
            <div
              key={number}
              className="group border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-[10px] text-accent">
                  {number}
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-text-inverse">
                    {title}
                  </h2>
                  <p className="mt-1 text-[13px] leading-5 text-[#819595]">
                    {copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
