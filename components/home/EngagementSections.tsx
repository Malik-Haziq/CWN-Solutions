"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Copy } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TealDot } from "@/components/ui/TealDot";
import { useContactForm } from "@/hooks/useContactForm";
import { formatPostDate, type BlogPostMeta } from "@/lib/blog-shared";
import { Badge } from "./Badge";
import { faqs, testimonials } from "./home-data";

export function TestimonialsSection({ enabled }: { enabled: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  return (
    <section id="testimonials" className="bg-accent-muted">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>Client Perspective</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            What partnership feels like.
          </h2>
        </div>
        <motion.div
          className="mt-14 grid border-y border-border-default lg:grid-cols-[32fr_68fr]"
          {...(enabled
            ? {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              }
            : {})}
        >
          <div className="border-b border-border-default lg:border-b-0 lg:border-r">
            <p className="px-5 pb-3 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted sm:px-7">
              Choose a perspective
            </p>
            <div className="pb-4">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-full items-center justify-between gap-5 border-l-[3px] px-5 py-4 text-left transition-[border-color,background-color] duration-300 sm:px-7 ${isActive ? "border-accent bg-bg-surface" : "border-transparent hover:border-border-strong hover:bg-white/50"}`}
                  >
                    <span>
                      <span className="block font-display text-sm font-semibold text-text-primary">
                        {testimonial.name}
                      </span>
                      <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.08em] text-text-muted">
                        {testimonial.badge} · {testimonial.location}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[10px] transition-colors ${isActive ? "text-accent-dark" : "text-text-muted"}`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="relative flex min-h-[500px] overflow-hidden bg-bg-surface p-7 sm:p-10 lg:min-h-[540px] lg:p-14">
            <span
              aria-hidden="true"
              className="absolute right-6 top-0 font-display text-[180px] font-bold leading-none text-accent/[0.09] sm:right-10 sm:text-[240px]"
            >
              “
            </span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.name}
                className="relative z-10 flex w-full flex-col justify-between"
                {...(enabled
                  ? {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -8 },
                      transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                    }
                  : {})}
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-dark">
                    In their words
                  </p>
                  <blockquote className="mt-8 max-w-[790px] font-display text-[clamp(24px,3.1vw,42px)] font-medium leading-[1.38] tracking-[-0.015em] text-text-primary">
                    “{active.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-12 flex flex-col gap-5 border-t border-border-subtle pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-body text-base font-semibold text-text-primary">
                      {active.name}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {active.role}, {active.location}
                    </p>
                  </div>
                  <Badge variant="accent">{active.badge}</Badge>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </section>
  );
}

type BlogSectionProps = {
  enabled: boolean;
  featuredPost: BlogPostMeta;
  posts: BlogPostMeta[];
};

export function BlogSection({
  enabled,
  featuredPost,
  posts,
}: BlogSectionProps) {
  const smallPosts = posts
    .filter((post) => post.slug !== featuredPost.slug)
    .slice(0, 3);
  const reveal = (delay = 0) =>
    enabled
      ? {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        }
      : {};
  return (
    <section id="blog" className="bg-bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
        <SectionLabel>Insights</SectionLabel>
        <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
          From the Blog
        </h2>
        <div className="mt-14 grid grid-cols-1 border-y border-border-default lg:grid-cols-[56fr_44fr]">
          <motion.div
            className="border-b border-border-default lg:border-b-0 lg:border-r"
            {...reveal()}
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group flex min-h-[420px] flex-col p-7 transition-colors duration-150 hover:bg-bg-surface sm:p-10 lg:min-h-[520px] lg:p-12"
            >
              <span className="badge badge-accent self-start">
                {featuredPost.category}
              </span>
              <h3 className="mt-8 line-clamp-2 max-w-[680px] font-display text-display-md font-bold text-text-primary transition-colors duration-150 group-hover:text-accent">
                {featuredPost.title}
              </h3>
              <p className="mt-5 line-clamp-3 max-w-[620px] font-body text-base leading-7 text-text-secondary">
                {featuredPost.description}
              </p>
              <div className="mt-auto flex flex-col gap-5 pt-12 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-label uppercase text-text-muted">
                  {formatPostDate(featuredPost.publishedAt)} /{" "}
                  {featuredPost.readTime}
                </span>
                <span className="link-accent self-start font-body text-sm sm:self-auto">
                  Read article →
                </span>
              </div>
            </Link>
          </motion.div>
          <motion.div {...reveal(0.12)}>
            {smallPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[1fr_auto] gap-5 border-b border-border-subtle px-7 py-5 transition-colors duration-150 last:border-b-0 hover:bg-bg-surface sm:px-10"
              >
                <div className="min-w-0">
                  <p className="font-mono text-label uppercase text-text-muted">
                    {post.category}
                  </p>
                  <h3 className="mt-2 truncate font-display text-[17px] font-semibold text-text-primary transition-colors duration-150 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase text-text-muted">
                    {post.readTime}
                  </p>
                </div>
                <span className="pt-7 font-body text-xl text-text-muted transition-colors duration-150 group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="link-accent font-mono text-xs uppercase"
          >
            View all articles →
          </Link>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}

export function CallToAction({ enabled }: { enabled: boolean }) {
  return (
    <motion.section
      className="border-y border-accent/30 bg-accent-muted"
      {...(enabled
        ? {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.45 },
            transition: { duration: 0.45 },
          }
        : {})}
    >
      <div className="mx-auto flex min-h-[140px] w-full max-w-7xl flex-col justify-center gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <h2 className="font-display text-display-sm font-bold text-text-primary">
            Ready to build something
            <br className="hidden sm:block" /> that earns trust?
          </h2>
          <p className="mt-2 text-[15px] text-text-secondary">
            Most projects start with a single honest conversation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link href="#contact" className="btn-primary">
            Book a Free Call
          </Link>
          <Link href="#work" className="btn-ghost">
            See Our Work
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export function ContactSection({ enabled }: { enabled: boolean }) {
  const [copied, setCopied] = useState(false);
  const { errors, form, isSending, isSubmitted, submit, updateField } =
    useContactForm();
  const copyEmail = async () => {
    await navigator.clipboard?.writeText("hello@cwnsolutions.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  const reveal = (delay = 0) =>
    enabled
      ? {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, delay },
        }
      : {};
  return (
    <section id="contact" className="bg-bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
          Tell Us About Your Project<span className="text-accent">.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="border-b border-border-default pb-12 lg:border-b-0 lg:border-r lg:pr-14"
            {...reveal()}
          >
            <p className="max-w-[400px] text-base leading-7 text-text-secondary">
              The agency takes on a focused number of projects at a time to
              ensure every client gets full team attention. If the project is a
              fit, both sides will know within one conversation.
            </p>
            <div className="mt-9 space-y-4">
              {[
                "Response within 24 hours",
                "Free 30-minute discovery call",
                "No commitment until proposal is signed",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-mono text-sm text-text-secondary"
                >
                  <TealDot />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 h-px w-[60px] bg-border-default" />
            <div className="mt-10">
              <SectionLabel>Direct Email</SectionLabel>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@cwnsolutions.com"
                  className="font-display text-display-sm font-bold text-accent"
                >
                  hello@cwnsolutions.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className={`p-1 ${copied ? "text-accent" : "text-text-muted"}`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
            <div className="mt-9">
              <SectionLabel>Response Time</SectionLabel>
              <p className="mt-3 text-text-secondary">
                Within 24 hours on business days. UAE, EU, and ANZ timezones
                covered.
              </p>
            </div>
            <div className="mt-9">
              <SectionLabel>Markets We Serve</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "UAE",
                  "Saudi Arabia",
                  "Germany",
                  "Sweden",
                  "Norway",
                  "Australia",
                  "Singapore",
                ].map((market) => (
                  <Badge key={market}>{market}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="pt-12 lg:pl-14 lg:pt-0" {...reveal(0.1)}>
            {isSubmitted ? (
              <motion.div
                className="flex min-h-[470px] flex-col items-center justify-center text-center"
                initial={enabled ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
              >
                <TealDot className="h-3 w-3" />
                <h3 className="mt-5 font-display text-display-sm font-bold">
                  Message received.
                </h3>
                <p className="mt-3 max-w-sm text-text-secondary">
                  The team will be in touch within 24 hours. Check your inbox.
                </p>
                <Link href="/" className="link-accent mt-7">
                  ← Back to homepage
                </Link>
              </motion.div>
            ) : (
              <ContactForm
                form={form}
                errors={errors}
                isSending={isSending}
                onSubmit={submit}
                onUpdate={updateField}
              />
            )}
          </motion.div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}

function ContactForm({
  form,
  errors,
  isSending,
  onSubmit,
  onUpdate,
}: {
  form: Record<string, string>;
  errors: Record<string, string>;
  isSending: boolean;
  onSubmit: () => void;
  onUpdate: (name: string, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      {(
        [
          ["name", "Full Name", "text"],
          ["email", "Email Address", "email"],
          ["company", "Company or Product Name", "text"],
        ] as const
      ).map(([name, label, type]) => (
        <div key={name}>
          <label className="section-label" htmlFor={name}>
            {label}
          </label>
          <input
            id={name}
            type={type}
            value={form[name] || ""}
            onChange={(event) => onUpdate(name, event.target.value)}
            className={`mt-2 w-full border bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted ${errors[name] ? "border-accent" : "border-border-default"}`}
          />
          {errors[name] && (
            <p className="mt-1 font-mono text-[11px] text-accent-dark">
              {errors[name]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label className="section-label" htmlFor="project">
          What are you building?
        </label>
        <textarea
          id="project"
          rows={5}
          value={form.project || ""}
          onChange={(event) => onUpdate("project", event.target.value)}
          className={`mt-2 w-full resize-y border bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted ${errors.project ? "border-accent" : "border-border-default"}`}
        />
        {errors.project && (
          <p className="mt-1 font-mono text-[11px] text-accent-dark">
            {errors.project}
          </p>
        )}
      </div>
      {(
        [
          [
            "industry",
            "Industry",
            [
              "FinTech",
              "LegalTech",
              "HealthTech",
              "Enterprise AI",
              "Hospitality Tech",
              "E-commerce",
              "Other",
            ],
          ],
          [
            "budget",
            "Budget Range",
            [
              "Under $10,000",
              "$10,000 – $25,000",
              "$25,000 – $50,000",
              "$50,000 – $100,000",
              "$100,000+",
              "Not sure yet",
            ],
          ],
        ] as const
      ).map(([name, label, options]) => (
        <div key={name}>
          <label className="section-label" htmlFor={name}>
            {label}
          </label>
          <select
            id={name}
            value={form[name] || ""}
            onChange={(event) => onUpdate(name, event.target.value)}
            className="mt-2 w-full border border-border-default bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted"
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      <div>
        <label className="section-label" htmlFor="referral">
          How did you hear about us?
        </label>
        <input
          id="referral"
          type="text"
          value={form.referral || ""}
          onChange={(event) => onUpdate("referral", event.target.value)}
          className="mt-2 w-full border border-border-default bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted"
        />
      </div>
      <button
        type="button"
        disabled={isSending}
        onClick={onSubmit}
        className="btn-primary mt-2 h-14 w-full justify-center font-display text-base font-bold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSending ? "Sending..." : "Send Message →"}
      </button>
    </div>
  );
}

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="bg-bg-base">
      <div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-5 font-display text-display-md font-bold text-text-primary">
          Common Questions
        </h2>
        <div className="mt-10 border-t border-border-subtle">
          {faqs.map(([question, answer], index) => {
            const open = openFaq === index;
            return (
              <div key={question} className="border-b border-border-subtle">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left font-body text-base font-medium text-text-primary"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[720px] pb-6 text-base leading-[1.7] text-text-secondary">
                      {answer}
                      {index === 4 && (
                        <>
                          {" "}
                          <Link
                            href="/blog/saas-in-house-vs-agency-cost"
                            className="link-accent"
                          >
                            Read the full comparison.
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
