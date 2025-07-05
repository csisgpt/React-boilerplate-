import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'theme/ColorPicker',
  component: ColorPicker,
  args: { children: 'ColorPicker' },
};
export default meta;
export const Default: StoryObj<typeof ColorPicker> = {};
