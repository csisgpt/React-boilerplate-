import React from 'react';
import { LoginForm } from '../forms';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';

export interface LoginPageProps {
  className?: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({ className }) => (
  <main className={clsx('space-y-12', className)}>
    <PageHeader title="Login" />
    <Section>
      <LoginForm />
    </Section>
  </main>
);
