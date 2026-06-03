# Feature Parity Checklist

Use this checklist when developing both paths in parallel.

## Core Pages

| Feature | Block theme | Headless Next.js | Notes |
| --- | --- | --- | --- |
| Home page | [x] | [x] | Block theme uses `front-page.html`; Next uses `src/app/page.tsx` |
| Services page | [ ] | [ ] | Needs page content or route implementation |
| About page | [ ] | [ ] | Needs page content or route implementation |
| Blog index | [x] | [x] | Next supports empty state without API |
| Blog post detail | [x] | [x] | Next route is dynamic |
| Contact page | [ ] | [ ] | Needs form strategy |
| Privacy policy | [ ] | [ ] | Needs content |

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
| Sitemap | [ ] | [ ] | Needs strategy in both |
| Categories | [ ] | [ ] | Needs visible category output |
| Internal links | [ ] | [ ] | Needs content entry |
| CTA on posts | [x] | [ ] | Block theme includes CTA pattern in `single.html` |

## Operations

| Feature | Block theme | Headless Next.js | Notes |
| --- | --- | --- | --- |
| Local setup docs | [x] | [x] | Both documented |
| Build/test command | [ ] | [x] | Next has lint/typecheck/build |
| Theme activation docs | [x] | [ ] | Not applicable to headless |
| Deployment docs | [ ] | [ ] | Needs separate deployment guides |
| Launch checklist mapping | [x] | [ ] | Needs headless launch mapping |

## Next Priority

Bring the next set of page and conversion features into parity:

1. Add Services and About pages to both tracks.
2. Add contact page/form strategy for both tracks.
3. Add post CTA to the Next.js blog post route.
4. Add deployment guides for both tracks.
