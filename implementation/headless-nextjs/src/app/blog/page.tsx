import Link from 'next/link';
import { getPosts } from '@/lib/wordpress';

export const metadata = {
  title: 'Blog',
  description: 'WordPress, SEO, WooCommerce, and performance articles for small business websites.'
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="section">
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>
          No WordPress posts are available yet. Configure <code>WORDPRESS_API_URL</code> in
          <code> .env.local</code> after connecting a WordPress site.
        </p>
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
