import React from 'react';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';
import { Button } from '../Button';

export interface ServerErrorPageProps {
  className?: string;
}

export const ServerErrorPage: React.FC<ServerErrorPageProps> = ({ className }) => (
  <main className={clsx('space-y-12 text-center', className)}>
    <PageHeader title="500 - Server Error" />
    <Section>
      <p className="mb-4 text-gray-600 dark:text-gray-300">Something went wrong on our end.</p>
      <Button onClick={() => window.location.reload()} className="px-6">
        Reload
      </Button>
    </Section>
  </main>
);
