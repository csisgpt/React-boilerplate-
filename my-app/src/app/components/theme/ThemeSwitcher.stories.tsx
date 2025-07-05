import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'theme/ThemeSwitcher',
  component: ThemeSwitcher,
  args: { children: 'ThemeSwitcher' },
};
export default meta;
export const Default: StoryObj<typeof ThemeSwitcher> = {};
