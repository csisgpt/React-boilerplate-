import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@app/components/navigation/Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'navigation/Stepper',
  component: Stepper,
};
export default meta;

export const Primary: StoryObj<typeof Stepper> = {
  args: {
    active: 1,
    steps: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }],
  },
};
