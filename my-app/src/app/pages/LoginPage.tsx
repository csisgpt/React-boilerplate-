import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { LoginForm } from '@/app/components/ui/forms/LoginForm';
import { Button } from '@/app/components/ui/Button';

export const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <PageTemplate title="Login" breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Login' }]}>
      <Helmet>
        <title>Login – MyApp</title>
      </Helmet>
      <LoginForm onSubmit={handleSubmit} />
      {loading && <p className="mt-2 text-sm">Signing in...</p>}
      <div className="mt-4 flex justify-between text-sm">
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
        <a href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>
    </PageTemplate>
  );
};
