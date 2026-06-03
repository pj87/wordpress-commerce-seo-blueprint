import Link from 'next/link';
import { getCategories, getPosts } from '@/lib/wordpress';

export const metadata = {
  title: 'Blog',
  description: 'WordPress, SEO, WooCommerce, and performance articles for small business websites.'
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  return (
    <main className="section">
      <h1>Blog</h1>
      <p className="lede">
        Use these articles to plan the sitemap, service pages, SEO categories, and launch checklist.
        For implementation help, start with <Link href="/services">the service scope</Link>.
      </p>
      {posts.length === 0 ? (
        <p>
          No WordPress posts are available yet. Configure <code>WORDPRESS_API_URL</code> in
          <code> .env.local</code> after connecting a WordPress site.
        </p>
      ) : null}
      {categories.length > 0 ? (
        <nav className="category-nav" aria-label="Article categories">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              {category.name}
            </Link>
          ))}
        </nav>
      ) : null}
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.id}>
            <h2>
              <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </article>
        ))}
      </div>
    </main>
  );
}
