import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';

const meta: Meta<typeof ColorSwatch> = {
  title: 'theme/ColorSwatch',
  component: ColorSwatch,
  args: { children: 'ColorSwatch' },
};
export default meta;
export const Default: StoryObj<typeof ColorSwatch> = {};
