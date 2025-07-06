import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@app/components/layout/Footer';

const meta: Meta<typeof Footer> = {
  title: 'layout/Footer',
  component: Footer,
};
export default meta;

export const Primary: StoryObj<typeof Footer> = {
  args: { children: 'Footer' },
};
