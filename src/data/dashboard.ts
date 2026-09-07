/**
 * Candidate dashboard mock data — represents a signed-in candidate
 * named Maya Okonkwo (see candidates.ts:cand-1). All dashboard pages
 * pull from this to stay consistent.
 */
import { jobs } from "@data/jobs";
import { getCompany } from "@data/companies";

export type ApplicationStatus = "Applied" | "Reviewing" | "Interview" | "Offer" | "Rejected" | "Hired";

export interface Application {
  id: string;
  jobId: string;      // → jobs[].id
  appliedOn: string;  // "3 days ago"
  status: ApplicationStatus;
  lastUpdate: string;
  nextStep?: string;
}

export interface JobAlert {
  id: string;
  name: string;
  keyword: string;
  filters: string[];    // ["Remote", "Senior", "$150k+"]
  frequency: "Instant" | "Daily" | "Weekly";
  active: boolean;
  matches: number;
  createdOn: string;
}

export interface DashboardNotification {
  id: string;
  icon: string;         // Icon name
  title: string;
  body: string;
  time: string;
  read: boolean;
  href?: string;
}

export interface ActivityEvent {
  id: string;
  type: "application" | "view" | "save" | "message" | "alert";
  title: string;
  meta: string;
  time: string;
}

// Signed-in candidate identity (used across dashboard shell)
export const currentCandidate = {
  id: "cand-1",
  name: "Maya Okonkwo",
  firstName: "Maya",
  headline: "Senior Product Designer · Design Systems, Motion, B2B SaaS",
  bio: "Designer with 8 years of experience shipping product surfaces at Linear and previously at Figma. Interested in tools for makers, developer platforms, and thoughtful defaults.",
  email: "maya@okonkwo.co",
  phone: "+1 (415) 555-0187",
  location: "San Francisco, CA",
  timezone: "PT · UTC-8",
  role: "Senior Product Designer",
  yearsExperience: 8,
  desiredSalary: "$180k – $220k",
  openToRemote: true,
  availability: "Open to offers" as const,
  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Maya&backgroundColor=ffdfbf&scale=110",
  profileCompletion: 82,
  links: {
    website: "https://mayaokonkwo.design",
    linkedin: "https://linkedin.com/in/mayaokonkwo",
    dribbble: "https://dribbble.com/mayaokonkwo",
    github:   "https://github.com/mayaokonkwo",
  },
  skills: ["Product design", "Design systems", "Figma", "Motion", "Prototyping", "User research", "Front-end (React)", "Tailwind", "Framer"],
  languages: ["English (native)", "Yoruba (fluent)", "French (conversational)"],
};

export const experience = [
  {
    id: "exp-1",
    company: "Linear",   companySlug: "linear",   role: "Staff Product Designer",
    start: "Aug 2023", end: "Present", location: "San Francisco, CA · Hybrid",
    summary: "Lead design for core issue tracking surfaces. Own the design system, mentor 4 designers, run cross-functional reviews with engineering leads.",
  },
  {
    id: "exp-2",
    company: "Figma",    companySlug: "figma",    role: "Senior Product Designer",
    start: "Jan 2020",   end: "Jul 2023", location: "San Francisco, CA",
    summary: "Shipped FigJam whiteboard MVP and led design of the community marketplace. Grew the design systems team from 2 → 7.",
  },
  {
    id: "exp-3",
    company: "Stripe",   companySlug: "stripe",   role: "Product Designer",
    start: "Jun 2017",   end: "Dec 2019", location: "Dublin, Ireland",
    summary: "Owned the Stripe Dashboard invoicing and subscriptions surfaces. First designer to join the Ireland office.",
  },
];

export const education = [
  { id: "ed-1", school: "Central Saint Martins",    degree: "BA · Graphic Communication Design", start: "2013", end: "2016" },
  { id: "ed-2", school: "RISD Continuing Education", degree: "Type Design Intensive",             start: "2019", end: "2019" },
];

// Applications — use real job IDs from jobs.ts
export const applications: Application[] = [
  { id: "app-1",  jobId: "j2",  appliedOn: "2 days ago",  status: "Interview", lastUpdate: "Interview scheduled for Thu 3pm PT",       nextStep: "Loop 2 · Portfolio review" },
  { id: "app-2",  jobId: "j11", appliedOn: "5 days ago",  status: "Reviewing", lastUpdate: "Application seen by hiring manager",       nextStep: "Awaiting response" },
  { id: "app-3",  jobId: "j13", appliedOn: "1 week ago",  status: "Offer",     lastUpdate: "Offer extended — respond by Fri",           nextStep: "Review offer terms" },
  { id: "app-4",  jobId: "j18", appliedOn: "1 week ago",  status: "Applied",   lastUpdate: "Application received",                     nextStep: "Awaiting review" },
  { id: "app-5",  jobId: "j5",  appliedOn: "2 weeks ago", status: "Rejected",  lastUpdate: "Position filled by another candidate",     nextStep: undefined },
  { id: "app-6",  jobId: "j20", appliedOn: "3 weeks ago", status: "Interview", lastUpdate: "Round 3 — team meet on Mon",                nextStep: "Prepare case study" },
  { id: "app-7",  jobId: "j4",  appliedOn: "3 weeks ago", status: "Reviewing", lastUpdate: "Under review by design lead",              nextStep: undefined },
  { id: "app-8",  jobId: "j14", appliedOn: "1 month ago", status: "Rejected",  lastUpdate: "Not moving forward",                       nextStep: undefined },
];

// Saved jobs — real job IDs
export const savedJobIds = ["j1", "j6", "j7", "j14", "j17", "j24"];

export const jobAlerts: JobAlert[] = [
  { id: "al-1", name: "Senior Design roles",     keyword: "Product Designer",  filters: ["Senior", "Remote", "$160k+"],           frequency: "Daily",   active: true,  matches: 14, createdOn: "Jan 2, 2026" },
  { id: "al-2", name: "Design systems work",     keyword: "Design Systems",    filters: ["Any level", "$140k+"],                  frequency: "Weekly",  active: true,  matches: 6,  createdOn: "Dec 18, 2025" },
  { id: "al-3", name: "Founding designer roles", keyword: "Founding Designer", filters: ["Startup", "Equity heavy"],              frequency: "Instant", active: true,  matches: 2,  createdOn: "Nov 22, 2025" },
  { id: "al-4", name: "AI product design",       keyword: "AI Product Designer", filters: ["Senior+", "Remote"],                   frequency: "Daily",   active: false, matches: 0,  createdOn: "Oct 08, 2025" },
];

export const notifications: DashboardNotification[] = [
  { id: "n-1", icon: "sparkles",   title: "Offer extended!",                body: "Anthropic sent you an offer for Senior ML Engineer, Alignment.",       time: "2h",  read: false, href: "/dashboard/applications" },
  { id: "n-2", icon: "checkCircle",title: "Interview confirmed",            body: "Vercel confirmed your Loop 2 · Portfolio review for Thursday 3pm PT.", time: "6h",  read: false, href: "/dashboard/applications" },
  { id: "n-3", icon: "bell",       title: "2 new matches",                  body: "Two new roles match your \"Senior Design roles\" alert.",              time: "1d",  read: false, href: "/dashboard/alerts" },
  { id: "n-4", icon: "user",       title: "Recruiter viewed your profile",  body: "A recruiter at Figma viewed your profile 3 times this week.",           time: "2d",  read: true,  href: "/dashboard/profile" },
  { id: "n-5", icon: "briefcase",  title: "Application received",           body: "Your application for Senior Full-stack at Vercel was received.",        time: "3d",  read: true,  href: "/dashboard/applications" },
];

export const activity: ActivityEvent[] = [
  { id: "act-1", type: "application", title: "Applied to Staff Engineer, Platform", meta: "Vercel · Remote",             time: "2 days ago" },
  { id: "act-2", type: "view",        title: "Profile viewed",                        meta: "By recruiter at Anthropic",  time: "3 days ago" },
  { id: "act-3", type: "save",        title: "Saved a role",                          meta: "Senior Product Designer at Linear", time: "3 days ago" },
  { id: "act-4", type: "message",     title: "New message from Vercel",               meta: "About Loop 2 scheduling",    time: "4 days ago" },
  { id: "act-5", type: "alert",       title: "3 new alert matches",                   meta: "Senior Design roles",        time: "5 days ago" },
  { id: "act-6", type: "application", title: "Applied to Research Engineer",          meta: "Anthropic · San Francisco",  time: "5 days ago" },
];

// Recommended jobs — pick 6 that aren't already applied/saved
export const recommendedJobIds = ["j3", "j10", "j15", "j16", "j19", "j21"];

// ── Offers (subset of applications with actionable offer terms)
export interface OfferBenefit { icon: string; label: string }
export interface OfferPackage {
  id: string;
  applicationId: string;   // → applications[].id
  jobId: string;           // → jobs[].id
  receivedOn: string;
  respondBy: string;
  daysLeft: number;
  status: "Pending" | "Accepted" | "Declined" | "Countered";
  baseSalary: number;
  bonus: number;           // signing bonus
  equity: string;          // "0.15% · 4-yr vest"
  currency: "$";
  startDate: string;
  location: string;
  remote: boolean;
  benefits: OfferBenefit[];
  notes: string;
}

export const offers: OfferPackage[] = [
  {
    id: "of-1", applicationId: "app-3", jobId: "j13",
    receivedOn: "Feb 10, 2026", respondBy: "Feb 17, 2026", daysLeft: 3,
    status: "Pending",
    baseSalary: 320000, bonus: 40000, equity: "0.18% · 4-yr, 1-yr cliff",
    currency: "$", startDate: "Mar 03, 2026",
    location: "San Francisco, CA", remote: true,
    benefits: [
      { icon: "wallet",      label: "Sign-on bonus $40K" },
      { icon: "checkCircle", label: "Full medical / dental / vision" },
      { icon: "users",       label: "6 weeks PTO + parental leave" },
      { icon: "sparkles",    label: "$3K/yr learning stipend" },
      { icon: "briefcase",   label: "$5K home office one-time" },
    ],
    notes: "Includes 15% cash-out option year 3. Company covers relocation up to $12K.",
  },
  {
    id: "of-2", applicationId: "app-1", jobId: "j2",
    receivedOn: "Feb 12, 2026", respondBy: "Feb 19, 2026", daysLeft: 5,
    status: "Pending",
    baseSalary: 265000, bonus: 25000, equity: "0.09% · 4-yr, 1-yr cliff",
    currency: "$", startDate: "Feb 24, 2026",
    location: "Remote — Worldwide", remote: true,
    benefits: [
      { icon: "globe",       label: "Fully remote, any timezone" },
      { icon: "checkCircle", label: "Best-in-class health cover" },
      { icon: "users",       label: "5 weeks PTO" },
      { icon: "sparkles",    label: "$2K/yr wellness + learning" },
    ],
    notes: "Signing bonus paid 30 days after start. Annual off-site included.",
  },
];

export const activeOffers = offers.filter((o) => o.status === "Pending");

// Derived stats for dashboard KPIs
export const dashboardStats = {
  activeApplications: applications.filter((a) => !["Rejected", "Hired"].includes(a.status)).length,
  interviews:         applications.filter((a) => a.status === "Interview").length,
  offers:             applications.filter((a) => a.status === "Offer").length,
  savedJobs:          savedJobIds.length,
  alerts:             jobAlerts.filter((a) => a.active).length,
  profileViews:       147,
  viewsChangePct:     +18,
  responseRate:       62,  // % of applications that got a response
};

// Helper resolvers
export const applicationWithJob = (a: Application) => {
  const job = jobs.find((j) => j.id === a.jobId);
  if (!job) return { application: a, job: undefined, company: undefined };
  return { application: a, job, company: getCompany(job.companyId) };
};

export const savedJobs = savedJobIds
  .map((id) => jobs.find((j) => j.id === id))
  .filter((j): j is NonNullable<typeof j> => Boolean(j));

export const recommendedJobs = recommendedJobIds
  .map((id) => jobs.find((j) => j.id === id))
  .filter((j): j is NonNullable<typeof j> => Boolean(j));

// Status badge color mapping (for pipeline pills)
export const statusStyle: Record<ApplicationStatus, { bg: string; text: string; dot: string }> = {
  Applied:   { bg: "bg-ink-100",       text: "text-ink-700",    dot: "bg-ink-500"     },
  Reviewing: { bg: "bg-sky-100",       text: "text-sky-800",    dot: "bg-sky-500"     },
  Interview: { bg: "bg-violet-100",    text: "text-violet-700", dot: "bg-violet-500"  },
  Offer:     { bg: "bg-emerald-100",   text: "text-emerald-800", dot: "bg-emerald-500" },
  Rejected:  { bg: "bg-rose-100",      text: "text-rose-700",   dot: "bg-rose-500"    },
  Hired:     { bg: "bg-amber-100",     text: "text-amber-800",  dot: "bg-amber-500"   },
};
