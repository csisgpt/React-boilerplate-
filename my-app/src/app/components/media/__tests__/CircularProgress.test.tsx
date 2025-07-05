import { render } from '@testing-library/react';
import { CircularProgress } from '../CircularProgress';

describe('CircularProgress', () => {
  it('renders children', () => {
    const { getByText } = render(<CircularProgress>Child</CircularProgress>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
