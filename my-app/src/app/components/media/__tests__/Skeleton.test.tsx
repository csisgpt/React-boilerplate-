import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';

describe('Skeleton', () => {
  it('renders children', () => {
    const { getByText } = render(<Skeleton>Child</Skeleton>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
