import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Tabs } from '@/app/components/navigation/Tabs';

const items = [
  { key: 'account', label: 'Account', content: <p>Account settings...</p> },
  { key: 'security', label: 'Security', content: <p>Security options...</p> },
  { key: 'notifications', label: 'Notifications', content: <p>Notification prefs...</p> },
];

export const SettingsPage: React.FC = () => (
  <PageTemplate title="Settings" breadcrumbItems={[{ label: 'Dashboard', to: '/dashboard' }, { label: 'Settings' }]}>
    <Helmet>
      <title>Settings – MyApp</title>
    </Helmet>
    <Tabs items={items} className="mt-4" />
  </PageTemplate>
);
