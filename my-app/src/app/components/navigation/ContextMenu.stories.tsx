import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from './ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'navigation/ContextMenu',
  component: ContextMenu,
  args: { children: 'ContextMenu' },
};
export default meta;
export const Default: StoryObj<typeof ContextMenu> = {};
