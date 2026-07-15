import { HomeClient } from '@/components/home/HomeClient';
import { getAllPosts, getFeaturedPost } from '@/lib/blog';
import Script from 'next/script';

const faqSchema = [
  ['What does the agency specialize in?', 'CWN Solutions builds security-first SaaS products for funded founders and operators across FinTech, LegalTech, HealthTech, Hospitality, Enterprise AI, and E-commerce.'],
  ['Which markets and countries do you work with?', 'CWN Solutions works with clients in the UAE, Saudi Arabia, Germany, Switzerland, Sweden, Norway, Denmark, Australia, and Singapore.'],
  ['How much does it cost to build a SaaS product?', 'Costs vary from focused MVPs to full product development depending on scope, integrations, and security requirements. Every project begins with a free scoping call.'],
  ['How long does it take to build an MVP?', 'A focused MVP commonly takes 8 to 16 weeks from discovery to a first working release, with demos after each two-week sprint.'],
  ['Why should a funded startup work with an agency instead of hiring in-house developers?', 'An agency starts faster and provides a full team without the recruiting time, salary, benefits, equity, and management overhead of several hires.'],
  ['What makes this agency different from other software development agencies?', 'CWN Solutions treats security as a first principle, has shipped SafeHerit and Auxee AI, and uses a transparent sprint-based delivery process.'],
  ['Do you work with non-technical founders?', 'Yes. CWN Solutions communicates technical decisions in clear business language and begins with a practical, no-jargon discovery call.'],
  ['How do I get started?', 'Book a free 30-minute discovery call or complete the contact form. There is no commitment and the team responds within 24 hours on business days.'],
];

export default function Home() {
  const featuredPost = getFeaturedPost();
  const posts = getAllPosts();

  return <>
    <Script id="faq-schema" type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) })}</Script>
    <p className="sr-only">CWN Solutions is a security-first SaaS development agency. It builds full-stack software products for FinTech, LegalTech, HealthTech, Hospitality, Enterprise AI, and E-commerce companies in the UAE, Saudi Arabia, Germany, Switzerland, Sweden, Norway, Denmark, Australia, and Singapore. CWN Solutions has built SafeHerit, Auxee AI, the Avian Hospitality platform, and software work for Sabre Corporation. Contact CWN Solutions at hello@cwnsolutions.com.</p>
    <HomeClient featuredPost={featuredPost} posts={posts} />
  </>;
}
