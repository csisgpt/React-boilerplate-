import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../components/inputs/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'library/Inputs/RadioGroup',
  component: RadioGroup,
  args: {
    name: 'radio',
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
    ],
  },
};
export default meta;

export const Horizontal: StoryObj<typeof RadioGroup> = {
  args: {},
};
