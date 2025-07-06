import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { BlogPreview } from '@/app/components/ui/blocks/BlogPreview';
import { Button } from '@/app/components/ui/Button';

const initialPosts = Array.from({ length: 6 }, (_, i) => ({
  title: `Post ${i + 1}`,
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  href: `/blog/${i + 1}`,
}));

export const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);

  const loadMore = () => {
    const next = posts.length;
    const more = Array.from({ length: 6 }, (_, i) => ({
      title: `Post ${next + i + 1}`,
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href: `/blog/${next + i + 1}`,
    }));
    setPosts((p) => [...p, ...more]);
  };

  return (
    <PageTemplate title="Blog" breadcrumbItems={[{ label: 'Blog' }]}>
      <Helmet>
        <title>Blog – MyApp</title>
      </Helmet>
      <BlogPreview posts={posts} />
      <div className="mt-6 text-center">
        <Button onClick={loadMore}>Load More</Button>
      </div>
    </PageTemplate>
  );
};
