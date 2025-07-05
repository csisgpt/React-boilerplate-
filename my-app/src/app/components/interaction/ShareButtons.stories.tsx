import type { Meta, StoryObj } from '@storybook/react';
import { ShareButtons } from './ShareButtons';

const meta: Meta<typeof ShareButtons> = {
  title: 'interaction/ShareButtons',
  component: ShareButtons,
  args: { children: 'ShareButtons' },
};
export default meta;
export const Default: StoryObj<typeof ShareButtons> = {};
