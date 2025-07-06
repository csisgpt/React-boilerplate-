import type { Meta, StoryObj } from '@storybook/react';
import { MaskedInput } from './MaskedInput';

const meta: Meta<typeof MaskedInput> = {
  title: 'forms/MaskedInput',
  component: MaskedInput,
  args: {
    name: 'masked',
    label: 'Masked',
    mask: (v: string) => v.replace(/\D/g, '').slice(0, 5),
  },
};
export default meta;
export const Default: StoryObj<typeof MaskedInput> = {};
