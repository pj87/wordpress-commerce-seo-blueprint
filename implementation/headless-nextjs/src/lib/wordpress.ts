export type WordPressRendered = {
  rendered: string;
};

export type WordPressPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: WordPressRendered;
  excerpt: WordPressRendered;
  content: WordPressRendered;
};

export type WordPressPage = {
  id: number;
  slug: string;
  title: WordPressRendered;
  content: WordPressRendered;
};

const apiUrl = process.env.WORDPRESS_API_URL;

function getApiUrl() {
  if (!apiUrl) {
    return null;
  }

  return apiUrl.replace(/\/$/, '');
}

async function fetchWordPress<T>(path: string): Promise<T> {
  const baseUrl = getApiUrl();

  if (!baseUrl) {
    throw new Error('WORDPRESS_API_URL is not configured.');
  }

  const response = await fetch(`${baseUrl}${path}`, {
    next: {
      revalidate: 300
    }
  });

  if (!response.ok) {
    throw new Error(`WordPress API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getPosts() {
  if (!getApiUrl()) {
    return [];
  }

  return fetchWordPress<WordPressPost[]>('/posts?_fields=id,date,slug,link,title,excerpt&per_page=10');
}

export async function getPostBySlug(slug: string) {
  if (!getApiUrl()) {
    return null;
  }

  const posts = await fetchWordPress<WordPressPost[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_fields=id,date,slug,link,title,content,excerpt`
  );

  return posts[0] ?? null;
}

export async function getPageBySlug(slug: string) {
  if (!getApiUrl()) {
    return null;
  }

  const pages = await fetchWordPress<WordPressPage[]>(
    `/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,content`
  );

  return pages[0] ?? null;
}
