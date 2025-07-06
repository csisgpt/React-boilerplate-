import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@app/components/navigation/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'navigation/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

export const Primary: StoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Page' },
    ],
  },
};
