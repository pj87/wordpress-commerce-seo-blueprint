import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact WP Growth Studio to plan a WordPress landing page, SEO blog, or WooCommerce-ready site.'
};

export default function ContactPage() {
  return (
    <main className="section article">
      <p className="eyebrow">Contact</p>
      <h1>Book a consultation.</h1>
      <p>
        This scaffold uses a static contact form placeholder. In production, connect it to a form
        backend, CRM, email service, or WordPress form endpoint.
      </p>

      <form className="contact-form">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Project notes
          <textarea name="message" rows={5} />
        </label>
        <button type="button">Form backend not connected</button>
      </form>
    </main>
  );
}

