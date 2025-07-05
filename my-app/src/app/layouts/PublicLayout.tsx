import React from 'react';
import { PageTemplate } from '@/app/components/layout';

export function PublicLayout({ children }: React.PropsWithChildren) {
  return <PageTemplate title="Public" children={children} />;
}
