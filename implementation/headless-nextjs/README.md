# Headless Next.js Frontend

Minimal JS-first frontend scaffold for using WordPress as a CMS through the REST API.

This is the alternative path to `implementation/wordpress-block-theme/`.

## Architecture

```text
WordPress admin
  -> posts, pages, categories, media
  -> WordPress REST API
  -> Next.js frontend
```

WordPress still requires PHP on the backend. The public frontend is built with TypeScript, React, and Next.js.

## Features

- Home page
- Services page
- Shop preview
- About page
- Blog index
- Blog post detail route
- Category index
- Category detail route
- Contact page
- Contact API route
- Privacy policy page
- WordPress REST API client
- Sitemap and robots generation
- Basic metadata and Search Console verification
- Optional GA4 analytics script
- Basic contact form spam checks
- Self-contained visual slots
- Minimal CSS
- Typed post, page, and category models

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local`.
3. Set `WORDPRESS_API_URL` to your WordPress REST API base URL:

```text
WORDPRESS_API_URL=https://example.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://example.com
CONTACT_FORM_ENDPOINT=https://example.com/contact-endpoint
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=search-console-verification-token
```

4. Run the dev server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

## Required WordPress Setup

- Permalinks enabled
- Public posts published
- REST API accessible
- Blog categories created
- Featured images optional for future media integration

## Public Routes

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
/privacy-policy
/sitemap.xml
/robots.txt
/api/contact
```

## SEO Routes

The app generates:

```text
/sitemap.xml
/robots.txt
```

Set `NEXT_PUBLIC_SITE_URL` before production deployment so those files use the public frontend domain.

## Contact Form

The contact page posts to:

```text
/api/contact
```

Set `CONTACT_FORM_ENDPOINT` in production to forward validated submissions to a form backend, CRM, email service, or WordPress form endpoint.

The local API route includes basic spam checks. See:

```text
../setup/11-form-spam-hardening.md
```

## Analytics And Search Console

Set these values in production when tracking and verification are needed:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=search-console-verification-token
```

Analytics loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured.

## When To Use This

Use this path when the frontend must be React/Next.js, but WordPress should remain the content admin.

Use the block theme path when WordPress-native editing and simpler hosting matter more.
