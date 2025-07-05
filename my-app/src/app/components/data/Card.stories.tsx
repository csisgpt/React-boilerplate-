import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'data/Card',
  component: Card,
  args: { children: 'Card' },
};
export default meta;
export const Default: StoryObj<typeof Card> = {};
