import Link from 'next/link';

const navigation = [
  { href: '/blog', label: 'Blog' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/">
        WP Growth Studio
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

