import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';

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
        Send project notes through the local contact route. In production, configure the route to
        forward submissions to a form backend, CRM, email service, or WordPress form endpoint.
      </p>

      <ContactForm />
    </main>
  );
}
