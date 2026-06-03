import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/wordpress';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post not found'
    };
  }

  return {
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered)
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section article">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <p className="post-date">{new Date(post.date).toLocaleDateString('en-US')}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <section className="post-cta">
        <h2>Need a WordPress site with a clearer SEO foundation?</h2>
        <p>Use the same planning workflow to turn service pages, blog categories, and launch checks into a build-ready site.</p>
        <Link className="button" href="/contact">
          Book a consultation
        </Link>
      </section>
    </main>
  );
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, '').trim();
}
