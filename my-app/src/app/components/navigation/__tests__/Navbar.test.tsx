import { render } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('renders children', () => {
    const { getByText } = render(<Navbar>Child</Navbar>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
