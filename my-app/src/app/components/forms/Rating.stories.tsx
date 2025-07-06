import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'forms/Rating',
  component: Rating,
  args: { name: 'rating', label: 'Rating', max: 5 },
};
export default meta;
export const Default: StoryObj<typeof Rating> = {};
