# Block Theme Vs Headless

## Block Theme Path

Use `implementation/wordpress-block-theme/` when the project should stay WordPress-native.

Best for:

- Fast client delivery
- Standard WordPress hosting
- Client editing through the block editor
- Lower deployment complexity
- Smaller business websites
- SEO blogs
- WooCommerce stores

Tradeoffs:

- Frontend architecture is WordPress-first.
- Advanced app-like interactions are less natural.
- Custom build tooling is limited unless added deliberately.

## Headless Path

Use `implementation/headless-nextjs/` when the public frontend should be a React/Next.js app.

Best for:

- Custom frontend design systems
- React components
- More controlled routing
- Separate frontend deployment
- API-first content workflows
- Future integrations with other services

Tradeoffs:

- WordPress still needs PHP and hosting.
- The frontend needs Node.js hosting.
- Preview, forms, media, search, sitemap, and caching need extra decisions.
- WooCommerce is more complex headlessly.

## Decision Rule

Default to the block theme when the main goal is fast WordPress delivery.

Choose headless when the frontend experience, React architecture, or deployment model justifies the extra moving parts.

