import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'forms/Slider',
  component: Slider,
  args: { name: 'slider', label: 'Slider', max: 10 },
};
export default meta;
export const Default: StoryObj<typeof Slider> = {};
