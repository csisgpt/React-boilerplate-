import { render } from '@testing-library/react';
import { GlobalProviders } from '../GlobalProviders';

describe('GlobalProviders', () => {
  it('renders children', () => {
    const { getByText } = render(<GlobalProviders>Child</GlobalProviders>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
