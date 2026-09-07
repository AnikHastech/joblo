import type { Testimonial, InsightPost } from "@types/index";

// DiceBear "notionists" — colorful, brand-consistent avatars, delivered as SVG
const av = (seed: string, bg = "b6e3f4") =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=${bg}&scale=110`;

export const testimonials: (Testimonial & { avatarUrl: string; rating: number; tags: string[]; year: number })[] = [
  {
    id: "t1", name: "Maya Okonkwo", role: "Staff Designer", company: "Linear",
    avatar: "MO", avatarUrl: av("Maya", "ffdfbf"),
    quote: "Joblo cut months off my search. Every listing felt hand-picked — no noise, just companies I actually wanted to work with.",
    hired: "3 weeks", rating: 5, tags: ["Design · SaaS"], year: 2025,
  },
  {
    id: "t2", name: "Rafael Chen", role: "Head of Engineering", company: "Vercel",
    avatar: "RC", avatarUrl: av("Rafael", "c0aede"),
    quote: "We've hired seven senior engineers through Joblo this year. The candidate quality is just in a different league.",
    hired: "Employer", rating: 5, tags: ["Engineering · Platform"], year: 2026,
  },
  {
    id: "t3", name: "Priya Anand", role: "Product Manager", company: "Stripe",
    avatar: "PA", avatarUrl: av("Priya", "b6e3f4"),
    quote: "I found a role I didn't know existed at a company I'd been dreaming about. That's the whole product in one sentence.",
    hired: "6 weeks", rating: 5, tags: ["Product · Fintech"], year: 2025,
  },
];

export const insights: (InsightPost & { coverUrl: string })[] = [
  {
    id: "i1", slug: "2026-compensation-report",
    title: "The 2026 tech compensation report",
    excerpt: "What senior engineers, designers, and PMs are actually earning in 2026 — with regional breakdowns from 128K+ verified offers.",
    category: "Salary insights", readMinutes: 8,
    author: "Joblo Research", authorAvatar: av("Research", "d1d4f9"),
    date: "Feb 12, 2026",
    cover: "linear-gradient(135deg,#5b58f5 0%,#ff4d17 100%)",
    coverUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "i2", slug: "remote-hiring-2026",
    title: "How the best teams hire remotely in 2026",
    excerpt: "Async-first interview loops, portfolio-heavy screening, and the small rituals that separate great remote teams from the rest.",
    category: "Playbook", readMinutes: 6,
    author: "Elena Marquez", authorAvatar: av("Elena", "c0aede"),
    date: "Feb 04, 2026",
    cover: "linear-gradient(135deg,#10b981 0%,#0ea5e9 100%)",
    coverUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "i3", slug: "resume-that-works",
    title: "The résumé that actually gets replies",
    excerpt: "We analyzed 40,000 résumés that landed interviews last quarter. Here's exactly what they had in common — and what they didn't.",
    category: "Career", readMinutes: 5,
    author: "Devon Park", authorAvatar: av("Devon", "ffdfbf"),
    date: "Jan 28, 2026",
    cover: "linear-gradient(135deg,#f59e0b 0%,#ec4899 100%)",
    coverUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

// Live hire avatars (used in Hero & MarketPulse)
export const liveHireAvatars = {
  Maya:  av("Maya",  "ffdfbf"),
  Devon: av("Devon", "d1d4f9"),
  Priya: av("Priya", "b6e3f4"),
  Kenji: av("Kenji", "ffd5dc"),
  Elena: av("Elena", "c0aede"),
};
