import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'forms/Select',
  component: Select,
  args: { children: 'Select' },
};
export default meta;
export const Default: StoryObj<typeof Select> = {};
