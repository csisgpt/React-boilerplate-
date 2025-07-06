import React from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Input } from '@/app/components/forms';
import { Button } from '@/app/components/ui/Button';
import { useNotificationStore } from '@/app/stores/useNotificationStore';

interface FormData {
  name: string;
  email: string;
  password?: string;
}

const mockUser = { name: 'Jane Doe', email: 'jane@example.com' };

export const ProfilePage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>({ defaultValues: mockUser });
  const enqueue = useNotificationStore((s) => s.enqueue);

  const onSubmit = () => {
    enqueue({ message: 'Profile saved', type: 'success' });
  };

  return (
    <PageTemplate title="Profile" breadcrumbItems={[{ label: 'Dashboard', to: '/dashboard' }, { label: 'Profile' }]}>
      <Helmet>
        <title>Profile – MyApp</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Name" {...register('name')} />
          <Input label="Email" type="email" {...register('email')} />
          <Input label="Password" type="password" {...register('password')} />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </PageTemplate>
  );
};
