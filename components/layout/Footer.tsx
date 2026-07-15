import Link from 'next/link';
import { Contact, Mail } from 'lucide-react';
import { TealDot } from '@/components/ui/TealDot';

const serviceLinks = [
  'SaaS Product Development',
  'MVP for Startups',
  'Enterprise AI Integration',
  'Hospitality Digital Transformation',
  'E-commerce Platforms',
  'Security Architecture',
  'API & Backend Systems',
];

const industryLinks = [
  'FinTech',
  'LegalTech',
  'HealthTech',
  'Enterprise AI',
  'Hospitality Tech',
  'E-commerce',
  'Security Tech',
];

const companyLinks = ['Case Studies', 'Blog', 'Book a Call', 'Contact'];

function slugify(label: string) {
  return `/${label.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

type FooterColumnProps = {
  heading: string;
  links: string[];
};

function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="section-label mb-5 text-text-muted">{heading}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={slugify(link)}
              className="font-body text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-base">
      <div className="section-divider" />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="CWN Solutions home"
              className="inline-flex items-baseline gap-1 font-display text-xl font-semibold text-text-primary"
            >
              <span>CWN Solutions</span>
              <TealDot className="translate-y-[-1px]" />
            </Link>
            <p className="mt-4 max-w-[220px] font-body text-sm leading-6 text-text-secondary">
              We build security-first SaaS products for founders who can't
              afford to get trust wrong.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://www.linkedin.com"
                aria-label="CWN Solutions on LinkedIn"
                className="text-text-muted transition-colors duration-200 hover:text-accent"
              >
                <Contact size={20} strokeWidth={1.75} />
              </Link>
              <Link
                href="mailto:hello@cwnsolutions.com"
                aria-label="Email CWN Solutions"
                className="text-text-muted transition-colors duration-200 hover:text-accent"
              >
                <Mail size={20} strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          <FooterColumn heading="Services" links={serviceLinks} />
          <FooterColumn heading="Industries" links={industryLinks} />
          <FooterColumn heading="Company" links={companyLinks} />
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <p className="font-mono text-label uppercase text-text-muted">
            &copy; {year} CWN Solutions. All rights reserved.
          </p>
          <p className="font-mono text-label uppercase text-text-muted">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
