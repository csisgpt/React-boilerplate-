import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { ShareButtons } from '@/app/components/interaction/ShareButtons';

const posts = Array.from({ length: 12 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Post ${i + 1}`,
  author: 'Admin',
  date: '2025-01-01',
  content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'.repeat(5),
}));

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id) ?? posts[0];

  return (
    <PageTemplate title={post.title} breadcrumbItems={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}>
      <Helmet>
        <title>{post.title} – MyApp</title>
      </Helmet>
      <p className="text-sm text-gray-500 mb-2">By {post.author} on {post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose dark:prose-invert" />
      <ShareButtons url={window.location.href} className="mt-4" />
    </PageTemplate>
  );
};
