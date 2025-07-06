import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from '../components/inputs/ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'library/Inputs/ToggleSwitch',
  component: ToggleSwitch,
  args: { name: 'toggle' },
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary'] },
  },
};
export default meta;

export const Light: StoryObj<typeof ToggleSwitch> = {};
export const Dark: StoryObj<typeof ToggleSwitch> = {
  parameters: { backgrounds: { default: 'dark' } },
};
