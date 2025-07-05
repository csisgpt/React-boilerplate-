import { render } from '@testing-library/react';
import { FeatureToggle } from '../FeatureToggle';

describe('FeatureToggle', () => {
  it('renders children', () => {
    const { getByText } = render(<FeatureToggle>Child</FeatureToggle>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
