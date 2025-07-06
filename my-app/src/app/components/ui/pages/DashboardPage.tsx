import React from 'react';
import { StatsSection, BlogPreview } from '../blocks';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';

const stats = [
  { label: 'Users', value: 1200 },
  { label: 'Sales', value: 320 },
  { label: 'Revenue', value: '$12k' },
];

const posts = [
  { title: 'First Post', excerpt: 'Lorem ipsum', href: '#' },
  { title: 'Second Post', excerpt: 'Dolor sit amet', href: '#' },
];

export interface DashboardPageProps {
  className?: string;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ className }) => (
  <main className={clsx('space-y-12', className)}>
    <PageHeader title="Dashboard" />
    <Section>
      <StatsSection stats={stats} />
    </Section>
    <Section>
      <BlogPreview posts={posts} />
    </Section>
  </main>
);
