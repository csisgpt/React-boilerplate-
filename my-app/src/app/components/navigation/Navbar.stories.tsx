import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'navigation/Navbar',
  component: Navbar,
  args: { children: 'Navbar' },
};
export default meta;
export const Default: StoryObj<typeof Navbar> = {};
