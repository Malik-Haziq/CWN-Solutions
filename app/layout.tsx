import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { bodyFont, displayFont, monoFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cwnsolutions.com"),
  title: {
    default: "CWN Solutions | Security-First SaaS Development Agency",
    template: "%s | CWN Solutions",
  },
  description:
    "Security-first full-stack product teams for FinTech, LegalTech, Hospitality Tech and Enterprise AI founders across the UAE, Europe and Australia.",
  keywords: [
    "SaaS development agency",
    "security-first software development",
    "FinTech development agency",
    "LegalTech software development",
    "Hospitality tech agency",
    "Enterprise AI development",
    "MVP development for startups",
    "software agency UAE",
    "software agency Australia",
    "software agency Sweden",
    "funded startup development agency",
    "secure SaaS development",
    "startup product development",
    "full-stack product team",
    "HealthTech development",
    "E-commerce development agency",
    "software agency Europe",
    "SaaS MVP agency",
    "compliance-ready software",
    "AI integration agency",
    "custom software development",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "CWN Solutions | Security-First SaaS Development",
    description:
      "Security-first full-stack product teams for founders in FinTech, LegalTech, Hospitality Tech and Enterprise AI.",
    siteName: "CWN Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CWN Solutions | Security-First SaaS Development",
    description:
      "Security-first full-stack product teams for founders in trust-critical markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "CWN Solutions",
                url: "https://cwnsolutions.com",
                description:
                  "Security-first SaaS development agency for founders and operators.",
                sameAs: ["https://www.linkedin.com"],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  email: "hello@cwnsolutions.com",
                },
              },
              {
                "@type": "WebSite",
                name: "CWN Solutions",
                url: "https://cwnsolutions.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://cwnsolutions.com/blog?search={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              ...[
                "SaaS Product Development",
                "MVP Development for Funded Startups",
                "Enterprise AI Integration",
                "Security & Compliance Architecture",
              ].map((name) => ({
                "@type": "Service",
                name,
                provider: { "@type": "Organization", name: "CWN Solutions" },
                description: `CWN Solutions ${name.toLowerCase()} for trust-critical products.`,
                areaServed: [
                  "UAE",
                  "Germany",
                  "Sweden",
                  "Norway",
                  "Australia",
                  "Singapore",
                ],
              })),
            ],
          })}
        </Script>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
