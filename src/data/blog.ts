import type { InsightPost } from "@types/index";

const av = (seed: string, bg = "b6e3f4") =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=${bg}&scale=110`;

export type BlogPost = InsightPost & {
  coverUrl: string;
  authorRole?: string;
  tags: string[];
  featured?: boolean;
  body: string[]; // paragraphs (used by article page)
};

export const blogPosts: BlogPost[] = [
  {
    id: "b1", slug: "2026-compensation-report",
    title: "The 2026 tech compensation report",
    excerpt: "What senior engineers, designers, and PMs are actually earning in 2026 — with regional breakdowns from 128K+ verified offers.",
    category: "Salary insights", readMinutes: 8,
    author: "Joblo Research", authorAvatar: av("Research", "d1d4f9"), authorRole: "Data team",
    date: "Feb 12, 2026",
    cover: "linear-gradient(135deg,#5b58f5 0%,#ff4d17 100%)",
    coverUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80",
    tags: ["Salary", "Data", "Trends"], featured: true,
    body: [
      "Every year we publish an unfiltered look at what the market actually pays. Not what job ads say, not what recruiters whisper — the numbers we see land in offer letters.",
      "This year's dataset is our largest yet: 128,540 verified offers across 41 countries, weighted by role level and stripped of outliers. The headline: senior IC comp is up 6.2% year-over-year in North America, flat in Western Europe, and down slightly in APAC.",
      "But the interesting story is where the growth is concentrated. Applied ML roles led every category. AI safety and evaluation roles — a category that barely existed two years ago — pay 22% more than adjacent MLE roles. And staff-level generalists are pulling comp closer to specialist rates as companies flatten hierarchies.",
      "Below, we break down every discipline by level, geography, and experience — and share the ten highest-paying companies in each category. Bookmark it; the interactive version updates monthly.",
    ],
  },
  {
    id: "b2", slug: "remote-hiring-2026",
    title: "How the best teams hire remotely in 2026",
    excerpt: "Async-first interview loops, portfolio-heavy screening, and the small rituals that separate great remote teams from the rest.",
    category: "Playbook", readMinutes: 6,
    author: "Elena Marquez", authorAvatar: av("Elena", "c0aede"), authorRole: "Editor at large",
    date: "Feb 04, 2026",
    cover: "linear-gradient(135deg,#10b981 0%,#0ea5e9 100%)",
    coverUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    tags: ["Remote", "Hiring", "Culture"], featured: true,
    body: [
      "The best remote-first teams don't run remote versions of in-person interview loops. They design loops that would be worse if everyone were in the same room.",
      "That means async take-homes with real code, written debate over live chat, and a heavy emphasis on how candidates communicate in text. It also means being honest about the tradeoffs — fewer accidental water-cooler signals, so more explicit calibration.",
      "We interviewed hiring leads at ten of the fastest-growing remote-first companies. Every one runs a different loop, but the shape rhymes.",
    ],
  },
  {
    id: "b3", slug: "resume-that-works",
    title: "The résumé that actually gets replies",
    excerpt: "We analyzed 40,000 résumés that landed interviews last quarter. Here's exactly what they had in common — and what they didn't.",
    category: "Career", readMinutes: 5,
    author: "Devon Park", authorAvatar: av("Devon", "ffdfbf"), authorRole: "Career coach",
    date: "Jan 28, 2026",
    cover: "linear-gradient(135deg,#f59e0b 0%,#ec4899 100%)",
    coverUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    tags: ["Résumé", "Career", "Job Search"], featured: true,
    body: [
      "Résumés that land interviews are shorter than you think. In our sample, the average was 340 words. The median was 290.",
      "But short isn't the whole story. Every successful résumé we studied did four specific things — and skipped six things you probably think matter. Here's what to keep, what to cut, and what to write instead.",
    ],
  },
  {
    id: "b4", slug: "interview-signals-that-matter",
    title: "The interview signals that actually predict success",
    excerpt: "A 4-year longitudinal study across 6,200 hires. Which signals correlate with tenure and performance — and which are pure noise.",
    category: "Playbook", readMinutes: 9,
    author: "Ada Wu", authorAvatar: av("Ada", "b6e3f4"), authorRole: "Head of research",
    date: "Jan 21, 2026",
    cover: "linear-gradient(135deg,#7c3aed 0%,#0ea5e9 100%)",
    coverUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    tags: ["Hiring", "Research", "Interviews"],
    body: [
      "Most companies interview based on tradition, not evidence. The ones that don't outperform on retention by roughly 2x.",
      "We tracked 6,200 hires across 40 companies for four years. The signals that predicted long-term success weren't the ones interviewers weighted most heavily.",
    ],
  },
  {
    id: "b5", slug: "founding-engineer-playbook",
    title: "So you want to be a founding engineer",
    excerpt: "The role every senior IC secretly wants — and what it actually feels like day 1 to year 3. Written by people who've done it.",
    category: "Career", readMinutes: 7,
    author: "Marcus Bergström", authorAvatar: av("Marcus", "ffd5dc"), authorRole: "3x founding engineer",
    date: "Jan 14, 2026",
    cover: "linear-gradient(135deg,#f97316 0%,#ef4444 100%)",
    coverUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    tags: ["Career", "Startups", "Engineering"],
    body: [
      "The founding engineer role is quietly one of the most misunderstood in tech. Everyone thinks they know what it involves. Almost no one is right.",
      "Here's what the job actually looks like across the first three years, in three real stories from people who lived it.",
    ],
  },
  {
    id: "b6", slug: "hiring-manager-red-flags",
    title: "Red flags to watch for in a hiring manager",
    excerpt: "The interview is a two-way street. Here are the eight subtle signals a hiring manager will be a nightmare to work for.",
    category: "Career", readMinutes: 6,
    author: "Priya Anand", authorAvatar: av("Priya-b", "c0aede"), authorRole: "Contributing writer",
    date: "Jan 07, 2026",
    cover: "linear-gradient(135deg,#ef4444 0%,#f97316 100%)",
    coverUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
    tags: ["Career", "Interviews"],
    body: [
      "You spend a full day interviewing candidates. They spend maybe 45 minutes evaluating you. That asymmetry is a bug, not a feature.",
      "Here's how to spend those 45 minutes well — and the eight tells that should send you running.",
    ],
  },
  {
    id: "b7", slug: "state-of-devrel-2026",
    title: "The state of developer relations, 2026 edition",
    excerpt: "Devrel spend is up. Devrel hiring is flat. Something's shifting — we surveyed 340 devrel leaders to understand what.",
    category: "Industry", readMinutes: 10,
    author: "Kenji Nakamura", authorAvatar: av("Kenji-b", "ffdfbf"), authorRole: "Industry analyst",
    date: "Dec 18, 2025",
    cover: "linear-gradient(135deg,#0ea5e9 0%,#7c3aed 100%)",
    coverUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    tags: ["DevRel", "Industry"],
    body: [
      "Something's changing in developer relations, and the numbers don't quite add up. Spend is up 18% year over year. Headcount growth is flat. The gap has to go somewhere.",
      "We asked 340 devrel leaders where the money is going, and their answers were more consistent than we expected.",
    ],
  },
  {
    id: "b8", slug: "quit-well",
    title: "How to quit well",
    excerpt: "Leaving a job is a design problem. Do it with as much care as you took accepting the offer — your future self will thank you.",
    category: "Career", readMinutes: 4,
    author: "Sofía Álvarez", authorAvatar: av("Sofia", "d1d4f9"), authorRole: "People partner",
    date: "Dec 03, 2025",
    cover: "linear-gradient(135deg,#14b8a6 0%,#10b981 100%)",
    coverUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    tags: ["Career", "People"],
    body: [
      "Quitting is a skill. Some people are shockingly bad at it, and it costs them their next role, their reputation, and sometimes their references.",
      "Here's a step-by-step guide to leaving well — as a peer, as a leader, and as an IC.",
    ],
  },
  {
    id: "b9", slug: "salary-negotiation-2026",
    title: "Salary negotiation, without the theater",
    excerpt: "You don't need a script. You need three numbers, one email, and the willingness to be a little uncomfortable for 24 hours.",
    category: "Salary insights", readMinutes: 6,
    author: "Devon Park", authorAvatar: av("Devon-b", "ffdfbf"), authorRole: "Career coach",
    date: "Nov 20, 2025",
    cover: "linear-gradient(135deg,#5b58f5 0%,#ec4899 100%)",
    coverUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    tags: ["Salary", "Career", "Negotiation"],
    body: [
      "Most salary negotiation advice is theater. It's about performing confidence, deploying scripts, and gaming the recruiter.",
      "There's a simpler version that works better: know three numbers, send one email, and be OK sitting with a little discomfort.",
    ],
  },
];

export const featuredBlogPosts = blogPosts.filter((p) => p.featured);
export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category))).sort();
export const blogTags       = Array.from(new Set(blogPosts.flatMap((p) => p.tags))).sort();

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (slug: string, limit = 3) => {
  const post = getBlogPost(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1) - (b.category === post.category ? -1 : 1))
    .slice(0, limit);
};
