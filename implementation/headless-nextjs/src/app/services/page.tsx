import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Fixed-scope WordPress launch package for landing pages, SEO blogs, and WooCommerce-ready business sites.'
};

export default function ServicesPage() {
  return (
    <main className="section">
      <p className="eyebrow">Services</p>
      <h1>WordPress launch package for local service businesses.</h1>
      <p className="lede">
        A focused build that covers the homepage, core pages, SEO blog foundation, forms, analytics,
        performance basics, and launch readiness.
      </p>

      <div className="grid">
        <article>
          <h2>Landing page build</h2>
          <p>Hero, problem, solution, benefits, process, FAQ, and calls to action.</p>
          <Link href="/blog">See planning articles</Link>
        </article>
        <article>
          <h2>SEO blog setup</h2>
          <p>Blog index, categories, starter posts, metadata, and internal linking structure.</p>
          <Link href="/categories/seo">Browse SEO topics</Link>
        </article>
        <article>
          <h2>Launch basics</h2>
          <p>Forms, sitemap, analytics, caching, image optimization, backups, and security basics.</p>
          <Link href="/contact">Ask about launch setup</Link>
        </article>
      </div>

      <div className="actions">
        <Link className="button" href="/contact">
          Book a consultation
        </Link>
        <Link className="button secondary" href="/categories">
          Browse article categories
        </Link>
      </div>
    </main>
  );
}
