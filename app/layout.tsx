import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { JsonLd } from "@/components/seo/JsonLd";
import { bodyFont, displayFont, monoFont } from "@/lib/fonts";
import { sitewideSchema } from "@/lib/schema";
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
        <JsonLd schema={sitewideSchema()} />
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
