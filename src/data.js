/**
 * BetaByte Labs - Data Layer
 * Comprehensive content models for Services, Solutions, Projects, Tech Stack, Process & Blog
 */

export const HERO_SLIDES = [
  {
    tag: "ENTERPRISE ARCHITECTURE",
    title: "Enterprise Solutions",
    description: "We build high-end enterprise applications that streamline your business processes, help you operate more efficiently, and grow faster."
  },
  {
    tag: "STARTUP ACCELERATION",
    title: "Startup MVP Development",
    description: "Go from initial concept to high-converting production software in 60–90 days with resilient cloud foundations and investor-ready UI/UX."
  },
  {
    tag: "NEXT-GEN AUTOMATION",
    title: "AI Integration & Agents",
    description: "Embed private LLM workflows, autonomous operational agents, and predictive telemetry directly into your core business applications."
  },
  {
    tag: "CLOUD SCALE",
    title: "High-Throughput Microservices",
    description: "Zero-downtime distributed APIs, NestJS & Go backend architectures capable of executing millions of transactions with sub-second latency."
  }
];

export const TECHNOLOGIES = [
  {
    id: "flutter",
    name: "Flutter",
    category: "frontend",
    tag: "Cross-Platform",
    desc: "Single codebase iOS and Android apps with 60fps native performance.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#02569B"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM6.002 15.698L14.314 24h7.37L9.686 12.016l-3.684 3.682z"/></svg>`
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    tag: "Web Frontend",
    desc: "Modular, reactive user interfaces with modern state management.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#61DAFB"><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" stroke="#61DAFB" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" stroke="#61DAFB" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" stroke="#61DAFB" stroke-width="1.2" fill="none"/><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/></svg>`
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    tag: "Full-Stack Web",
    desc: "Server-side rendering, edge caching, and maximum search engine discoverability.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#0F172A"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 17.587l-6.852-8.868v8.868H9.333V6.413h1.481l6.852 8.868V6.413h1.481v11.174h-1.481z"/></svg>`
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    tag: "Runtime",
    desc: "Event-driven, asynchronous I/O backend pipelines designed for real-time applications.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#339933"><path d="M12 0l11 6.35v12.7L12 25.4 1 19.05V6.35L12 0zm-1.2 5.5v5.8l4.8 2.8 1.2-.7-4.8-2.8V6.2l-1.2-.7z"/></svg>`
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    tag: "Enterprise Backend",
    desc: "Structured, scalable TypeScript framework with clean architecture & dependency injection.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#E0234E"><path d="M12 1L2 6.5v11L12 23l10-5.5v-11L12 1zm0 3.2l7.5 4.1v7.6L12 20.2l-7.5-4.3V8.3L12 4.2z"/></svg>`
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    tag: "Database",
    desc: "Battle-tested relational database with ACID compliance, JSONB, and vector search.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#336791"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-1h2v1c1.1 0 2-.9 2-2v-1l4.79-5.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z"/></svg>`
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "backend",
    tag: "BaaS & Realtime",
    desc: "Rapid authentication, Firestore real-time sync, and edge serverless triggers.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#FFCA28"><path d="M3.89 15.67L6.82 2.38a.95.95 0 0 1 1.83-.17l2.55 8.08L3.89 15.67zm16.22 0l-2.02-12.7a.95.95 0 0 0-1.63-.48l-9.1 13.18h12.75zM12 22.3l8.84-5.32L12 4.88 3.16 16.98 12 22.3z"/></svg>`
  },
  {
    id: "aws",
    name: "AWS Cloud",
    category: "cloud",
    tag: "Infrastructure",
    desc: "Enterprise compute (ECS, Lambda), S3 storage, and global CDN deployment.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#FF9900"><path d="M6.8 14.5c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1.5 0 2.8.8 3.5 2h2.2c-.9-2.4-3.2-4-5.7-4C3.1 4.3 0 7.4 0 11.2s3.1 6.9 6.8 6.9c2.6 0 4.8-1.6 5.8-3.9h-2.3c-.7 1.2-2 2-3.5 2zm10.4-8.2h-2.1v9.8h2.1V6.3zm4.7 0h-2.1v9.8h2.1V6.3z"/></svg>`
  },
  {
    id: "docker",
    name: "Docker & K8s",
    category: "cloud",
    tag: "Containerization",
    desc: "Reproducible container environments, microservice orchestration, and fast CI/CD.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#2496ED"><path d="M13 3h3v3h-3zm-4 0h3v3H9zm-4 0h3v3H5zm8 4h3v3h-3zm-4 0h3v3H9zm-4 0h3v3H5zm-4 0h3v3H1zm12 4h3v3h-3zm-4 0h3v3H9zm-4 0h3v3H5zm-4 0h3v3H1zM23.5 13.5c-.3-1.6-1.5-2.7-3.1-2.9-1.2-.2-2.3.2-3.1 1.1-.3-.2-.7-.4-1.1-.5v-.2h-15c-.4 2.1.2 4.4 1.7 6.1C4.4 18.8 6.6 20 9 20h6c3.9 0 7.3-2.6 8.5-6.5z"/></svg>`
  },
  {
    id: "ai",
    name: "AI & LLM Tools",
    category: "ai",
    tag: "Intelligence",
    desc: "LangChain, OpenAI API, vector embeddings (pgvector/Pinecone), and autonomous agent workflows.",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#7C3AED"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17h-2v-.07A5.002 5.002 0 0 1 7.07 13H7v-2h.07A5.002 5.002 0 0 1 11 7.07V7h2v.07A5.002 5.002 0 0 1 16.93 11H17v2h-.07A5.002 5.002 0 0 1 13 16.93zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></svg>`
  }
];

export const SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    icon: "💻",
    shortDesc: "End-to-end proprietary software engineered around your exact operational workflows, IP requirements, and scale demands.",
    tags: ["Enterprise Architecture", "Domain-Driven Design", "Legacy Modernization", "IP Protection"],
    overview: "Generic off-the-shelf software inevitably limits growth. We architect bespoke software systems that solve nuanced operational bottlenecks, unify fragmented workflows, and deliver a sustainable technological moat.",
    challenges: [
      "Rigid legacy tools that cannot adapt to evolving business models",
      "Siloed operational data across disconnected software",
      "Exorbitant per-seat licensing fees for inflexible SaaS packages",
      "High security and regulatory compliance mandates"
    ],
    capabilities: [
      "Domain-Driven Enterprise Architecture",
      "Automated Business Workflow Engines",
      "Zero-Downtime Database Migration & Refactoring",
      "Automated CI/CD Deployment Pipelines"
    ],
    techStack: ["TypeScript", "NestJS", "PostgreSQL", "Docker", "AWS", "Redis"],
    faqs: [
      {
        q: "Who owns the intellectual property (IP) and source code?",
        a: "You retain 100% full IP ownership of all source code, assets, and documentation. No licensing fees, no vendor lock-in."
      },
      {
        q: "Can you modernize an existing legacy software stack?",
        a: "Yes. We specialize in strangler-fig pattern migrations that gradually upgrade legacy components to modern architectures without halting active business operations."
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Application Development",
    icon: "🌐",
    shortDesc: "Modern, secure, and lightning-fast web applications built with Next.js, React, and modular serverless architectures.",
    tags: ["Next.js & React", "High-Throughput", "SEO Optimized", "Responsive UI/UX"],
    overview: "We engineer enterprise-grade web applications that blend blazing-fast performance with intuitive, frictionless user interfaces designed to maximize client engagement and conversion rates.",
    challenges: [
      "Slow, unresponsive single-page apps suffering from heavy bundle sizes",
      "Poor search engine indexing resulting in lost organic acquisition",
      "Unresponsive mobile experiences causing elevated drop-off rates",
      "Vulnerability to cross-site scripting and security exploits"
    ],
    capabilities: [
      "Server-Side Rendering (SSR) & Edge Caching",
      "Comprehensive Responsive Layouts (Mobile to 4K Ultrawide)",
      "Role-Based Access Control (RBAC) & OAuth/SAML Auth",
      "Automated End-to-End Testing (Playwright / Cypress)"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind/Vanilla CSS", "Node.js", "Vercel/AWS"],
    faqs: [
      {
        q: "How do you guarantee fast load times for web apps?",
        a: "We implement server-side rendering, intelligent asset compression, code-splitting, and global CDN edge routing to achieve sub-second LCP (Largest Contentful Paint)."
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    icon: "📱",
    shortDesc: "Native-quality cross-platform mobile experiences for iOS and Android powered by modern Flutter engineering.",
    tags: ["Flutter", "iOS & Android", "Offline Sync", "Push Telemetry"],
    overview: "Launch on both Apple App Store and Google Play from a unified, high-performance Flutter codebase without compromising on 60fps animations or native platform integration.",
    challenges: [
      "Costly duplication of engineering efforts across separate iOS and Android teams",
      "Inconsistent feature parity and release schedules across platforms",
      "Unreliable offline data synchronization in field environments"
    ],
    capabilities: [
      "Single-Codebase iOS & Android Architecture",
      "Native Hardware Integrations (Bluetooth, Camera, GPS, Biometrics)",
      "Resilient Offline-First Data Synchronization",
      "Store Submission & Compliance Management (App Store / Play Console)"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "WebSockets", "Fastlane", "SQLite"],
    faqs: [
      {
        q: "Does Flutter feel like a genuine native app?",
        a: "Yes. Flutter compiles directly to machine ARM code and renders via Skia/Impeller graphics engine, ensuring authentic 60fps and 120fps fluid performance identical to Swift or Kotlin."
      }
    ]
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    icon: "⚡",
    shortDesc: "Resilient microservices, RESTful & GraphQL APIs, and high-concurrency database architectures.",
    tags: ["NestJS & Node", "Microservices", "PostgreSQL", "Kafka & Redis"],
    overview: "The engine behind every world-class product is a robust, decoupled backend. We architect high-concurrency APIs, event-driven pipelines, and relational database systems engineered for 99.99% uptime.",
    challenges: [
      "Database connection pooling bottlenecks during peak traffic spikes",
      "Lack of structured API documentation slowing partner integrations",
      "Uncaught server crashes and memory leaks in production",
      "Inadequate data encryption and authorization checks"
    ],
    capabilities: [
      "Decoupled Event-Driven Microservices",
      "OpenAPI 3.0 / Swagger Documented REST & GraphQL APIs",
      "Advanced Database Indexing & Query Optimization",
      "Automated Health Checks & Observability Telemetry"
    ],
    techStack: ["NestJS", "Node.js", "PostgreSQL", "Redis", "Docker", "RabbitMQ / Kafka"],
    faqs: [
      {
        q: "How do you ensure data security and compliance?",
        a: "All endpoints implement JWT/Bearer token encryption, parameterized SQL queries to prevent injection, TLS 1.3 encryption in transit, and AES-256 at rest."
      }
    ]
  },
  {
    id: "saas-development",
    title: "SaaS Product Development",
    icon: "🚀",
    shortDesc: "Multi-tenant software-as-a-service platforms engineered to scale rapidly from launch to global recurring revenue.",
    tags: ["Multi-Tenancy", "Stripe Billing", "Usage Metering", "Investor-Ready"],
    overview: "We help SaaS founders and venture-backed startups transform product visions into production-grade multi-tenant platforms complete with automated subscription billing, user provisioning, and analytics.",
    challenges: [
      "Complex multi-tenant data isolation and security concerns",
      "Building billing logic, tier limits, and invoice webhooks from scratch",
      "Inability to handle rapid customer onboarding surges",
      "Disorganized codebases that impede technical due diligence"
    ],
    capabilities: [
      "Multi-Tenant Tenant Isolation (Row-Level Security & Schema Separation)",
      "Complete Stripe Billing & Tiered Subscription Engines",
      "Self-Serve Onboarding & Role-Based Workspaces",
      "Clean Modular Codebase Ready for Venture Due Diligence"
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Stripe API", "AWS ECS", "SendGrid"],
    faqs: [
      {
        q: "How fast can you deliver an initial SaaS MVP?",
        a: "Our typical MVP acceleration cycle delivers a fully testable, production-deployed SaaS product in 8 to 12 weeks with full billing and core workflows."
      }
    ]
  },
  {
    id: "ai-automation",
    title: "AI Integration & Automation",
    icon: "🤖",
    shortDesc: "Private LLM workflows, autonomous operational agents, and predictive machine learning models.",
    tags: ["LLM Pipelines", "Retrieval-Augmented Generation", "Vector Databases", "Workflow Automation"],
    overview: "Harness modern artificial intelligence without leaking proprietary data. We integrate custom RAG pipelines, fine-tuned agent workflows, and predictive analytics that automate operational labor.",
    challenges: [
      "Data privacy risks when sending confidential business IP to public AI APIs",
      "LLM hallucinations producing unreliable business outputs",
      "Connecting AI capabilities to existing legacy ERPs and CRMs",
      "High token costs due to unoptimized prompt architectures"
    ],
    capabilities: [
      "Enterprise Retrieval-Augmented Generation (RAG) on Internal Knowledge",
      "Autonomous Task Execution Agents (LangChain / LlamaIndex)",
      "Vector Search & Semantic Indexing (pgvector / Pinecone)",
      "Strict Output Validation & Automated Guardrails"
    ],
    techStack: ["Python", "FastAPI", "OpenAI / Claude APIs", "LangChain", "pgvector", "Redis"],
    faqs: [
      {
        q: "Will our company data be used to train public AI models?",
        a: "Never. We enforce zero data-retention enterprise API endpoints and deploy vector databases inside your isolated private cloud VPC."
      }
    ]
  }
];

export const SOLUTIONS = [
  {
    id: "mvp",
    title: "Startup MVP Development",
    badge: "Time-to-Market: 60–90 Days",
    headline: "Transform your concept into a venture-ready, traction-generating digital product.",
    description: "Building an MVP is not about cutting corners—it is about validating commercial hypotheses with surgical precision. We build clean, high-performance MVPs designed to impress early adopters and withstand rigorous investor technical due diligence.",
    deliverables: [
      "Interactive Figma Design System & Prototype",
      "Scalable Web & Mobile Production Architecture",
      "User Authentication & Tiered Subscription Billing",
      "Analytics & User Telemetry Instrumentation",
      "Production Cloud Deployment with CI/CD"
    ],
    valueProposition: "Launch 3x faster while retaining 100% intellectual property ownership."
  },
  {
    id: "automation",
    title: "Business Process Automation",
    badge: "Operational ROI: 300%+",
    headline: "Eliminate repetitive manual overhead with autonomous software workflows.",
    description: "Replace error-prone spreadsheets, manual data re-entry, and disjointed systems with custom automation engines that connect your CRM, accounting, inventory, and customer communications into a unified real-time pipeline.",
    deliverables: [
      "Workflow Process Mapping & Bottleneck Audit",
      "Custom Microservice Integration Connectors",
      "Automated Alerting, Webhooks & Exception Handling",
      "Role-Based Administrative Dashboard",
      "Zero-Downtime Data Synchronization"
    ],
    valueProposition: "Recapture hundreds of manual employee hours every month."
  },
  {
    id: "saas-platform",
    title: "SaaS Platform Development",
    badge: "Scales to 100k+ Users",
    headline: "Architected for frictionless self-serve onboarding and global expansion.",
    description: "From multi-tenant data segregation to metered usage billing, we engineer SaaS platforms that provide intuitive administrative interfaces, bulletproof tenant isolation, and predictable cloud infrastructure expenses.",
    deliverables: [
      "Multi-Tenant Database Architecture",
      "Stripe Customer Portal & Automated Invoicing",
      "Enterprise SSO (Google, Microsoft, SAML)",
      "Granular Team Permissions & Audit Logs",
      "Developer-Facing Public API with Swagger Docs"
    ],
    valueProposition: "Built on resilient architectures that never require costly total rewrites."
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation & Modernization",
    badge: "Legacy De-risking",
    headline: "Upgrade legacy business systems without halting daily operations.",
    description: "Modernize monolithic, unmaintainable legacy applications into responsive, modular microservices. We utilize incremental migration patterns that minimize business risk while delivering immediate usability gains.",
    deliverables: [
      "Codebase Quality & Security Vulnerability Audit",
      "Incremental Strangler-Fig Migration Roadmap",
      "Cloud Infrastructure Migration (On-Prem to AWS/GCP)",
      "API Facade Layer for Legacy Datastores",
      "Comprehensive Engineering Documentation"
    ],
    valueProposition: "Preserve institutional business logic while modernizing performance."
  },
  {
    id: "custom-business",
    title: "Custom Business Software",
    badge: "Tailored to Your Operations",
    headline: "Proprietary software tailored to your specific competitive edge.",
    description: "When commercial off-the-shelf software fails to support your unique operational workflow, BetaByte Labs designs bespoke internal tools, logistics dashboards, client portals, and inventory management systems.",
    deliverables: [
      "Custom Workflow & Entity Data Modeling",
      "High-Density Desktop & Mobile Responsive Views",
      "Real-Time Activity Feeds & WebSocket Alerts",
      "Role-Based Access Control and Security Hardening",
      "Exportable Financial & Operational Reports"
    ],
    valueProposition: "Empower your workforce with software custom-built for how you actually work."
  },
  {
    id: "backend-systems",
    title: "Scalable Backend Systems",
    badge: "Sub-Second Latency",
    headline: "High-concurrency infrastructure engineered for extreme stability.",
    description: "Construct backend architectures capable of handling massive spikes in concurrent traffic. We design resilient databases, distributed caches, and event queues that keep latency low and uptime at 99.99%.",
    deliverables: [
      "Distributed Microservices Architecture",
      "Redis Caching & Connection Pool Tuning",
      "Event-Driven Queue Processing (Kafka / SQS)",
      "Automated Failover & Geo-Redundant Backups",
      "Real-Time Performance Monitoring & Alerting"
    ],
    valueProposition: "Rest easy knowing your backend will stay stable through your biggest traffic days."
  }
];

export const PROJECTS = [
  {
    id: "finpulse",
    category: "fintech",
    name: "FinPulse — Global Financial Analytics",
    tagline: "Real-Time Enterprise Treasury & Capital Cash Flow Platform",
    image: "/assets/fintech_dashboard.jpg",
    tags: ["React", "NestJS", "PostgreSQL", "AWS", "Docker"],
    metrics: [
      { label: "Daily Volume", value: "$4.2M" },
      { label: "Query Latency", value: "<350ms" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    summary: "A high-performance financial intelligence platform engineered for cross-border liquidity tracking, predictive cash flow forecasting, and automated currency conversions.",
    problem: "The client’s financial teams were struggling with delayed manual reconciliations across 14 bank accounts in 6 global currencies, causing inaccurate liquidity projections and costly foreign exchange slippage.",
    solution: "BetaByte Labs designed a decoupled microservices architecture with a high-density React dashboard and an asynchronous NestJS transaction ingest pipeline with automated double-entry verification.",
    features: [
      "Real-time currency exchange rates and automated liquidity forecasting",
      "Sub-second multi-dimensional aggregation across 500,000+ ledger entries",
      "Role-based audit logging compliant with financial governance standards",
      "Instant PDF and CSV regulatory compliance reports"
    ],
    results: "Replaced 40 weekly hours of manual spreadsheet bookkeeping, lowered reconciliation latency to sub-second real-time, and eliminated financial reporting discrepancy errors."
  },
  {
    id: "logix-ai",
    category: "ai",
    name: "Logix AI — Fleet Telemetry & Autonomous Routing",
    tagline: "Next-Gen Logistics Dispatch Engine with Real-Time Telemetry",
    image: "/assets/logistics_dashboard.jpg",
    tags: ["Next.js", "Python FastAPI", "Redis", "Docker", "Mapbox"],
    metrics: [
      { label: "Active Fleet", value: "1,489+" },
      { label: "Fuel Reduction", value: "22%" },
      { label: "On-Time Rate", value: "98.2%" }
    ],
    summary: "An intelligent fleet coordination platform that dynamically optimizes commercial delivery routes based on real-time traffic, vehicle capacity, and driver work-hour constraints.",
    problem: "A growing regional logistics carrier was experiencing high fuel waste and missed delivery windows due to static, un-optimized morning route assignments that failed to account for sudden traffic congestion.",
    solution: "We engineered an event-driven telemetry engine utilizing Python FastAPI and Redis streams, paired with interactive map visualizations and dynamic graph-search algorithms.",
    features: [
      "Live GPS telemetry tracking with sub-second WebSocket updates",
      "Dynamic route re-optimization algorithm responding to road anomalies",
      "Driver dispatch and work-hour safety telemetry compliance",
      "Predictive vehicle maintenance scheduling based on engine hours"
    ],
    results: "Reduced fleet fuel consumption by 22%, boosted on-time deliveries to 98.2%, and allowed dispatchers to manage 3x more vehicles per coordinator."
  },
  {
    id: "healthsync",
    category: "health",
    name: "HealthSync Care — Clinical Telehealth Portal",
    tagline: "HIPAA-Compliant Remote Patient Monitoring & EHR Engine",
    image: "/assets/fintech_dashboard.jpg", // high res fallback with clinical overlay
    isVectorPreview: true,
    previewType: "health",
    tags: ["Flutter", "Node.js", "Firebase", "WebRTC", "PostgreSQL"],
    metrics: [
      { label: "Patients Served", value: "50,000+" },
      { label: "Video Latency", value: "<180ms" },
      { label: "HIPAA Status", value: "100% Certified" }
    ],
    summary: "A unified telemedicine and electronic health record portal enabling board-certified physicians to conduct encrypted high-definition consultations and manage prescriptions.",
    problem: "A digital health network needed to replace disjointed video conferencing and charting tools with a unified, strictly HIPAA-compliant platform capable of serving thousands of simultaneous clinical sessions.",
    solution: "We developed a cross-platform Flutter application for patients paired with a high-efficiency React clinician workstation and end-to-end encrypted WebRTC audio/video feeds.",
    features: [
      "Zero-latency peer-to-peer encrypted HD video consultations",
      "Interactive digital prescription generation with pharmacy integration",
      "Automated appointment reminders via SMS and push notifications",
      "Seamless integration with legacy HL7 and FHIR clinical records"
    ],
    results: "Successfully onboarded over 50,000 active patients, achieved 4.9/5 patient satisfaction scores, and passed independent third-party HIPAA compliance audits on first review."
  },
  {
    id: "cloudscale",
    category: "cloud",
    name: "CloudScale — Multi-Tenant Workflow Engine",
    tagline: "Enterprise Orchestration & Microservice API Gateway",
    image: "/assets/logistics_dashboard.jpg", // high res fallback
    isVectorPreview: true,
    previewType: "cloud",
    tags: ["Next.js", "Go", "Kubernetes", "Kafka", "AWS"],
    metrics: [
      { label: "Daily Tasks", value: "1.2M+" },
      { label: "Manual Effort", value: "-80%" },
      { label: "Avg Execution", value: "42ms" }
    ],
    summary: "A distributed workflow automation engine engineered for enterprise IT teams to trigger, execute, and monitor asynchronous microservice pipelines at global scale.",
    problem: "An enterprise software distributor was burdened with disparate internal scripts that frequently failed without notification, causing order fulfillment delays and high support tickets.",
    solution: "BetaByte Labs architected a fault-tolerant job orchestration engine in Go and Apache Kafka, accompanied by a sleek Next.js visual DAG workflow builder.",
    features: [
      "Drag-and-drop visual DAG workflow pipeline designer",
      "Automatic retries with exponential backoff and dead-letter queues",
      "Real-time execution telemetry and distributed tracing (OpenTelemetry)",
      "Granular role-based governance and single-sign-on (SSO)"
    ],
    results: "Automated over 1.2 million daily enterprise tasks, decreased order fulfillment errors to near zero, and reduced operational maintenance costs by 80%."
  }
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    subtitle: "Understand the business & requirements",
    desc: "We analyze your commercial objectives, identify user personas, map existing workflows, and pinpoint technical risks before writing a single line of code.",
    deliverables: ["Product Requirements Document (PRD)", "Technical Feasibility Assessment", "Architecture Blueprint & Budget Roadmap"]
  },
  {
    num: "02",
    title: "Strategize",
    subtitle: "Plan the solution & technical direction",
    desc: "We define the data models, cloud infrastructure topology, API contracts, and milestone breakdown across agile two-week development sprints.",
    deliverables: ["Entity Relationship Diagrams (ERD)", "API Interface Specifications", "Sprint Backlog & Release Milestones"]
  },
  {
    num: "03",
    title: "Design",
    subtitle: "Create intuitive user experiences",
    desc: "Our UI/UX designers craft responsive, pixel-perfect design systems, interactive prototypes, and conversion-optimized user flows in Figma.",
    deliverables: ["Complete Figma Design System", "High-Fidelity Interactive Prototypes", "Design Token Specification"]
  },
  {
    num: "04",
    title: "Develop",
    subtitle: "Build reliable and scalable products",
    desc: "Senior engineering pods write clean, modular, and strongly-typed code backed by daily continuous integration (CI/CD) and automated testing.",
    deliverables: ["Clean Modular Source Code (100% IP)", "Automated CI/CD Test Pipelines", "Bi-Weekly Live Demo Releases"]
  },
  {
    num: "05",
    title: "Test",
    subtitle: "Ensure quality, security & performance",
    desc: "We subject the platform to comprehensive automated unit testing, end-to-end user journey validation, security vulnerability scanning, and load testing.",
    deliverables: ["Quality Assurance (QA) Sign-off", "Load & Concurrency Benchmark Reports", "Security Vulnerability Audit"]
  },
  {
    num: "06",
    title: "Launch & Support",
    subtitle: "Deploy & provide ongoing support",
    desc: "Zero-downtime deployment to your production cloud environment, full telemetry monitoring setup, and guaranteed ongoing maintenance SLAs.",
    deliverables: ["Production Cloud Handover", "Complete Architecture Documentation", "Ongoing SLA & Technical Support"]
  }
];

export const BLOG_POSTS = [
  {
    id: "microservices-nestjs",
    category: "Software Development",
    title: "Building Resilient Microservices with NestJS and Event-Driven Architecture",
    excerpt: "How to decouple monolithic backends into scalable, fault-tolerant services that handle millions of requests without cascading failures.",
    date: "October 2026",
    readTime: "7 min read",
    author: "BetaByte Engineering Pod",
    content: `
      <h3>Why Monoliths Break Under High Concurrency</h3>
      <p>As modern software scales, shared database connections and synchronous HTTP blocking calls inevitably cause cascading failures. When one sub-system encounters high load, the entire application risks becoming unresponsive.</p>
      
      <h3>The NestJS Advantage</h3>
      <p>NestJS brings enterprise TypeScript structure, modular dependency injection, and native microservice transports (RabbitMQ, Redis Streams, Kafka) right out of the box. By decoupling service communication into asynchronous message brokers, your application gains elastic horizontal scalability.</p>
      
      <div class="code-preview-box">
        <code>
// Event-driven order processing pattern<br/>
@Controller()<br/>
export class OrderConsumer {<br/>
&nbsp;&nbsp;@EventPattern('order_created')<br/>
&nbsp;&nbsp;async handleOrderCreated(data: OrderPayload) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;await this.fulfillmentService.process(data);<br/>
&nbsp;&nbsp;}<br/>
}
        </code>
      </div>

      <h3>Key Architecture Takeaways</h3>
      <ul>
        <li><strong>Separate Read and Write Models:</strong> Implement CQRS for high-throughput transactional domains.</li>
        <li><strong>Dead-Letter Queues:</strong> Never drop a message—divert unprocessable events for automated review.</li>
        <li><strong>Distributed Tracing:</strong> Use OpenTelemetry to monitor latency across multi-service transactions.</li>
      </ul>
    `
  },
  {
    id: "startup-mvp-acceleration",
    category: "SaaS & Startups",
    title: "How Startups Can Launch High-Converting MVPs in 60 Days Without Technical Debt",
    excerpt: "A tactical guide for founders: choosing the right technology stack, validating assumptions, and establishing codebases ready for Series A.",
    date: "October 2026",
    readTime: "5 min read",
    author: "BetaByte Strategy Team",
    content: `
      <h3>The False Dichotomy: Speed vs. Quality</h3>
      <p>Many early-stage founders believe they must sacrifice code quality for speed. The reality is that messy code slows development down by week four. By choosing modern, opinionated full-stack frameworks like Next.js and NestJS, engineering velocity actually increases while preserving architectural integrity.</p>

      <h3>The 3 MVP Rules Every Founder Must Follow</h3>
      <ol>
        <li><strong>Solve One Pain Point Impossibly Well:</strong> Cut secondary features that distract from your core conversion proposition.</li>
        <li><strong>Use Battle-Tested Infrastructure:</strong> Don't roll your own authentication or payment ledger; leverage Supabase/Firebase and Stripe.</li>
        <li><strong>Track Telemetry From Day 1:</strong> Understand where users drop off through instrumentation before investing in new features.</li>
      </ol>

      <p>BetaByte Labs operates with standard 2-week agile sprints, delivering testable software continuously to validate real customer traction rapidly.</p>
    `
  },
  {
    id: "practical-ai-enterprise",
    category: "AI & Automation",
    title: "Practical AI Integration: Deploying Private LLM Workflows in Enterprise SaaS",
    excerpt: "Integrating retrieval-augmented generation and autonomous agents into production software while preserving client confidentiality.",
    date: "September 2026",
    readTime: "8 min read",
    author: "AI Systems Architect",
    content: `
      <h3>Beyond Generic Chatbots</h3>
      <p>The true business value of Generative AI is not open-ended conversational widgets, but contextual automation embedded directly into existing workflows—such as automated document parsing, predictive triage, and synthesized reports.</p>

      <h3>Guarding Enterprise Data Privacy</h3>
      <p>Commercial clients cannot afford to risk their proprietary trade secrets or customer data being used for training public models. Our architecture deploys private vector databases inside your isolated VPC and utilizes zero-data-retention enterprise API endpoints with strict DLP (Data Loss Prevention) scanners.</p>

      <h3>Production Guardrails</h3>
      <p>To eliminate hallucination risks, we enforce structured JSON schema outputs with Pydantic validation and strict prompt governance. If an LLM response does not meet semantic confidence thresholds, the system automatically falls back to deterministic workflows.</p>
    `
  },
  {
    id: "typescript-clean-architecture",
    category: "Engineering Insights",
    title: "Why Strict TypeScript and Clean Architecture Are Essential for Long-Term ROI",
    excerpt: "How strict typing and domain-driven design prevent codebase rot, reduce refactoring costs by 60%, and accelerate team onboarding.",
    date: "September 2026",
    readTime: "6 min read",
    author: "Lead Architect",
    content: `
      <h3>The Real Cost of Software Maintenance</h3>
      <p>Industry research consistently proves that up to 70% of total software expenditure occurs after initial release during ongoing maintenance. Codebases written without strict typing and architectural boundaries rapidly degrade into brittle 'spaghetti code' that engineers fear to modify.</p>

      <h3>Separation of Concerns</h3>
      <p>By strictly decoupling business domain logic from databases and UI frameworks, changes in third-party services never break core business rules. At BetaByte Labs, our code passes strict static analysis and automated regression suites, ensuring long-term peace of mind.</p>
    `
  }
];
