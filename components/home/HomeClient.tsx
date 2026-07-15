'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowUpRight, Check, ChevronDown, Copy } from 'lucide-react';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TealDot } from '@/components/ui/TealDot';
import { formatPostDate, type BlogPostMeta } from '@/lib/blog-shared';

const trustSignals = [
  '2 Products in Production',
  'FinTech & LegalTech',
  'UAE / EU / ANZ',
];

const tickerItems = [
  '2 Live SaaS Products in Production',
  'Zero-Knowledge Encryption Implemented',
  'Enterprise AI Tooling Delivered',
  'FinTech, LegalTech & Hospitality Portfolio',
  'International Clients — UAE · EU · ANZ',
  'Security-First Architecture on Every Build',
];

const positioningFacts = [
  'FinTech, LegalTech, HealthTech & Hospitality focused',
  'Full product teams — not freelancers',
  'Built for founders and operators at every stage',
];

const services = [
  {
    name: 'SaaS Product Development',
    summary: 'We turn trust-critical SaaS ideas into polished products customers can rely on.',
    detail:
      'For founders building in regulated or sensitive markets, we shape the product, build the core experience, and prepare it for real users. You get a focused team that understands onboarding, payments, permissions, reporting, and the confidence buyers need before they say yes.',
    badges: ['Product strategy', 'UX flows', 'Next.js', 'Secure launch'],
    work: 'SafeHerit',
  },
  {
    name: 'MVP for Funded Startups',
    summary: 'We help funded teams move from pitch deck promise to a working first release.',
    detail:
      'This is for founders who need momentum without burning months on false starts. We define the smallest credible product, build the parts investors and customers need to see, and leave you with a foundation that can grow after launch.',
    badges: ['MVP scope', 'Design systems', 'Launch plan', 'Analytics'],
    work: 'SafeHerit',
  },
  {
    name: 'Enterprise AI Integration',
    summary: 'We bring AI into real business workflows where accuracy and trust matter.',
    detail:
      'For operators who want more than a demo, we connect AI to the information, approvals, and daily tasks your teams already use. The result is practical tooling that saves time, protects context, and keeps people in control.',
    badges: ['LLM workflows', 'Knowledge tools', 'Human review', 'Auxee AI'],
    work: 'Auxee AI',
  },
  {
    name: 'Hospitality Digital Transformation',
    summary: 'We modernize hospitality operations across booking, guest experience, and property systems.',
    detail:
      'For hotels, travel platforms, and hospitality operators, we build digital tools that make every guest interaction smoother. From booking flows to internal dashboards, we focus on reliable systems that staff can use and guests can trust.',
    badges: ['Booking flows', 'Guest portals', 'Operations tools', 'Integrations'],
    work: 'Avian Hospitality and Sabre Corporation',
  },
  {
    name: 'E-commerce Platforms',
    summary: 'We build commerce experiences that make buying feel simple, fast, and dependable.',
    detail:
      'For brands and operators with custom selling needs, we create storefronts, checkout journeys, and back-office tools that match how the business actually works. The focus is fewer drop-offs, clearer operations, and a platform ready for growth.',
    badges: ['Storefronts', 'Checkout', 'Catalogs', 'Conversion'],
    work: 'Selected commerce builds',
  },
  {
    name: 'Security & Compliance Architecture',
    summary: 'We design product foundations for teams that cannot afford trust gaps.',
    detail:
      'For founders and operators handling sensitive data, we map the controls your product needs before risk becomes expensive. We help with access, audit trails, data protection, and compliance-ready product decisions from the start.',
    badges: ['Audit logs', 'Access control', 'Data protection', 'Compliance-ready'],
    work: 'SafeHerit',
  },
];

const industries = [
  {
    monogram: 'FT',
    name: 'FinTech',
    description: 'Digital banking, wallets, financial planning tools',
  },
  {
    monogram: 'LT',
    name: 'LegalTech',
    description: 'Compliance platforms, document systems, estate tech',
  },
  {
    monogram: 'HT',
    name: 'HealthTech',
    description: 'Patient portals, HIPAA-compliant data platforms',
  },
  {
    monogram: 'AI',
    name: 'Enterprise AI',
    description: 'Internal AI assistants, LLM integrations, knowledge tools',
  },
  {
    monogram: 'HO',
    name: 'Hospitality',
    description: 'Booking platforms, guest experience tech, property management systems',
    clients: 'Avian Hospitality · Sabre Corporation',
  },
  {
    monogram: 'EC',
    name: 'E-commerce',
    description: 'Custom storefronts, headless commerce, conversion-first builds',
  },
];

const caseStudies = [
  {
    badge: 'LegalTech / FinTech',
    name: 'SafeHerit',
    description: 'A zero-knowledge encrypted estate planning vault for individuals and families.',
    metric: '100%',
    metricLabel: 'security audit pass rate',
    story:
      'SafeHerit needed to handle some of the most sensitive personal and financial data imaginable: inheritance plans, asset records, and beneficiary instructions. The agency built a private vault where even the platform itself cannot read user data. Families can now store and pass on their most important documents with complete confidence.',
    badges: ['encryption', 'access control', 'estate planning'],
    linkLabel: 'Visit safeherit.com →',
    linkHref: 'https://safeherit.com',
    visual: 'vault',
  },
  {
    badge: 'Enterprise AI',
    name: 'Auxee AI',
    description:
      'A secure internal AI assistant for enterprise teams, built for organizations that cannot send data to public AI tools.',
    metric: 'Enterprise-Grade',
    metricLabel: 'AI without the data risk',
    story:
      "Large organizations wanted the productivity benefits of AI assistants but couldn't risk sensitive internal data leaking into public language model training. Auxee AI gives teams a private, secure AI layer that stays entirely within their environment. Built for and deployed via PreScouter, whose clients include Fortune 500 companies.",
    badges: ['enterprise AI', 'data privacy', 'LLM integration'],
    linkLabel: 'Visit auxee.com →',
    linkHref: 'https://auxee.com',
    visual: 'chat',
  },
  {
    badge: 'Hospitality Tech',
    name: 'Avian Hospitality',
    description:
      'A digital transformation for a hospitality operator managing guest experience across multiple properties.',
    metric: 'Multi-Property',
    metricLabel: 'unified digital operations',
    story:
      'Avian Hospitality was managing guest experiences across multiple properties with disconnected tools and manual processes. The agency built a unified digital platform that connects booking, guest communication, and property management in one place, giving operators full visibility and guests a seamless experience.',
    badges: ['property management', 'booking systems', 'guest experience'],
    linkLabel: 'Read the full case study →',
    linkHref: '#work',
    visual: 'property',
  },
  {
    badge: 'Hospitality Tech / Enterprise',
    name: 'Sabre Corporation',
    description:
      "Enterprise-level digital solutions for one of the world's leading travel technology companies.",
    metric: 'Enterprise',
    metricLabel: 'travel tech at global scale',
    story:
      'Sabre Corporation operates at the intersection of travel, hospitality, and enterprise software, serving airlines, hotels, and travel agencies worldwide. The agency contributed to building and refining digital solutions that operate at this scale, where reliability and precision are non-negotiable.',
    badges: ['enterprise software', 'travel tech', 'global scale'],
    linkLabel: 'Read the full case study →',
    linkHref: '#work',
    visual: 'travel',
  },
];

const processSteps = [
  {
    number: 'Step 01',
    name: 'Discovery Call',
    description:
      'Before anything is scoped or priced, we get on a call to understand the problem, the people you serve, and what success should look like. There is no sales pitch, just honest questions and a clear conversation. If the project is not a good fit, we will say so.',
    callout: 'Free · 30 minutes · No commitment',
  },
  {
    number: 'Step 02',
    name: 'Technical Scoping',
    description:
      'We map out what needs to be built, the important decisions ahead, the privacy needs, and anything the product depends on. This is where hidden complexity gets brought into the open early. You leave with a clear picture of what you are actually building.',
    callout: 'Delivered as a written scope document',
  },
  {
    number: 'Step 03',
    name: 'Proposal & Alignment',
    description:
      'You receive a fixed-scope proposal with clear deliverables, a realistic timeline, and transparent pricing. Nothing is hidden in small print. You can review, ask questions, and request changes before work begins.',
    callout: 'Fixed scope · No surprise invoices',
  },
  {
    number: 'Step 04',
    name: 'Sprint-Based Build',
    description:
      'The product is built in two-week cycles. At the end of each cycle, you see a live demo of working software, not slides or vague status updates. Your feedback shapes the next cycle, so you always know what is being built and why.',
    callout: 'Demo every two weeks · Always working software',
  },
  {
    number: 'Step 05',
    name: 'Security Review',
    description:
      'Before launch, the product goes through a careful internal review. We check who can access what, how data is handled, how sign-in works, and whether sensitive information is protected properly. This is included in every engagement.',
    callout: 'Internal audit · Every product · Every time',
  },
  {
    number: 'Step 06',
    name: 'Handoff & Support',
    description:
      'When the product is ready, you receive documentation, a clean codebase handoff, and a knowledge transfer session. We stay available for 30 days after launch to help with anything that comes up. The goal is for you to feel fully in control of what was built.',
    callout: 'Full docs · Code handoff · 30-day support',
  },
];

const testimonials = [
  {
    quote:
      "They didn't just build what we asked for. Before writing a single line of code they challenged our assumptions, asked the questions we hadn't thought to ask, and helped us realize we were about to build the wrong thing. That conversation saved us months and a significant amount of runway.",
    name: 'Alex M.',
    role: 'Founder, FinTech Startup',
    location: 'UAE',
    badge: 'FinTech',
  },
  {
    quote:
      "Working with an agency that had already shipped a LegalTech product changed everything. They understood our compliance concerns before we finished explaining them. We didn't have to educate our own development team - they arrived knowing the landscape.",
    name: 'Sarah K.',
    role: 'CEO, LegalTech Platform',
    location: 'Australia',
    badge: 'LegalTech',
  },
  {
    quote:
      'We had a runway problem and needed to move fast without cutting corners on security. Their sprint structure meant we saw working software every two weeks. No black box. No surprises. Just consistent delivery.',
    name: 'Jonas B.',
    role: 'Co-founder, SaaS Startup',
    location: 'Sweden',
    badge: 'SaaS',
  },
  {
    quote:
      "The hospitality industry has very specific operational needs that most agencies don't understand. This team took the time to learn our business before proposing anything. The platform they built actually reflects how our properties operate.",
    name: 'Operations Director',
    role: 'Avian Hospitality',
    location: 'UAE',
    badge: 'Hospitality',
  },
  {
    quote:
      'Security was our primary concern from day one. Our enterprise clients would not have accepted anything less than a rigorously audited system. The team treated security as a first principle, not an afterthought. That approach gave our customers the confidence to adopt the platform.',
    name: 'Product Lead',
    role: 'Enterprise AI Client',
    location: 'Europe',
    badge: 'Enterprise AI',
  },
];

const faqs = [
  ['What does the agency specialize in?', 'CWN Solutions builds security-first SaaS products for funded founders and operators. Our work spans FinTech, LegalTech, HealthTech, Hospitality, Enterprise AI, and E-commerce—industries where trust, privacy, and reliable operations matter.'],
  ['Which markets and countries do you work with?', 'We work with clients in the UAE, Saudi Arabia, Germany, Switzerland, Sweden, Norway, Denmark, Australia, and Singapore. These are ambitious, English-speaking startup ecosystems that are often underserved by large Western agencies.'],
  ['How much does it cost to build a SaaS product?', 'Costs range from focused MVPs to larger full-product engagements, depending on scope, integrations, and security needs. The budget ranges in our contact form are a useful starting point; every project begins with a free scoping call to establish realistic costs.'],
  ['How long does it take to build an MVP?', 'A focused MVP commonly takes 8–16 weeks from discovery to a first working release. More complex products take longer. We work in two-week sprints and demo progress after each one, so there are no long black-box periods.'],
  ['Why should a funded startup work with an agency instead of hiring in-house developers?', 'An agency can start faster and gives you a full product team without the salary, benefits, equity, recruiting time, and management overhead of several hires. Read our guide on the in-house versus agency cost decision in the blog.'],
  ['What makes this agency different from other software development agencies?', 'Security is a first principle in our work, not an afterthought. We have shipped live products including SafeHerit and Auxee AI, understand trust-critical industries, focus on international markets, and make delivery visible through a transparent sprint process.'],
  ['Do you work with non-technical founders?', 'Yes. Many of our clients are non-technical founders and operators. We handle technical decisions while communicating in clear business language, beginning with a practical, no-jargon discovery conversation.'],
  ['How do I get started?', 'Book a free 30-minute discovery call or complete the contact form above. There is no commitment at this stage, and the team responds within 24 hours on business days.'],
] as const;

type CaseStudy = (typeof caseStudies)[number];

function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}) {
  return <span className={`badge ${variant === 'accent' ? 'badge-accent' : ''}`}>{children}</span>;
}

function CaseStudyVisual({ type }: { type: CaseStudy['visual'] }) {
  if (type === 'vault') {
    return (
      <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-5">
          <div>
            <div className="font-mono text-label uppercase text-text-muted">Family Vault</div>
            <div className="mt-2 font-display text-2xl font-bold text-text-primary">
              SafeHerit
            </div>
          </div>
          <div className="border border-accent bg-accent-muted px-3 py-2 font-mono text-[10px] uppercase text-accent-dark">
            Locked
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-5 pt-6 sm:grid-cols-[58fr_42fr]">
          <div className="space-y-3">
            {['Estate plan.pdf', 'Asset records', 'Beneficiary letters'].map((item) => (
              <div key={item} className="flex items-center justify-between border border-border-subtle bg-bg-base p-4">
                <span className="font-body text-sm text-text-primary">{item}</span>
                <span className="h-2 w-10 bg-accent" />
              </div>
            ))}
          </div>
          <div className="border border-border-subtle bg-bg-base p-4">
            <div className="font-mono text-[10px] uppercase text-text-muted">Beneficiaries</div>
            <div className="mt-5 space-y-4">
              {[72, 52, 64].map((width) => (
                <div key={width} className="flex items-center gap-3">
                  <span className="h-8 w-8 border border-border-default bg-bg-surface" />
                  <span className="h-2 bg-border-strong" style={{ width }} />
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-border-subtle pt-4 font-mono text-[10px] uppercase text-accent-dark">
              Zero-knowledge encrypted
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'chat') {
    return (
      <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-border-default bg-bg-base font-display text-lg font-bold text-accent">
              A
            </span>
            <div>
              <div className="font-display text-2xl font-bold text-text-primary">Auxee AI</div>
              <div className="font-mono text-[10px] uppercase text-text-muted">
                Internal workspace
              </div>
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase text-accent-dark">Private</div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-6">
          <div className="max-w-[78%] border border-border-subtle bg-bg-base p-4 font-body text-sm text-text-secondary">
            Summarize this account research for the strategy team.
          </div>
          <div className="ml-auto max-w-[82%] border border-accent bg-accent-muted p-4 font-body text-sm text-text-primary">
            Here is a private brief with risks, opportunities, and next-step questions.
          </div>
          <div className="mt-auto grid grid-cols-3 border border-border-subtle bg-bg-base font-mono text-[10px] uppercase text-text-muted">
            {['Secure', 'Private', 'Internal'].map((item) => (
              <span key={item} className="border-r border-border-subtle px-3 py-4 last:border-r-0">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'property') {
    return (
      <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-5">
          <div>
            <div className="font-display text-2xl font-bold text-text-primary">
              Operations Hub
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase text-text-muted">
              Avian Hospitality
            </div>
          </div>
          <div className="border border-border-default px-3 py-2 font-mono text-[10px] uppercase text-text-secondary">
            4 properties
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-5 pt-6 sm:grid-cols-[48fr_52fr]">
          <div className="border border-border-subtle bg-bg-base p-4">
            <div className="font-mono text-[10px] uppercase text-text-muted">Booking calendar</div>
            <div className="mt-4 grid grid-cols-7 gap-2">
              {Array.from({ length: 21 }).map((_, index) => (
                <span
                  key={index}
                  className={`aspect-square border ${
                    index % 5 === 0
                      ? 'border-accent bg-accent-muted'
                      : 'border-border-subtle bg-bg-surface'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-2">
              {['Ready', 'Stay', 'Clean'].map((item) => (
                <div key={item} className="border border-border-subtle bg-bg-base p-3">
                  <div className="h-8 bg-accent-muted" />
                  <div className="mt-3 font-mono text-[10px] uppercase text-text-muted">{item}</div>
                </div>
              ))}
            </div>
            <div className="border border-border-subtle bg-bg-base p-4">
              <div className="font-mono text-[10px] uppercase text-text-muted">Guest message</div>
              <div className="mt-4 h-3 w-4/5 bg-border-default" />
              <div className="mt-3 h-3 w-2/3 bg-border-subtle" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[360px] flex-col p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-border-subtle pb-5">
        <div>
          <div className="font-display text-2xl font-bold text-text-primary">Travel Console</div>
          <div className="mt-1 font-mono text-[10px] uppercase text-text-muted">
            Sabre Corporation
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase text-accent-dark">Global status</div>
      </div>
      <div className="grid flex-1 grid-cols-1 gap-5 pt-6 sm:grid-cols-[58fr_42fr]">
        <div className="border border-border-subtle bg-bg-base">
          {['Flight', 'Hotel', 'Agency', 'Route'].map((row, index) => (
            <div
              key={row}
              className="grid grid-cols-[70px_1fr_56px] items-center border-b border-border-subtle px-4 py-4 last:border-b-0"
            >
              <span className="font-mono text-[10px] uppercase text-text-muted">{row}</span>
              <span className="h-2 w-4/5 bg-border-default" />
              <span className={index === 1 ? 'h-2 bg-accent' : 'h-2 bg-border-strong'} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative flex-1 border border-border-subtle bg-bg-base">
            <div className="absolute left-[18%] top-[30%] h-10 w-20 border border-accent" />
            <div className="absolute right-[18%] top-[48%] h-12 w-16 border border-border-strong" />
            <div className="absolute bottom-[22%] left-[35%] h-2 w-24 bg-accent" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['99.9%', '24/7'].map((item) => (
              <div key={item} className="border border-border-subtle bg-bg-base p-3">
                <div className="font-display text-xl font-bold text-accent">{item}</div>
                <div className="font-mono text-[10px] uppercase text-text-muted">status</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type HomeClientProps = {
  featuredPost: BlogPostMeta;
  posts: BlogPostMeta[];
};

export function HomeClient({ featuredPost, posts }: HomeClientProps) {
  const shouldReduceMotion = useReducedMotion();
  const enabled = !shouldReduceMotion;
  const [activeService, setActiveService] = useState(services[0]);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const activeTestimonial = testimonials[activeTestimonialIndex];
  const smallPosts = posts.filter((post) => post.slug !== featuredPost.slug).slice(0, 3);
  const processTimelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: processScrollYProgress } = useScroll({
    target: processTimelineRef,
    offset: ['start 72%', 'end 50%'],
  });
  const processSpineProgress = useTransform(processScrollYProgress, [0, 1], [0, 1]);
  const processSpineScaleY = useSpring(processSpineProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  const updateField = (name: string, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }));
  };
  const submitContact = () => {
    const required = ['name', 'email', 'company', 'project'];
    const nextErrors = Object.fromEntries(required.filter((field) => !form[field]?.trim()).map((field) => [field, 'This field is required.']));
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }
    setIsSending(true);
    window.setTimeout(() => { setIsSending(false); setIsSubmitted(true); }, 700);
  };
  const copyEmail = async () => {
    await navigator.clipboard?.writeText('hello@cwnsolutions.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="overflow-x-hidden bg-bg-base">
      <section className="relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden bg-bg-ink text-text-inverse">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/20" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-7 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
          <div className="relative mx-auto flex w-full max-w-[1040px] flex-1 flex-col items-center justify-center text-center">
            <h1 className="max-w-[1020px] font-display text-[clamp(44px,7.3vw,94px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-text-inverse">
              <motion.span className="block" {...(enabled ? { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.1 } } : {})}>
                Turn your idea into
              </motion.span>
              <motion.span className="mt-2 block text-accent sm:mt-3" {...(enabled ? { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.2 } } : {})}>
                a product people trust.
              </motion.span>
            </h1>

            <motion.p
              className="mt-7 max-w-[670px] font-body text-[17px] leading-8 text-[#AFC0C0] sm:mt-8 sm:text-lg"
              {...(enabled ? { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.36 } } : {})}
            >
              Bring the vision. We shape the strategy, design the experience, and build the
              secure product—so you can launch with confidence and grow without rebuilding.
            </motion.p>

            <motion.div
              className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
              {...(enabled ? { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.48 } } : {})}
            >
              <Link href="#contact" className="inline-flex min-h-14 items-center justify-center gap-2 bg-accent px-7 font-display text-base font-bold text-bg-ink transition-colors duration-200 hover:bg-[#69D0D3]">
                Start a conversation <ArrowUpRight size={18} />
              </Link>
              <Link href="#work" className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 font-body text-[15px] font-medium text-text-inverse transition-colors duration-200 hover:border-accent hover:text-accent">
                See products we’ve built
              </Link>
            </motion.div>

            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#819595]"
              {...(enabled ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.62 } } : {})}
            >
              {trustSignals.map((signal, index) => <span key={signal} className="inline-flex items-center gap-4">{index > 0 && <TealDot className="h-1 w-1" />}<span>{signal}</span></span>)}
            </motion.div>

          </div>

          <motion.div
            className="mt-12 grid border border-white/20 bg-bg-ink sm:grid-cols-3 lg:mt-16"
            {...(enabled ? { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.72 } } : {})}
          >
            {[
              ['01', 'Clarity before code', 'We turn your idea into a focused product roadmap.'],
              ['02', 'One senior product team', 'Strategy, design, and engineering move together.'],
              ['03', 'Confidence after launch', 'Secure foundations that support your next stage.'],
            ].map(([number, title, copy]) => (
              <div key={number} className="group border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-6">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[10px] text-accent">{number}</span>
                  <div><h2 className="font-display text-base font-semibold text-text-inverse">{title}</h2><p className="mt-1 text-[13px] leading-5 text-[#819595]">{copy}</p></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        aria-label="Agency proof points"
        className="metrics-ticker h-14 overflow-hidden border-y border-border-subtle bg-bg-surface"
      >
        <div className="metrics-ticker-track flex h-full w-max items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full shrink-0 items-center">
              {tickerItems.map((item) => (
                <span
                  key={`${group}-${item}`}
                  className="flex h-full shrink-0 items-center gap-8 px-4 font-mono text-label uppercase text-text-secondary sm:gap-10 sm:px-5"
                >
                  <span className="whitespace-nowrap">{item}</span>
                  <TealDot className="h-[5px] w-[5px] shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-base">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-section-md sm:px-8 md:grid-cols-[38fr_62fr] md:gap-10 lg:px-10">
          <motion.div
            className="relative text-left"
            {...(enabled
              ? {
                  initial: { opacity: 0, y: 14 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.45 },
                  transition: { duration: 0.5, delay: 0.12, ease: 'easeOut' },
                }
              : {})}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-16 font-display text-[180px] font-semibold leading-none text-accent opacity-[0.12] sm:-left-5 sm:-top-20 sm:text-[230px]"
            >
              “
            </span>
            <div className="relative">
              <SectionLabel>Why We Exist</SectionLabel>
            </div>
          </motion.div>

          <motion.div
            className="max-w-[640px] text-left"
            {...(enabled
              ? {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.35 },
                  transition: { duration: 0.55, ease: 'easeOut' },
                }
              : {})}
          >
            <p className="font-display text-display-md font-semibold text-text-primary">
              Most development agencies will build whatever you ask. We specialize in
              one thing: software where getting security wrong is not an option.
            </p>

            <div className="mt-8 space-y-4">
              {positioningFacts.map((fact, index) => (
                <motion.p
                  key={fact}
                  className="flex items-start gap-3 font-mono text-sm leading-6 text-text-secondary"
                  {...(enabled
                    ? {
                        initial: { opacity: 0, y: 12 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true, amount: 0.35 },
                        transition: {
                          duration: 0.4,
                          delay: 0.22 + index * 0.08,
                          ease: 'easeOut',
                        },
                      }
                    : {})}
                >
                  <TealDot className="mt-[9px] h-[5px] w-[5px] shrink-0" />
                  <span>{fact}</span>
                </motion.p>
              ))}
            </div>

            <Link href="#process" className="link-accent mt-9 inline-flex">
              See how we work →
            </Link>
          </motion.div>
        </div>

        <SectionDivider />
      </section>

      <section id="services" className="bg-bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
              Our Solutions
            </h2>
            <p className="mt-5 max-w-[520px] font-body text-base leading-7 text-text-secondary">
              We build end-to-end digital products for founders and operators in
              trust-critical industries where reliability, clarity, and user confidence
              drive growth.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[32fr_68fr] md:gap-14">
            <div className="md:sticky md:top-[100px] md:self-start">
              <div className="-mx-5 flex overflow-x-auto border-b border-border-subtle px-5 sm:-mx-8 sm:px-8 md:mx-0 md:block md:overflow-visible md:border-b-0 md:px-0">
                {services.map((service) => {
                  const isActive = activeService.name === service.name;

                  return (
                    <button
                      key={service.name}
                      type="button"
                      onClick={() => setActiveService(service)}
                      className={`shrink-0 border-b-2 px-1 pb-4 pr-6 text-left font-display text-[15px] font-semibold transition-all duration-150 ease-in-out hover:text-text-secondary md:block md:w-full md:border-b-0 md:border-l-2 md:py-4 md:pl-5 md:pr-4 md:text-[17px] ${
                        isActive
                          ? 'border-accent text-text-primary md:pl-7 md:font-bold'
                          : 'border-transparent text-text-muted'
                      }`}
                    >
                      {service.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.name}
                  {...(enabled
                    ? {
                        initial: { opacity: 0, y: 14 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -8 },
                        transition: { duration: 0.24, ease: 'easeOut' },
                      }
                    : {})}
                >
                  <h3 className="max-w-3xl font-display text-display-sm font-bold text-text-primary">
                    {activeService.summary}
                  </h3>
                  <p className="mt-6 max-w-2xl font-body text-base leading-8 text-text-secondary">
                    {activeService.detail}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {activeService.badges.map((badge) => (
                      <span key={badge} className="badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <Link href="#work" className="link-accent mt-9 inline-flex">
                    Relevant work → {activeService.work}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      <section id="industries" className="bg-bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <SectionLabel>Industries</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            We Speak Your Domain
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href="#work"
                className="group flex min-h-[276px] flex-col border border-border-default bg-transparent p-8 transition-colors duration-200 ease-in-out hover:border-accent hover:bg-accent-muted sm:p-10"
              >
                <span className="font-display text-[52px] font-bold leading-none text-text-muted transition-colors duration-200 ease-in-out group-hover:text-accent">
                  {industry.monogram}
                </span>
                <h3 className="mt-8 font-display text-xl font-bold text-text-primary">
                  {industry.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-text-secondary">
                  {industry.description}
                </p>
                {industry.clients ? (
                  <p className="mt-3 font-mono text-[10px] uppercase leading-5 text-text-muted">
                    {industry.clients}
                  </p>
                ) : null}
                <span className="mt-auto pt-8 font-body text-sm font-medium text-accent opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                  → View work
                </span>
              </Link>
            ))}
          </div>
        </div>

        <SectionDivider />
      </section>

      <section id="work" className="bg-bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
              Proof, Not Promises<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-[500px] font-body text-base leading-7 text-text-secondary">
              These are real products we designed, built, and shipped for teams with
              serious business needs, not mockups or speculative concepts.
            </p>
          </div>

          <div className="mt-16">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={study.name}
                  className="border-b border-border-subtle py-14 first:pt-0 last:border-b-0 md:py-20"
                >
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-[52fr_48fr] md:gap-12 lg:gap-16">
                    <motion.div
                      className={`order-1 flex flex-col items-start ${
                        isEven ? 'md:order-2' : 'md:order-1'
                      }`}
                      {...(enabled
                        ? {
                            initial: { opacity: 0, y: 24 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true, amount: 0.28 },
                            transition: { duration: 0.5, ease: 'easeOut' },
                          }
                        : {})}
                    >
                      <span className="badge badge-accent">{study.badge}</span>
                      <h3 className="mt-6 font-display text-display-md font-extrabold text-text-primary">
                        {study.name}
                      </h3>
                      <p className="mt-4 max-w-[620px] font-body text-[17px] leading-7 text-text-secondary">
                        {study.description}
                      </p>

                      <div className="mt-10">
                        <p className="font-display text-display-lg font-extrabold text-accent">
                          {study.metric}
                        </p>
                        <p className="mt-2 font-mono text-label uppercase text-text-muted">
                          {study.metricLabel}
                        </p>
                      </div>

                      <p className="mt-8 max-w-[650px] font-body text-base leading-8 text-text-secondary">
                        {study.story}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {study.badges.map((badge) => (
                          <span key={badge} className="badge">
                            {badge}
                          </span>
                        ))}
                      </div>

                      <Link href={study.linkHref} className="link-accent mt-9 inline-flex">
                        {study.linkLabel}
                      </Link>
                    </motion.div>

                    <motion.div
                      className={`order-2 ${
                        isEven ? 'md:order-1' : 'md:order-2'
                      }`}
                      {...(enabled
                        ? {
                            initial: { opacity: 0, y: 24 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true, amount: 0.28 },
                            transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' },
                          }
                        : {})}
                    >
                      <div className="h-full border border-border-default bg-bg-surface transition-colors duration-200 ease-in-out hover:border-accent">
                        <CaseStudyVisual type={study.visual} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-16 text-center md:pt-20">
            <p className="font-display text-display-sm font-bold text-text-primary">
              Have a project in mind?
            </p>
            <Link href="#contact" className="link-accent mt-5 inline-flex">
              Start a Conversation →
            </Link>
          </div>
        </div>

        <SectionDivider />
      </section>

      <section id="process" className="bg-bg-ink text-text-inverse">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-inverse">
              How We Work
            </h2>
            <p className="mt-5 max-w-[560px] font-body text-base leading-7 text-[#9BAEAE]">
              We run a transparent, sprint-based process so you always know what is being built,
              why it matters, and where the work stands with no black box development.
            </p>
          </div>

          <div ref={processTimelineRef} className="relative mt-16 md:mt-20">
            <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-[2px] bg-white/10 lg:left-1/2" />
            {enabled ? (
              <motion.div
                aria-hidden="true"
                className="absolute bottom-0 left-[7px] top-0 z-10 w-[3px] origin-top -translate-x-px bg-accent lg:left-1/2"
                style={{ scaleY: processSpineScaleY }}
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[7px] top-0 z-10 w-[3px] -translate-x-px bg-accent lg:left-1/2"
              />
            )}

            <div className="space-y-12 md:space-y-16">
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className="relative grid grid-cols-[28px_1fr] items-start lg:grid-cols-[1fr_56px_1fr]"
                  >
                    <motion.div
                      className={`col-start-2 w-full border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.055] sm:p-8 lg:w-[88%] ${
                        isLeft
                          ? 'lg:col-start-1 lg:justify-self-start'
                          : 'lg:col-start-3 lg:justify-self-end'
                      }`}
                      {...(enabled
                        ? {
                            initial: { opacity: 0, x: isLeft ? -20 : 20 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: true, amount: 0.32 },
                            transition: { duration: 0.45, ease: 'easeOut' },
                          }
                        : {})}
                    >
                      <p className="font-mono text-label uppercase text-accent">
                        {step.number}
                      </p>
                      <h3 className="mt-3 font-display text-display-sm font-bold text-text-inverse">
                        {step.name}
                      </h3>
                      <p className="mt-4 font-body text-[15px] leading-7 text-[#9BAEAE]">
                        {step.description}
                      </p>
                      <p className="mt-5 border-t border-white/10 pt-5 font-mono text-[10px] uppercase leading-5 text-[#718686]">
                        {step.callout}
                      </p>
                    </motion.div>

                    <div
                      aria-hidden="true"
                      className={`absolute left-0 top-8 flex h-[14px] w-[28px] items-center lg:left-1/2 lg:w-[calc(6%+32px)] ${
                        isLeft
                          ? 'lg:-translate-x-full lg:justify-end'
                          : 'lg:translate-x-px lg:justify-start'
                      }`}
                    >
                      <span className="h-[2px] flex-1 bg-white/20" />
                    </div>
                    <span aria-hidden="true" className="absolute left-[8px] top-8 z-20 h-[14px] w-[14px] -translate-x-1/2 border-[3px] border-bg-ink bg-accent lg:left-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-xl text-center md:mt-20">
            <p className="font-body text-[15px] leading-7 text-[#9BAEAE]">
              Every engagement starts with a free discovery call. No pitch. No pressure.
            </p>
            <Link href="#contact" className="mt-6 inline-flex min-h-[52px] items-center bg-accent px-6 font-display text-sm font-bold text-bg-ink transition-colors hover:bg-[#69D0D3]">
              Book a free call →
            </Link>
          </div>
        </div>

        <div aria-hidden="true" className="h-px bg-white/10" />
      </section>

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
            {...(enabled ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } : {})}
          >
            <div className="border-b border-border-default lg:border-b-0 lg:border-r">
              <p className="px-5 pb-3 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted sm:px-7">Choose a perspective</p>
              <div className="pb-4">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeTestimonialIndex;
                  return (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => setActiveTestimonialIndex(index)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group flex w-full items-center justify-between gap-5 border-l-[3px] px-5 py-4 text-left transition-[border-color,background-color] duration-300 sm:px-7 ${isActive ? 'border-accent bg-bg-surface' : 'border-transparent hover:border-border-strong hover:bg-white/50'}`}
                    >
                      <span><span className="block font-display text-sm font-semibold text-text-primary">{testimonial.name}</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.08em] text-text-muted">{testimonial.badge} · {testimonial.location}</span></span>
                      <span className={`font-mono text-[10px] transition-colors ${isActive ? 'text-accent-dark' : 'text-text-muted'}`}>0{index + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative flex min-h-[500px] overflow-hidden bg-bg-surface p-7 sm:p-10 lg:min-h-[540px] lg:p-14">
              <span aria-hidden="true" className="absolute right-6 top-0 font-display text-[180px] font-bold leading-none text-accent/[0.09] sm:right-10 sm:text-[240px]">“</span>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={activeTestimonial.name}
                  className="relative z-10 flex w-full flex-col justify-between"
                  {...(enabled ? { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } } : {})}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-dark">In their words</p>
                    <blockquote className="mt-8 max-w-[790px] font-display text-[clamp(24px,3.1vw,42px)] font-medium leading-[1.38] tracking-[-0.015em] text-text-primary">
                      “{activeTestimonial.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-12 flex flex-col gap-5 border-t border-border-subtle pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <div><p className="font-body text-base font-semibold text-text-primary">{activeTestimonial.name}</p><p className="mt-1 text-sm text-text-secondary">{activeTestimonial.role}, {activeTestimonial.location}</p></div>
                    <Badge variant="accent">{activeTestimonial.badge}</Badge>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        <SectionDivider />
      </section>

      <section id="blog" className="bg-bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <SectionLabel>Insights</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">
            From the Blog
          </h2>

          <div className="mt-14 grid grid-cols-1 border-y border-border-default lg:grid-cols-[56fr_44fr]">
            <motion.div
              className="border-b border-border-default lg:border-b-0 lg:border-r"
              {...(enabled
                ? {
                    initial: { opacity: 0, y: 22 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: { duration: 0.5, ease: 'easeOut' },
                  }
                : {})}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group flex min-h-[420px] flex-col p-7 transition-colors duration-150 hover:bg-bg-surface sm:p-10 lg:min-h-[520px] lg:p-12"
              >
                <span className="badge badge-accent self-start">{featuredPost.category}</span>
                <h3 className="mt-8 line-clamp-2 max-w-[680px] font-display text-display-md font-bold text-text-primary transition-colors duration-150 group-hover:text-accent">
                  {featuredPost.title}
                </h3>
                <p className="mt-5 line-clamp-3 max-w-[620px] font-body text-base leading-7 text-text-secondary">
                  {featuredPost.description}
                </p>
                <div className="mt-auto flex flex-col gap-5 pt-12 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-mono text-label uppercase text-text-muted">
                    {formatPostDate(featuredPost.publishedAt)} / {featuredPost.readTime}
                  </span>
                  <span className="link-accent self-start font-body text-sm sm:self-auto">
                    Read article →
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              {...(enabled
                ? {
                    initial: { opacity: 0, y: 22 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: { duration: 0.5, delay: 0.12, ease: 'easeOut' },
                  }
                : {})}
            >
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
            <Link href="/blog" className="link-accent font-mono text-xs uppercase">
              View all articles →
            </Link>
          </div>
        </div>

        <SectionDivider />
      </section>

      <motion.section
        className="border-y border-accent/30 bg-accent-muted"
        {...(enabled ? { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.45 }, transition: { duration: 0.45 } } : {})}
      >
        <div className="mx-auto flex min-h-[140px] w-full max-w-7xl flex-col justify-center gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div><h2 className="font-display text-display-sm font-bold text-text-primary">Ready to build something<br className="hidden sm:block" /> that earns trust?</h2><p className="mt-2 text-[15px] text-text-secondary">Most projects start with a single honest conversation.</p></div>
          <div className="flex flex-wrap gap-3 md:justify-end"><Link href="#contact" className="btn-primary">Book a Free Call</Link><Link href="#work" className="btn-ghost">See Our Work</Link></div>
        </div>
      </motion.section>

      <section id="contact" className="bg-bg-base">
        <div className="mx-auto w-full max-w-7xl px-5 py-section-md sm:px-8 lg:px-10">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-5 font-display text-display-lg font-extrabold text-text-primary">Tell Us About Your Project<span className="text-accent">.</span></h2>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2">
            <motion.div className="border-b border-border-default pb-12 lg:border-b-0 lg:border-r lg:pr-14" {...(enabled ? { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .45 } } : {})}>
              <p className="max-w-[400px] text-base leading-7 text-text-secondary">The agency takes on a focused number of projects at a time to ensure every client gets full team attention. If the project is a fit, both sides will know within one conversation.</p>
              <div className="mt-9 space-y-4">{['Response within 24 hours', 'Free 30-minute discovery call', 'No commitment until proposal is signed'].map((item) => <div key={item} className="flex items-center gap-3 font-mono text-sm text-text-secondary"><TealDot />{item}</div>)}</div>
              <div className="mt-10 h-px w-[60px] bg-border-default" />
              <div className="mt-10"><SectionLabel>Direct Email</SectionLabel><div className="mt-3 flex flex-wrap items-center gap-3"><a href="mailto:hello@cwnsolutions.com" className="font-display text-display-sm font-bold text-accent">hello@cwnsolutions.com</a><button type="button" onClick={copyEmail} aria-label="Copy email address" className={`p-1 ${copied ? 'text-accent' : 'text-text-muted'}`}>{copied ? <Check size={18} /> : <Copy size={18} />}</button></div></div>
              <div className="mt-9"><SectionLabel>Response Time</SectionLabel><p className="mt-3 text-text-secondary">Within 24 hours on business days. UAE, EU, and ANZ timezones covered.</p></div>
              <div className="mt-9"><SectionLabel>Markets We Serve</SectionLabel><div className="mt-4 flex flex-wrap gap-2">{['UAE', 'Saudi Arabia', 'Germany', 'Sweden', 'Norway', 'Australia', 'Singapore'].map((market) => <Badge key={market}>{market}</Badge>)}</div></div>
            </motion.div>
            <motion.div className="pt-12 lg:pl-14 lg:pt-0" {...(enabled ? { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .45, delay: .1 } } : {})}>
              {isSubmitted ? <motion.div className="flex min-h-[470px] flex-col items-center justify-center text-center" initial={enabled ? { opacity: 0 } : false} animate={{ opacity: 1 }}><TealDot className="h-3 w-3" /><h3 className="mt-5 font-display text-display-sm font-bold">Message received.</h3><p className="mt-3 max-w-sm text-text-secondary">The team will be in touch within 24 hours. Check your inbox.</p><Link href="/" className="link-accent mt-7">← Back to homepage</Link></motion.div> : <div className="space-y-5">
                {([['name', 'Full Name', 'text'], ['email', 'Email Address', 'email'], ['company', 'Company or Product Name', 'text']] as const).map(([name, label, type]) => <div key={name}><label className="section-label" htmlFor={name}>{label}</label><input id={name} type={type} value={form[name] || ''} onChange={(event) => updateField(name, event.target.value)} className={`mt-2 w-full border bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted ${errors[name] ? 'border-accent' : 'border-border-default'}`} />{errors[name] && <p className="mt-1 font-mono text-[11px] text-accent-dark">{errors[name]}</p>}</div>)}
                <div><label className="section-label" htmlFor="project">What are you building?</label><textarea id="project" rows={5} value={form.project || ''} onChange={(event) => updateField('project', event.target.value)} className={`mt-2 w-full resize-y border bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted ${errors.project ? 'border-accent' : 'border-border-default'}`} />{errors.project && <p className="mt-1 font-mono text-[11px] text-accent-dark">{errors.project}</p>}</div>
                {([['industry', 'Industry', ['FinTech', 'LegalTech', 'HealthTech', 'Enterprise AI', 'Hospitality Tech', 'E-commerce', 'Other']], ['budget', 'Budget Range', ['Under $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000 – $100,000', '$100,000+', 'Not sure yet']]] as const).map(([name, label, options]) => <div key={name}><label className="section-label" htmlFor={name}>{label}</label><select id={name} value={form[name] || ''} onChange={(event) => updateField(name, event.target.value)} className="mt-2 w-full border border-border-default bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted"><option value="">Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select></div>)}
                <div><label className="section-label" htmlFor="referral">How did you hear about us?</label><input id="referral" type="text" value={form.referral || ''} onChange={(event) => updateField('referral', event.target.value)} className="mt-2 w-full border border-border-default bg-bg-surface px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent focus:bg-accent-muted" /></div>
                <button type="button" disabled={isSending} onClick={submitContact} className="btn-primary mt-2 h-14 w-full justify-center font-display text-base font-bold disabled:cursor-not-allowed disabled:opacity-70">{isSending ? 'Sending...' : 'Send Message →'}</button>
              </div>}
            </motion.div>
          </div>
        </div>
        <SectionDivider />
      </section>

      <section className="bg-bg-base"><div className="mx-auto w-full max-w-7xl px-5 py-section-sm sm:px-8 lg:px-10"><SectionLabel>FAQ</SectionLabel><h2 className="mt-5 font-display text-display-md font-bold text-text-primary">Common Questions</h2><div className="mt-10 border-t border-border-subtle">{faqs.map(([question, answer], index) => { const open = openFaq === index; return <div key={question} className="border-b border-border-subtle"><button type="button" onClick={() => setOpenFaq(open ? null : index)} aria-expanded={open} className="flex w-full items-center justify-between gap-6 py-5 text-left font-body text-base font-medium text-text-primary"><span>{question}</span><ChevronDown className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} size={20} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="max-w-[720px] pb-6 text-base leading-[1.7] text-text-secondary">{answer}{index === 4 && <> <Link href="/blog/saas-in-house-vs-agency-cost" className="link-accent">Read the full comparison.</Link></>}</p></div></div></div>; })}</div></div></section>
    </main>
  );
}
