import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'navigation/Header',
  component: Header,
  args: { children: 'Header' },
};
export default meta;
export const Default: StoryObj<typeof Header> = {};
