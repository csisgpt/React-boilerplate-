import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'navigation/Pagination',
  component: Pagination,
  args: { children: 'Pagination' },
};
export default meta;
export const Default: StoryObj<typeof Pagination> = {};
