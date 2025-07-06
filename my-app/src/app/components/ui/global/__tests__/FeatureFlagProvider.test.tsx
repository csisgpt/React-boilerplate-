import { render } from '@testing-library/react';
import { FeatureFlagProvider, useFeatureFlags } from '../FeatureFlagProvider';

function Child() {
  const { isEnabled } = useFeatureFlags();
  return <div>{String(isEnabled('test'))}</div>;
}

describe('FeatureFlagProvider', () => {
  it('provides context', () => {
    const { getByText } = render(
      <FeatureFlagProvider>
        <Child />
      </FeatureFlagProvider>
    );
    expect(getByText('false')).toBeInTheDocument();
  });
});
