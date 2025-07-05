import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'primitives/Spacer',
  component: Spacer,
  args: { children: 'Spacer' },
};
export default meta;
export const Default: StoryObj<typeof Spacer> = {};
