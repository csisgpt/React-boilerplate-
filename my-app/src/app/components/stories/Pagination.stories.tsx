import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@app/components/navigation/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'navigation/Pagination',
  component: Pagination,
};
export default meta;

export const Primary: StoryObj<typeof Pagination> = {
  args: {
    page: 1,
    total: 5,
    onChange: () => {},
  },
};
