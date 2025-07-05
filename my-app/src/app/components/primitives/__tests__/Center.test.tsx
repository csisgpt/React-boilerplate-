import { render } from '@testing-library/react';
import { Center } from '../Center';

describe('Center', () => {
  it('renders children', () => {
    const { getByText } = render(<Center>Child</Center>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
