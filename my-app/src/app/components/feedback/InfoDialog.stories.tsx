import type { Meta, StoryObj } from '@storybook/react';
import { InfoDialog } from './InfoDialog';

const meta: Meta<typeof InfoDialog> = {
  title: 'feedback/InfoDialog',
  component: InfoDialog,
  args: { children: 'InfoDialog' },
};
export default meta;
export const Default: StoryObj<typeof InfoDialog> = {};
