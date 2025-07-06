import type { Meta, StoryObj } from '@storybook/react';
import { AnalyticsProvider } from './AnalyticsProvider';

const meta: Meta<typeof AnalyticsProvider> = {
  title: 'global/AnalyticsProvider',
  component: AnalyticsProvider,
  args: { children: <div>Analytics Context</div> },
};
export default meta;
export const Default: StoryObj<typeof AnalyticsProvider> = {};
