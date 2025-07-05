import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'theme/ThemeProvider',
  component: ThemeProvider,
  args: { children: 'ThemeProvider' },
};
export default meta;
export const Default: StoryObj<typeof ThemeProvider> = {};
