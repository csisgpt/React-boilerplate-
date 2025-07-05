import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'media/Avatar',
  component: Avatar,
  args: { children: 'Avatar' },
};
export default meta;
export const Default: StoryObj<typeof Avatar> = {};
