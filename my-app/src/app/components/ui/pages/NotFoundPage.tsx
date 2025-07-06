import React from 'react';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';
import { Button } from '../Button';

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => (
  <main className={clsx('space-y-12 text-center', className)}>
    <PageHeader title="404 - Not Found" />
    <Section>
      <p className="mb-4 text-gray-600 dark:text-gray-300">The page you are looking for does not exist.</p>
      <Button onClick={() => (window.location.href = '/')} className="px-6">
        Go Home
      </Button>
    </Section>
  </main>
);
