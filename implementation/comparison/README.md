# Parallel Implementation Tracks

This folder keeps the WordPress-native and headless implementations aligned.

## Tracks

| Track | Folder | Runtime |
| --- | --- | --- |
| Block theme | `implementation/wordpress-block-theme/` | WordPress + PHP |
| Headless frontend | `implementation/headless-nextjs/` | WordPress backend + Node.js/Next.js frontend |

## Shared Source

Both tracks should implement the same planning artifacts:

- `projects/demo-service-site/01-discovery.md`
- `projects/demo-service-site/02-sitemap.md`
- `projects/demo-service-site/03-homepage-wireframe.md`
- `projects/demo-service-site/04-blog-content-plan.md`
- `projects/demo-service-site/05-launch-readiness.md`

## How To Work In Parallel

1. Add or update the shared project requirement first.
2. Update the block theme implementation.
3. Update the headless Next.js implementation.
4. Check `feature-parity-checklist.md`.
5. Document any intentional difference.

