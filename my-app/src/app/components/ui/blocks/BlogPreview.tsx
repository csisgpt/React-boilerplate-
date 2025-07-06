import React from 'react';
import clsx from 'clsx';

export interface BlogPost {
  title: string;
  excerpt: string;
  href: string;
}

export interface BlogPreviewProps {
  posts: BlogPost[];
  className?: string;
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ posts, className }) => (
  <section className={clsx('grid gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
    {posts.map((p, i) => (
      <article key={i} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="font-semibold mb-2 dark:text-white">{p.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{p.excerpt}</p>
        <a href={p.href} className="text-blue-600 hover:underline">
          Read more
        </a>
      </article>
    ))}
  </section>
);
