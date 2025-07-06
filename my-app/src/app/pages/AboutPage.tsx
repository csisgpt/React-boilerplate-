import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { TeamSection } from '@/app/components/ui/blocks/TeamSection';

const members = Array.from({ length: 4 }, (_, i) => ({
  name: `Member ${i + 1}`,
  role: 'Developer',
  image: `https://via.placeholder.com/96?text=${i + 1}`,
}));

export const AboutPage: React.FC = () => (
  <PageTemplate title="About" breadcrumbItems={[{ label: 'About' }]}>
    <Helmet>
      <title>About – MyApp</title>
    </Helmet>
    <p className="mb-6">Our mission is to build amazing experiences for our users.</p>
    <TeamSection members={members} />
  </PageTemplate>
);
