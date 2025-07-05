import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'forms/Autocomplete',
  component: Autocomplete,
  args: { children: 'Autocomplete' },
};
export default meta;
export const Default: StoryObj<typeof Autocomplete> = {};
