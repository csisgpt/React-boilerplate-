import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, ThemeProviderProps, ThemeSwitcher } from './';

const meta: Meta<ThemeProviderProps> = {
  title: 'theme/ThemeProvider',
  component: ThemeProvider,
  parameters: { docs: { description: { component: "Provides theme context" } } },
  args: {
    children: (
      <div className="p-4">
        <p className="mb-2">Toggle theme using the switcher.</p>
        <ThemeSwitcher />
      </div>
    ),
  },
};
export default meta;
export const Default: StoryObj<ThemeProviderProps> = {};
