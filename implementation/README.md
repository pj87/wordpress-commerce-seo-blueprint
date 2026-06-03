# Implementation

This folder turns the documentation framework into buildable WordPress assets.

## Contents

- `wordpress-block-theme/` - a minimal block theme starter for the demo service site.
- `headless-nextjs/` - a JS-first frontend scaffold that consumes WordPress REST API content.
- `setup/` - setup notes for local WordPress, plugins, content entry, and launch preparation.

## Intended Use

Copy `implementation/wordpress-block-theme/` into a WordPress installation under:

```text
wp-content/themes/wp-growth-studio/
```

Then activate the theme from the WordPress admin panel.

The theme maps to the demo project in `projects/demo-service-site/`.

See `wordpress-block-theme/README.md` for the theme file structure and PHP/JS boundary.

Use `headless-nextjs/` when you want a React/Next.js public frontend while keeping WordPress as the CMS.
