# Release Checklist

## Goal

Prepare a clean repository release after changes to documentation, the WordPress block theme, or the headless Next.js implementation.

## Repository Checks

- [ ] `git status --short --branch` is reviewed.
- [ ] New files are intentionally placed.
- [ ] Generated files are ignored.
- [ ] README files reflect the current structure.
- [ ] Parity checklist is updated.
- [ ] Setup docs include new workflow steps.

## Documentation Checks

- [ ] Root `README.md` reflects current folders.
- [ ] `implementation/README.md` reflects current implementation paths.
- [ ] `implementation/headless-nextjs/README.md` reflects current routes and env vars.
- [ ] `implementation/setup/README.md` lists all setup documents.
- [ ] Project demo docs point to current drafts and examples.

## Headless Next.js Checks

Run from:

```bash
implementation/headless-nextjs/
```

Commands:

```bash
npm run lint
npm run typecheck
npm run build
```

Expected important routes:

```text
/
/services
/shop
/about
/blog
/blog/[slug]
/categories
/categories/[slug]
/contact
/api/contact
/privacy-policy
/sitemap.xml
/robots.txt
```

## WordPress Block Theme Checks

- [ ] `theme.json` parses as JSON.
- [ ] Templates do not contain invalid block names.
- [ ] Patterns have titles, slugs, and categories.
- [ ] Image placeholders have useful alt text.
- [ ] Page patterns map to the demo sitemap.

## Launch-Adjacent Checks

- [ ] Accessibility QA reviewed.
- [ ] Performance QA reviewed.
- [ ] Contact form hardening reviewed.
- [ ] Analytics/Search Console setup reviewed.
- [ ] Media/image handling reviewed.
- [ ] Deployment notes reviewed.

## GitHub Release Flow

1. Commit focused changes.
2. Push to `origin/main`.
3. Confirm GitHub shows the latest commit.
4. Re-check the root README on GitHub.
5. Create a tag only when a stable milestone is reached.

