import type { Company } from "@types/index";

export interface CompanyContent {
  tagline: string;
  about: string[];
  mission: string;
  founded: string;
  funding: string;
  headquarters: string;
  website: string;
  values: { icon: string; title: string; body: string }[];
  perks: { icon: string; label: string }[];
  team: { name: string; role: string; avatar: string }[];
  press: { outlet: string; quote: string }[];
}

/**
 * Deterministic, category-flavored profile content for a company.
 * Keeps every company profile feeling real without a CMS.
 */
export function getCompanyContent(company: Company): CompanyContent {
  const industry = company.industry.toLowerCase();

  const industryTagline: Record<string, string> = {
    "software":         "Software that respects your time.",
    "developer tools":  "Ship faster, break less, sleep better.",
    "fintech":          "Financial infrastructure for the modern web.",
    "design":           "Design tools for the people who build products.",
    "productivity":     "Do the work that matters — with less friction.",
    "consumer":         "Beautiful software for the moments in between.",
    "hr tech":          "The workforce platform teams actually want to use.",
    "travel":           "Belong wherever your work takes you.",
    "e-commerce":       "Making it easier for anyone to sell anything.",
    "ai research":      "Building AI systems that are safe, useful, and understandable.",
    "infrastructure":   "The infrastructure the modern internet runs on.",
    "security":         "Trust, automated. Compliance, effortless.",
    "sales tech":       "Turning data into revenue, one workflow at a time.",
  };

  const tagline = industryTagline[industry] ?? `A ${company.industry.toLowerCase()} company doing meaningful work.`;

  const about = [
    `${company.name} was founded to solve a problem that most people didn't realize they had — until they saw the solution. Today, ${company.name} works with teams around the world who care about craft, speed, and doing right by the people they serve.`,
    `We're ${sizeToWords(company.size)} people, mostly ${company.location.includes("Remote") ? "distributed across time zones" : `based in ${company.location.split(",")[0]}`}, and we work in small, senior teams. Every hire is intentional. Every project has a clear owner. And we ship — often.`,
  ];

  const mission = `To make ${company.industry.toLowerCase()} feel obvious, one product decision at a time.`;

  // Deterministic founding year based on id
  const seed = (company.id.charCodeAt(1) || 5) + (company.id.charCodeAt(2) || 3);
  const founded = String(2010 + (seed % 12));
  const fundingSeries = ["Seed", "Series A", "Series B", "Series C", "Series D"][seed % 5];
  const fundingAmt    = [8, 25, 60, 140, 300, 500][seed % 6];
  const funding = `${fundingSeries} · $${fundingAmt}M raised`;
  const headquarters = company.location;
  const website = `https://${company.slug.replace(/-.*$/, "")}.com`;

  const values = [
    { icon: "sparkles",    title: "Craft over volume",    body: "We'd rather ship one thing well than ten things halfway. Small teams, high standards, shared judgment." },
    { icon: "users",       title: "Trust by default",     body: "You're an adult. We hire senior people and give them ownership. No busywork, no theater." },
    { icon: "bolt",        title: "Move with clarity",    body: "Fast when we can, slow when we should. What matters is whether the decision was good — not how quickly it was made." },
    { icon: "shield",      title: "Long-term thinking",   body: "We're building something that lasts. That means saying no to shortcuts that cost us later." },
  ];

  const perks = [
    { icon: "wallet",      label: "Competitive salary + equity" },
    { icon: "globe",       label: "Fully remote, or hybrid HQ" },
    { icon: "checkCircle", label: "Best-in-class health cover" },
    { icon: "users",       label: "5 weeks PTO + parental leave" },
    { icon: "briefcase",   label: "$3K home office setup" },
    { icon: "sparkles",    label: "$2K/yr learning stipend" },
    { icon: "clock",       label: "4-day workweek in July" },
    { icon: "award",       label: "Annual team offsite" },
  ];

  // Deterministic team members (Notionists avatars via slug seed)
  const teamNames: [string, string][] = [
    ["Amara Chen",       "Co-founder & CEO"],
    ["Diego Marín",      "Co-founder & CTO"],
    ["Priya Raman",      "VP of Design"],
    ["Kenji Nakamura",   "Head of Engineering"],
    ["Sofía Álvarez",    "Head of People"],
    ["Marcus Bergström", "Product Lead"],
  ];
  const team = teamNames.map(([name, role], i) => ({
    name,
    role,
    avatar: `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(company.slug + "-" + i)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
  }));

  const press = [
    { outlet: "TechCrunch",   quote: `"${company.name} is quietly building one of the most impressive products in ${company.industry}."` },
    { outlet: "The Verge",    quote: `"Rare to see a team this focused on craft at this stage. ${company.name} is one to watch."` },
    { outlet: "Product Hunt", quote: `#1 Product of the Month — chosen by ${(seed * 13) % 400 + 800} makers.` },
  ];

  return { tagline, about, mission, founded, funding, headquarters, website, values, perks, team, press };
}

function sizeToWords(size: string): string {
  const map: Record<string, string> = {
    "1-10":      "a tight team of under ten",
    "11-50":     "a small team of around thirty",
    "51-200":    "a focused team of about a hundred and fifty",
    "201-500":   "a growing team of a few hundred",
    "501-1000":  "several hundred",
    "1001-5000": "a few thousand",
    "5000+":     "many thousands of",
  };
  return map[size] ?? "a growing team of";
}
