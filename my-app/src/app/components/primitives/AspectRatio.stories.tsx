import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'primitives/AspectRatio',
  component: AspectRatio,
  args: { children: 'AspectRatio' },
};
export default meta;
export const Default: StoryObj<typeof AspectRatio> = {};
