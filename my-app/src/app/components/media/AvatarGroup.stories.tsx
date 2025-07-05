import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'media/AvatarGroup',
  component: AvatarGroup,
  args: { children: 'AvatarGroup' },
};
export default meta;
export const Default: StoryObj<typeof AvatarGroup> = {};
