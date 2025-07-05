import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'media/Divider',
  component: Divider,
  args: { children: 'Divider' },
};
export default meta;
export const Default: StoryObj<typeof Divider> = {};
