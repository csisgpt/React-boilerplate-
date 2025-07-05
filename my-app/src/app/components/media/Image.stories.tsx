import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'media/Image',
  component: Image,
  args: { children: 'Image' },
};
export default meta;
export const Default: StoryObj<typeof Image> = {};
