import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'forms/Rating',
  component: Rating,
  args: { children: 'Rating' },
};
export default meta;
export const Default: StoryObj<typeof Rating> = {};
