# Demo Content Entry

## Goal

Enter the demo service site content into WordPress.

## Source Files

Use:

- `projects/demo-service-site/01-discovery.md`
- `projects/demo-service-site/02-sitemap.md`
- `projects/demo-service-site/03-homepage-wireframe.md`
- `projects/demo-service-site/04-blog-content-plan.md`

## Pages

Create or fill these pages:

| Page | Source |
| --- | --- |
| Home | Homepage wireframe |
| Services | Discovery offer and required features |
| About | Business description and positioning |
| Blog | WordPress posts page |
| Contact | Primary CTA and contact form |
| Privacy Policy | Legal page draft |

## Homepage Sections

Use these block patterns:

- Service Hero
- Problem Section
- Solution Section
- Benefits Section
- Project Process
- Blog Preview
- Service FAQ
- Final CTA

## Page Patterns

Use these block patterns for the core pages:

| Page | Pattern |
| --- | --- |
| Services | Services Page Content |
| About | About Page Content |
| Contact | Contact Page Content |
| Privacy Policy | Privacy Page Content |

## Blog Posts

Create these initial posts:

1. How to Plan a WordPress Landing Page for a Local Business
2. WordPress SEO Checklist for Small Business Websites
3. WooCommerce Setup Checklist for Small Stores

Use the drafts in:

```text
projects/demo-service-site/blog-posts/
```

## Categories

Assign posts to:

- WordPress
- SEO
- WooCommerce
- Performance

## Verification

- Homepage follows the wireframe.
- Services page explains the package.
- Contact page has a working form.
- Headless contact form has `CONTACT_FORM_ENDPOINT` configured before production launch.
- Blog has 3 posts.
- Posts link to the relevant service or contact page.
- Internal links follow `implementation/setup/08-internal-linking.md`.
- Post metadata follows the metadata blocks in the draft files.
- Editor preview follows `implementation/setup/15-editor-preview-content-workflow.md`.
