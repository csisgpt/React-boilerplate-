import type { Meta, StoryObj } from '@storybook/react';
import { LazyImage } from './LazyImage';

const meta: Meta<typeof LazyImage> = {
  title: 'media/LazyImage',
  component: LazyImage,
  args: { children: 'LazyImage' },
};
export default meta;
export const Default: StoryObj<typeof LazyImage> = {};
