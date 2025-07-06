import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Accordion } from '@/app/components/navigation/Accordion';

const items = Array.from({ length: 5 }, (_, i) => ({
  key: `q${i}`,
  label: `Question ${i + 1}?`,
  content: <p>Answer to question {i + 1}.</p>,
}));

export const FAQPage: React.FC = () => (
  <PageTemplate title="FAQ" breadcrumbItems={[{ label: 'FAQ' }]}>
    <Helmet>
      <title>FAQ – MyApp</title>
    </Helmet>
    <Accordion items={items} className="mt-4" />
  </PageTemplate>
);
