import type { JsonLd } from "@/lib/schema";

type JsonLdProps = {
  schema: JsonLd;
};

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
