import React from 'react';
import { PageTemplate } from '@/app/components/layout';

export function DashboardLayout({ children }: React.PropsWithChildren) {
  return <PageTemplate title="Dashboard" showSidebar children={children} />;
}
