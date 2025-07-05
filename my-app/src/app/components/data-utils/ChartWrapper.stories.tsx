import type { Meta, StoryObj } from '@storybook/react';
import { ChartWrapper } from './ChartWrapper';

const meta: Meta<typeof ChartWrapper> = {
  title: 'data-utils/ChartWrapper',
  component: ChartWrapper,
  args: { children: 'ChartWrapper' },
};
export default meta;
export const Default: StoryObj<typeof ChartWrapper> = {};
