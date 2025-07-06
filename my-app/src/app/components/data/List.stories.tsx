import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const items = ['Apple', 'Banana', 'Orange'];

const meta: Meta<typeof List> = {
  title: 'data/List',
  component: List,
  args: {
    data: items,
    sortable: true,
    filterable: true,
  },
};
export default meta;

export const Default: StoryObj<typeof List> = {
  args: {
    renderItem: (item: string) => <span>{item}</span>,
  },
};
