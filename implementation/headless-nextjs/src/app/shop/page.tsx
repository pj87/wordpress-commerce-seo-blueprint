import type { Metadata } from 'next';
import Link from 'next/link';

const products = [
  {
    name: 'Slate PBT Keycap Set',
    category: 'Keycaps',
    price: '$59',
    description: 'Durable PBT keycaps for compact and full-size mechanical keyboards.'
  },
  {
    name: 'Tactile Switch Pack',
    category: 'Switches',
    price: 'From $22',
    description: 'A switch pack available in 45, 70, and 90 switch quantities.'
  },
  {
    name: 'Compact Desk Mat',
    category: 'Desk accessories',
    price: '$24',
    description: 'A compact desk mat for small workspaces and keyboard-focused setups.'
  }
];

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Demo WooCommerce catalog preview for mechanical keyboard accessories.'
};

export default function ShopPage() {
  return (
    <main className="section">
      <p className="eyebrow">Shop preview</p>
      <h1>WooCommerce catalog preview.</h1>
      <p className="lede">
        This route previews product content for the headless path. Checkout is intentionally left to
        WooCommerce or a future Store API integration.
      </p>

      <div className="grid">
        {products.map((product) => (
          <article key={product.name}>
            <div className="card-media">{product.category}</div>
            <p className="eyebrow">{product.price}</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link href="/contact">Ask about store setup</Link>
          </article>
        ))}
      </div>
    </main>
  );
}

