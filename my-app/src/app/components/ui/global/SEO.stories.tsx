import type { Meta, StoryObj } from '@storybook/react';
import { SEO } from './SEO';

const meta: Meta<typeof SEO> = {
  title: 'global/SEO',
  component: SEO,
  args: { title: 'My Page', description: 'desc' },
};
export default meta;
export const Default: StoryObj<typeof SEO> = {};
