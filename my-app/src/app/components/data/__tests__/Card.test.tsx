import { render, fireEvent } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    const { getByText } = render(<Card>Child</Card>);
    expect(getByText('Child')).toBeInTheDocument();
  });

  it('applies clickable styles', () => {
    const { container } = render(<Card clickable>Item</Card>);
    expect(container.firstChild).toHaveClass('cursor-pointer');
  });
});
