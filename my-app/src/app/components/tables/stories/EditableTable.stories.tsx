import type { Meta, StoryObj } from '@storybook/react';
import { EditableTable } from '../EditableTable';

const meta: Meta<typeof EditableTable> = {
  title: 'tables/EditableTable',
  component: EditableTable,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];
const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

export const Primary: StoryObj<typeof EditableTable> = {
  args: { columns, data },
};
