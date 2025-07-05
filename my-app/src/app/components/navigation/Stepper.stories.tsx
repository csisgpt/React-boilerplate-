import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'navigation/Stepper',
  component: Stepper,
  args: { children: 'Stepper' },
};
export default meta;
export const Default: StoryObj<typeof Stepper> = {};
