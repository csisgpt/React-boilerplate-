import React from 'react';
import { PageTemplate } from '@/app/components/layout';

export function AuthLayout({ children }: React.PropsWithChildren) {
  return <PageTemplate title="Auth" children={children} />;
}
