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

      <section className="section split">
        <div>
          <p className="eyebrow">Problem</p>
          <h2>Small business websites lose leads when the basics are unclear.</h2>
          <p>
            Slow pages, weak SEO structure, unclear offers, and hard-to-edit content make it harder
            for visitors to trust the business and take action.
          </p>
        </div>
        <ul className="check-list">
          <li>Slow website</li>
          <li>Poor SEO foundation</li>
          <li>Unclear service offer</li>
          <li>Weak calls to action</li>
          <li>Broken mobile experience</li>
        </ul>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Solution</p>
        <h2>Launch package</h2>
        <div className="grid">
          <article>
            <h3>Conversion homepage</h3>
            <p>Clear positioning, benefits, process, FAQ, and calls to action.</p>
            <Link href="/services">View service scope</Link>
          </article>
          <article>
            <h3>SEO blog foundation</h3>
            <p>Categories, article structure, metadata, and internal linking plan.</p>
            <Link href="/blog">Read SEO articles</Link>
          </article>
          <article>
            <h3>Launch basics</h3>
            <p>Analytics, sitemap, forms, performance, security, and backup checklist.</p>
            <Link href="/contact">Plan a launch</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Process</p>
        <h2>A simple path from idea to launch.</h2>
        <ol className="steps">
          <li>Discovery</li>
          <li>Sitemap</li>
          <li>Wireframe</li>
          <li>WordPress build</li>
          <li>SEO and performance setup</li>
          <li>Launch</li>
        </ol>
      </section>

      <section className="section">
        <p className="eyebrow">Blog preview</p>
        <h2>Build the SEO foundation before launch.</h2>
        <div className="grid">
          <article>
            <h3>How to plan a WordPress landing page</h3>
            <p>Map the offer, audience, CTA, proof, and FAQ before opening the editor.</p>
            <Link href="/categories/wordpress">Browse WordPress articles</Link>
          </article>
          <article>
            <h3>WordPress SEO checklist for small business</h3>
            <p>Set clean URLs, metadata, internal links, image alt text, and a sitemap.</p>
            <Link href="/categories/seo">Browse SEO articles</Link>
          </article>
          <article>
            <h3>WooCommerce setup checklist</h3>
            <p>Plan products, categories, taxes, shipping, payments, and checkout testing.</p>
            <Link href="/categories/woocommerce">Browse WooCommerce articles</Link>
          </article>
        </div>
        <div className="actions compact">
          <Link className="button secondary" href="/blog">
            View all articles
          </Link>
          <Link className="button secondary" href="/categories">
            Browse categories
          </Link>
        </div>
      </section>

      <section className="section faq">
        <p className="eyebrow">FAQ</p>
        <h2>Questions before you build.</h2>
        <div className="faq-list">
          <article>
            <h3>Can I edit the site myself?</h3>
            <p>Yes. The site is built around standard WordPress editing and content workflows.</p>
          </article>
          <article>
            <h3>Is WooCommerce included?</h3>
            <p>The first package prepares the site for commerce. A mini-store can be added later.</p>
          </article>
          <article>
            <h3>How long does a basic launch take?</h3>
            <p>A focused small business site can move quickly when content and scope are clear.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section cta">
        <h2>Ready to plan your WordPress launch?</h2>
        <p>Use this frontend when you want WordPress content with a React/Next.js public site.</p>
        <div className="actions compact">
          <Link className="button" href="/contact">
            Book a consultation
          </Link>
          <Link className="button secondary" href="/services">
            Review services
          </Link>
        </div>
      </section>
    </main>
  );
}
