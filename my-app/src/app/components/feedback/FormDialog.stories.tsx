import type { Meta, StoryObj } from '@storybook/react';
import { FormDialog } from './FormDialog';

const meta: Meta<typeof FormDialog> = {
  title: 'feedback/FormDialog',
  component: FormDialog,
  args: { children: 'FormDialog' },
};
export default meta;
export const Default: StoryObj<typeof FormDialog> = {};
