import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'forms/Autocomplete',
  component: Autocomplete,
  args: {
    name: 'auto',
    label: 'Autocomplete',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Orange', value: 'orange' },
    ],
  },
};
export default meta;
export const Default: StoryObj<typeof Autocomplete> = {};
