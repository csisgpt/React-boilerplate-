import type { Meta, StoryObj } from '@storybook/react';
import MaskedInput, { Props as MaskedInputProps } from '../components/inputs/MaskedInput';

const meta: Meta<MaskedInputProps> = {
  title: 'library/Inputs/MaskedInput',
  component: MaskedInput,
  argTypes: {
    maskPattern: { control: 'text' },
    maskChar: { control: 'text' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    maskPattern: '###-###',
    maskChar: '_',
    defaultValue: '',
    onChange: () => {},
  },
};
export default meta;

export const Default: StoryObj<MaskedInputProps> = {};
