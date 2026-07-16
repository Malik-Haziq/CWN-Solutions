import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, type FaqItem } from "@/lib/schema";

export type FaqAccordionProps = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  introduction?: string;
};

/**
 * The same `items` array powers the accordion and FAQPage schema, so the
 * answer a visitor reads can never drift away from the structured data.
 */
export function FaqAccordion({
  items,
  eyebrow = "Common questions",
  title = "Answers, without the runaround.",
  introduction,
}: FaqAccordionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className="border-y border-border-default"
      aria-labelledby="faq-title"
    >
      <JsonLd schema={faqPageSchema(items)} />
      <div className="grid lg:grid-cols-[36fr_64fr]">
        <div className="border-b border-border-default p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
          <p className="section-label">{eyebrow}</p>
          <h2
            id="faq-title"
            className="mt-5 max-w-sm font-display text-display-md font-extrabold text-text-primary"
          >
            {title}
          </h2>
          {introduction ? (
            <p className="mt-5 max-w-sm font-body text-base leading-7 text-text-secondary">
              {introduction}
            </p>
          ) : null}
          <span
            aria-hidden="true"
            className="mt-10 block h-px w-12 bg-accent"
          />
        </div>

        <div>
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group border-b border-border-subtle last:border-b-0"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-start gap-4 px-6 py-6 font-display text-[17px] font-semibold leading-6 text-text-primary marker:content-none sm:gap-6 sm:px-9 sm:py-7">
                <span className="pt-0.5 font-mono text-[10px] font-medium tracking-[0.12em] text-accent-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 grid h-5 w-5 place-items-center border border-border-default font-mono text-sm font-normal leading-none text-text-muted transition-colors duration-200 group-open:border-accent group-open:text-accent-dark"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:block">−</span>
                </span>
              </summary>
              <div className="grid grid-cols-[auto_1fr] gap-4 px-6 pb-7 sm:grid-cols-[auto_1fr] sm:gap-6 sm:px-9 sm:pb-8">
                <span aria-hidden="true" className="w-[10px]" />
                <p className="max-w-2xl font-body text-base leading-7 text-text-secondary">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
