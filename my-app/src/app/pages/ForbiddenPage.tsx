import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Button } from '@/app/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export const ForbiddenPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTemplate title="403" breadcrumbItems={[]}>
      <Helmet>
        <title>403 – MyApp</title>
      </Helmet>
      <div className="text-center space-y-4">
        <img src="https://via.placeholder.com/150" alt="Forbidden" className="mx-auto" />
        <p>You do not have access to this page.</p>
        <Button onClick={() => navigate('/')}>Home</Button>
      </div>
    </PageTemplate>
  );
};
