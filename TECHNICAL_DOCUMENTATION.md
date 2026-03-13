# Cynical Site Technical Documentation

## 1. Project Overview

This repository contains the marketing and lead-generation website for Cynical Technology, built with Next.js App Router.

Primary goals of the application:

- Present cybersecurity products and services.
- Publish static marketing content (solutions, products, legal pages, case studies, events).
- Provide lead capture forms integrated with EmailJS + Google reCAPTCHA.
- Aggregate blog content from an external RSS feed (old blog).

## 2. Technology Stack

### Core framework/runtime

- Next.js `16.1.6` (App Router)
- React `19.2.3`
- TypeScript `5`

### UI and styling

- Tailwind CSS `v4` (via `@tailwindcss/postcss`)
- `tw-animate-css`
- Radix UI primitives (`@radix-ui/*`)
- `lucide-react` icons
- `next-themes` for theme switching
- Local and Google fonts via `next/font`
- h1, h2 and h3 has aeonik font defined in globals.css (cannot override with tailwind classes)
- p has inter font defined in globals.css (cannot override with tailwind classes)
- Styles related to blog content in the old blog page are defined in globals.css and use tailwind typography plugin classes.

### Motion and interaction

- `motion` - Used in SocialMediaHelp.tsx, Dataflow.tsx (vigile.ai integration visualization).
- `gsap` - NOT USED AND CAN BE REMOVED
- `embla-carousel-react` - testimonials (home )
- `react-fast-marquee` - trusted by marquee (home )

### Forms and communications

- `@emailjs/browser` for client-side email submission
- `react-google-recaptcha` for bot mitigation
- `sonner` for toast notifications

### Content processing and utilities

- `xml2js` for RSS XML parsing (old blog)
- `he` for HTML entity decoding (old blog)
- `clsx` + `tailwind-merge` for class composition

### SEO and site indexing

- `next-sitemap`
- `next-seo` for OpenGraph/Twitter metadata management
- `llms.txt` for LLM crawling instructions
- `robots.txt` for general crawler instructions
- JSON-LD for organization schema in `app/layout.tsx`

## 3. Repository Structure

Top-level directories and intent:

- `app/`: App Router routes, layouts, route metadata, and page-level components.
- `components/`: Reusable UI and feature components (home sections, contact forms, shared layout pieces).
- `context/`: App-wide providers (for example top loading progress bar provider).
- `data/`: Static data sources used by pages/components (tsx file when lucide icon name is included).
- `lib/`: Shared business and utility logic (RSS/blog parsing, email sender wrapper, utility helpers).
- `public/`: Static assets and SEO artifacts (robots, sitemap, images).

## 4. Routing and Rendering Model

The app uses Next.js App Router (`app/` directory) with file-system routing.

### Root shell

- `app/layout.tsx` defines global metadata, fonts, theme provider, toaster, navbar/footer, and organization JSON-LD.
- `app/layout-client.tsx` wraps children in client providers.
- `app/not-found.tsx` handles unresolved routes.
- `components/UnderConstruction.tsx` is a placeholder for in-progress pages.

### Main routes (examples)

- `/` home page
- `/contact`
- `/pricing`
- `/products/*`
- `/solutions/*`
- `/company`
- `/events` - needs work
- `/resources/case-studies` - page is not used. Supposed to be replaced by wordpress case studies page.
- `/privacy-policy`
- `/terms-of-service`
- `/responsible-disclosure`
- `/thank-you` - redirected to after form submission (pricing, social media help form, Schedul Dialog (there's a typo in file name, should be ScheduleDialog))
- `/downloads/thank-you` - redirected to after sample report form submission
- `/pricing/thank-you` - redirected to after pricing form submission

### Dynamic routes

- `app/blogs-old-xyz/[slug]/page.tsx`
- `app/events/[title]/page.tsx`
- `app/research-old-xyz/[title]/page.tsx`
- `app/resources/case-studies/[title]/page.tsx`

`blogs-old-xyz/[slug]` uses:

- `generateStaticParams()` from RSS-fed post IDs.
- `generateMetadata()` per post for SEO title/description.
- Runtime fallback to `notFound()` when post slug is missing.

## 5. Data Flow

### 5.1 Static content

Most pages are statically composed using local TS/TSX data modules in `data/` (for example `events.data.ts`, pricing/solutions/testimonials datasets).

### 5.2 Blog content from external RSS

`lib/blog.ts` fetches and parses RSS from:

- `https://cynicaltechnology.com/feed/`

Pipeline:

1. Fetch RSS XML with Next.js revalidation (`revalidate: 3600`).
2. Parse XML with `xml2js`.
3. Normalize each post to `BlogPost` shape.
4. Sanitize rendered HTML snippets using helper cleanup logic.

Key exported functions:

- `fetchBlogPosts()`
- `getBlogPost(slug)`
- `getAllCategories()`

## 6. Form Submission Architecture

Lead forms are client components that:

1. Perform client-side validation.
2. Require solved Google reCAPTCHA token.
3. Submit to EmailJS using `lib/sendQuery.ts` (`sendEmail`).
4. Show success/failure toasts.
5. Redirect to thank-you pages on success.

Representative form components:

- `app/contact/ContactForm.tsx`
- `components/contact/SampleReportForm.tsx`
- `app/pricing/PricingForm.tsx`
- `components/contact/SchedulDialog.tsx`
- `app/solutions/account-recovery/HelpForm.tsx`

## 7. Styling and Theming

Global styling is defined in `app/globals.css`.

Highlights:

- Tailwind v4 imports and typography plugin.
- CSS variable-based token system (light/dark themes).
- `@theme inline` mappings to Tailwind-compatible semantic color/font variables.
- Custom animation keyframes (`ping-slow`, `pulse-glow`, `float`).
- Global scrollbar hiding and typography defaults.

Fonts:

- Google: Inter, Noto Serif
- Local: Aeonik (light/medium/bold)

## 8. SEO and Metadata

SEO is handled through:

- `metadata` export in App Router pages/layouts.
- Organization schema JSON-LD in `app/layout.tsx`.
- OpenGraph + Twitter metadata in root layout.
- `next-sitemap` integration via `postbuild` script and `next-sitemap.config.js`.

`next.config.ts` currently allows remote images from:

- `https://cynicaltechnology.com/**`
- `https://*/**` (everywhere really. To get from googleusercontent for old blog)

## 9. Configuration and Tooling

### TypeScript (`tsconfig.json`)

- `strict: true`
- `moduleResolution: bundler`
- Path alias: `@/* -> ./*`
- `noEmit: true`

### ESLint (`eslint.config.mjs`)

- Based on Next.js core-web-vitals + TypeScript configs.
- Uses global ignores for build outputs.

### PostCSS (`postcss.config.mjs`)

- Tailwind plugin: `@tailwindcss/postcss`

## 10. Environment Variables

The following public variables are referenced by form modules:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PRICING_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `SITE_URL` (used for sitemap generation). Set to vercel domain right now.

## 11. Scripts and Local Development

Available npm scripts:

- `npm run dev`: start local dev server.
- `npm run build`: production build.
- `npm run postbuild`: generate sitemap/robots using `next-sitemap`.
- `npm run start`: run production server.
- `npm run lint`: run ESLint.

Recommended local setup:

1. Install dependencies: `npm install`.
2. Create `.env.local` with required variables.
3. Run `npm run dev`.
4. Validate linting with `npm run lint`.

## 12. Deployment Notes

- Designed for Vercel-style Next.js deployment.
- Ensure all `NEXT_PUBLIC_*` values are configured in deployment environment variables.
- Set `SITE_URL` to canonical production domain for correct sitemap output.
- Run `build` + `postbuild` in CI/CD so fresh sitemaps are emitted on every build.

## 13. Operational Considerations

- Form handling is fully client-side; there is no server-side API route for form submission in the current architecture.
- RSS dependency means blog data availability depends on remote feed.
- Remote image hostname policy in `next.config.ts` is permissive; tightening host allowlists is recommended for stricter security posture.

## 14. Quick Reference

- Main layout entry: `app/layout.tsx`
- Home page entry: `app/page.tsx`
- Form sender utility: `lib/sendQuery.ts`
- RSS/blog utility: `lib/blog.ts`
- Global styles/theme tokens: `app/globals.css`
- Static content datasets: `data/`
- Sitemap config: `next-sitemap.config.js`

## 15. Image assets guide

- Logo, og-images, vigile dashboard images: `/public`
- Brand logos or orgs: `/public/brands`
- Cynical Partners: `/public/partners`
- Cynical staffs (for /company and /events): `/public/people`
- Products logo and page images: `/public/products`
- Photos of individuals whose testimonies are displayed: `/public/testimonials`
- Images used in pages to make it more 'human': `/public/generic`
