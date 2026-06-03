import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">WordPress service framework</p>
          <h1>Build a faster WordPress website that turns visitors into leads.</h1>
          <p>
            WP Growth Studio creates conversion-focused landing pages, SEO blogs, and WooCommerce-ready
            websites for local service businesses.
          </p>
          <div className="actions">
            <Link className="button" href="#contact">
              Book a consultation
            </Link>
            <Link className="button secondary" href="/blog">
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Launch package</h2>
        <div className="grid">
          <article>
            <h3>Conversion homepage</h3>
            <p>Clear positioning, benefits, process, FAQ, and calls to action.</p>
          </article>
          <article>
            <h3>SEO blog foundation</h3>
            <p>Categories, article structure, metadata, and internal linking plan.</p>
          </article>
          <article>
            <h3>Launch basics</h3>
            <p>Analytics, sitemap, forms, performance, security, and backup checklist.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section cta">
        <h2>Ready to plan your WordPress launch?</h2>
        <p>Use this frontend when you want WordPress content with a React/Next.js public site.</p>
      </section>
    </main>
  );
}

