import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'data/Table',
  component: Table,
  args: { children: 'Table' },
};
export default meta;
export const Default: StoryObj<typeof Table> = {};
