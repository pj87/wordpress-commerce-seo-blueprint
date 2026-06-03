# Demo Project To Theme Mapping

This file connects the planning framework to the buildable block theme.

## Project Documents

| Demo document | Implementation target |
| --- | --- |
| `projects/demo-service-site/01-discovery.md` | Site title, positioning, CTA, page list |
| `projects/demo-service-site/02-sitemap.md` | WordPress pages, navigation, categories |
| `projects/demo-service-site/03-homepage-wireframe.md` | `templates/front-page.html` and homepage patterns |
| `projects/demo-service-site/04-blog-content-plan.md` | Blog categories and first posts |
| `projects/demo-service-site/05-launch-readiness.md` | `implementation/setup/05-launch-preparation.md` |

## Theme Pieces

| Theme file | Purpose |
| --- | --- |
| `style.css` | WordPress theme metadata |
| `theme.json` | Colors, typography, spacing, layout, template parts |
| `parts/header.html` | Site title and navigation |
| `parts/footer.html` | Footer description and footer navigation |
| `templates/front-page.html` | Demo landing homepage |
| `templates/page.html` | Default page layout |
| `templates/single.html` | Blog post layout with CTA |
| `templates/index.html` | Blog/archive fallback |
| `templates/landing-page.html` | Optional reusable landing page template |
| `patterns/hero.php` | Homepage hero from the wireframe |
| `patterns/benefits.php` | Benefits section |
| `patterns/process.php` | Project process section |
| `patterns/faq.php` | FAQ section |
| `patterns/cta.php` | Final CTA and blog post CTA |
| `assets/js/site.js` | Optional frontend behavior placeholder |
| `assets/css/site.css` | Optional custom CSS placeholder |

## Build Test

The implementation passes the framework test when:

- The theme can be activated in WordPress.
- The front page renders the hero, benefits, process, FAQ, and CTA sections.
- Header and footer display correctly.
- Blog posts use the single post template.
- The setup docs explain how to enter pages, categories, posts, plugins, and launch checks.
