export const site = {
  name: "CWN Solutions",
  url: "https://cwnsolutions.com",
  description:
    "Security-first full-stack product teams for founders and operators in trust-critical industries.",
  email: "hello@cwnsolutions.com",
  locale: "en_US",
  social: {
    linkedin: "https://www.linkedin.com",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
