import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'WP Growth Studio is a demo WordPress service brand for testing block-theme and headless implementation paths.'
};

export default function AboutPage() {
  return (
    <main className="section article">
      <p className="eyebrow">About</p>
      <h1>WP Growth Studio is a practical demo for WordPress delivery.</h1>
      <p>
        This project shows how the same business website can be planned once and implemented two ways:
        as a WordPress block theme and as a headless Next.js frontend.
      </p>
      <p>
        The business positioning is intentionally simple: help local service businesses launch clearer
        WordPress sites with stronger SEO structure, faster editing, and a reliable launch process.
      </p>
    </main>
  );
}

