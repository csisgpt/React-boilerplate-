import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'forms/Slider',
  component: Slider,
  args: { children: 'Slider' },
};
export default meta;
export const Default: StoryObj<typeof Slider> = {};
