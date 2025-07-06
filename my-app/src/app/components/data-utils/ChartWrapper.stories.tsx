import type { Meta, StoryObj } from '@storybook/react';
import { ChartWrapper, ChartWrapperProps } from './ChartWrapper';

const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 80 },
  { label: 'C', value: 45 },
  { label: 'D', value: 60 },
];

const meta: Meta<ChartWrapperProps> = {
  title: 'data-utils/ChartWrapper',
  component: ChartWrapper,
  args: { data },
};
export default meta;

type Story = StoryObj<ChartWrapperProps>;

export const Bar: Story = {};
export const Line: Story = { args: { type: 'line', showLegend: true } };
