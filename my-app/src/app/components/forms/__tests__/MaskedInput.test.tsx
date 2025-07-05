import { render } from '@testing-library/react';
import { MaskedInput } from '../MaskedInput';

describe('MaskedInput', () => {
  it('renders children', () => {
    const { getByText } = render(<MaskedInput>Child</MaskedInput>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
