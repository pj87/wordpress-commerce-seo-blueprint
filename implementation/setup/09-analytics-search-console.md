# Analytics And Search Console

## Goal

Track traffic and verify the site in Google Search Console for both implementation tracks.

## Block Theme Path

Use this path for `implementation/wordpress-block-theme/`.

Recommended setup:

1. Create or choose a Google Analytics 4 property.
2. Install analytics through one of:
   - a trusted WordPress analytics plugin
   - Google Site Kit
   - the SEO plugin if it supports verification and tracking
   - a small custom theme enqueue only if the project requires it
3. Verify Google Search Console using one of:
   - DNS verification
   - SEO plugin verification field
   - Google Site Kit
   - HTML meta tag
4. Submit the WordPress sitemap.
5. Confirm traffic appears in Analytics.

## Headless Next.js Path

Use this path for `implementation/headless-nextjs/`.

Set environment variables:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=search-console-verification-token
NEXT_PUBLIC_SITE_URL=https://your-public-frontend.com
```

The app uses:

- `src/components/Analytics.tsx` for GA4 script loading
- `src/app/layout.tsx` for Search Console verification metadata
- `src/app/sitemap.ts` for `/sitemap.xml`
- `src/app/robots.ts` for `/robots.txt`

## Verification

- View page source and confirm the Search Console verification meta tag.
- Open browser dev tools and confirm the GA script loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
- Open `/sitemap.xml`.
- Open `/robots.txt`.
- Submit the public sitemap in Search Console.

## Notes

- Do not hardcode analytics IDs in source code.
- Use environment variables per deployment environment.
- Keep analytics disabled in local development unless you are testing tracking intentionally.

