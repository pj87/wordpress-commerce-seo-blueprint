import type { Metadata } from 'next';
import { Analytics } from '@/components/Analytics';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'WP Growth Studio',
    template: '%s | WP Growth Studio'
  },
  description: 'WordPress landing pages, SEO blogs, and WooCommerce-ready websites for local service businesses.',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
