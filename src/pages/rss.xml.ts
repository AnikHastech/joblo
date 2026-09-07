import rss from "@astrojs/rss";
import { blogPosts } from "@data/blog";
import { site } from "@data/site";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  return rss({
    title: `${site.name} — Insights`,
    description:
      "Research, playbooks, and stories from the front lines of hiring and career growth in 2026.",
    site: context.site!,
    items: blogPosts.map((p) => ({
      title: p.title,
      pubDate: new Date(p.date),
      description: p.excerpt,
      link: `/blog/${p.slug}/`,
      author: p.author,
      categories: [p.category, ...p.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
