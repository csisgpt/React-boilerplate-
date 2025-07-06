import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { RegisterForm } from '@/app/components/ui/forms/RegisterForm';

export const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <PageTemplate title="Register" breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Register' }]}>
      <Helmet>
        <title>Register – MyApp</title>
      </Helmet>
      <RegisterForm onSubmit={handleSubmit} />
      {loading && <p className="mt-2 text-sm">Creating account...</p>}
    </PageTemplate>
  );
};
