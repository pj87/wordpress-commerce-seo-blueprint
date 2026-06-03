# Performance QA

## Goal

Confirm both implementation tracks stay fast enough for SEO, conversion, and client use.

## Shared Checks

- [ ] Homepage loads quickly on mobile.
- [ ] Largest visible content appears without layout shift.
- [ ] Images are optimized and sized correctly.
- [ ] No unused plugins or scripts are active.
- [ ] Fonts are not blocking rendering unnecessarily.
- [ ] Forms do not block page rendering.
- [ ] Analytics scripts load only when configured.
- [ ] Sitemap and robots routes respond quickly.
- [ ] Mobile layout has no overlapping content.

## Block Theme Path

Check inside WordPress:

1. Remove unused themes and plugins.
2. Enable page caching.
3. Optimize uploaded images.
4. Test with and without logged-in admin toolbar.
5. Review plugin assets on the frontend.
6. Confirm WooCommerce assets only load where needed if WooCommerce is active.

Recommended tools:

- PageSpeed Insights
- Lighthouse
- WebPageTest
- Hosting cache diagnostics

## Headless Next.js Path

Check:

```bash
npm run build
```

Then verify:

- Static routes are prerendered where expected.
- Dynamic routes are intentional.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset locally unless testing analytics.
- `NEXT_PUBLIC_SITE_URL` is set in production.
- WordPress REST API calls use revalidation.

Current expected dynamic routes:

```text
/api/contact
/blog/[slug]
/categories/[slug]
```

## Verification

- Lighthouse performance run completed.
- Core Web Vitals reviewed.
- No unexpected layout shift from visual slots or images.
- No production-only scripts are loaded accidentally in local development.

