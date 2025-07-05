import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmationDialog } from './ConfirmationDialog';

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'feedback/ConfirmationDialog',
  component: ConfirmationDialog,
  args: { children: 'ConfirmationDialog' },
};
export default meta;
export const Default: StoryObj<typeof ConfirmationDialog> = {};
