import { render } from '@testing-library/react';
import { StatsCard } from '../StatsCard';

describe('StatsCard', () => {
  it('displays title and value', () => {
    const { getByText } = render(<StatsCard title="Users" value={5} />);
    expect(getByText('Users')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });
});
