import React from 'react';
import { HeroSection, FeatureGrid, CallToActionBanner } from '../blocks';
import { Section } from '../wrappers';
import clsx from 'clsx';

const features = [
  { title: 'Feature One', description: 'Awesome feature' },
  { title: 'Feature Two', description: 'Great feature' },
  { title: 'Feature Three', description: 'Cool feature' },
];

export interface LandingPageProps {
  className?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({ className }) => (
  <main className={clsx('space-y-16', className)}>
    <HeroSection title="Welcome" subtitle="This is the landing page" ctaText="Get Started" />
    <Section>
      <FeatureGrid features={features} />
    </Section>
    <CallToActionBanner text="Ready to try?" buttonText="Sign Up" />
  </main>
);
