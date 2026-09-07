export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number; // per month, billed annually
  currency: "$";
  cta: string;
  highlight?: boolean;
  features: string[];
  meta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For side projects and first hires.",
    monthly: 0, yearly: 0, currency: "$",
    cta: "Post your first job",
    meta: "Free forever. No credit card.",
    features: [
      "1 active job posting",
      "30-day listing duration",
      "Basic applicant tracking",
      "Standard placement in feed",
      "Email support",
      "Company profile page",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For teams hiring consistently.",
    monthly: 149, yearly: 119, currency: "$",
    cta: "Start 14-day free trial",
    highlight: true,
    meta: "Most popular for Series A – C companies.",
    features: [
      "10 active job postings",
      "60-day listing duration",
      "Advanced applicant tracking",
      "Featured placement",
      "Candidate search (5K/mo)",
      "Custom career page",
      "Slack + email integrations",
      "Priority support (< 4h)",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For high-volume recruiting orgs.",
    monthly: 499, yearly: 399, currency: "$",
    cta: "Talk to sales",
    meta: "Custom volume pricing available.",
    features: [
      "Unlimited job postings",
      "Unlimited listing duration",
      "Full ATS + team seats",
      "Priority featured placement",
      "Unlimited candidate search",
      "AI-matched shortlists",
      "ATS integrations (Greenhouse, Lever, Ashby)",
      "SSO + audit logs",
      "Dedicated success manager",
      "SLA-backed support",
    ],
  },
];

export interface FeatureRow {
  label: string;
  starter: string | boolean;
  growth:  string | boolean;
  scale:   string | boolean;
}

export const featureMatrix: { section: string; rows: FeatureRow[] }[] = [
  {
    section: "Job postings",
    rows: [
      { label: "Active postings",     starter: "1",       growth: "10",       scale: "Unlimited" },
      { label: "Listing duration",    starter: "30 days", growth: "60 days",  scale: "Unlimited" },
      { label: "Featured placement",  starter: false,     growth: true,       scale: "Priority"  },
      { label: "Custom career page",  starter: false,     growth: true,       scale: true        },
    ],
  },
  {
    section: "Candidate sourcing",
    rows: [
      { label: "Applicant tracking",     starter: "Basic", growth: "Advanced", scale: "Full ATS" },
      { label: "Candidate search",       starter: false,   growth: "5K/mo",    scale: "Unlimited" },
      { label: "AI-matched shortlists",  starter: false,   growth: false,      scale: true },
      { label: "Team seats",             starter: "1",     growth: "5",        scale: "Unlimited" },
    ],
  },
  {
    section: "Integrations & security",
    rows: [
      { label: "Slack + email",     starter: false, growth: true,       scale: true },
      { label: "ATS integrations",  starter: false, growth: false,      scale: true },
      { label: "SSO",               starter: false, growth: false,      scale: true },
      { label: "Audit logs",        starter: false, growth: false,      scale: true },
    ],
  },
  {
    section: "Support",
    rows: [
      { label: "Support",              starter: "Email",     growth: "Priority < 4h", scale: "SLA" },
      { label: "Success manager",      starter: false,       growth: false,           scale: true },
      { label: "Onboarding session",   starter: false,       growth: true,            scale: true },
    ],
  },
];

export type FAQCategory = "Billing" | "Plans" | "Features" | "Support";

export interface PricingFAQ {
  q: string;
  a: string;
  category: FAQCategory;
}

export const pricingFAQs: PricingFAQ[] = [
  { category: "Billing",  q: "Do I need a credit card to start?",                  a: "No. Starter is free forever and requires no card. You can upgrade any time in the dashboard — we'll only ask for payment when you cross into a paid tier." },
  { category: "Plans",    q: "Can I switch plans later?",                          a: "Yes — up or down, at any time. If you upgrade mid-cycle we prorate the difference. Downgrades take effect at your next renewal." },
  { category: "Plans",    q: "How does the free trial work?",                      a: "The Growth plan comes with 14 days of full access. No card required, no auto-conversion — you decide at the end whether to stay on Growth, downgrade to Starter, or move to Scale." },
  { category: "Features", q: "What counts as an active job posting?",              a: "Any listing that's visible to candidates. Draft, closed, and archived listings don't count toward your limit — so you can prep several roles before publishing." },
  { category: "Billing",  q: "Do you offer discounts for startups or non-profits?", a: "Yes — 40% off Growth for pre-seed / seed companies (< $3M ARR), and 50% off for verified non-profits. Reach out via /contact with your incorporation details." },
  { category: "Billing",  q: "What payment methods do you accept?",                a: "All major cards, ACH, and bank transfer for annual contracts on Scale. Invoicing available on request for Growth annual and Scale." },
  { category: "Support",  q: "What's the difference between Growth and Scale support?", a: "Growth includes priority email support with < 4h median response during business hours. Scale adds a dedicated success manager, SLA-backed response times, and quarterly reviews." },
  { category: "Features", q: "Can I integrate with my existing ATS?",              a: "Scale includes native integrations with Greenhouse, Lever, and Ashby — two-way sync for candidates, stages, and notes. Zapier + webhooks are available on all plans." },
];
