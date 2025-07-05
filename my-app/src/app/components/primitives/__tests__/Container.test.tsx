import { render } from '@testing-library/react';
import { Container } from '../Container';

describe('Container', () => {
  it('renders children', () => {
    const { getByText } = render(<Container>Child</Container>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
