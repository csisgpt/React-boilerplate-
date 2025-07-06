import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'forms/ToggleSwitch',
  component: ToggleSwitch,
  args: { name: 'toggle', label: 'Toggle' },
};
export default meta;
export const Default: StoryObj<typeof ToggleSwitch> = {};
