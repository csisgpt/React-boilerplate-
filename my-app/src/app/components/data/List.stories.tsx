import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'data/List',
  component: List,
  args: { children: 'List' },
};
export default meta;
export const Default: StoryObj<typeof List> = {};
