import { render } from '@testing-library/react';
import { Menu } from '../Menu';

describe('Menu', () => {
  it('renders children', () => {
    const { getByText } = render(<Menu>Child</Menu>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
