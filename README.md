# WordPress Commerce & SEO Blueprint

A practical framework for building WordPress landing pages, SEO blogs, business websites, and WooCommerce stores.

This repository turns the long-form blueprint in `wordpress_commerce_seo_blueprint.md` into reusable project documentation, checklists, and templates.

## What This Framework Covers

- WordPress fundamentals
- SEO-focused landing pages
- Blog architecture and content planning
- WooCommerce store setup
- Product and category SEO
- Performance, security, deployment, and maintenance
- Optional headless WordPress direction

## Repository Structure

```text
docs/
  01-framework-overview.md
  02-learning-path.md
  03-wordpress-architectures.md
  04-project-types.md

workflows/
  01-discovery.md
  02-sitemap-and-content.md
  03-landing-page-build.md
  04-seo-blog-build.md
  05-woocommerce-store-build.md
  06-launch.md
  07-maintenance.md

starters/
  local-business-site.md
  service-landing-blog.md
  woocommerce-mini-store.md
  seo-affiliate-blog.md
  headless-wordpress-blog.md

projects/
  demo-service-site/
  demo-woocommerce-store/

implementation/
  wordpress-block-theme/
  headless-nextjs/
  comparison/
  setup/

checklists/
  launch-checklist.md
  maintenance-checklist.md
  seo-blog-checklist.md
  landing-page-checklist.md
  woocommerce-store-checklist.md

examples/
  client-site-scope.md
  landing-page-wireframe.md
  blog-content-plan.md
  woocommerce-product-template.md
```

## Recommended First Project

Build a client-style WordPress service website:

- Homepage
- Services page
- About page
- Blog index
- Contact page
- Privacy policy
- 3 SEO blog posts
- Contact form
- SEO metadata
- Analytics and sitemap

See `projects/demo-service-site/` for a filled-out example of this project type.

## Buildable Starter

Use `implementation/wordpress-block-theme/` as a minimal block theme starter for the demo service site.

Use `implementation/headless-nextjs/` for a JS-first frontend with pages, blog routes, category routes, contact API, sitemap, robots, analytics hooks, and WordPress REST API content.

Setup notes live in `implementation/setup/`.

## How To Use This Repo

1. Read `docs/01-framework-overview.md`.
2. Follow `docs/02-learning-path.md`.
3. Pick a project from `docs/04-project-types.md`.
4. Choose a starter kit from `starters/`.
5. Run the matching workflow from `workflows/`.
6. Use the relevant checklist and example template.
7. Compare your output with `projects/demo-service-site/`.
8. Build with `implementation/wordpress-block-theme/` if you want a WordPress theme starter.
9. Build with `implementation/headless-nextjs/` if you want a React/Next.js frontend.
10. Keep the original blueprint as the complete reference document.
