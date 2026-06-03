import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Demo privacy policy placeholder for the WP Growth Studio site.'
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section article">
      <p className="eyebrow">Privacy</p>
      <h1>Privacy Policy</h1>
      <p>
        This is placeholder legal content for the demo project. Replace it with policy text that
        matches the real business, analytics setup, forms, cookies, hosting, and local legal requirements.
      </p>
      <h2>Data collection</h2>
      <p>The live site may collect contact form submissions, analytics data, and technical logs.</p>
      <h2>Contact</h2>
      <p>Provide a real business contact address before launch.</p>
    </main>
  );
}

