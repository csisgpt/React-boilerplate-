import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { HeroSection, FeatureGrid, TestimonialSlider } from '@/app/components/ui/blocks';
import { Button } from '@/app/components/ui/Button';

const features = [
  { title: 'Analytics', description: 'Understand your users', icon: '📊' },
  { title: 'Automation', description: 'Save time with AI', icon: '⚙️' },
  { title: 'Security', description: 'Keep data safe', icon: '🔒' },
  { title: 'Support', description: 'We are here for you', icon: '💬' },
];

const testimonials = [
  { quote: 'This app transformed our business!', name: 'Jane Doe' },
  { quote: 'Incredible performance and features.', name: 'John Smith' },
  { quote: 'Fantastic support and easy to use.', name: 'Alice Lee' },
];

export const HomePage: React.FC = () => (
  <PageTemplate title="Home" breadcrumbItems={[]}>
    <Helmet>
      <title>Home – MyApp</title>
      <meta name="description" content="Welcome to MyApp" />
    </Helmet>
    <HeroSection
      title="Welcome to MyApp"
      subtitle="Modern tools for growing businesses"
      ctaText="Get Started"
    />
    <FeatureGrid features={features} className="mt-10" />
    <section className="mt-10">
      <TestimonialSlider testimonials={testimonials} />
    </section>
    <section className="mt-10 text-center">
      <form className="inline-flex flex-col sm:flex-row gap-2 items-center justify-center">
        <input
          type="email"
          className="px-3 py-2 border rounded w-60 dark:bg-gray-800"
          placeholder="Your email"
          aria-label="Email"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  </PageTemplate>
);
