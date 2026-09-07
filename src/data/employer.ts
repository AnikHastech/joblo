/**
 * Employer mock data — the signed-in user is Aisha Chen,
 * Head of Talent at Linear (company c1). All employer pages
 * pull from this to stay consistent.
 */
import { jobs } from "@data/jobs";
import { candidates, type Candidate } from "@data/candidates";
import { getCompany } from "@data/companies";

export type ApplicantStatus =
  | "Applied" | "Reviewing" | "Shortlisted" | "Interview" | "Rejected" | "Hired";

export interface Applicant {
  id: string;
  candidateId: string;   // → candidates[].id (may be beyond seeded list — see below)
  jobId: string;         // → jobs[].id
  appliedOn: string;
  daysAgo: number;
  status: ApplicantStatus;
  matchScore: number;    // 0-100
  rating?: 1 | 2 | 3 | 4 | 5;
  shortlisted?: boolean;
  nextStep?: string;
  lastActivity: string;
}

export const currentEmployer = {
  companyId: "c1", // Linear
  name: "Aisha Chen",
  firstName: "Aisha",
  role: "Head of Talent",
  email: "aisha@linear.app",
  phone: "+1 (415) 555-0132",
  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Aisha-Employer&backgroundColor=b6e3f4&scale=110",
};

// ── Extra applicant profiles (in addition to seeded candidates)
// so we get 15+ applicants across Linear's roles.
const extraApplicants: Candidate[] = [
  { id: "extra-1",  slug: "amara-osei",       name: "Amara Osei",       role: "Senior Product Designer",  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Amara&backgroundColor=ffdfbf",  location: "Lagos, Nigeria",   experienceYears: 7, rate: "$120/hr", skills: ["Figma","Design Systems","B2B"],    availability: "Open to offers", verified: true },
  { id: "extra-2",  slug: "diego-marin",      name: "Diego Marín",      role: "Product Designer",          avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Diego&backgroundColor=c0aede",  location: "Barcelona, Spain", experienceYears: 5, rate: "$95/hr",  skills: ["Figma","Motion","Illustration"],   availability: "Available in 2 weeks", verified: true },
  { id: "extra-3",  slug: "sofia-alvarez-c",  name: "Sofía Álvarez",    role: "Design Systems Engineer",   avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sofia-C&backgroundColor=d1d4f9", location: "Mexico City, MX",  experienceYears: 6, rate: "$110/hr", skills: ["React","Tokens","Storybook"],       availability: "Interviewing", verified: true },
  { id: "extra-4",  slug: "kenji-nakamura-c", name: "Kenji Nakamura",   role: "Senior UX Researcher",      avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Kenji-C&backgroundColor=ffd5dc", location: "Tokyo, Japan",     experienceYears: 9, rate: "$130/hr", skills: ["Research","Analysis","Facilitation"], availability: "Open to offers", verified: true },
  { id: "extra-5",  slug: "priya-raman-c",    name: "Priya Raman",      role: "Product Manager, Growth",   avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya-C&backgroundColor=b6e3f4", location: "London, UK",       experienceYears: 6, rate: "$105/hr", skills: ["Growth","Fintech","Analytics"],   availability: "Available in 2 weeks", verified: true },
  { id: "extra-6",  slug: "marcus-bergstrom-c", name: "Marcus Bergström", role: "Staff Engineer",         avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus-C&backgroundColor=ffdfbf", location: "Stockholm, SE",    experienceYears: 11, rate: "$180/hr", skills: ["TypeScript","Rust","Systems"],   availability: "Open to offers", verified: true },
  { id: "extra-7",  slug: "elena-vasquez",    name: "Elena Vásquez",    role: "Senior Backend Engineer",   avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Elena-V&backgroundColor=c0aede", location: "Buenos Aires, AR", experienceYears: 8, rate: "$140/hr", skills: ["Go","Postgres","gRPC"],          availability: "Interviewing", verified: true },
  { id: "extra-8",  slug: "james-oconnor",    name: "James O'Connor",   role: "Frontend Engineer",         avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=James&backgroundColor=d1d4f9",  location: "Dublin, IE",       experienceYears: 4, rate: "$85/hr",  skills: ["React","TypeScript","CSS"],       availability: "Open to offers", verified: true },
  { id: "extra-9",  slug: "aisha-kabir",      name: "Aisha Kabir",      role: "Product Manager, Platform", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Aisha-K&backgroundColor=b6e3f4", location: "Karachi, PK",      experienceYears: 7, rate: "$115/hr", skills: ["Platform","APIs","Enterprise"],   availability: "Available in 2 weeks", verified: true },
];

// All candidate-like records that the employer sees as applicants
export const applicantPool: Candidate[] = [
  ...candidates.filter((c) => ["cand-1","cand-2","cand-4","cand-6"].includes(c.id)),
  ...extraApplicants,
];

// Applicants applied to Linear (companyId c1) roles.
// Linear jobs: j1 (Senior Product Designer), j17 (Customer Success Manager)
// Also j14 (Product Designer at Notion) — but employer only cares about c1 → filter later.
// We create diverse pipeline across j1 mostly.

export const applicants: Applicant[] = [
  { id: "ap-1",  candidateId: "cand-1",   jobId: "j1", appliedOn: "Today",       daysAgo: 0,  status: "Shortlisted", matchScore: 94, rating: 5, shortlisted: true,  nextStep: "Schedule loop 2",        lastActivity: "Moved to shortlist by Aisha" },
  { id: "ap-2",  candidateId: "extra-1",  jobId: "j1", appliedOn: "1 day ago",   daysAgo: 1,  status: "Interview",   matchScore: 89, rating: 4, shortlisted: true,  nextStep: "Loop 3 · Team meet Thu",  lastActivity: "Portfolio review completed" },
  { id: "ap-3",  candidateId: "extra-2",  jobId: "j1", appliedOn: "2 days ago",  daysAgo: 2,  status: "Reviewing",   matchScore: 82, rating: 4, shortlisted: false, nextStep: "Awaiting design lead review", lastActivity: "Application viewed" },
  { id: "ap-4",  candidateId: "cand-6",   jobId: "j1", appliedOn: "3 days ago",  daysAgo: 3,  status: "Shortlisted", matchScore: 91, rating: 5, shortlisted: true,  nextStep: "Send take-home",           lastActivity: "Rating updated to 5★" },
  { id: "ap-5",  candidateId: "extra-3",  jobId: "j1", appliedOn: "5 days ago",  daysAgo: 5,  status: "Interview",   matchScore: 87, rating: 4, shortlisted: true,  nextStep: "Final round Mon",         lastActivity: "Positive interview feedback" },
  { id: "ap-6",  candidateId: "extra-4",  jobId: "j1", appliedOn: "1 week ago",  daysAgo: 7,  status: "Applied",     matchScore: 76,             shortlisted: false, nextStep: "Initial review",          lastActivity: "Application received" },
  { id: "ap-7",  candidateId: "extra-5",  jobId: "j1", appliedOn: "1 week ago",  daysAgo: 8,  status: "Reviewing",   matchScore: 71, rating: 3, shortlisted: false, nextStep: "Design lead to review",    lastActivity: "Portfolio viewed" },
  { id: "ap-8",  candidateId: "extra-6",  jobId: "j1", appliedOn: "10 days ago", daysAgo: 10, status: "Applied",     matchScore: 68,             shortlisted: false, nextStep: "Initial review",          lastActivity: "Application received" },
  { id: "ap-9",  candidateId: "cand-2",   jobId: "j1", appliedOn: "2 weeks ago", daysAgo: 14, status: "Rejected",    matchScore: 54, rating: 2, shortlisted: false, nextStep: undefined,                 lastActivity: "Not a match for this role" },
  { id: "ap-10", candidateId: "extra-8",  jobId: "j1", appliedOn: "3 weeks ago", daysAgo: 21, status: "Hired",       matchScore: 96, rating: 5, shortlisted: true,  nextStep: "Onboarding scheduled",     lastActivity: "Accepted offer" },
  // j17 — Customer Success Manager
  { id: "ap-11", candidateId: "extra-9",  jobId: "j17",appliedOn: "1 day ago",   daysAgo: 1,  status: "Reviewing",   matchScore: 84, rating: 4, shortlisted: false, nextStep: "Hiring manager to review",  lastActivity: "Application submitted" },
  { id: "ap-12", candidateId: "cand-4",   jobId: "j17",appliedOn: "4 days ago",  daysAgo: 4,  status: "Interview",   matchScore: 90, rating: 5, shortlisted: true,  nextStep: "Loop 1 · Intro Fri",       lastActivity: "Interview scheduled" },
  { id: "ap-13", candidateId: "extra-7",  jobId: "j17",appliedOn: "1 week ago",  daysAgo: 7,  status: "Applied",     matchScore: 72,             shortlisted: false, nextStep: "Initial review",          lastActivity: "Application received" },
  { id: "ap-14", candidateId: "extra-4",  jobId: "j17",appliedOn: "2 weeks ago", daysAgo: 14, status: "Rejected",    matchScore: 48,             shortlisted: false, nextStep: undefined,                 lastActivity: "Better fit elsewhere" },
  { id: "ap-15", candidateId: "cand-1",   jobId: "j17",appliedOn: "3 weeks ago", daysAgo: 21, status: "Shortlisted", matchScore: 88, rating: 4, shortlisted: true,  nextStep: "Check portfolio depth",    lastActivity: "Moved to shortlist" },
];

// Convenience resolvers
export const applicantWithData = (a: Applicant) => {
  const candidate = applicantPool.find((c) => c.id === a.candidateId);
  const job = jobs.find((j) => j.id === a.jobId);
  const company = job ? getCompany(job.companyId) : undefined;
  return { applicant: a, candidate, job, company };
};

export const getApplicant = (id: string) => applicants.find((a) => a.id === id);

// ── Message threads
export interface ThreadMessage {
  from: "employer" | "candidate";
  body: string;
  time: string;
}
export interface Thread {
  id: string;
  candidateId: string;
  jobId: string;
  subject: string;
  lastMessage: string;
  lastTime: string;
  unread: number;
  starred?: boolean;
  messages: ThreadMessage[];
}

export const threads: Thread[] = [
  {
    id: "th-1", candidateId: "cand-1", jobId: "j1",
    subject: "Loop 2 · Portfolio review scheduling",
    lastMessage: "Thursday 3pm PT works great for me — see you then!",
    lastTime: "12m", unread: 1, starred: true,
    messages: [
      { from: "employer",  body: "Hi Maya, loved the initial portfolio walkthrough. Wanted to schedule the design loop next week.", time: "Yesterday 4:14 PM" },
      { from: "candidate", body: "Thanks Aisha! Any of Wed/Thu afternoon PT works.", time: "Yesterday 6:02 PM" },
      { from: "employer",  body: "Let's do Thursday at 3pm PT. You'll meet with 3 senior designers for a portfolio deep-dive.", time: "Today 11:48 AM" },
      { from: "candidate", body: "Thursday 3pm PT works great for me — see you then!", time: "Today 12:02 PM" },
    ],
  },
  {
    id: "th-2", candidateId: "extra-1", jobId: "j1",
    subject: "Take-home brief · next steps",
    lastMessage: "Shared the brief link. Take your time.",
    lastTime: "2h", unread: 0,
    messages: [
      { from: "candidate", body: "Excited about the role! When can I expect the take-home?", time: "Yesterday 2:30 PM" },
      { from: "employer",  body: "Shared the brief link. Take your time.", time: "Today 10:15 AM" },
    ],
  },
  {
    id: "th-3", candidateId: "extra-3", jobId: "j1",
    subject: "Final round · Monday 2pm",
    lastMessage: "Confirmed — looking forward to it.",
    lastTime: "1d", unread: 0,
    messages: [
      { from: "employer",  body: "Would you be available Monday 2pm PT for the final round?", time: "2 days ago" },
      { from: "candidate", body: "Confirmed — looking forward to it.", time: "Yesterday" },
    ],
  },
  {
    id: "th-4", candidateId: "cand-4", jobId: "j17",
    subject: "Intro call · Friday",
    lastMessage: "Perfect, sent a calendar invite.",
    lastTime: "3d", unread: 0,
    messages: [
      { from: "candidate", body: "Would love to learn more about the Customer Success role at Linear!", time: "5 days ago" },
      { from: "employer",  body: "Great — can you do Friday 11am PT?", time: "4 days ago" },
      { from: "candidate", body: "Friday works!", time: "3 days ago" },
      { from: "employer",  body: "Perfect, sent a calendar invite.", time: "3 days ago" },
    ],
  },
  {
    id: "th-5", candidateId: "extra-9", jobId: "j17",
    subject: "Initial screening",
    lastMessage: "Thanks for applying! I'll review your profile this week.",
    lastTime: "5d", unread: 0,
    messages: [
      { from: "employer",  body: "Thanks for applying! I'll review your profile this week.", time: "5 days ago" },
    ],
  },
];

// ── Billing
export interface Invoice {
  id: string;
  date: string;
  amount: number;
  currency: "$";
  status: "Paid" | "Pending" | "Failed";
  plan: string;
  period: string;
  invoiceNumber: string;
}
export const invoices: Invoice[] = [
  { id: "in-1", invoiceNumber: "INV-2026-014", date: "Feb 01, 2026", amount: 1428, currency: "$", status: "Paid",    plan: "Growth (annual)", period: "Feb 1 – Mar 1, 2026" },
  { id: "in-2", invoiceNumber: "INV-2026-002", date: "Jan 01, 2026", amount: 1428, currency: "$", status: "Paid",    plan: "Growth (annual)", period: "Jan 1 – Feb 1, 2026" },
  { id: "in-3", invoiceNumber: "INV-2025-140", date: "Dec 01, 2025", amount: 1428, currency: "$", status: "Paid",    plan: "Growth (annual)", period: "Dec 1 – Jan 1, 2026" },
  { id: "in-4", invoiceNumber: "INV-2025-127", date: "Nov 01, 2025", amount: 1428, currency: "$", status: "Paid",    plan: "Growth (annual)", period: "Nov 1 – Dec 1, 2025" },
  { id: "in-5", invoiceNumber: "INV-2025-114", date: "Oct 01, 2025", amount: 1428, currency: "$", status: "Paid",    plan: "Growth (annual)", period: "Oct 1 – Nov 1, 2025" },
  { id: "in-6", invoiceNumber: "INV-2025-101", date: "Sep 01, 2025", amount: 1428, currency: "$", status: "Failed",  plan: "Growth (annual)", period: "Sep 1 – Oct 1, 2025" },
];

// ── Team members with access
export const team = [
  { id: "tm-1", name: "Aisha Chen",       role: "Head of Talent",       email: "aisha@linear.app",   permission: "Owner",  avatar: currentEmployer.avatar,                                                        addedOn: "Aug 12, 2023" },
  { id: "tm-2", name: "Rafael Chen",      role: "Engineering Manager",  email: "rafael@linear.app",  permission: "Admin",  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Rafael-E&backgroundColor=c0aede", addedOn: "Sep 03, 2023" },
  { id: "tm-3", name: "Sofía Álvarez",    role: "Design Lead",          email: "sofia@linear.app",   permission: "Editor", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sofia-E&backgroundColor=d1d4f9", addedOn: "Nov 21, 2023" },
  { id: "tm-4", name: "Marcus Bergström", role: "Head of Product",      email: "marcus@linear.app",  permission: "Admin",  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus-E&backgroundColor=ffd5dc", addedOn: "Jan 14, 2024" },
  { id: "tm-5", name: "Priya Raman",      role: "Recruiter",            email: "priya@linear.app",   permission: "Editor", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya-E&backgroundColor=b6e3f4", addedOn: "Mar 08, 2024" },
];

// ── Company jobs (jobs where companyId === current employer's)
export const companyJobs = jobs.filter((j) => j.companyId === currentEmployer.companyId);

// Job status extension (all real jobs = Live; we'll fake a few for the manage-jobs table)
export const jobExtras: Record<string, { status: "Live" | "Draft" | "Paused" | "Closed"; views: number; applicantCount: number }> = {
  j1:  { status: "Live",   views: 4820, applicantCount: applicants.filter((a) => a.jobId === "j1").length },
  j17: { status: "Live",   views: 1240, applicantCount: applicants.filter((a) => a.jobId === "j17").length },
};

// ── Applicant pipeline stats
export const employerStats = {
  activeJobs:       companyJobs.length,
  totalApplicants:  applicants.length,
  newThisWeek:      applicants.filter((a) => a.daysAgo <= 7).length,
  shortlisted:      applicants.filter((a) => a.shortlisted).length,
  inInterview:      applicants.filter((a) => a.status === "Interview").length,
  offersOut:        applicants.filter((a) => a.status === "Hired").length,
  timeToHireDays:   23,
  responseRatePct:  91,
  profileViews:     8420,
  viewsChangePct:   +12,
};

// ── Scheduled interviews (calendar view)
export interface ScheduledInterview {
  id: string;
  applicantId: string;   // → applicants[].id
  dayLabel: string;      // "Today", "Tomorrow", "Wed Feb 19", etc.
  isoDate: string;       // YYYY-MM-DD
  time: string;          // "3:00 PM"
  duration: string;      // "60 min"
  round: string;         // "Loop 2 · Portfolio review"
  interviewers: string[];// Team member names
  location: "Google Meet" | "Zoom" | "On-site · SF office";
  status: "Confirmed" | "Pending" | "Cancelled";
}

export const scheduledInterviews: ScheduledInterview[] = [
  { id: "iv-1", applicantId: "ap-1", dayLabel: "Today",       isoDate: "2026-02-15", time: "3:00 PM", duration: "60 min", round: "Loop 2 · Portfolio review",  interviewers: ["Sofía Á.", "Marcus B.", "Priya R."],  location: "Google Meet",  status: "Confirmed" },
  { id: "iv-2", applicantId: "ap-2", dayLabel: "Tomorrow",    isoDate: "2026-02-16", time: "11:00 AM", duration: "45 min", round: "Round 3 · Team meet",       interviewers: ["Aisha C.", "Rafael C."],               location: "Google Meet",  status: "Confirmed" },
  { id: "iv-3", applicantId: "ap-5", dayLabel: "Wed Feb 18",  isoDate: "2026-02-18", time: "2:30 PM", duration: "90 min", round: "Final round · Working session", interviewers: ["Aisha C.", "Sofía Á.", "Marcus B."],  location: "On-site · SF office", status: "Confirmed" },
  { id: "iv-4", applicantId: "ap-12", dayLabel: "Fri Feb 20", isoDate: "2026-02-20", time: "11:00 AM", duration: "30 min", round: "Intro call",                interviewers: ["Aisha C."],                            location: "Zoom",         status: "Pending" },
  { id: "iv-5", applicantId: "ap-4", dayLabel: "Mon Feb 23",  isoDate: "2026-02-23", time: "4:00 PM", duration: "60 min", round: "Take-home walkthrough",     interviewers: ["Sofía Á.", "Priya R."],                location: "Google Meet",  status: "Pending" },
];

// ── Templates (email + interview scorecards)
export type TemplateKind = "Email" | "Message" | "Scorecard" | "Offer letter" | "Rejection";
export interface Template {
  id: string;
  name: string;
  kind: TemplateKind;
  description: string;
  usedCount: number;
  updatedOn: string;
  body: string;        // preview text
}
export const templates: Template[] = [
  { id: "tp-1",  name: "Application received",     kind: "Email",      description: "Auto-reply within 5 min of any new application.", usedCount: 320, updatedOn: "Feb 08, 2026", body: "Thanks for applying to {ROLE} at {COMPANY}. We've received your application and will get back to you within 3 business days." },
  { id: "tp-2",  name: "Interview invitation",     kind: "Email",      description: "Schedule the first loop after screening.",         usedCount: 87,  updatedOn: "Feb 03, 2026", body: "Hi {NAME}, we'd love to move forward with you for {ROLE}. Would any of these times work for a 30-minute intro call?" },
  { id: "tp-3",  name: "Portfolio review scorecard", kind: "Scorecard", description: "Design loop rubric — craft, systems thinking, communication.", usedCount: 42, updatedOn: "Jan 22, 2026", body: "1. Craft & polish (1–5)\n2. Systems thinking (1–5)\n3. Communication (1–5)\n4. Would you want to work with them? (Yes/No)" },
  { id: "tp-4",  name: "Rejection · after interview", kind: "Rejection", description: "Sent after a full loop when not moving forward.",  usedCount: 34,  updatedOn: "Jan 15, 2026", body: "Hi {NAME}, thanks for the thoughtful conversation with our team. After careful discussion, we've decided to move forward with other candidates whose experience more closely matches what we need right now." },
  { id: "tp-5",  name: "Rejection · early stage",   kind: "Rejection",  description: "Polite decline before first interview.",            usedCount: 128, updatedOn: "Dec 12, 2025", body: "Hi {NAME}, thanks for your interest in {ROLE}. We've decided not to move forward at this time." },
  { id: "tp-6",  name: "Offer letter · standard",    kind: "Offer letter", description: "Standard IC offer template with equity + sign-on.", usedCount: 12, updatedOn: "Feb 12, 2026", body: "Dear {NAME}, we're thrilled to offer you the {ROLE} position at {COMPANY}. Base: {BASE}. Bonus: {BONUS}. Equity: {EQUITY}." },
  { id: "tp-7",  name: "Reference request",          kind: "Message",   description: "Ask candidate for 2-3 professional references.",    usedCount: 21,  updatedOn: "Nov 30, 2025", body: "Hi {NAME}, would you be able to share 2-3 professional references we could reach out to?" },
];

// ── Talent pool (long-term saved candidates, distinct from active shortlist)
export interface TalentPoolEntry {
  id: string;
  candidateId: string;
  addedOn: string;
  tag: "Future role" | "Passive interest" | "Talent network" | "Referred";
  addedBy: string;    // employer/team name
  notes: string;
}
export const talentPool: TalentPoolEntry[] = [
  { id: "pl-1", candidateId: "cand-1",   addedOn: "Jan 12, 2026", tag: "Future role",       addedBy: "Aisha Chen",       notes: "Would be a great senior IC for the platform team when we open a role." },
  { id: "pl-2", candidateId: "extra-1",  addedOn: "Jan 20, 2026", tag: "Talent network",    addedBy: "Sofía Álvarez",    notes: "Strong portfolio. Reached out at DesignBerlin — keep warm." },
  { id: "pl-3", candidateId: "extra-3",  addedOn: "Feb 02, 2026", tag: "Passive interest",  addedBy: "Marcus Bergström", notes: "Interested but not moving right now. Circle back in Q3." },
  { id: "pl-4", candidateId: "cand-2",   addedOn: "Feb 04, 2026", tag: "Referred",          addedBy: "Rafael Chen",      notes: "Referred by team; considering for a future staff role." },
  { id: "pl-5", candidateId: "extra-6",  addedOn: "Feb 06, 2026", tag: "Future role",       addedBy: "Aisha Chen",       notes: "Might align with our upcoming systems-engineering opening." },
  { id: "pl-6", candidateId: "extra-4",  addedOn: "Feb 09, 2026", tag: "Talent network",    addedBy: "Priya Raman",      notes: "Great UX researcher. Would consider for contract project." },
];

// ── Employer notifications
export interface EmployerNotification {
  id: string;
  icon: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
  href?: string;
  category: "Applicant" | "Interview" | "Message" | "System" | "Billing";
}
export const employerNotifications: EmployerNotification[] = [
  { id: "en-1", category: "Applicant", icon: "users",       title: "3 new applicants",               body: "New applications for Senior Product Designer.",              time: "12m", read: false, href: "/employer/applicants" },
  { id: "en-2", category: "Interview", icon: "sparkles",    title: "Interview in 2 hours",           body: "Loop 2 with Maya Okonkwo starts at 3:00 PM.",                time: "1h",  read: false, href: "/employer/interviews" },
  { id: "en-3", category: "Message",   icon: "send",        title: "Reply from Amara Osei",          body: "\"Thursday 3pm PT works great for me — see you then!\"",     time: "2h",  read: false, href: "/employer/messages" },
  { id: "en-4", category: "System",    icon: "checkCircle", title: "Job re-published",               body: "Customer Success Manager is live again.",                    time: "1d",  read: true,  href: "/employer/jobs" },
  { id: "en-5", category: "Billing",   icon: "wallet",      title: "Invoice paid",                   body: "INV-2026-014 · $1,428 charged successfully.",                time: "2d",  read: true,  href: "/employer/billing" },
  { id: "en-6", category: "Applicant", icon: "star",        title: "Candidate accepted offer",       body: "James O'Connor accepted the Frontend Engineer role.",        time: "3d",  read: true,  href: "/employer/applicants" },
  { id: "en-7", category: "System",    icon: "shield",      title: "Team member added",              body: "Priya Raman was invited to the workspace as Editor.",        time: "5d",  read: true,  href: "/employer/settings" },
  { id: "en-8", category: "Applicant", icon: "trending",    title: "Weekly hiring digest",           body: "22 new applicants · 5 interviews · 1 hire this week.",        time: "1w",  read: true,  href: "/employer" },
];

// Status badge palette (mirrors dashboard.ts pattern)
export const applicantStatusStyle: Record<ApplicantStatus, { bg: string; text: string; dot: string }> = {
  Applied:     { bg: "bg-ink-100",     text: "text-ink-700",     dot: "bg-ink-500"     },
  Reviewing:   { bg: "bg-sky-100",     text: "text-sky-800",     dot: "bg-sky-500"     },
  Shortlisted: { bg: "bg-amber-100",   text: "text-amber-800",   dot: "bg-amber-500"   },
  Interview:   { bg: "bg-violet-100",  text: "text-violet-700",  dot: "bg-violet-500"  },
  Rejected:    { bg: "bg-rose-100",    text: "text-rose-700",    dot: "bg-rose-500"    },
  Hired:       { bg: "bg-emerald-100", text: "text-emerald-800", dot: "bg-emerald-500" },
};

export const pipelineStages: ApplicantStatus[] = ["Applied", "Reviewing", "Shortlisted", "Interview", "Hired", "Rejected"];
