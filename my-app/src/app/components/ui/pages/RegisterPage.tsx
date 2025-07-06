import React from 'react';
import { RegisterForm } from '../forms';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';

export interface RegisterPageProps {
  className?: string;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ className }) => (
  <main className={clsx('space-y-12', className)}>
    <PageHeader title="Register" />
    <Section>
      <RegisterForm />
    </Section>
  </main>
);
