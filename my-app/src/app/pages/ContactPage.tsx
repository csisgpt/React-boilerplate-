import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { ContactForm } from '@/app/components/ui/forms/ContactForm';
import { useNotificationStore } from '@/app/stores/useNotificationStore';

export const ContactPage: React.FC = () => {
  const enqueue = useNotificationStore((s) => s.enqueue);

  const handleSubmit = () => {
    enqueue({ message: 'Message sent', type: 'success' });
  };

  return (
    <PageTemplate title="Contact" breadcrumbItems={[{ label: 'Contact' }]}>
      <Helmet>
        <title>Contact – MyApp</title>
      </Helmet>
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm onSubmit={handleSubmit} />
        <iframe
          title="Map"
          src="https://via.placeholder.com/400x300"
          className="w-full h-64 border rounded"
        />
      </div>
    </PageTemplate>
  );
};
