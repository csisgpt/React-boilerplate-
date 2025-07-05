import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('renders children', () => {
    const { getByText } = render(<Header>Child</Header>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
