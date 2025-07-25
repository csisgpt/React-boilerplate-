import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'forms/RadioGroup',
  component: RadioGroup,
  args: {
    name: 'radio',
    label: 'Choose',
    options: [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
    ],
  },
};
export default meta;
export const Default: StoryObj<typeof RadioGroup> = {};
