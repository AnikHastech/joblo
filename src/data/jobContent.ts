import type { Job } from "@types/index";
import { getCompany } from "@data/companies";

export interface JobContent {
  overview: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: { icon: string; label: string; sub?: string }[];
  process: { title: string; body: string; days: string }[];
}

/**
 * Generates rich, realistic job content from a base Job record.
 * Content is templated from job.category + experience — every job
 * gets contextually appropriate copy without needing full CMS entries.
 */
export function getJobContent(job: Job): JobContent {
  const company = getCompany(job.companyId);
  const cat = job.categorySlug;
  const exp = job.experience;
  const title = job.title;

  // Category-flavored overviews
  const overviews: Record<string, string> = {
    design:       `${company.name} is looking for a ${title.toLowerCase()} to shape the visual language and product experience of what we're building. You'll partner closely with engineering, product, and research to ship work that feels considered, honest, and effortless to use.`,
    engineering:  `${company.name} is hiring a ${title.toLowerCase()} to work on the systems that power our platform. You'll write code that runs in production for millions of users, review other people's work with rigor, and help set the direction for how we build.`,
    product:      `We're growing our product team at ${company.name} and looking for a ${title.toLowerCase()} to own an area of the product end-to-end. You'll set strategy, sequence execution, and work with cross-functional partners to ship things people love.`,
    marketing:    `${company.name} is looking for a ${title.toLowerCase()} to help us reach more of the right people. You'll own campaigns, positioning, and channels — with the autonomy of a founder and the resources of a well-funded team.`,
    data:         `We're building a team of researchers and engineers at ${company.name} pushing the boundaries of what's possible. As a ${title.toLowerCase()}, you'll work on problems that matter, publish when it makes sense, and collaborate with some of the sharpest minds in the field.`,
    sales:        `${company.name} is hiring a ${title.toLowerCase()} to grow our customer base and shape how we go to market. You'll own a territory, work with engaged prospects, and help build the sales motion from the inside.`,
    customer:     `${company.name} is looking for a ${title.toLowerCase()} to be the bridge between our customers and our team. You'll help customers succeed, feed insights back to product, and shape the way we support the people who use us.`,
    finance:      `${company.name} is hiring a ${title.toLowerCase()} to help us build a durable, well-run business. You'll partner with leadership on forecasting, planning, and the operational rhythms that keep a company on track.`,
  };

  // Role-specific "about the role" flavor
  const aboutRoles: Record<string, string> = {
    design:       "You'll own the design of core surfaces from initial exploration through pixel-perfect ship. Expect to prototype in code where useful, run your own research, and be the highest-bar reviewer on your team.",
    engineering:  "You'll write, review, and ship production code across the stack. Expect to be involved in architecture decisions, mentor other engineers as you grow, and take on-call rotation as part of the team.",
    product:      "You'll be the single point of accountability for your product area — from problem definition to launch to iteration. Expect to write specs, run reviews, and make hard prioritization calls.",
    marketing:    "You'll own campaigns end-to-end — from insight, to creative, to measurement. Expect to write copy yourself, brief agencies where needed, and be judged on outcomes rather than activity.",
    data:         "You'll design and run experiments, build models, and communicate findings to non-technical audiences. Expect to spend time in the codebase, in docs, and in whiteboard sessions with peers.",
    sales:        "You'll own the full cycle: prospecting, discovery, demo, negotiation, close. Expect a warm pipeline supplemented with your own outbound, and a clear comp plan tied to real outcomes.",
    customer:     "You'll manage a book of customers through onboarding, adoption, and renewal. Expect to run trainings, resolve issues alongside support, and be the voice of the customer internally.",
    finance:      "You'll own financial planning, reporting, and analysis for one or more business units. Expect to build models from scratch, present to leadership, and improve the operational cadence over time.",
  };

  // Responsibilities pool (mixed by category)
  const responsibilitiesPool: Record<string, string[]> = {
    design: [
      "Own the design of major surfaces from concept to shipped.",
      "Partner with PMs and engineers to define what to build and why.",
      "Contribute to and evolve our design system.",
      "Run user research to inform decisions and validate assumptions.",
      "Present work regularly to the whole company, including executives.",
      "Set the bar for craft — and raise it for others through review.",
    ],
    engineering: [
      "Design, build, and ship features that run in production for millions of users.",
      "Review PRs from peers with care and rigor.",
      "Participate in architectural decisions and technical direction.",
      "Improve our tooling, tests, and developer experience.",
      "Share on-call rotation and take responsibility for reliability.",
      "Mentor other engineers and grow the technical culture.",
    ],
    product: [
      "Own the roadmap for your product area, from opportunity to outcome.",
      "Write clear specs and lead cross-functional reviews.",
      "Prioritize ruthlessly and communicate tradeoffs.",
      "Analyze user behavior and measure impact after launch.",
      "Work with design, engineering, and go-to-market on every launch.",
      "Represent your area to leadership and the wider company.",
    ],
    marketing: [
      "Own campaign strategy, execution, and measurement.",
      "Write copy, brief creative, and produce assets in a small team.",
      "Manage channel budgets and optimize for pipeline / revenue.",
      "Partner with product on positioning and launch narratives.",
      "Analyze funnel performance and iterate quickly.",
      "Report results and learnings to leadership regularly.",
    ],
    data: [
      "Design and run experiments end-to-end.",
      "Build models, evaluate rigorously, and communicate results.",
      "Contribute to research direction alongside peers.",
      "Write clean, reproducible code and documentation.",
      "Partner with product and engineering to ship what you learn.",
      "Present findings to internal and, sometimes, external audiences.",
    ],
    sales: [
      "Own a territory: prospecting, qualification, and closing.",
      "Run discovery calls and personalized demos.",
      "Negotiate commercial terms with legal support.",
      "Partner with SDRs, marketing, and CS to grow pipeline.",
      "Forecast accurately and report to leadership weekly.",
      "Represent the customer perspective back into product.",
    ],
    customer: [
      "Own a portfolio of customer accounts end-to-end.",
      "Drive adoption, retention, and expansion.",
      "Run onboarding, trainings, and quarterly business reviews.",
      "Partner with support on complex escalations.",
      "Feed insights back to product, sales, and marketing.",
      "Identify referenceable customers and case study opportunities.",
    ],
    finance: [
      "Own budgeting, forecasting, and reporting for one or more BUs.",
      "Build and maintain financial models from scratch.",
      "Partner with leadership on strategic planning.",
      "Improve monthly and quarterly close processes.",
      "Analyze unit economics and pricing decisions.",
      "Present financial performance to the board and investors.",
    ],
  };

  const requirementsPool: Record<string, string[]> = {
    design: [
      `${exp}+ years of product design experience at a modern software company.`,
      "A portfolio showing shipped work at scale — not just concepts.",
      "Strong systems thinking; comfort with Figma and component APIs.",
      "Comfort presenting work and defending decisions.",
      "Excellent written communication — you can write a spec.",
    ],
    engineering: [
      `${exp === "Entry" ? "1+" : exp === "Mid" ? "3+" : exp === "Senior" ? "5+" : "8+"} years of production engineering experience.`,
      "Proficiency in the primary languages of the stack (TypeScript / Go / Rust).",
      "Strong grasp of distributed systems and tradeoffs.",
      "Written and verbal communication that scales beyond your team.",
      "A track record of shipping quality software on time.",
    ],
    product: [
      `${exp === "Mid" ? "3+" : "5+"} years of product management at a technical company.`,
      "Comfort reading a codebase and running a SQL query.",
      "Strong analytical foundation — you can defend decisions with data.",
      "Excellent written communication (specs, narratives, docs).",
      "A shipped product portfolio you can walk us through.",
    ],
    marketing: [
      `${exp === "Mid" ? "3+" : "5+"} years of B2B (or prosumer) marketing experience.`,
      "Track record of running campaigns that moved a real metric.",
      "Strong writer — please share links to your best work.",
      "Comfort with analytics tooling and reading data yourself.",
      "Cross-functional collaboration in a fast-moving environment.",
    ],
    data: [
      `${exp === "Mid" ? "3+" : "5+"} years of applied ML or research engineering experience.`,
      "Strong Python and PyTorch (or JAX) skills.",
      "Familiarity with modern LLM training and evaluation techniques.",
      "Published work, technical reports, or shipped ML systems.",
      "Rigor, curiosity, and a bias for reproducibility.",
    ],
    sales: [
      `${exp === "Mid" ? "3+" : "5+"} years of B2B closing experience.`,
      "Track record of hitting or exceeding quota consistently.",
      "Comfort with technical products and technical buyers.",
      "Excellent discovery and negotiation skills.",
      "A CRM discipline that makes forecasting reliable.",
    ],
    customer: [
      `${exp === "Mid" ? "3+" : "5+"} years in CS, account management, or a similar role.`,
      "Experience owning renewals and expansion targets.",
      "Comfort presenting to executive audiences.",
      "Strong project management skills.",
      "Empathy for both customers and internal stakeholders.",
    ],
    finance: [
      `${exp === "Mid" ? "3+" : "5+"} years in finance, banking, or FP&A at a growth company.`,
      "Strong modeling skills; comfort with SQL a plus.",
      "Excellent written communication and presentation skills.",
      "Attention to detail without losing sight of the big picture.",
      "A degree in Finance, Accounting, or a related field.",
    ],
  };

  const niceToHave: Record<string, string[]> = {
    design:      ["Motion or 3D experience.", "Front-end coding fluency.", "Prior work at an early-stage company."],
    engineering: ["Open-source contributions.", "Systems programming background.", "Comfort with performance profiling."],
    product:     ["Founder or founding-team experience.", "Fluency in a design tool.", "Prior work in the same category."],
    marketing:   ["SEO or lifecycle depth.", "Podcast or video production experience.", "Design or code fluency."],
    data:        ["Publications at top ML venues.", "Distributed training experience.", "Prior product experience."],
    sales:       ["Startup or founding AE experience.", "Technical background.", "Network in the buyer persona."],
    customer:    ["Technical background.", "Multilingual fluency.", "Product / project management skills."],
    finance:     ["CPA or CFA credentials.", "SaaS metrics experience.", "IPO or M&A involvement."],
  };

  const benefits = [
    { icon: "wallet",      label: "Competitive comp",       sub: "Salary + meaningful equity" },
    { icon: "globe",       label: "Fully remote",           sub: "Work from any timezone" },
    { icon: "checkCircle", label: "Best-in-class insurance", sub: "Medical, dental, vision" },
    { icon: "sparkles",    label: "Wellness & learning",     sub: "$2K/yr stipends" },
    { icon: "users",       label: "5 weeks PTO",             sub: "+ paid parental leave" },
    { icon: "briefcase",   label: "Home office budget",      sub: "$3K one-time + monthly" },
  ];

  const process = [
    { title: "Application review",  days: "Within 3 days",  body: "We read every application in full. If there's a fit, we'll reach out to schedule a call." },
    { title: "Intro conversation",  days: "30 minutes",     body: "A call with a hiring manager to learn about you, share more about the role, and answer questions." },
    { title: "Working session",     days: "60–90 minutes",  body: "A practical exercise or portfolio review focused on the kind of work you'll actually do here." },
    { title: "Team meets",          days: "2–3 conversations", body: "Chats with future teammates to explore how we'd work together day to day." },
    { title: "Offer",               days: "Within 1 week",  body: "We aim to move quickly. If we're excited about you, we'll say so — and back it up with a strong offer." },
  ];

  return {
    overview:         overviews[cat]         ?? overviews.engineering,
    aboutRole:        aboutRoles[cat]        ?? aboutRoles.engineering,
    responsibilities: responsibilitiesPool[cat] ?? responsibilitiesPool.engineering,
    requirements:     requirementsPool[cat]  ?? requirementsPool.engineering,
    niceToHave:       niceToHave[cat]        ?? niceToHave.engineering,
    benefits,
    process,
  };
}
