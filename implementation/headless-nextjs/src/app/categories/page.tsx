import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategories } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse WordPress, SEO, WooCommerce, and performance article categories.'
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="section">
      <p className="eyebrow">Categories</p>
      <h1>Browse article categories.</h1>
      {categories.length === 0 ? (
        <p>
          No WordPress categories are available yet. Configure <code>WORDPRESS_API_URL</code> after
          connecting a WordPress site.
        </p>
      ) : null}
      <div className="grid">
        {categories.map((category) => (
          <article key={category.id}>
            <h2>
              <Link href={`/categories/${category.slug}`}>{category.name}</Link>
            </h2>
            <p>{category.count} published posts</p>
          </article>
        ))}
      </div>
    </main>
  );
}

