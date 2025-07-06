import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@app/components/navigation/Footer';

const meta: Meta<typeof Footer> = {
  title: 'navigation/Footer',
  component: Footer,
};
export default meta;

export const Primary: StoryObj<typeof Footer> = {
  args: { children: 'Footer' },
};
