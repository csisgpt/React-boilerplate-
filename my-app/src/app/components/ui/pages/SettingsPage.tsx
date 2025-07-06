import React from 'react';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';

export interface SettingsPageProps {
  className?: string;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ className }) => (
  <main className={clsx('space-y-12', className)}>
    <PageHeader title="Settings" />
    <Section>
      <p className="text-gray-600 dark:text-gray-300">Settings content goes here.</p>
    </Section>
  </main>
);
