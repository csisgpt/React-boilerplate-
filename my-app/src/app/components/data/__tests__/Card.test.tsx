import { render } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    const { getByText } = render(<Card>Child</Card>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
