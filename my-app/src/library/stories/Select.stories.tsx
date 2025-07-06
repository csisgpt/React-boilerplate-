import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/inputs/Select';

const meta: Meta<typeof Select> = {
  title: 'library/Inputs/Select',
  component: Select,
  args: {
    name: 'select',
    options: [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
    ],
  },
};
export default meta;

export const Single: StoryObj<typeof Select> = {
  args: { label: 'Single Select' },
};

export const Multiple: StoryObj<typeof Select> = {
  args: { multiple: true, label: 'Multi Select' },
};
