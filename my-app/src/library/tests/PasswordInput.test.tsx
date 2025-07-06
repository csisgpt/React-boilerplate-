import { render } from '@testing-library/react';
import { PasswordInput } from '../components/inputs/PasswordInput';

describe('PasswordInput', () => {
  it('renders password type', () => {
    const { getByLabelText } = render(
      <PasswordInput name="pwd" label="Password" />,
    );
    const input = getByLabelText('Password') as HTMLInputElement;
    expect(input.type).toBe('password');
  });
});
