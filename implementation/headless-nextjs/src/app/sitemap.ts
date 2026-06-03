import type { MetadataRoute } from 'next';
import { getCategories, getPosts } from '@/lib/wordpress';

const staticRoutes = ['', '/services', '/about', '/blog', '/categories', '/contact', '/privacy-policy'];

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7
  }));

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${siteUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5
  }));

  return [...staticEntries, ...postEntries, ...categoryEntries];
}

