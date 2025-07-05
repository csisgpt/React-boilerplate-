import { render } from '@testing-library/react';
import { ChartWrapper } from '../ChartWrapper';

describe('ChartWrapper', () => {
  it('renders children', () => {
    const { getByText } = render(<ChartWrapper>Child</ChartWrapper>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
