import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/inputs/Slider';

const meta: Meta<typeof Slider> = {
  title: 'library/Inputs/Slider',
  component: Slider,
  args: { name: 'slider', min: 0, max: 100, step: 1 },
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};
export default meta;

export const Default: StoryObj<typeof Slider> = {};
export const Step10: StoryObj<typeof Slider> = { args: { step: 10 } };
export const Range0to50: StoryObj<typeof Slider> = { args: { min: 0, max: 50 } };
