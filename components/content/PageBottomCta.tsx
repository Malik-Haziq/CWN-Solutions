import Link from "next/link";

const ctaVariants = {
  service: {
    eyebrow: "Your next step",
    title: "Get a scoped proposal.",
    description:
      "Tell us what needs to move. We’ll return a practical scope, not a vague sales deck.",
    action: "Start a scoped conversation",
  },
  industry: {
    eyebrow: "Built with context",
    title: "Talk to someone who’s built in your industry.",
    description:
      "Bring the constraints, regulations, and growth pressure. We’ll meet you in the real world.",
    action: "Talk to our team",
  },
  caseStudy: {
    eyebrow: "What comes next",
    title: "Make your next proof point count.",
    description:
      "A focused build can create clarity for your users and momentum for your business.",
    action: "Discuss your project",
  },
  blog: {
    eyebrow: "A useful next conversation",
    title: "Turn the insight into a better build.",
    description:
      "If this problem is already on your roadmap, let’s turn it into a clear next step.",
    action: "Talk through your project",
  },
} as const;

type PageBottomCtaProps = {
  variant?: keyof typeof ctaVariants;
  title?: string;
  description?: string;
  action?: string;
  eyebrow?: string;
  href?: string;
};

export function PageBottomCta({
  variant = "service",
  title,
  description,
  action,
  eyebrow,
  href = "/#contact",
}: PageBottomCtaProps) {
  const copy = ctaVariants[variant];

  return (
    <section
      className="relative overflow-hidden border-y border-border-default bg-bg-ink"
      aria-label="Start a conversation"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] bg-accent"
      />
      <div className="mx-auto grid w-full max-w-7xl gap-9 px-6 py-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:px-10 md:py-14">
        <div className="max-w-3xl">
          <p className="font-mono text-label uppercase text-accent">
            {eyebrow ?? copy.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-display-md font-extrabold text-text-inverse">
            {title ?? copy.title}
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-7 text-text-inverse/70">
            {description ?? copy.description}
          </p>
        </div>
        <Link
          href={href}
          className="btn-ghost self-start border-border-strong text-text-inverse hover:border-accent hover:text-accent md:self-auto"
        >
          {action ?? copy.action} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
