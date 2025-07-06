import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'theme/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;
export const Default: StoryObj<typeof ThemeSwitcher> = {};
