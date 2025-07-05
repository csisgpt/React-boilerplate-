import { render } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders children', () => {
    const { getByText } = render(<Input>Child</Input>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
