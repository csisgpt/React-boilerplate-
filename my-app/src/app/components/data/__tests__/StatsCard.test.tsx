import { render } from '@testing-library/react';
import { StatsCard } from '../StatsCard';

describe('StatsCard', () => {
  it('renders children', () => {
    const { getByText } = render(<StatsCard>Child</StatsCard>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
