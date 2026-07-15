export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  readTime: string;
  featured: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type TocHeading = {
  id: string;
  text: string;
};

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}
