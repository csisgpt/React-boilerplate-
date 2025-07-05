import type { Meta, StoryObj } from '@storybook/react';
import { PermissionWrapper } from './PermissionWrapper';

const meta: Meta<typeof PermissionWrapper> = {
  title: 'interaction/PermissionWrapper',
  component: PermissionWrapper,
  args: { children: 'PermissionWrapper' },
};
export default meta;
export const Default: StoryObj<typeof PermissionWrapper> = {};
