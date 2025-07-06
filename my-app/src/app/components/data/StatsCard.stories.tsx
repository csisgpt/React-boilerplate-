import type { Meta, StoryObj } from '@storybook/react';
import { StatsCard } from './StatsCard';

const meta: Meta<typeof StatsCard> = {
  title: 'data/StatsCard',
  component: StatsCard,
  args: {
    title: 'Users',
    value: 1024,
  },
  argTypes: {
    icon: { control: false },
  },
};
export default meta;

export const Default: StoryObj<typeof StatsCard> = {};
