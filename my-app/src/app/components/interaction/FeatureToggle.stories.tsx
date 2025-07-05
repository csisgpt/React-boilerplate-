import type { Meta, StoryObj } from '@storybook/react';
import { FeatureToggle } from './FeatureToggle';

const meta: Meta<typeof FeatureToggle> = {
  title: 'interaction/FeatureToggle',
  component: FeatureToggle,
  args: { children: 'FeatureToggle' },
};
export default meta;
export const Default: StoryObj<typeof FeatureToggle> = {};
