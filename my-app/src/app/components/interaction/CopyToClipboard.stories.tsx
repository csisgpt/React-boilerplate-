import type { Meta, StoryObj } from '@storybook/react';
import { CopyToClipboard } from './CopyToClipboard';

const meta: Meta<typeof CopyToClipboard> = {
  title: 'interaction/CopyToClipboard',
  component: CopyToClipboard,
  args: { children: 'CopyToClipboard' },
};
export default meta;
export const Default: StoryObj<typeof CopyToClipboard> = {};
