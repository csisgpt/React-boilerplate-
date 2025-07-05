import type { Meta, StoryObj } from '@storybook/react';
import { MaskedInput } from './MaskedInput';

const meta: Meta<typeof MaskedInput> = {
  title: 'forms/MaskedInput',
  component: MaskedInput,
  args: { children: 'MaskedInput' },
};
export default meta;
export const Default: StoryObj<typeof MaskedInput> = {};
