# Accessibility QA

## Goal

Check that both implementation tracks are usable with keyboard navigation, screen readers, readable text, and clear focus order.

## Shared Checks

- [ ] Every page has one clear H1.
- [ ] Headings follow a logical order.
- [ ] Links have meaningful text.
- [ ] Buttons describe the action they perform.
- [ ] Forms have labels.
- [ ] Form errors and status messages are announced.
- [ ] Navigation is reachable by keyboard.
- [ ] Focus order follows the visual layout.
- [ ] Text contrast is readable.
- [ ] Images have useful alt text or are decorative.
- [ ] Layout remains readable at mobile widths.
- [ ] No text overlaps cards, buttons, or adjacent content.

## Block Theme Path

Check inside WordPress:

1. Tab through header, navigation, page content, forms, and footer.
2. Confirm inserted image blocks have alt text.
3. Confirm plugin forms render labels and errors accessibly.
4. Confirm block pattern heading levels are appropriate after insertion.
5. Confirm WordPress navigation menus have clear labels.

## Headless Next.js Path

Check these routes:

```text
/
/services
/about
/blog
/categories
/contact
/privacy-policy
```

Implementation notes:

- Header navigation uses `aria-label`.
- Contact form uses native labels.
- Contact form status messages use `role="status"` and `aria-live`.
- Decorative visual cards are CSS-based and do not replace meaningful text.

## Browser QA

Use:

- Keyboard only
- Browser zoom at 200%
- Mobile viewport
- Lighthouse accessibility check
- Screen reader smoke test if available

