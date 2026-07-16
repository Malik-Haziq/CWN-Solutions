import type { RelatedContentItem } from "@/components/content";

export type ProjectMediaSlot = {
  src?: string;
  alt: string;
  label: string;
};

export type CaseStudyProofPoint = {
  value: string;
  label: string;
  detail: string;
  source?: string;
};

export type CaseStudyResults =
  | {
      type: "quantitative";
      introduction: string;
      proofPoints: CaseStudyProofPoint[];
    }
  | {
      type: "qualitative";
      introduction: string;
      outcomes: string[];
    };

export type CaseStudy = {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  client: string;
  outcome: string;
  industry: string;
  description: string;
  media: {
    hero: ProjectMediaSlot;
    solution: ProjectMediaSlot;
    results?: ProjectMediaSlot;
  };
  challenge: {
    title: string;
    paragraphs: string[];
  };
  solution: {
    title: string;
    introduction: string;
    details: { title: string; description: string }[];
  };
  trust: {
    title: string;
    introduction: string;
    decisions: { title: string; description: string }[];
  };
  results: CaseStudyResults;
  related: {
    services: RelatedContentItem[];
    industries: RelatedContentItem[];
  };
  cta?: {
    title?: string;
    description?: string;
    action?: string;
  };
};

/**
 * Real client stories belong here once their content and proof points have
 * been approved. This collection is deliberately empty: the case-study
 * system must never publish invented projects or metrics to fill the layout.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "safeherit",
    publishedAt: "2026-07-16",
    client: "SafeHerit",
    outcome:
      "Made private estate planning possible without giving the platform readable access to the documents it stores.",
    industry: "LegalTech / FinTech",
    description:
      "A zero-knowledge encrypted vault for inheritance plans, financial records, beneficiary instructions, and the documents families may need in the future.",
    media: {
      hero: {
        label: "Hero banner — encrypted estate planning vault",
        alt: "SafeHerit encrypted estate planning vault dashboard interface",
      },
      solution: {
        label: "Product screenshot — protected document vault",
        alt: "SafeHerit protected document vault and estate planning workflow",
      },
      results: {
        label: "Product detail — access and handover journey",
        alt: "SafeHerit beneficiary access and document handover interface",
      },
    },
    challenge: {
      title:
        "An estate vault cannot ask families to trust the operator with their most private documents.",
      paragraphs: [
        "SafeHerit was built for information with unusually lasting consequences: inheritance plans, asset records, beneficiary instructions, and private end-of-life documents. A conventional document platform could encrypt that material in storage while still retaining a route for the operator to read it. For this product, that would leave the central promise incomplete.",
        "The challenge was not simply to secure file uploads. SafeHerit needed to support an understandable planning and future-handover journey while reducing the platform's own access to protected content. Privacy, access, recovery, document handling, and usability had to be designed as one product problem.",
      ],
    },
    solution: {
      title:
        "A useful estate-planning product built around operator blindness.",
      introduction:
        "We built the vault around a zero-knowledge model: protected content is encrypted in a way that lets the platform store and move it through the intended workflow without holding what it needs to turn that content back into readable documents.",
      details: [
        {
          title: "A vault shaped around the planning journey",
          description:
            "The product organizes sensitive records and instructions around the real work of preparing an estate, rather than presenting families with a generic file store and expecting them to create the structure themselves.",
        },
        {
          title: "Zero knowledge in plain terms",
          description:
            "SafeHerit is like a vault provider that can protect and deliver a locked box without keeping a copy of the key. The service can operate the product, but protected customer content is not ordinary readable application data available to the operator.",
        },
        {
          title: "Access and handover designed together",
          description:
            "The people, documents, and future access journey were treated as parts of the same system. That kept the privacy architecture connected to why families use the product in the first place.",
        },
      ],
    },
    trust: {
      title: "We removed a category of trust instead of adding another policy.",
      introduction:
        "A commodity build might encrypt the database and call the documents private. SafeHerit's promise required a stronger question: should the platform operator be technically capable of reading protected content at all?",
      decisions: [
        {
          title: "The platform is not the reader",
          description:
            "The zero-knowledge boundary means privacy does not depend only on staff promises or an application permission. The product is designed so protected content is not available as readable operator data.",
        },
        {
          title: "Recovery could not quietly undo the promise",
          description:
            "Access and recovery were treated as architecture decisions because a universal operator shortcut would recreate the very exposure the zero-knowledge model was meant to remove.",
        },
        {
          title: "The security model had to remain usable",
          description:
            "A private vault that families cannot understand or use at the critical moment has failed differently. Product language and the handover journey had to support the same trust claim as the encryption model.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "The finished product turns a demanding privacy promise into a usable estate-planning capability for families.",
      outcomes: [
        "Families can organize highly sensitive estate and financial material inside a purpose-built planning journey.",
        "Protected documents can remain outside the platform operator's readable application data while the service still supports storage and future handover.",
        "SafeHerit's privacy claim is expressed in the product architecture, not left as a policy statement attached to conventional storage.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "Security Architecture",
          description:
            "Data boundaries, encryption, access, and recovery designed as part of the product promise.",
          href: "/security-architecture",
        },
        {
          label: "Service",
          title: "SaaS Product Development",
          description:
            "End-to-end delivery for a trust-critical customer workflow and the system behind it.",
          href: "/saas-product-development",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "LegalTech",
          description:
            "Confidential documents, future authority, and defensible access decisions.",
          href: "/legaltech",
        },
        {
          label: "Industry",
          title: "FinTech",
          description:
            "Financial records and sensitive identity handled with constrained operator access.",
          href: "/fintech",
        },
      ],
    },
  },
  {
    slug: "auxee-ai",
    publishedAt: "2026-07-16",
    client: "Auxee AI",
    outcome:
      "Brought AI into enterprise research without treating confidential knowledge as public input.",
    industry: "Enterprise AI",
    description:
      "A secure enterprise assistant built for and deployed via PreScouter, whose research work serves Fortune 500 organizations.",
    media: {
      hero: {
        label: "Hero banner — private enterprise AI assistant",
        alt: "Auxee AI secure enterprise research assistant interface",
      },
      solution: {
        label: "Product screenshot — enterprise research workspace",
        alt: "Auxee AI private research workspace with enterprise knowledge context",
      },
      results: {
        label: "Product detail — controlled AI response view",
        alt: "Auxee AI controlled enterprise research response interface",
      },
    },
    challenge: {
      title:
        "Enterprise researchers needed AI utility without losing control of the knowledge that makes their work valuable.",
      paragraphs: [
        "PreScouter works in an enterprise research context serving organizations that include Fortune 500 companies. The material around that work cannot be approached like a casual prompt sent to an uncontrolled consumer AI tool. Internal context, client-sensitive knowledge, and the resulting outputs all carry trust requirements.",
        "The challenge was therefore larger than building a chatbot. The assistant needed a practical employee experience and a controlled path between enterprise knowledge and the language model, with data boundaries strong enough to support serious organizational use.",
      ],
    },
    solution: {
      title: "A private AI layer built around the research workflow.",
      introduction:
        "We built Auxee AI as an enterprise assistant for working with organizational knowledge inside a controlled product experience. The model is one part of the system; the surrounding data boundaries and workflow are what make it usable in this context.",
      details: [
        {
          title: "A focused research interaction",
          description:
            "The assistant gives teams a direct way to work with enterprise context without asking them to move sensitive material into public consumer tooling or invent their own unsafe workarounds.",
        },
        {
          title: "Knowledge enters through a controlled path",
          description:
            "The system treats internal context as governed product data, not free-form content that can be copied anywhere. That makes the boundary around the model part of the product design.",
        },
        {
          title: "The enterprise layer around the model",
          description:
            "Identity, private context, model access, and production operation were considered together so the assistant could fit an enterprise environment rather than stop at a convincing demonstration.",
        },
      ],
    },
    trust: {
      title: "The hard part was controlling the system around the model.",
      introduction:
        "A commodity AI build can produce an impressive answer while leaving the organization unable to explain where sensitive context travels or how it is controlled. Auxee AI was shaped around those questions from the start.",
      decisions: [
        {
          title: "Private knowledge was not treated as public prompt material",
          description:
            "The product provides a deliberate enterprise path for internal context instead of normalizing copy-and-paste use of uncontrolled public AI tools.",
        },
        {
          title: "Useful context and data control had to coexist",
          description:
            "The assistant needed enough organizational context to help researchers while preserving the boundary expected by companies with serious confidentiality requirements.",
        },
        {
          title: "Deployment context was part of the product",
          description:
            "Built for and deployed via PreScouter, Auxee AI had to make sense inside real enterprise research work—not only in an isolated model demo.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "Auxee AI demonstrates what changes when enterprise context, model access, and the employee workflow are treated as one controlled product.",
      outcomes: [
        "Research teams gained a dedicated assistant for working with enterprise knowledge without defaulting to public consumer AI tools.",
        "The product joins a usable employee workflow to explicit boundaries around private organizational context.",
        "PreScouter gained an enterprise AI system designed for production use rather than a disconnected chatbot demonstration.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "Enterprise AI Integration",
          description:
            "Private knowledge, model access, and human workflows assembled into a controlled system.",
          href: "/enterprise-ai-integration",
        },
        {
          label: "Service",
          title: "API & Backend Systems",
          description:
            "The identity, context, and operational layer behind dependable AI workflows.",
          href: "/api-and-backend-systems",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "Enterprise AI",
          description:
            "AI systems where private knowledge and accountable operation matter as much as the model.",
          href: "/enterprise-ai",
        },
      ],
    },
  },
  {
    slug: "avian-hospitality",
    publishedAt: "2026-07-16",
    client: "Avian Hospitality",
    outcome:
      "Connected booking, guest communication, and property operations in one clearer digital experience.",
    industry: "Hospitality Tech",
    description:
      "A hospitality digital transformation spanning multiple properties, guest touchpoints, booking information, and the operational view behind the stay.",
    media: {
      hero: {
        label: "Hero banner — connected hospitality platform",
        alt: "Avian Hospitality multi-property digital platform overview",
      },
      solution: {
        label: "Product screenshot — booking and property dashboard",
        alt: "Avian Hospitality booking and property operations dashboard",
      },
      results: {
        label: "Product detail — connected guest journey",
        alt: "Avian Hospitality connected booking and guest communication view",
      },
    },
    challenge: {
      title:
        "A guest experiences one stay, even when the operator is working across disconnected systems.",
      paragraphs: [
        "Avian Hospitality was coordinating guest experiences across multiple properties while booking, communication, and property work depended on disconnected tools and manual processes. That fragmentation made it harder for operators to hold one dependable view of the stay.",
        "The specific challenge was to connect the information and workflows that shape a guest's journey without making sensitive guest data broadly visible or allowing booking truth to become inconsistent between touchpoints.",
      ],
    },
    solution: {
      title: "A unified digital layer for both sides of the stay.",
      introduction:
        "We built a platform connecting booking, guest communication, and property management into a clearer operational view, while keeping the customer-facing journey connected to the work happening behind it.",
      details: [
        {
          title: "Booking information in context",
          description:
            "The platform brings the reservation into the wider guest journey so the information used by guests and operators is not treated as a series of unrelated interactions.",
        },
        {
          title: "Guest communication connected to operations",
          description:
            "Communication is part of the stay rather than a separate channel. The product connects guest touchpoints to the property context staff need to respond consistently.",
        },
        {
          title: "A multi-property operational view",
          description:
            "The internal experience gives operators clearer visibility across properties and workflows instead of requiring the team to reconstruct the picture from disconnected tools.",
        },
      ],
    },
    trust: {
      title:
        "Booking reliability and guest privacy were treated as product quality.",
      introduction:
        "Hospitality software is trusted with personal details and a time-sensitive promise: the room, date, property, and communication must stay aligned. A polished interface cannot compensate for a broken reservation state.",
      decisions: [
        {
          title: "Booking truth had to remain coherent",
          description:
            "The connected experience was designed around dependable reservation information so guest-facing and operational touchpoints did not tell different stories about the same stay.",
        },
        {
          title: "Guest data followed the work",
          description:
            "Sensitive guest information was treated as operationally necessary data, not content that should be exposed everywhere simply because several teams touch the stay.",
        },
        {
          title: "Failure affects a person in real time",
          description:
            "Hospitality exceptions happen while guests are travelling or arriving. The product framing kept operational visibility and recoverable workflows in view, not only the ideal booking path.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "The delivered platform connects the operational view behind the stay to a more coherent experience for the guest moving through it.",
      outcomes: [
        "Avian gained a unified digital layer connecting booking, guest communication, and property management across multiple properties.",
        "Operators gained a clearer view of the information and workflows behind the guest experience.",
        "Guests can move through a more coherent journey because the customer touchpoints are connected to operational context.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "Hospitality Digital Transformation",
          description:
            "Guest journeys and property operations redesigned as one connected system.",
          href: "/hospitality-digital-transformation",
        },
        {
          label: "Service",
          title: "API & Backend Systems",
          description:
            "Dependable booking states, integrations, and operational workflows behind the experience.",
          href: "/api-and-backend-systems",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "Hospitality Tech",
          description:
            "Products built around the operational reality of the stay and the privacy of the guest.",
          href: "/hospitality-tech",
        },
      ],
    },
  },
  {
    slug: "expertarm",
    publishedAt: "2026-07-16",
    client: "ExpertArm",
    outcome:
      "Joined client reporting and internal financial operations without collapsing their access boundaries.",
    industry: "FinTech",
    description:
      "A client-facing financial portal and internal admin tools supporting payroll processing, reporting dashboards, and onboarding data intake.",
    media: {
      hero: {
        label: "Hero banner — financial operations platform",
        alt: "ExpertArm secure client portal and financial operations platform",
      },
      solution: {
        label: "Product screenshot — financial reporting dashboard",
        alt: "ExpertArm client financial reporting and payroll dashboard",
      },
      results: {
        label: "Product detail — internal administration workspace",
        alt: "ExpertArm internal payroll and client administration workspace",
      },
    },
    challenge: {
      title:
        "Financial operations needed one system without giving every user the same window into sensitive data.",
      paragraphs: [
        "ExpertArm provides accounting outsourcing, strategic consulting, virtual CFO leadership, and global payroll administration for scaling companies. Its clients need timely access to financial information, while the internal team needs deeper operational tools to process payroll, prepare reporting, and manage onboarding inputs.",
        "The challenge was to connect those two sides without confusing them. A client should see the reporting and data relevant to their organization; an internal administrator needs different actions and wider operational context. With payroll and financial records involved, the distinction is a confidentiality boundary, not merely a navigation choice.",
      ],
    },
    solution: {
      title:
        "A client portal and an internal operating layer, designed together.",
      introduction:
        "We built a client-facing portal for access to financial data and reporting, alongside internal admin tools for the ExpertArm team. Shared workflows connect the work, while each side has a purpose-built view and level of control.",
      details: [
        {
          title: "Client financial access",
          description:
            "The portal gives clients a dedicated place to access their financial information and reporting without exposing the internal tools used to prepare and administer that work.",
        },
        {
          title: "Payroll and reporting administration",
          description:
            "Internal tools support the ExpertArm team's payroll processing and financial dashboard workflows, bringing operational actions into a system shaped around how the service is delivered.",
        },
        {
          title: "Structured onboarding and data intake",
          description:
            "Client onboarding and information collection were treated as part of the operating workflow, giving sensitive inputs a defined destination instead of leaving them scattered across informal handoffs.",
        },
      ],
    },
    trust: {
      title: "We made the client/admin divide a real permission boundary.",
      introduction:
        "A commodity portal can hide admin screens in the interface while leaving the underlying access model too broad. ExpertArm's financial and payroll work called for roles that reflect who may see data and who may act on it.",
      decisions: [
        {
          title: "Client visibility is scoped to the client relationship",
          description:
            "The portal and admin experience were separated so a customer-facing account does not inherit the operational reach required by ExpertArm's internal team.",
        },
        {
          title: "Sensitive actions belong to explicit roles",
          description:
            "Payroll processing, reporting administration, and onboarding work require different authority from viewing a finished client report. The product model reflects that difference.",
        },
        {
          title: "Data intake was part of the security surface",
          description:
            "Onboarding can introduce financial, company, and payroll information before a client reaches a dashboard. We treated that intake path as part of the protected system rather than a separate form exercise.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "The combined portal and admin system gives ExpertArm one clearer product model for client access and internal financial operations.",
      outcomes: [
        "Clients gained a dedicated route to their financial data and reporting without entering ExpertArm's internal administration environment.",
        "The ExpertArm team gained purpose-built tools spanning payroll processing, financial dashboards, and client administration.",
        "Onboarding data intake, client visibility, and internal actions now sit inside one product model with clearer role boundaries.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "Security Architecture",
          description:
            "Role boundaries and sensitive-data handling for client and administrative workflows.",
          href: "/security-architecture",
        },
        {
          label: "Service",
          title: "SaaS Product Development",
          description:
            "A customer portal and operational tools delivered as one coherent product system.",
          href: "/saas-product-development",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "FinTech",
          description:
            "Financial and payroll data handled through accountable access and operational workflows.",
          href: "/fintech",
        },
      ],
    },
  },
  {
    slug: "vurke",
    publishedAt: "2026-07-16",
    client: "Vurke",
    outcome:
      "Paired enterprise-grade market credibility with a working portal for its global talent network.",
    industry: "FinTech",
    description:
      "A fast multi-region website for a global EOR and payroll consultancy, plus a separate registration, login, and dashboard product for contractors and candidates.",
    media: {
      hero: {
        label: "Hero banner — global EOR and talent platform",
        alt: "Vurke global employer-of-record website and talent network portal",
      },
      solution: {
        label: "Product screenshot — talent network dashboard",
        alt: "Vurke contractor talent network registration and dashboard interface",
      },
      results: {
        label: "Product detail — multi-region service experience",
        alt: "Vurke multi-region payroll services and country contact experience",
      },
    },
    challenge: {
      title:
        "A company asking enterprises to trust it with global payroll could not look or behave like a template.",
      paragraphs: [
        "Vurke operates across more than 95 countries as an Employer-of-Record, global payroll, and HR consultancy. Prospective enterprise buyers compare providers on credibility, coverage, responsiveness, and the confidence that complex cross-border work will be handled carefully. The public site had to make that case quickly across regions.",
        "At the same time, Vurke needed more than a marketing presence. Contractors and candidates joining its global network needed a separate functional system for registration, authentication, and their ongoing dashboard experience. The credibility site and the talent portal served different audiences but had to feel like parts of the same dependable company.",
      ],
    },
    solution: {
      title:
        "Two connected digital products for two different trust decisions.",
      introduction:
        "We built the main Vurke website as an enterprise-facing credibility and acquisition platform, then delivered a separate talent network portal for the people registering with and returning to Vurke's global network.",
      details: [
        {
          title: "An enterprise-ready service presence",
          description:
            "Focused service pages explain Vurke's EOR, payroll, and HR offer clearly, while multi-country contact information supports the reality of a business operating across regions.",
        },
        {
          title: "A publishing layer for expertise",
          description:
            "Insights and blog content give Vurke a place to demonstrate knowledge in a market where buyers need evidence of current thinking, not only a list of services.",
        },
        {
          title: "A separate talent network portal",
          description:
            "Registration, login, and a user dashboard create a functional home for contractors and candidates, keeping their ongoing product journey distinct from the public marketing experience.",
        },
      ],
    },
    trust: {
      title: "Credibility, identity, and personal data had to agree.",
      introduction:
        "Vurke's site makes a trust promise about global payroll and compliance. The talent portal then asks real people to create accounts and enter its network. The build had to support both claims honestly.",
      decisions: [
        {
          title: "The public experience had to perform like the promise",
          description:
            "Fast delivery, clear multi-region information, and a considered enterprise interface support a buyer evaluating whether Vurke can handle complex international work.",
        },
        {
          title: "The talent portal was treated as a product",
          description:
            "Registration and login were not bolted onto the marketing site. The portal has its own authenticated journey and dashboard because network members have different needs and data than visitors.",
        },
        {
          title: "Public publishing and account data stayed distinct",
          description:
            "Service content and insights need broad public reach; talent-network account information does not. The two-system structure creates a clearer boundary between those concerns.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "Together, the public site and talent portal give Vurke a credible enterprise front door and a functional product journey for its global network.",
      outcomes: [
        "Vurke gained a fast, multi-region digital presence designed for enterprise EOR and global payroll evaluation.",
        "Service pages, country contact information, and insights now work together as a clearer credibility and acquisition system.",
        "Contractors and candidates gained a dedicated registration, login, and dashboard journey for joining Vurke's global talent network.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "SaaS Product Development",
          description:
            "An authenticated talent-network journey delivered alongside the wider digital platform.",
          href: "/saas-product-development",
        },
        {
          label: "Service",
          title: "Security Architecture",
          description:
            "Clear boundaries between public content, account identity, and sensitive network data.",
          href: "/security-architecture",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "FinTech",
          description:
            "Trust-critical payroll and financial-data context across global operations.",
          href: "/fintech",
        },
      ],
    },
  },
  {
    slug: "zyrentis-ai",
    publishedAt: "2026-07-16",
    client: "Zyrentis AI",
    outcome:
      "Turned technical interviews from answer checking into evidence of how engineers actually reason.",
    industry: "Enterprise AI",
    description:
      "An AI-powered engineering interview platform that observes reasoning, debugging, and how candidates work alongside AI—not only whether they reach a final answer.",
    media: {
      hero: {
        label: "Hero banner — AI technical interview platform",
        alt: "Zyrentis AI technical interview and candidate reasoning platform",
      },
      solution: {
        label: "Product screenshot — candidate problem-solving workspace",
        alt: "Zyrentis AI candidate reasoning and debugging interview workspace",
      },
      results: {
        label: "Product detail — evaluator evidence view",
        alt: "Zyrentis AI structured candidate evaluation and scoring view",
      },
    },
    challenge: {
      title: "Hiring signal has broken down in an AI-assisted world.",
      paragraphs: [
        "Traditional technical interviews often reward memorized patterns or a polished final answer. Now that candidates can work with AI, an answer alone reveals even less: it may show engineering judgment, or it may only show that someone can prompt a tool until code appears.",
        "Zyrentis AI needed to help hiring teams distinguish those cases without pretending engineers should work without modern tools. The meaningful signal is in how a candidate frames a problem, tests assumptions, debugs failures, evaluates AI output, and changes direction—not only the last submission.",
      ],
    },
    solution: {
      title: "An evaluation system built around the path to the answer.",
      introduction:
        "We built Zyrentis AI to make reasoning and debugging part of the interview evidence. Candidates can demonstrate how they think and how they work alongside AI, while evaluators receive a more structured basis for judgment than a final code result alone.",
      details: [
        {
          title: "A workspace that makes process visible",
          description:
            "The interview experience is framed around problem solving, allowing the evaluation to consider the candidate's progression rather than reducing the session to pass or fail at the final answer.",
        },
        {
          title: "AI use becomes part of the signal",
          description:
            "Instead of treating AI assistance as invisible or automatically disqualifying, the product helps reveal whether a candidate can question, verify, and improve what an AI tool produces.",
        },
        {
          title: "Structured evidence for evaluators",
          description:
            "Hiring teams get a consistent view of reasoning and debugging behavior so interview decisions can be tied to observed work rather than intuition about a polished outcome.",
        },
      ],
    },
    trust: {
      title: "The evaluation itself is the trust-critical system.",
      introduction:
        "For a hiring platform, security is not only about account protection. Employers and candidates must be able to trust that interview evidence has integrity and that scoring is applied consistently enough to support a consequential decision.",
      decisions: [
        {
          title: "The work trail matters more than a copied answer",
          description:
            "The product centers observed reasoning and debugging evidence, making it harder for a final response alone to stand in for genuine engineering ability.",
        },
        {
          title: "Scoring needs a consistent basis",
          description:
            "Evaluation is structured around the same relevant behaviors so candidates are not judged through an improvised standard that changes with each reviewer.",
        },
        {
          title: "Evidence integrity protects both sides",
          description:
            "Tamper resistance and dependable session evidence matter to the employer making a hiring decision and to the candidate whose ability is being represented.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "The platform creates a richer technical hiring signal by preserving the work behind an answer and giving evaluators a consistent way to review it.",
      outcomes: [
        "Hiring teams can evaluate how candidates reason, debug, and respond to uncertainty—not only whether a final answer looks correct.",
        "Candidates can demonstrate responsible work alongside AI tools instead of being measured by an artificial no-AI exercise.",
        "Interview decisions can draw on structured process evidence that better separates engineering judgment from prompt-only performance.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "Enterprise AI Integration",
          description:
            "AI embedded inside a consequential workflow with evidence, constraints, and human judgment.",
          href: "/enterprise-ai-integration",
        },
        {
          label: "Service",
          title: "SaaS Product Development",
          description:
            "A complete multi-user platform for candidates, evaluators, and hiring teams.",
          href: "/saas-product-development",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "Enterprise AI",
          description:
            "AI systems where consistency, evidence, and human accountability shape trust.",
          href: "/enterprise-ai",
        },
      ],
    },
  },
  {
    slug: "the-elva-edit",
    publishedAt: "2026-07-16",
    client: "The Elva Edit",
    outcome:
      "Translated a premium jewellery brand into a clear, elegant shopping experience built on reliable commerce foundations.",
    industry: "E-commerce",
    description:
      "A women's jewellery storefront balancing product-listing clarity, premium visual craft, secure checkout, and dependable product information.",
    media: {
      hero: {
        label: "Hero banner — premium jewellery storefront",
        alt: "The Elva Edit premium women's jewellery e-commerce homepage",
      },
      solution: {
        label: "Product screenshot — jewellery collection and product page",
        alt: "The Elva Edit jewellery collection listing and product detail interface",
      },
      results: {
        label: "Product detail — responsive shopping journey",
        alt: "The Elva Edit mobile jewellery shopping and secure checkout journey",
      },
    },
    challenge: {
      title:
        "The store had to make jewellery feel considered without making shopping feel precious or difficult.",
      paragraphs: [
        "The Elva Edit needed an e-commerce platform that could carry the premium, elegant feel of a women's jewellery brand while still helping customers understand products and move confidently toward purchase. A visual identity alone would not solve listing clarity, product detail, or the mechanics of checkout.",
        "The challenge was to create a calm and distinctive brand experience on top of dependable commerce structure: product information had to remain consistent, collections needed to be easy to browse, and the route from discovery to payment needed to feel trustworthy.",
      ],
    },
    solution: {
      title: "A commerce system where visual restraint supports the purchase.",
      introduction:
        "We built the storefront around clear product architecture and a carefully paced interface, using typography, spacing, imagery, and interaction to create a premium feel without hiding the information customers need.",
      details: [
        {
          title: "Product listings with a clear hierarchy",
          description:
            "Collections make products easy to scan while preserving space for each piece to feel considered. The listing architecture supports discovery rather than turning the catalogue into a dense inventory table.",
        },
        {
          title: "Product pages designed for confidence",
          description:
            "The detail experience gives imagery, product information, and purchase actions a deliberate order so customers can understand the item without fighting the brand styling.",
        },
        {
          title: "A premium system, not isolated screens",
          description:
            "Consistent type, spacing, color, and interaction decisions carry the brand from collection browsing through product selection and checkout instead of concentrating all visual craft on the homepage.",
        },
      ],
    },
    trust: {
      title: "For this store, trust is quiet and operational.",
      introduction:
        "The Elva Edit is more design-led than our security products, so the trust story should not be overstated. Customers still need payment handling, product information, and order intent to behave dependably beneath the visual experience.",
      decisions: [
        {
          title: "Checkout keeps payment exposure contained",
          description:
            "The purchase flow is designed around secure payment handling rather than asking the storefront to hold more sensitive payment information than the transaction requires.",
        },
        {
          title: "Product data remains the source of the promise",
          description:
            "Names, imagery, details, and availability need to agree across the shopping journey because the customer cannot physically inspect the jewellery before buying.",
        },
        {
          title: "Craft supports clarity",
          description:
            "Premium design was used to focus attention and build confidence, not to obscure prices, product details, purchase actions, or the progression into checkout.",
        },
      ],
    },
    results: {
      type: "qualitative",
      introduction:
        "The finished storefront brings the brand experience and the commerce journey into one calm, consistent system.",
      outcomes: [
        "The Elva Edit gained a storefront whose product hierarchy and interface reflect the brand's premium, elegant positioning.",
        "Customers can move from collection discovery to product detail and checkout through one visually consistent journey.",
        "Reliable product information and secure payment handling support the brand experience without competing for attention.",
      ],
    },
    related: {
      services: [
        {
          label: "Service",
          title: "E-commerce Platforms",
          description:
            "Storefront, product structure, checkout, and commerce operations designed around the brand.",
          href: "/e-commerce-platforms",
        },
        {
          label: "Service",
          title: "API & Backend Systems",
          description:
            "Dependable product, checkout, and operational behavior behind the customer experience.",
          href: "/api-and-backend-systems",
        },
      ],
      industries: [
        {
          label: "Industry",
          title: "E-commerce",
          description:
            "Customer trust built across product truth, payment, and fulfillment—not only storefront design.",
          href: "/e-commerce",
        },
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
