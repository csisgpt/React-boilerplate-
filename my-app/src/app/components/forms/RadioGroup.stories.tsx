import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'forms/RadioGroup',
  component: RadioGroup,
  args: { children: 'RadioGroup' },
};
export default meta;
export const Default: StoryObj<typeof RadioGroup> = {};
