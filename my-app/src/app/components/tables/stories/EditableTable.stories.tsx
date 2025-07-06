import type { Meta, StoryObj } from '@storybook/react';
import { EditableTable } from '../EditableTable';

const rows = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof EditableTable> = {
  title: 'tables/EditableTable',
  component: EditableTable,
  args: { data: rows, columns },
};
export default meta;

export const Default: StoryObj<typeof EditableTable> = {};
