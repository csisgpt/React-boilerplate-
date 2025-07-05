import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'interaction/FloatingActionButton',
  component: FloatingActionButton,
  args: { children: 'FloatingActionButton' },
};
export default meta;
export const Default: StoryObj<typeof FloatingActionButton> = {};
