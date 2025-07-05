import { render } from '@testing-library/react';
import { PasswordInput } from '../PasswordInput';

describe('PasswordInput', () => {
  it('renders children', () => {
    const { getByText } = render(<PasswordInput>Child</PasswordInput>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
