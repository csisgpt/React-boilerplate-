import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/inputs/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'library/Inputs/Checkbox',
  component: Checkbox,
  args: { name: 'check' },
};
export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: { label: 'Check me' },
};

export const Group: StoryObj<typeof Checkbox> = {
  args: {
    multiple: true,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
    ],
  },
};
