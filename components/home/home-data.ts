export const trustSignals = [
  "2 Products in Production",
  "FinTech & LegalTech",
  "UAE / EU / ANZ",
];

export const tickerItems = [
  "2 Live SaaS Products in Production",
  "Zero-Knowledge Encryption Implemented",
  "Enterprise AI Tooling Delivered",
  "FinTech, LegalTech & Hospitality Portfolio",
  "International Clients — UAE · EU · ANZ",
  "Security-First Architecture on Every Build",
];

export const positioningFacts = [
  "FinTech, LegalTech, HealthTech & Hospitality focused",
  "Full product teams — not freelancers",
  "Built for founders and operators at every stage",
];

export const services = [
  {
    name: "SaaS Product Development",
    summary:
      "We turn trust-critical SaaS ideas into polished products customers can rely on.",
    detail:
      "For founders building in regulated or sensitive markets, we shape the product, build the core experience, and prepare it for real users. You get a focused team that understands onboarding, payments, permissions, reporting, and the confidence buyers need before they say yes.",
    badges: ["Product strategy", "UX flows", "Next.js", "Secure launch"],
    work: "SafeHerit",
  },
  {
    name: "MVP for Funded Startups",
    summary:
      "We help funded teams move from pitch deck promise to a working first release.",
    detail:
      "This is for founders who need momentum without burning months on false starts. We define the smallest credible product, build the parts investors and customers need to see, and leave you with a foundation that can grow after launch.",
    badges: ["MVP scope", "Design systems", "Launch plan", "Analytics"],
    work: "SafeHerit",
  },
  {
    name: "Enterprise AI Integration",
    summary:
      "We bring AI into real business workflows where accuracy and trust matter.",
    detail:
      "For operators who want more than a demo, we connect AI to the information, approvals, and daily tasks your teams already use. The result is practical tooling that saves time, protects context, and keeps people in control.",
    badges: ["LLM workflows", "Knowledge tools", "Human review", "Auxee AI"],
    work: "Auxee AI",
  },
  {
    name: "Hospitality Digital Transformation",
    summary:
      "We modernize hospitality operations across booking, guest experience, and property systems.",
    detail:
      "For hotels, travel platforms, and hospitality operators, we build digital tools that make every guest interaction smoother. From booking flows to internal dashboards, we focus on reliable systems that staff can use and guests can trust.",
    badges: [
      "Booking flows",
      "Guest portals",
      "Operations tools",
      "Integrations",
    ],
    work: "Avian Hospitality and Sabre Corporation",
  },
  {
    name: "E-commerce Platforms",
    summary:
      "We build commerce experiences that make buying feel simple, fast, and dependable.",
    detail:
      "For brands and operators with custom selling needs, we create storefronts, checkout journeys, and back-office tools that match how the business actually works. The focus is fewer drop-offs, clearer operations, and a platform ready for growth.",
    badges: ["Storefronts", "Checkout", "Catalogs", "Conversion"],
    work: "Selected commerce builds",
  },
  {
    name: "Security & Compliance Architecture",
    summary:
      "We design product foundations for teams that cannot afford trust gaps.",
    detail:
      "For founders and operators handling sensitive data, we map the controls your product needs before risk becomes expensive. We help with access, audit trails, data protection, and compliance-ready product decisions from the start.",
    badges: [
      "Audit logs",
      "Access control",
      "Data protection",
      "Compliance-ready",
    ],
    work: "SafeHerit",
  },
] as const;

export type Industry = {
  monogram: string;
  name: string;
  description: string;
  clients?: string;
};

export const industries: readonly Industry[] = [
  {
    monogram: "FT",
    name: "FinTech",
    description: "Digital banking, wallets, financial planning tools",
  },
  {
    monogram: "LT",
    name: "LegalTech",
    description: "Compliance platforms, document systems, estate tech",
  },
  {
    monogram: "HT",
    name: "HealthTech",
    description: "Patient portals, HIPAA-compliant data platforms",
  },
  {
    monogram: "AI",
    name: "Enterprise AI",
    description: "Internal AI assistants, LLM integrations, knowledge tools",
  },
  {
    monogram: "HO",
    name: "Hospitality",
    description:
      "Booking platforms, guest experience tech, property management systems",
    clients: "Avian Hospitality · Sabre Corporation",
  },
  {
    monogram: "EC",
    name: "E-commerce",
    description:
      "Custom storefronts, headless commerce, conversion-first builds",
  },
] as const;

export const caseStudies = [
  {
    badge: "LegalTech / FinTech",
    name: "SafeHerit",
    description:
      "A zero-knowledge encrypted estate planning vault for individuals and families.",
    metric: "100%",
    metricLabel: "security audit pass rate",
    story:
      "SafeHerit needed to handle some of the most sensitive personal and financial data imaginable: inheritance plans, asset records, and beneficiary instructions. The agency built a private vault where even the platform itself cannot read user data. Families can now store and pass on their most important documents with complete confidence.",
    badges: ["encryption", "access control", "estate planning"],
    linkLabel: "Visit safeherit.com →",
    linkHref: "https://safeherit.com",
    visual: "vault",
  },
  {
    badge: "Enterprise AI",
    name: "Auxee AI",
    description:
      "A secure internal AI assistant for enterprise teams, built for organizations that cannot send data to public AI tools.",
    metric: "Enterprise-Grade",
    metricLabel: "AI without the data risk",
    story:
      "Large organizations wanted the productivity benefits of AI assistants but couldn't risk sensitive internal data leaking into public language model training. Auxee AI gives teams a private, secure AI layer that stays entirely within their environment. Built for and deployed via PreScouter, whose clients include Fortune 500 companies.",
    badges: ["enterprise AI", "data privacy", "LLM integration"],
    linkLabel: "Visit auxee.com →",
    linkHref: "https://auxee.com",
    visual: "chat",
  },
  {
    badge: "Hospitality Tech",
    name: "Avian Hospitality",
    description:
      "A digital transformation for a hospitality operator managing guest experience across multiple properties.",
    metric: "Multi-Property",
    metricLabel: "unified digital operations",
    story:
      "Avian Hospitality was managing guest experiences across multiple properties with disconnected tools and manual processes. The agency built a unified digital platform that connects booking, guest communication, and property management in one place, giving operators full visibility and guests a seamless experience.",
    badges: ["property management", "booking systems", "guest experience"],
    linkLabel: "Read the full case study →",
    linkHref: "#work",
    visual: "property",
  },
  {
    badge: "Hospitality Tech / Enterprise",
    name: "Sabre Corporation",
    description:
      "Enterprise-level digital solutions for one of the world's leading travel technology companies.",
    metric: "Enterprise",
    metricLabel: "travel tech at global scale",
    story:
      "Sabre Corporation operates at the intersection of travel, hospitality, and enterprise software, serving airlines, hotels, and travel agencies worldwide. The agency contributed to building and refining digital solutions that operate at this scale, where reliability and precision are non-negotiable.",
    badges: ["enterprise software", "travel tech", "global scale"],
    linkLabel: "Read the full case study →",
    linkHref: "#work",
    visual: "travel",
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];

export const processSteps = [
  {
    number: "Step 01",
    name: "Discovery Call",
    description:
      "Before anything is scoped or priced, we get on a call to understand the problem, the people you serve, and what success should look like. There is no sales pitch, just honest questions and a clear conversation. If the project is not a good fit, we will say so.",
    callout: "Free · 30 minutes · No commitment",
  },
  {
    number: "Step 02",
    name: "Technical Scoping",
    description:
      "We map out what needs to be built, the important decisions ahead, the privacy needs, and anything the product depends on. This is where hidden complexity gets brought into the open early. You leave with a clear picture of what you are actually building.",
    callout: "Delivered as a written scope document",
  },
  {
    number: "Step 03",
    name: "Proposal & Alignment",
    description:
      "You receive a fixed-scope proposal with clear deliverables, a realistic timeline, and transparent pricing. Nothing is hidden in small print. You can review, ask questions, and request changes before work begins.",
    callout: "Fixed scope · No surprise invoices",
  },
  {
    number: "Step 04",
    name: "Sprint-Based Build",
    description:
      "The product is built in two-week cycles. At the end of each cycle, you see a live demo of working software, not slides or vague status updates. Your feedback shapes the next cycle, so you always know what is being built and why.",
    callout: "Demo every two weeks · Always working software",
  },
  {
    number: "Step 05",
    name: "Security Review",
    description:
      "Before launch, the product goes through a careful internal review. We check who can access what, how data is handled, how sign-in works, and whether sensitive information is protected properly. This is included in every engagement.",
    callout: "Internal audit · Every product · Every time",
  },
  {
    number: "Step 06",
    name: "Handoff & Support",
    description:
      "When the product is ready, you receive documentation, a clean codebase handoff, and a knowledge transfer session. We stay available for 30 days after launch to help with anything that comes up. The goal is for you to feel fully in control of what was built.",
    callout: "Full docs · Code handoff · 30-day support",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They didn't just build what we asked for. Before writing a single line of code they challenged our assumptions, asked the questions we hadn't thought to ask, and helped us realize we were about to build the wrong thing. That conversation saved us months and a significant amount of runway.",
    name: "Alex M.",
    role: "Founder, FinTech Startup",
    location: "UAE",
    badge: "FinTech",
  },
  {
    quote:
      "Working with an agency that had already shipped a LegalTech product changed everything. They understood our compliance concerns before we finished explaining them. We didn't have to educate our own development team - they arrived knowing the landscape.",
    name: "Sarah K.",
    role: "CEO, LegalTech Platform",
    location: "Australia",
    badge: "LegalTech",
  },
  {
    quote:
      "We had a runway problem and needed to move fast without cutting corners on security. Their sprint structure meant we saw working software every two weeks. No black box. No surprises. Just consistent delivery.",
    name: "Jonas B.",
    role: "Co-founder, SaaS Startup",
    location: "Sweden",
    badge: "SaaS",
  },
  {
    quote:
      "The hospitality industry has very specific operational needs that most agencies don't understand. This team took the time to learn our business before proposing anything. The platform they built actually reflects how our properties operate.",
    name: "Operations Director",
    role: "Avian Hospitality",
    location: "UAE",
    badge: "Hospitality",
  },
  {
    quote:
      "Security was our primary concern from day one. Our enterprise clients would not have accepted anything less than a rigorously audited system. The team treated security as a first principle, not an afterthought. That approach gave our customers the confidence to adopt the platform.",
    name: "Product Lead",
    role: "Enterprise AI Client",
    location: "Europe",
    badge: "Enterprise AI",
  },
] as const;

export const faqs = [
  [
    "What does the agency specialize in?",
    "CWN Solutions builds security-first SaaS products for funded founders and operators. Our work spans FinTech, LegalTech, HealthTech, Hospitality, Enterprise AI, and E-commerce—industries where trust, privacy, and reliable operations matter.",
  ],
  [
    "Which markets and countries do you work with?",
    "We work with clients in the UAE, Saudi Arabia, Germany, Switzerland, Sweden, Norway, Denmark, Australia, and Singapore. These are ambitious, English-speaking startup ecosystems that are often underserved by large Western agencies.",
  ],
  [
    "How much does it cost to build a SaaS product?",
    "Costs range from focused MVPs to larger full-product engagements, depending on scope, integrations, and security needs. The budget ranges in our contact form are a useful starting point; every project begins with a free scoping call to establish realistic costs.",
  ],
  [
    "How long does it take to build an MVP?",
    "A focused MVP commonly takes 8–16 weeks from discovery to a first working release. More complex products take longer. We work in two-week sprints and demo progress after each one, so there are no long black-box periods.",
  ],
  [
    "Why should a funded startup work with an agency instead of hiring in-house developers?",
    "An agency can start faster and gives you a full product team without the salary, benefits, equity, recruiting time, and management overhead of several hires. Read our guide on the in-house versus agency cost decision in the blog.",
  ],
  [
    "What makes this agency different from other software development agencies?",
    "Security is a first principle in our work, not an afterthought. We have shipped live products including SafeHerit and Auxee AI, understand trust-critical industries, focus on international markets, and make delivery visible through a transparent sprint process.",
  ],
  [
    "Do you work with non-technical founders?",
    "Yes. Many of our clients are non-technical founders and operators. We handle technical decisions while communicating in clear business language, beginning with a practical, no-jargon discovery conversation.",
  ],
  [
    "How do I get started?",
    "Book a free 30-minute discovery call or complete the contact form above. There is no commitment at this stage, and the team responds within 24 hours on business days.",
  ],
] as const;
