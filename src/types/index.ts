export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
export type ExperienceLevel = "Entry" | "Mid" | "Senior" | "Lead" | "Executive";

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string; // emoji or short mark
  brandColor: string; // tailwind-safe hex
  industry: string;
  size: string;
  location: string;
  website?: string;
  description?: string;
  openings?: number;
  featured?: boolean;
  verified?: boolean;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  companyId: string;
  location: string;
  remote: boolean;
  type: EmploymentType;
  experience: ExperienceLevel;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  postedDaysAgo: number;
  categorySlug: string;
  tags: string[];
  featured?: boolean;
  applicants?: number;
}

export interface Category {
  slug: string;
  name: string;
  icon: string; // emoji
  openings: number;
  gradient: string; // CSS gradient
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string; // initials
  quote: string;
  hired?: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
  badge?: string;
  children?: NavLink[];
  /** When "section", the item is rendered as a heading inside a dropdown (not clickable). */
  type?: "link" | "section";
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  author: string;
  authorAvatar: string;
  date: string;
  cover: string; // gradient
}
