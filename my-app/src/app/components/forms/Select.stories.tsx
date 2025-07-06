import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'forms/Select',
  component: Select,
  args: {
    name: 'select',
    label: 'Select',
    options: [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
    ],
  },
};
export default meta;
export const Default: StoryObj<typeof Select> = {};
