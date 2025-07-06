import React from 'react';
import { ProfileForm } from '../forms';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';

export interface ProfilePageProps {
  className?: string;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => (
  <main className={clsx('space-y-12', className)}>
    <PageHeader title="Profile" />
    <Section>
      <ProfileForm />
    </Section>
  </main>
);
