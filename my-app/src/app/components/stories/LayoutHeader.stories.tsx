import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@app/components/layout/Header';

const meta: Meta<typeof Header> = {
  title: 'layout/Header',
  component: Header,
};
export default meta;

export const Primary: StoryObj<typeof Header> = {
  args: { children: 'Header' },
};
