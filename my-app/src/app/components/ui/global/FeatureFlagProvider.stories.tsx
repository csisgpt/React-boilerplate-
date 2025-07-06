import type { Meta, StoryObj } from '@storybook/react';
import { FeatureFlagProvider, useFeatureFlags } from './FeatureFlagProvider';

function Demo() {
  const { isEnabled, setFlag } = useFeatureFlags();
  return (
    <div>
      <p>Flag enabled: {String(isEnabled('demo'))}</p>
      <button onClick={() => setFlag('demo', true)}>Enable</button>
    </div>
  );
}

const meta: Meta<typeof FeatureFlagProvider> = {
  title: 'global/FeatureFlagProvider',
  component: FeatureFlagProvider,
  args: { children: <Demo /> },
};
export default meta;
export const Default: StoryObj<typeof FeatureFlagProvider> = {};
