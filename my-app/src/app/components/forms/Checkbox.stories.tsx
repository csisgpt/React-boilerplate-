import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'forms/Checkbox',
  component: Checkbox,
  args: { name: 'check', label: 'Check me' },
};
export default meta;
export const Default: StoryObj<typeof Checkbox> = {};
