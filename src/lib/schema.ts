/**
 * schema.org JSON-LD builders for SEO.
 * Google's rich results parser consumes these — validated shapes below.
 */
import type { Job, Company, InsightPost } from "@types/index";
import { site } from "@data/site";

const origin = "https://joblo.example.com"; // production URL

const abs = (path: string) => (path.startsWith("http") ? path : `${origin}${path}`);

// ── Organization (the marketplace itself) — used on Home
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: origin,
  logo: abs("/favicon.svg"),
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
  },
  sameAs: [site.social.twitter, site.social.linkedin, site.social.github, site.social.dribbble],
});

// ── WebSite with SearchAction — used on Home
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: origin,
  potentialAction: {
    "@type": "SearchAction",
    target: `${origin}/jobs?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

// ── BreadcrumbList
export interface Crumb { name: string; url?: string }
export const breadcrumbSchema = (items: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    ...(item.url ? { item: abs(item.url) } : {}),
  })),
});

// ── JobPosting — used on /jobs/[slug]
export const jobPostingSchema = (job: Job, company: Company, description: string) => {
  const isRemote = job.remote || /remote/i.test(job.location);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - job.postedDaysAgo);
  const validThrough = new Date();
  validThrough.setDate(validThrough.getDate() + 30);

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: company.name,
      value: job.id,
    },
    datePosted: postedDate.toISOString().split("T")[0],
    validThrough: validThrough.toISOString().split("T")[0],
    employmentType: employmentTypeMap[job.type] ?? "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: company.name,
      sameAs: `${origin}/companies/${company.slug}`,
      logo: abs(`/favicon.svg`),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.split(",")[0].trim(),
        addressCountry: job.location.split(",").slice(-1)[0].trim(),
      },
    },
    ...(isRemote ? {
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "Worldwide",
      },
    } : {}),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: job.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: "YEAR",
      },
    },
    experienceRequirements: experienceMap[job.experience] ?? job.experience,
    directApply: true,
    url: `${origin}/jobs/${job.slug}`,
  };
};

const employmentTypeMap: Record<string, string> = {
  "Full-time":  "FULL_TIME",
  "Part-time":  "PART_TIME",
  "Contract":   "CONTRACTOR",
  "Freelance":  "CONTRACTOR",
  "Internship": "INTERN",
};

const experienceMap: Record<string, string> = {
  "Entry":     "Entry level (0-2 years)",
  "Mid":       "Mid-level (3-5 years)",
  "Senior":    "Senior (5+ years)",
  "Lead":      "Lead (8+ years)",
  "Executive": "Executive",
};

// ── Organization (individual company)
export const companyOrgSchema = (company: Company, aboutText: string, website: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  description: aboutText,
  url: website,
  sameAs: `${origin}/companies/${company.slug}`,
  logo: abs(`/favicon.svg`),
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: company.size,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: company.location.split(",")[0].trim(),
  },
});

// ── Article — used on /blog/[slug]
export const articleSchema = (post: InsightPost, coverUrl: string, bodyText: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: [coverUrl],
  datePublished: new Date(post.date).toISOString(),
  author: {
    "@type": "Person",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: {
      "@type": "ImageObject",
      url: abs("/favicon.svg"),
    },
  },
  articleBody: bodyText,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${origin}/blog/${post.slug}`,
  },
});

// ── Person — used on /candidates/[slug]
export const personSchema = (
  candidate: { name: string; slug: string; role: string; location: string; avatar: string; skills: string[] },
  bio: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: candidate.name,
  jobTitle: candidate.role,
  description: bio,
  image: candidate.avatar,
  address: {
    "@type": "PostalAddress",
    addressLocality: candidate.location.split(",")[0].trim(),
  },
  knowsAbout: candidate.skills,
  url: `${origin}/candidates/${candidate.slug}`,
});
