# WooCommerce Implementation

## Goal

Add a practical commerce path without confusing the WordPress-native and headless responsibilities.

## Block Theme Path

Use WooCommerce inside WordPress for the real store.

Steps:

1. Install WooCommerce.
2. Configure currency, taxes, shipping, payments, and emails.
3. Create required store pages.
4. Add product categories.
5. Add products from `projects/demo-woocommerce-store/product-catalog.md`.
6. Add store policies.
7. Test cart, checkout, emails, and order status.
8. Run `checklists/woocommerce-store-checklist.md`.

This is the recommended first commerce path.

## Headless Next.js Path

The current headless app includes:

```text
/shop
```

This route is a catalog preview, not a full checkout implementation.

Future headless commerce work should decide between:

- WooCommerce Store API
- WooCommerce REST API
- hosted checkout
- keeping checkout on WordPress

## Current Boundary

Implemented now:

- demo product catalog
- static Next.js shop preview
- WooCommerce setup docs
- product content requirements

Not implemented yet:

- live product API fetching
- cart state
- checkout
- customer accounts
- order creation
- payment processing

## Verification

- WordPress path can place a test WooCommerce order.
- Headless path clearly says checkout is not implemented.
- Product metadata exists before entry.
- Store policies are documented.

