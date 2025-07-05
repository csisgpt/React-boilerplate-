import { render } from '@testing-library/react';
import { Heading } from '../Heading';

describe('Heading', () => {
  it('renders children', () => {
    const { getByText } = render(<Heading>Child</Heading>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
