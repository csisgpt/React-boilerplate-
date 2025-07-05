import { render } from '@testing-library/react';
import { Rating } from '../Rating';

describe('Rating', () => {
  it('renders children', () => {
    const { getByText } = render(<Rating>Child</Rating>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
