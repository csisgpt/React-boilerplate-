import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'media/Tag',
  component: Tag,
  args: { children: 'Tag' },
};
export default meta;
export const Default: StoryObj<typeof Tag> = {};
