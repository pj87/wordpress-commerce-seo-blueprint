import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>WP Growth Studio builds WordPress landing pages, SEO blogs, and WooCommerce-ready sites.</p>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy</Link>
      </nav>
    </footer>
  );
}
