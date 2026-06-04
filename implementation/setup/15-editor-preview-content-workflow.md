# Editor Preview And Content Workflow

## Goal

Define how content moves from planning documents into WordPress, and how editors preview changes in each implementation path.

## Source Of Truth

Planning starts in:

```text
projects/demo-service-site/
projects/demo-woocommerce-store/
```

Publishing happens in WordPress.

For the headless path, WordPress remains the content admin and Next.js is the public renderer.

## Block Theme Path

Use WordPress as both editor and renderer.

Workflow:

1. Copy page and post drafts from `projects/`.
2. Create or update WordPress pages.
3. Insert block patterns where appropriate.
4. Add metadata through the SEO plugin.
5. Add images and alt text through the media library.
6. Preview directly in WordPress.
7. Publish after launch checks pass.

Preview model:

- WordPress preview is the production-like preview.
- Drafts can be reviewed in the block editor.
- Theme templates and patterns render directly in WordPress.

## Headless Next.js Path

Use WordPress as editor and Next.js as renderer.

Workflow:

1. Enter content in WordPress.
2. Publish or expose content through the REST API.
3. Confirm `WORDPRESS_API_URL` points to the correct WordPress site.
4. Run the Next.js frontend locally or in staging.
5. Review public routes in Next.js.
6. Publish frontend changes after content and rendering are verified.

Current preview boundary:

- Published content is supported through the REST API.
- Draft preview is not implemented yet.
- Preview authentication, preview tokens, and draft rendering are future work.

## Future Headless Preview Requirements

Add these only when editors need draft previews in the Next.js frontend:

- WordPress preview link customization
- Next.js preview route
- signed preview token
- draft REST API access
- authentication for private preview content
- cache bypass for preview requests

## Content Entry Checklist

- [ ] Page slug matches sitemap.
- [ ] H1 is clear and unique.
- [ ] Metadata is entered.
- [ ] Category is assigned for posts.
- [ ] Internal links are added.
- [ ] CTA is present.
- [ ] Images include alt text.
- [ ] Preview is reviewed in the correct implementation path.

