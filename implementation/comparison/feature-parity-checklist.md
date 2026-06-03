# Feature Parity Checklist

Use this checklist when developing both paths in parallel.

## Core Pages

| Feature | Block theme | Headless Next.js | Notes |
| --- | --- | --- | --- |
| Home page | [x] | [x] | Block theme uses `front-page.html`; Next uses `src/app/page.tsx` |
| Services page | [x] | [x] | Block theme has page pattern; Next has `/services` route |
| About page | [x] | [x] | Block theme has page pattern; Next has `/about` route |
| Blog index | [x] | [x] | Next supports empty state without API |
| Blog post detail | [x] | [x] | Next route is dynamic |
| Contact page | [x] | [x] | Block theme uses form plugin/shortcode placeholder; Next has `/api/contact` route |
| Privacy policy | [x] | [x] | Placeholder legal content in both |

## Homepage Sections

| Section | Block theme | Headless Next.js | Notes |
| --- | --- | --- | --- |
| Hero | [x] | [x] | Implemented in both |
| Problem | [x] | [x] | Implemented in both |
| Solution | [x] | [x] | Implemented in both |
| Benefits | [x] | [x] | Implemented in both |
| Features | [x] | [x] | Solution/package cards cover feature details |
| Process | [x] | [x] | Implemented in both |
| Blog preview | [x] | [x] | Block theme uses query; Next uses static preview cards |
| FAQ | [x] | [x] | Implemented in both |
| Final CTA | [x] | [x] | Implemented in both |

## Content And SEO

| Feature | Block theme | Headless Next.js | Notes |
| --- | --- | --- | --- |
| SEO title handling | [ ] | [x] | Next has metadata objects; block theme depends on WordPress/SEO plugin |
| Meta descriptions | [ ] | [x] | Same as above |
| Sitemap | [x] | [x] | WordPress uses SEO/core sitemap; Next generates `/sitemap.xml` |
| Categories | [x] | [x] | Block theme has category template/list; Next has `/categories` and category detail routes |
| Internal links | [x] | [x] | Link rules documented; key page links implemented in both tracks |
| CTA on posts | [x] | [x] | Block theme includes CTA pattern; Next includes post CTA section |

## Operations

| Feature | Block theme | Headless Next.js | Notes |
| --- | --- | --- | --- |
| Local setup docs | [x] | [x] | Both documented |
| Build/test command | [ ] | [x] | Next has lint/typecheck/build |
| Theme activation docs | [x] | [ ] | Not applicable to headless |
| Deployment docs | [x] | [x] | `implementation/setup/07-deployment.md` covers both |
| Launch checklist mapping | [x] | [x] | Launch prep links to deployment-specific setup |
| Analytics/Search Console | [x] | [x] | WordPress plugin path documented; Next env/script support implemented |

## Next Priority

Bring the next set of page and conversion features into parity:

1. Add image/media handling strategy for both tracks.
2. Add production hardening notes for form spam protection.
3. Add richer demo content for the first 3 blog posts.
4. Add accessibility QA checklist for both tracks.
