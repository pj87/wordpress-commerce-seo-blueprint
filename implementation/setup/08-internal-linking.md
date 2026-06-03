# Internal Linking

## Goal

Make the demo site easier to navigate and help SEO pages support commercial pages.

## Core Link Rules

- Homepage links to Services, Blog, Categories, and Contact.
- Services page links to Blog, Categories, and Contact.
- Blog index links to Services and Categories.
- Blog posts link back to Services and Contact.
- Category pages link to matching posts and the main Blog index.

## Suggested Links

| Source | Link targets |
| --- | --- |
| Home hero | Contact, Blog |
| Home solution cards | Services, Blog, Launch checklist or Contact |
| Home blog preview | Blog, Categories |
| Services page | Blog, Categories, Contact |
| Blog page | Services, Categories |
| Blog posts | Services, Contact |
| Category pages | Blog, Contact |

## WordPress Block Theme

Use buttons and paragraph links inside these patterns:

- `patterns/hero.php`
- `patterns/solution.php`
- `patterns/blog-preview.php`
- `patterns/services-page.php`
- `patterns/cta.php`

## Headless Next.js

Links are implemented with `next/link` in:

- `src/app/page.tsx`
- `src/app/services/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/categories/[slug]/page.tsx`

## Verification

- Every important page has a path to Contact.
- Blog content has a path to Services.
- Service content has a path to supporting articles.
- Category pages do not become dead ends.

