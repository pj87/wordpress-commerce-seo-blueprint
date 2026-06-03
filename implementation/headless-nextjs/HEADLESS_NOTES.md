# Headless WordPress Notes

## What Moves To JavaScript

In this setup, the public frontend is JavaScript:

- routing
- React components
- rendering posts and pages
- metadata generation
- styling
- deployment

## What Stays In WordPress

WordPress remains responsible for:

- admin login
- post editing
- page editing
- media library
- categories
- REST API
- plugins used for content management

## What Still Requires PHP

The WordPress backend still requires PHP because WordPress itself is PHP.

This scaffold replaces the public theme layer, not the WordPress application.

## REST API Examples

Posts:

```text
/wp-json/wp/v2/posts
```

Pages:

```text
/wp-json/wp/v2/pages
```

Categories:

```text
/wp-json/wp/v2/categories
```

Single post by slug:

```text
/wp-json/wp/v2/posts?slug=example-post
```

## Production Checklist

- Configure `WORDPRESS_API_URL`.
- Confirm the WordPress REST API is public.
- Add preview support if editors need draft previews.
- Add image handling for featured media.
- Add category routes.
- Add sitemap generation.
- Add robots.txt.
- Add deployment environment variables.

