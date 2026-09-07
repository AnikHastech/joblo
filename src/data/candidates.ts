const av = (seed: string, bg = "b6e3f4") =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=${bg}&scale=110`;

export interface Candidate {
  id: string;
  slug: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  experienceYears: number;
  rate: string;                       // hourly or "on request"
  skills: string[];
  availability: "Open to offers" | "Available in 2 weeks" | "Interviewing";
  verified: boolean;
  workedAtSlug?: string;              // maps to companies data
  workedAtName?: string;
  featured?: boolean;
}

export const candidates: Candidate[] = [
  {
    id: "cand-1", slug: "maya-okonkwo",
    name: "Maya Okonkwo", role: "Senior Product Designer",
    avatar: av("Maya", "ffdfbf"),
    location: "San Francisco, CA", experienceYears: 8,
    rate: "$120/hr",
    skills: ["Figma", "Design Systems", "Motion"],
    availability: "Open to offers",
    verified: true, featured: true,
    workedAtSlug: "linear", workedAtName: "Linear",
  },
  {
    id: "cand-2", slug: "rafael-chen",
    name: "Rafael Chen", role: "Staff Engineer, Platform",
    avatar: av("Rafael", "c0aede"),
    location: "New York, NY", experienceYears: 12,
    rate: "$180/hr",
    skills: ["TypeScript", "Rust", "Distributed"],
    availability: "Available in 2 weeks",
    verified: true, featured: true,
    workedAtSlug: "vercel", workedAtName: "Vercel",
  },
  {
    id: "cand-3", slug: "priya-anand",
    name: "Priya Anand", role: "Product Manager",
    avatar: av("Priya", "b6e3f4"),
    location: "London, UK", experienceYears: 6,
    rate: "$95/hr",
    skills: ["Growth", "Fintech", "B2B SaaS"],
    availability: "Open to offers",
    verified: true, featured: true,
    workedAtSlug: "stripe", workedAtName: "Stripe",
  },
  {
    id: "cand-4", slug: "devon-park",
    name: "Devon Park", role: "Growth Marketing Lead",
    avatar: av("Devon", "d1d4f9"),
    location: "Remote — Americas", experienceYears: 7,
    rate: "$110/hr",
    skills: ["SEO", "Lifecycle", "Analytics"],
    availability: "Interviewing",
    verified: true, featured: true,
    workedAtSlug: "notion", workedAtName: "Notion",
  },
  {
    id: "cand-5", slug: "kenji-watanabe",
    name: "Kenji Watanabe", role: "ML Research Engineer",
    avatar: av("Kenji", "ffd5dc"),
    location: "Tokyo, Japan", experienceYears: 5,
    rate: "$140/hr",
    skills: ["PyTorch", "LLMs", "AI Safety"],
    availability: "Open to offers",
    verified: true, featured: true,
    workedAtSlug: "anthropic", workedAtName: "Anthropic",
  },
  {
    id: "cand-6", slug: "elena-marquez",
    name: "Elena Marquez", role: "Brand & 3D Designer",
    avatar: av("Elena", "c0aede"),
    location: "Berlin, Germany", experienceYears: 9,
    rate: "$95/hr",
    skills: ["Brand", "Illustration", "3D"],
    availability: "Available in 2 weeks",
    verified: true, featured: true,
    workedAtSlug: "figma", workedAtName: "Figma",
  },
  {
    id: "cand-7", slug: "amara-nwosu",
    name: "Amara Nwosu", role: "Senior Backend Engineer",
    avatar: av("Amara", "fef3c7"),
    location: "Lisbon, Portugal", experienceYears: 10,
    rate: "$150/hr",
    skills: ["Go", "Kubernetes", "PostgreSQL"],
    availability: "Open to offers",
    verified: true,
    workedAtSlug: "cloudflare", workedAtName: "Cloudflare",
  },
  {
    id: "cand-8", slug: "sofia-ricci",
    name: "Sofia Ricci", role: "UX Researcher",
    avatar: av("Sofia", "fce7f3"),
    location: "Milan, Italy", experienceYears: 7,
    rate: "$105/hr",
    skills: ["User Research", "Usability", "Strategy"],
    availability: "Available in 2 weeks",
    verified: true,
    workedAtSlug: "airbnb", workedAtName: "Airbnb",
  },
  {
    id: "cand-9", slug: "noah-fitzgerald",
    name: "Noah Fitzgerald", role: "DevOps Engineer",
    avatar: av("Noah", "dcfce7"),
    location: "Austin, TX", experienceYears: 9,
    rate: "$135/hr",
    skills: ["AWS", "Terraform", "CI/CD"],
    availability: "Interviewing",
    verified: true,
    workedAtSlug: "supabase", workedAtName: "Supabase",
  },
];

export const featuredCandidates = candidates.filter((c) => c.featured);
