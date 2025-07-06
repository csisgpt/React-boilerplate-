import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from '@app/components/ui/Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'ui/Backdrop',
  component: Backdrop,
  args: { opacity: 0.5 },
};
export default meta;

export const Default: StoryObj<typeof Backdrop> = {};
