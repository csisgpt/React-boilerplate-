import { render } from '@testing-library/react';
import { AnalyticsProvider, useAnalytics } from '../AnalyticsProvider';

function Child() {
  const { track } = useAnalytics();
  track('test');
  return <div>Analytics</div>;
}

describe('AnalyticsProvider', () => {
  it('provides analytics context', () => {
    const { getByText } = render(
      <AnalyticsProvider>
        <Child />
      </AnalyticsProvider>
    );
    expect(getByText('Analytics')).toBeInTheDocument();
  });
});
