import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPostsByCategoryId } from '@/lib/wordpress';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: 'Category not found'
    };
  }

  return {
    title: category.name,
    description: category.description || `Articles in the ${category.name} category.`
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategoryId(category.id);

  return (
    <main className="section">
      <p className="eyebrow">Category</p>
      <h1>{category.name}</h1>
      {category.description ? <p className="lede">{category.description}</p> : null}
      {posts.length === 0 ? <p>No posts are published in this category yet.</p> : null}
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
      <div className="actions compact">
        <Link className="button secondary" href="/blog">
          Back to blog
        </Link>
        <Link className="button" href="/contact">
          Plan this content
        </Link>
      </div>
    </main>
  );
}
