# Media And Image Handling

## Goal

Use visuals deliberately without making the starter depend on external image services.

## Shared Rules

- Use real product, site, or interface screenshots when available.
- Use optimized images with descriptive file names.
- Write useful alt text for every meaningful image.
- Avoid decorative images that do not support the page goal.
- Keep hero and card visuals stable with predictable dimensions.

## Block Theme Path

Use WordPress media library for:

- Hero mockups
- Blog featured images
- Service page screenshots
- Product images if WooCommerce is added

Recommended WordPress setup:

1. Upload optimized WebP/JPEG/PNG assets.
2. Add alt text in the media library.
3. Use featured images for blog posts.
4. Use image blocks in page patterns where visual proof is needed.
5. Confirm images are lazy-loaded where appropriate.

## Headless Next.js Path

The starter currently uses CSS-based visual placeholders so it remains self-contained.

When connected to WordPress:

1. Fetch featured media IDs with posts.
2. Fetch media objects from the REST API.
3. Render images with `next/image`.
4. Configure `next.config.mjs` image domains for the WordPress media host.
5. Keep alt text from WordPress media metadata.

## Verification

- Hero visual is visible and does not shift layout.
- Service cards have stable visual areas.
- Blog post images have alt text.
- Mobile layout remains readable.
- Images do not hide CTAs or important text.

