import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@app/components/navigation/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'navigation/Navbar',
  component: Navbar,
};
export default meta;

export const Primary: StoryObj<typeof Navbar> = {
  args: {
    items: [{ label: 'Home', href: '#' }, { label: 'About', href: '#' }],
  },
};
