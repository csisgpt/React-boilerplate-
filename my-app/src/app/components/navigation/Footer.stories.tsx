import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'navigation/Footer',
  component: Footer,
  args: { children: 'Footer' },
};
export default meta;
export const Default: StoryObj<typeof Footer> = {};
