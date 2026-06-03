# JavaScript And CSS Enhancements

## Goal

Keep the block theme mostly HTML, JSON, and editor-controlled, while leaving a clear place for optional frontend enhancements.

## Files

```text
implementation/wordpress-block-theme/assets/js/site.js
implementation/wordpress-block-theme/assets/css/site.css
```

## JavaScript Rules

Use JavaScript for behavior, not content structure.

Good uses:

- analytics events
- custom accordions
- small filters
- focus management
- progressive enhancement

Avoid JavaScript for:

- static page content
- normal navigation
- basic layout
- headings and copy
- features already covered by WordPress blocks

## CSS Rules

Use `theme.json` first for:

- colors
- typography
- spacing
- layout widths
- block styles

Use `assets/css/site.css` only for small details that are hard to express through block settings.

## Important Note

The asset files are placeholders. A production WordPress theme needs an enqueue step to load custom CSS and JS.

That enqueue step normally requires a small `functions.php` file. This starter does not include it yet because the current goal is to keep PHP minimal and avoid loading unused assets.

Add enqueue logic only when the project has a real CSS or JS requirement.

