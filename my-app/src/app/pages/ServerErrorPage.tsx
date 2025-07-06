import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Button } from '@/app/components/ui/Button';

export const ServerErrorPage: React.FC = () => (
  <PageTemplate title="500" breadcrumbItems={[]}>
    <Helmet>
      <title>500 – MyApp</title>
    </Helmet>
    <div className="text-center space-y-4">
      <img src="https://via.placeholder.com/150" alt="Server error" className="mx-auto" />
      <p>Something went wrong.</p>
      <Button onClick={() => window.location.reload()}>Retry</Button>
    </div>
  </PageTemplate>
);
