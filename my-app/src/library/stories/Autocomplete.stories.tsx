import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, Props } from '../components/inputs/Autocomplete';

const meta: Meta<Props> = {
  title: 'library/Inputs/Autocomplete',
  component: Autocomplete,
  argTypes: {
    optionsFetcher: { control: false },
    value: { control: 'text' },
    debounce: { control: 'number' },
    minChars: { control: 'number' },
    className: { control: 'text' },
  },
  args: {
    optionsFetcher: (q: string) => Promise.resolve([`${q}1`, `${q}2`, `${q}3`]),
  },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
