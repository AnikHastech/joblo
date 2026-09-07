/**
 * Responsive QA — visits every route at a spread of viewport widths and
 * writes a PNG per (route, width) combination. Meant to be run against a
 * dev/preview server so we can eyeball breakpoints before shipping.
 *
 *   1. Start the site:      npm run dev     (or npm run preview after build)
 *   2. Install Playwright:  npm i -D playwright && npx playwright install chromium
 *   3. Run:                 node scripts/responsive-shots.mjs   (or npm run shots)
 *
 * Override the target with:   BASE_URL=https://joblo.pages.dev node scripts/responsive-shots.mjs
 */

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const BASE_URL = process.env.BASE_URL || "http://localhost:4321";
const OUT_DIR = "./.responsive-shots";

// Routes to capture — keep in sync with src/pages
const routes = [
  // Marketing
  ["home-1",              "/"],
  ["home-2",              "/home-2"],
  ["about",               "/about"],
  ["jobs",                "/jobs"],
  ["job-detail",          "/jobs/senior-product-designer-linear"],
  ["companies",           "/companies"],
  ["company-detail",      "/companies/linear"],
  ["candidates",          "/candidates"],
  ["candidate-detail",    "/candidates/maya-okonkwo"],
  ["categories",          "/categories"],
  ["category-detail",     "/categories/design"],
  ["blog",                "/blog"],
  ["blog-detail",         "/blog/resume-that-works"],
  ["pricing",             "/pricing"],
  ["post-a-job",          "/post-a-job"],
  ["contact",             "/contact"],
  ["search",              "/search"],
  ["team-detail",         "/team/alex-morgan"],

  // Candidate dashboard
  ["dash-overview",       "/dashboard"],
  ["dash-applications",   "/dashboard/applications"],
  ["dash-interviews",     "/dashboard/interviews"],
  ["dash-offers",         "/dashboard/offers"],
  ["dash-assessments",    "/dashboard/assessments"],
  ["dash-referrals",      "/dashboard/referrals"],
  ["dash-messages",       "/dashboard/messages"],
  ["dash-notifications",  "/dashboard/notifications"],
  ["dash-saved",          "/dashboard/saved"],
  ["dash-alerts",         "/dashboard/alerts"],
  ["dash-profile",        "/dashboard/profile"],
  ["dash-profile-edit",   "/dashboard/profile/edit"],
  ["dash-resume",         "/dashboard/resume"],
  ["dash-settings",       "/dashboard/settings"],

  // Employer dashboard
  ["emp-overview",        "/employer"],
  ["emp-jobs",            "/employer/jobs"],
  ["emp-applicants",      "/employer/applicants"],
  ["emp-applicant",       "/employer/applicants/app-1"],
  ["emp-shortlisted",     "/employer/shortlisted"],
  ["emp-interviews",      "/employer/interviews"],
  ["emp-scheduling",      "/employer/scheduling"],
  ["emp-assessments",     "/employer/assessments"],
  ["emp-referrals",       "/employer/referrals"],
  ["emp-talent",          "/employer/talent"],
  ["emp-talent-pool",     "/employer/talent-pool"],
  ["emp-analytics",       "/employer/analytics"],
  ["emp-messages",        "/employer/messages"],
  ["emp-templates",       "/employer/templates"],
  ["emp-notifications",   "/employer/notifications"],
  ["emp-company",         "/employer/company"],
  ["emp-post-a-job",      "/employer/post-a-job"],
  ["emp-billing",         "/employer/billing"],
  ["emp-settings",        "/employer/settings"],

  // Account
  ["login",               "/login"],
  ["register",            "/register"],
  ["forgot-password",     "/forgot-password"],
  ["reset-password",      "/reset-password"],

  // Template info
  ["style-guide",         "/style-guide"],
  ["license",             "/license"],
  ["changelog",           "/changelog"],

  // Utility
  ["404",                 "/404"],
];

// Widths — small phone through wide desktop
const widths = [320, 375, 480, 640, 768, 992, 1200, 1280, 1440, 1920];

await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const totals = { ok: 0, fail: 0 };

console.log(`\nBase URL: ${BASE_URL}`);
console.log(`Output:   ${OUT_DIR}`);
console.log(`Routes:   ${routes.length}   Widths: ${widths.length}   Total: ${routes.length * widths.length}\n`);
console.log(`${"route".padEnd(22)} ${"width".padStart(5)}  ${"status".padStart(6)}  ${"size(KB)".padStart(9)}`);
console.log("-".repeat(52));

for (const [name, path] of routes) {
  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    let status = "—";
    let sizeKB = "—";

    try {
      const response = await page.goto(`${BASE_URL}${path}`, {
        waitUntil: "networkidle",
        timeout: 30_000,
      });
      status = String(response?.status() ?? "??");
      await page.waitForTimeout(400);

      const filename = `${name}--${String(width).padStart(4, "0")}.png`;
      const buffer = await page.screenshot({
        path: join(OUT_DIR, filename),
        fullPage: true,
      });
      sizeKB = (buffer.length / 1024).toFixed(0);
      totals.ok++;
    } catch (err) {
      status = "ERR";
      totals.fail++;
      process.stderr.write(`  ↳ ${name}@${width}: ${err.message}\n`);
    } finally {
      await context.close();
    }

    console.log(
      `${name.padEnd(22)} ${String(width).padStart(5)}  ${status.padStart(6)}  ${String(sizeKB).padStart(9)}`,
    );
  }
}

await browser.close();

console.log("\n" + "-".repeat(52));
console.log(`Done. ${totals.ok} shots ok, ${totals.fail} failed. See ${OUT_DIR}/`);
process.exit(totals.fail > 0 ? 1 : 0);
