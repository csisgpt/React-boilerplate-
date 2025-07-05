import { render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders children', () => {
    const { getByText } = render(<Footer>Child</Footer>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
