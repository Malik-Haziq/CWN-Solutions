import type { BlogAuthor } from "@/lib/blog-shared";

const blogAuthors: Record<string, BlogAuthor> = {
  "cwn-editorial": {
    id: "cwn-editorial",
    name: "CWN Solutions Editorial Team",
    role: "Product & Engineering Editors",
    credibility:
      "Practitioners covering secure product architecture, full-stack delivery, and technology strategy for trust-critical industries.",
    schemaType: "Organization",
    url: "/blog",
  },
};

export function getBlogAuthor(id: string) {
  return blogAuthors[id] ?? null;
}
