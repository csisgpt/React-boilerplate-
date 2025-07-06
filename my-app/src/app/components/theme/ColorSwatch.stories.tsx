import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';
import { colors } from './theme';

const meta: Meta<typeof ColorSwatch> = {
  title: 'theme/ColorSwatch',
  component: ColorSwatch,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: {
    colors,
  },
};
export default meta;
export const Default: StoryObj<typeof ColorSwatch> = {};
