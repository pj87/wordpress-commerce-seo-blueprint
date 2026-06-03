# Shared Content Model

Both implementation tracks should use the same content model.

## Pages

| Page | Slug | Purpose |
| --- | --- | --- |
| Home | `/` | Main landing page and lead generation |
| Services | `/services/` | Explain the WordPress launch package |
| About | `/about/` | Build trust |
| Blog | `/blog/` | SEO article index |
| Contact | `/contact/` | Capture consultation requests |
| Privacy Policy | `/privacy-policy/` | Legal page |

## Blog Categories

| Category | Slug | Purpose |
| --- | --- | --- |
| WordPress | `wordpress` | WordPress setup and editing topics |
| SEO | `seo` | Search, metadata, content structure |
| WooCommerce | `woocommerce` | Store setup and product content |
| Performance | `performance` | Speed, image optimization, caching |

## Homepage Sections

| Section | Purpose |
| --- | --- |
| Hero | State offer and primary CTA |
| Problem | Show business pain points |
| Solution | Explain the package |
| Benefits | Connect features to outcomes |
| Features | List implementation details |
| Process | Show delivery flow |
| Blog preview | Surface SEO content |
| FAQ | Handle objections |
| Final CTA | Repeat conversion action |

## Primary CTA

Text:

```text
Book a consultation
```

Target:

```text
/contact/
```

## Blog Posts

Initial posts:

1. How to Plan a WordPress Landing Page for a Local Business
2. WordPress SEO Checklist for Small Business Websites
3. WooCommerce Setup Checklist for Small Stores

## Ownership By Track

| Content | Block theme | Headless Next.js |
| --- | --- | --- |
| Pages | WordPress pages rendered by theme templates | WordPress pages fetched through REST API or implemented as app routes |
| Posts | WordPress posts rendered by theme templates | WordPress posts fetched through REST API |
| Categories | WordPress categories | WordPress categories fetched through REST API |
| Homepage | `front-page.html` and patterns | `src/app/page.tsx` |
| Blog index | `index.html` fallback/posts page | `src/app/blog/page.tsx` |
| Post detail | `single.html` | `src/app/blog/[slug]/page.tsx` |
| Categories | `templates/category.html` and `patterns/category-list.php` | `src/app/categories/page.tsx` and `src/app/categories/[slug]/page.tsx` |
| Services | `patterns/services-page.php` inserted into a WordPress page | `src/app/services/page.tsx` |
| About | `patterns/about-page.php` inserted into a WordPress page | `src/app/about/page.tsx` |
| Contact | `patterns/contact-page.php` inserted into a WordPress page | `src/app/contact/page.tsx` |
| Privacy Policy | `patterns/privacy-page.php` inserted into a WordPress page | `src/app/privacy-policy/page.tsx` |
