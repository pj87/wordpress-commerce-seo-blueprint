# Deployment

## Goal

Document the different deployment paths for the WordPress-native theme and the headless Next.js frontend.

## Block Theme Deployment

Use this path for the WordPress-native implementation.

Steps:

1. Install WordPress on production hosting.
2. Copy `implementation/wordpress-block-theme/` to `wp-content/themes/wp-growth-studio/`.
3. Activate the theme in WordPress admin.
4. Create the required pages and categories.
5. Insert the matching page patterns.
6. Configure SEO plugin, sitemap, analytics, forms, cache, security, and backups.
7. Connect domain and SSL.
8. Run `checklists/launch-checklist.md`.

Sitemap strategy:

- Use a WordPress SEO plugin or WordPress core sitemap support.
- Confirm the sitemap URL before launch.
- Submit the sitemap in Google Search Console.

## Headless Next.js Deployment

Use this path when WordPress remains the CMS and Next.js is the public frontend.

Steps:

1. Deploy WordPress where the REST API is publicly reachable.
2. Deploy `implementation/headless-nextjs/` to a Node.js hosting provider.
3. Set environment variables:

```text
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://your-public-frontend.com
CONTACT_FORM_ENDPOINT=https://your-form-endpoint.example
```

4. Run the production build:

```bash
npm run build
```

5. Start the production server:

```bash
npm run start
```

6. Confirm:

```text
/sitemap.xml
/robots.txt
/blog
/categories
/contact
```

Sitemap strategy:

- Next.js generates `/sitemap.xml`.
- Next.js generates `/robots.txt`.
- WordPress content is included when `WORDPRESS_API_URL` is configured.

## Verification

- Public site loads over HTTPS.
- WordPress REST API returns posts and categories.
- Next.js build passes.
- Sitemap and robots routes load.
- Contact form production strategy is configured.
- Analytics and Search Console are connected.
