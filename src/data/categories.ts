import type { Category } from "@types/index";

export const categories: Category[] = [
  { slug: "design",       name: "Design & Creative",       icon: "◆", openings: 2340, gradient: "linear-gradient(135deg,#ff7043 0%,#ff4d17 100%)" },
  { slug: "engineering",  name: "Software Engineering",     icon: "⌘", openings: 5820, gradient: "linear-gradient(135deg,#7c7fff 0%,#4a3fe6 100%)" },
  { slug: "product",      name: "Product Management",       icon: "◐", openings: 1120, gradient: "linear-gradient(135deg,#10b981 0%,#059669 100%)" },
  { slug: "marketing",    name: "Marketing & Growth",       icon: "✦", openings: 1980, gradient: "linear-gradient(135deg,#f59e0b 0%,#d97706 100%)" },
  { slug: "data",         name: "Data & Analytics",         icon: "▲", openings: 1450, gradient: "linear-gradient(135deg,#0ea5e9 0%,#0369a1 100%)" },
  { slug: "sales",        name: "Sales & Business Dev",     icon: "→", openings: 2210, gradient: "linear-gradient(135deg,#ec4899 0%,#be185d 100%)" },
  { slug: "customer",     name: "Customer Success",         icon: "♡", openings: 890,  gradient: "linear-gradient(135deg,#8b5cf6 0%,#6d28d9 100%)" },
  { slug: "finance",      name: "Finance & Operations",     icon: "$", openings: 760,  gradient: "linear-gradient(135deg,#14b8a6 0%,#0f766e 100%)" },
];
