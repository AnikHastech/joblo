/**
 * Joblo team roster — used by /about and /team/[slug] pages.
 * Rich enough that each person gets a proper profile page.
 */

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  department: string;
  from: string;           // "ex-Stripe" chip
  location: string;
  timezone: string;
  joined: string;         // "Founded · 2021"
  avatar: string;
  gradient: string;       // Tailwind gradient classes
  headline: string;       // one-line tagline for cards
  bio: string[];          // multi-paragraph
  currentFocus: string;
  quote: string;
  expertise: string[];
  languages: string[];
  hobbies: string[];
  experience: { company: string; role: string; period: string; note?: string }[];
  writings?: { title: string; outlet: string; href: string }[];
  links: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
    website?: string;
    email?: string;
  };
}

const av = (seed: string, bg = "b6e3f4") =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=${bg}&scale=110`;

export const team: TeamMember[] = [
  {
    slug: "amara-chen",
    name: "Amara Chen",
    role: "Co-founder & CEO",
    department: "Leadership",
    from: "ex-Stripe",
    location: "San Francisco",
    timezone: "PT · UTC-8",
    joined: "Founded · 2021",
    avatar: av("Amara", "ffdfbf"),
    gradient: "from-brand-500/60 to-accent-500/60",
    headline: "Building the job marketplace the industry actually deserves.",
    bio: [
      "Amara started Joblo in 2021 after eight years leading product at Stripe, where she watched hiring — for both sides — get slower, spammier, and less honest every year. She figured someone should try to fix it, then realized that someone was probably her.",
      "Today she runs the company from San Francisco with a small senior team spread across four cities. She still reviews every featured company personally and jumps into product weeklies more often than she should.",
    ],
    currentFocus: "Getting Joblo's employer suite to feel as thoughtful as the candidate side.",
    quote: "\"If we can't confidently recommend a role to someone we love, we don't publish it. That's the whole company in one sentence.\"",
    expertise: ["Marketplace strategy", "Fundraising", "Product leadership", "Two-sided incentives", "Public speaking"],
    languages: ["English", "Mandarin", "Cantonese"],
    hobbies: ["Bouldering", "Cold-water swimming", "Slow-brew coffee"],
    experience: [
      { company: "Stripe",       role: "Director of Product, Payments Growth",    period: "2016 — 2021", note: "Grew activation team from 3 to 24" },
      { company: "Square",        role: "Senior PM, Merchant Onboarding",          period: "2013 — 2016" },
      { company: "Y Combinator",  role: "Fellow, W12",                              period: "2012 — 2012" },
    ],
    writings: [
      { title: "The two-sided marketplace playbook nobody writes",  outlet: "First Round Review", href: "#" },
      { title: "How we cut spam by 92% in 6 months",                outlet: "Joblo Blog",         href: "#" },
    ],
    links: { linkedin: "https://linkedin.com/in/amarachen", twitter: "https://twitter.com/amarachen", email: "amara@joblo.com" },
  },
  {
    slug: "diego-marin",
    name: "Diego Marín",
    role: "Co-founder & CTO",
    department: "Engineering",
    from: "ex-Vercel",
    location: "Barcelona",
    timezone: "CET · UTC+1",
    joined: "Founded · 2021",
    avatar: av("Diego", "c0aede"),
    gradient: "from-violet-500/60 to-brand-500/60",
    headline: "Systems that feel fast at 10 users and at 10 million.",
    bio: [
      "Diego co-founded Joblo after seven years building infrastructure at Vercel. He believes the difference between a great marketplace and a mediocre one is boring — it's the 200ms difference in search latency, the caching strategy, the retry logic that nobody sees.",
      "He runs a small engineering team from Barcelona and spends most of his weeks in Vercel-style prod deep-dives and PR reviews. Once a month he ships a founding-engineer-sized feature himself just to stay honest.",
    ],
    currentFocus: "The next generation of Joblo's matching engine — real-time, explainable, and 10× cheaper to run.",
    quote: "\"Great infrastructure is invisible. If our engineers are getting paged, if candidates are seeing spinners, if employers are refreshing pages — we've already failed.\"",
    expertise: ["Distributed systems", "Rust", "TypeScript", "Postgres", "Edge computing", "Team building"],
    languages: ["Spanish", "Catalan", "English", "Portuguese"],
    hobbies: ["Home espresso", "Gravel cycling", "Open-source contributions"],
    experience: [
      { company: "Vercel",        role: "Staff Engineer, Edge Runtime",   period: "2018 — 2021", note: "Led Edge Functions launch" },
      { company: "Cloudflare",    role: "Senior Engineer, Workers",       period: "2015 — 2018" },
      { company: "Amazon",        role: "SDE II, AWS Lambda",             period: "2013 — 2015" },
    ],
    links: { linkedin: "https://linkedin.com/in/diegomarin", github: "https://github.com/diegomarin", twitter: "https://twitter.com/diego_m", email: "diego@joblo.com" },
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "VP of Design",
    department: "Design",
    from: "ex-Figma",
    location: "Bangalore",
    timezone: "IST · UTC+5:30",
    joined: "Joined · 2022",
    avatar: av("Priya", "b6e3f4"),
    gradient: "from-sky-500/60 to-brand-500/60",
    headline: "Design that respects your time — because time is what you have least of.",
    bio: [
      "Priya leads design across candidate and employer surfaces. Before Joblo she led product design at Figma, where she shipped FigJam and led the design systems team as it scaled from 2 to 12.",
      "She built Joblo's design system from scratch in her first month and still owns the tokens, the typography, and the illustration voice. Her design bar is why the product feels considered instead of assembled.",
    ],
    currentFocus: "A ground-up rethink of the employer dashboard — fewer clicks, more clarity, better data density.",
    quote: "\"Design isn't decoration. Every pixel in this product is either doing work for the user or getting in their way. There's no third option.\"",
    expertise: ["Product design", "Design systems", "Figma", "Motion", "Design leadership", "Prototyping"],
    languages: ["English", "Tamil", "Hindi", "French"],
    hobbies: ["Type design", "Analog photography", "Bharatanatyam"],
    experience: [
      { company: "Figma",  role: "Design Manager, FigJam",     period: "2019 — 2022", note: "Shipped FigJam v1" },
      { company: "Airbnb", role: "Senior Product Designer",     period: "2016 — 2019" },
      { company: "Adobe",  role: "Product Designer, XD",        period: "2014 — 2016" },
    ],
    writings: [
      { title: "The design system that ran itself",  outlet: "Config 2024 (talk)", href: "#" },
    ],
    links: { linkedin: "https://linkedin.com/in/priyaraman", twitter: "https://twitter.com/priyaraman", dribbble: "https://dribbble.com/priyaraman", website: "https://priya.design", email: "priya@joblo.com" },
  },
  {
    slug: "kenji-nakamura",
    name: "Kenji Nakamura",
    role: "Head of Engineering",
    department: "Engineering",
    from: "ex-Notion",
    location: "Tokyo",
    timezone: "JST · UTC+9",
    joined: "Joined · 2022",
    avatar: av("Kenji", "ffd5dc"),
    gradient: "from-accent-500/60 to-rose-500/60",
    headline: "Fewer meetings. More shipping. Better code review.",
    bio: [
      "Kenji leads day-to-day engineering — code review, on-call, sprint planning, and the never-ending calibration of our engineering ladder. He came from Notion where he was engineering manager on the mobile team through Series C.",
      "He runs a mostly-async engineering culture from Tokyo and is the reason our PR review median sits at 4 hours despite being spread across 12 timezones.",
    ],
    currentFocus: "Rolling out a mentorship program for our founding-engineer cohort — first hires shipped last month.",
    quote: "\"The best code review is the one where the reviewer learned something too. If reviews are one-way, we're hiring wrong.\"",
    expertise: ["Engineering management", "TypeScript", "React Native", "Distributed teams", "Hiring", "Career ladders"],
    languages: ["Japanese", "English"],
    hobbies: ["Rock climbing", "Kendo", "Home fermentation"],
    experience: [
      { company: "Notion",         role: "Engineering Manager, Mobile",    period: "2019 — 2022" },
      { company: "Line",           role: "Senior Engineer, Messaging",     period: "2016 — 2019" },
      { company: "Mercari",        role: "Full-stack Engineer",             period: "2013 — 2016" },
    ],
    links: { linkedin: "https://linkedin.com/in/kenjinakamura", github: "https://github.com/kenji-n", twitter: "https://twitter.com/kenji_ships", email: "kenji@joblo.com" },
  },
  {
    slug: "sofia-alvarez",
    name: "Sofía Álvarez",
    role: "Head of People",
    department: "People",
    from: "ex-Airbnb",
    location: "Mexico City",
    timezone: "CST · UTC-6",
    joined: "Joined · 2023",
    avatar: av("Sofia", "d1d4f9"),
    gradient: "from-violet-500/60 to-accent-500/60",
    headline: "Hiring people who make everyone around them better.",
    bio: [
      "Sofía runs everything people-related — hiring, onboarding, compensation, career growth, and the quiet cultural work that makes a distributed team actually feel like a team.",
      "Before Joblo she led People Ops for Airbnb's LATAM org through their IPO. She's the reason our attrition is under 4% and our internal transfer rate is 3× the industry average.",
    ],
    currentFocus: "Rewriting our compensation philosophy for 2026 — same target comp regardless of location, adjusted for cost-of-living within tighter bands.",
    quote: "\"Hiring is easy. Retention is hard. If we're hiring more than we're keeping, we're the problem, not the market.\"",
    expertise: ["People operations", "Comp & benefits", "Distributed hiring", "Onboarding design", "Culture"],
    languages: ["Spanish", "English", "Portuguese"],
    hobbies: ["Long-distance running", "Salsa", "Recipe development"],
    experience: [
      { company: "Airbnb",  role: "People Ops Lead, LATAM",   period: "2018 — 2023", note: "IPO year" },
      { company: "Uber",     role: "HR Business Partner",     period: "2015 — 2018" },
      { company: "PwC",      role: "Consultant, Talent",      period: "2012 — 2015" },
    ],
    links: { linkedin: "https://linkedin.com/in/sofiaalvarez", twitter: "https://twitter.com/sofi_hires", email: "sofia@joblo.com" },
  },
  {
    slug: "marcus-bergstrom",
    name: "Marcus Bergström",
    role: "Head of Marketplace",
    department: "Product",
    from: "ex-Klarna",
    location: "Stockholm",
    timezone: "CET · UTC+1",
    joined: "Joined · 2023",
    avatar: av("Marcus", "b6e3f4"),
    gradient: "from-emerald-500/60 to-sky-500/60",
    headline: "Marketplace balance is a design problem, not a growth problem.",
    bio: [
      "Marcus owns the health of both sides of the marketplace — supply and demand, quality thresholds, matching algorithms, and the never-simple question of when to lean in and when to say no.",
      "Before Joblo he was one of the first product leaders at Klarna, where he grew the merchant marketplace from 200 to 40K partners. He knows what a marketplace looks like right before it tips over — and how to keep it from getting there.",
    ],
    currentFocus: "Rebuilding our category quality signals so 'featured' means something specific and defensible.",
    quote: "\"The most important marketplace metric isn't liquidity. It's how many people leave happy — on both sides. That's what compounds.\"",
    expertise: ["Marketplace design", "Growth", "Pricing", "Category management", "Fintech"],
    languages: ["Swedish", "English", "German"],
    hobbies: ["Sailing", "Woodworking", "Podcast production"],
    experience: [
      { company: "Klarna",   role: "Director of Marketplace",  period: "2017 — 2023" },
      { company: "Spotify",  role: "Product Manager, Growth",   period: "2013 — 2017" },
      { company: "iZettle",  role: "Product Manager",           period: "2011 — 2013" },
    ],
    links: { linkedin: "https://linkedin.com/in/marcusbergstrom", twitter: "https://twitter.com/mbergstrom", email: "marcus@joblo.com" },
  },
  {
    slug: "elena-vasquez",
    name: "Elena Vásquez",
    role: "Head of Growth",
    department: "Growth",
    from: "ex-Shopify",
    location: "Buenos Aires",
    timezone: "ART · UTC-3",
    joined: "Joined · 2024",
    avatar: av("Elena", "c0aede"),
    gradient: "from-amber-500/60 to-accent-500/60",
    headline: "Growth by making the product better — not by adding funnels.",
    bio: [
      "Elena leads marketing, lifecycle, and everything that helps candidates find Joblo. Before Joblo she led growth at Shopify's LATAM expansion, where she doubled sign-ups without doubling ad spend.",
      "She's a strong writer and one of Joblo's most trusted internal editors — she reviews every landing page and email before it ships.",
    ],
    currentFocus: "Launching our first candidate referral program — pull, not push.",
    quote: "\"The best growth channel is always the same: build a product people can't stop telling their friends about.\"",
    expertise: ["Growth marketing", "Lifecycle", "SEO", "Content strategy", "Writing", "Analytics"],
    languages: ["Spanish", "English", "Portuguese"],
    hobbies: ["Fiction writing", "Tango", "Astrology (unironically)"],
    experience: [
      { company: "Shopify",     role: "Growth Marketing Lead, LATAM",  period: "2020 — 2024" },
      { company: "MercadoLibre", role: "Senior Growth PM",              period: "2017 — 2020" },
      { company: "Rappi",        role: "Growth Marketer",                period: "2015 — 2017" },
    ],
    writings: [
      { title: "How Shopify grew LATAM without paid",  outlet: "Reforge",  href: "#" },
    ],
    links: { linkedin: "https://linkedin.com/in/elenavasquez", twitter: "https://twitter.com/ele_grows", website: "https://elena.gr", email: "elena@joblo.com" },
  },
  {
    slug: "rafael-chen",
    name: "Rafael Chen",
    role: "Head of Data",
    department: "Data",
    from: "ex-Anthropic",
    location: "Remote",
    timezone: "PT · UTC-8",
    joined: "Joined · 2024",
    avatar: av("Rafael-About", "ffdfbf"),
    gradient: "from-brand-500/60 to-violet-500/60",
    headline: "Data teams should build products, not dashboards.",
    bio: [
      "Rafael leads Joblo's small but influential data team — the people who own our matching algorithms, our search ranking, and every experiment that touches how candidates and employers find each other.",
      "Before Joblo he was a research engineer at Anthropic. He brings the ML rigor of a research lab to the practical work of running a marketplace.",
    ],
    currentFocus: "Explainable match scores — candidates and employers should know why they matched, not just that they did.",
    quote: "\"The best data team isn't the one that answers the most questions. It's the one that changes what the company chooses to build.\"",
    expertise: ["Applied ML", "Search ranking", "Experimentation", "Python", "PyTorch", "SQL"],
    languages: ["English", "Mandarin"],
    hobbies: ["Chess", "Board games", "Long-form journalism"],
    experience: [
      { company: "Anthropic",  role: "Research Engineer, Applied",    period: "2022 — 2024" },
      { company: "Meta",       role: "ML Engineer, Ranking",           period: "2019 — 2022" },
      { company: "Uber",       role: "Data Scientist, Marketplace",   period: "2016 — 2019" },
    ],
    links: { linkedin: "https://linkedin.com/in/rafaelchen", github: "https://github.com/rafael-c", twitter: "https://twitter.com/rc_ml", email: "rafael@joblo.com" },
  },
];

export const getTeamMember = (slug: string) => team.find((t) => t.slug === slug);

export const getRelatedTeam = (slug: string, limit = 3) => {
  const me = getTeamMember(slug);
  if (!me) return [];
  return team
    .filter((t) => t.slug !== slug)
    .sort((a, b) => (a.department === me.department ? -1 : 1) - (b.department === me.department ? -1 : 1))
    .slice(0, limit);
};

export const teamDepartments = Array.from(new Set(team.map((t) => t.department)));
