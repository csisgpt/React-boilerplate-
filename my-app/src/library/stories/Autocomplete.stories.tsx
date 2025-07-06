import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, AutocompleteProps } from '../components/inputs/Autocomplete';

const meta: Meta<AutocompleteProps> = {
  title: 'library/Inputs/Autocomplete',
  component: Autocomplete,
  argTypes: {
    optionsFetcher: { control: false },
    debounce: { control: 'number' },
    minChars: { control: 'number' },
    value: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    optionsFetcher: async (q: string) => ['apple', 'banana', 'orange'].filter((o) => o.includes(q)),
    debounce: 300,
    minChars: 1,
    value: '',
  },
};
export default meta;

export const Default: StoryObj<AutocompleteProps> = {};
