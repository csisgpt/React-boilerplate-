import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Button } from '@/app/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTemplate title="404" breadcrumbItems={[]}>
      <Helmet>
        <title>404 – MyApp</title>
      </Helmet>
      <div className="text-center space-y-4">
        <img src="https://via.placeholder.com/150" alt="Not found" className="mx-auto" />
        <p>Page not found.</p>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    </PageTemplate>
  );
};
