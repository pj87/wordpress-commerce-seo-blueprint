# WP Growth Studio Block Theme

Minimal block theme starter for the demo service site.

## File Types

This theme intentionally keeps PHP small.

| Area | Files | Runtime role |
| --- | --- | --- |
| Theme metadata | `style.css` | Lets WordPress identify the theme |
| Global design settings | `theme.json` | Controls colors, typography, spacing, layout, and template parts |
| Templates | `templates/*.html` | Defines front page, pages, posts, and archives with block markup |
| Template parts | `parts/*.html` | Defines reusable header and footer block markup |
| Patterns | `patterns/*.php` | Registers reusable block patterns with WordPress metadata |
| Optional assets | `assets/css/site.css`, `assets/js/site.js` | Place for custom enhancements if needed |

## Why Any PHP Exists

WordPress block patterns are commonly stored as PHP files because WordPress reads the comment header:

```php
/**
 * Title: Service Hero
 * Slug: wp-growth-studio/hero
 * Categories: featured
 */
```

The rest of each pattern file is block HTML. In this theme, PHP is only used for WordPress pattern metadata.

## When To Use JavaScript

Use `assets/js/site.js` only for behavior that WordPress blocks do not already provide, such as:

- custom accordions
- analytics events
- form UI enhancements
- lightweight filtering
- scroll or focus behavior

Avoid JavaScript for static content, layout, headings, copy, colors, and normal navigation.

## When To Use Extra CSS

Prefer `theme.json` and block editor controls first.

Use `assets/css/site.css` only for small styling details that are awkward or impossible through `theme.json` and block settings.

## Install Path

Copy this folder into:

```text
wp-content/themes/wp-growth-studio/
```

Then activate `WP Growth Studio` in WordPress admin.

