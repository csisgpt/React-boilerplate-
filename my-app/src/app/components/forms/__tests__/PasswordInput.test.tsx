import { render } from '@testing-library/react';
import { PasswordInput } from '../PasswordInput';

describe('PasswordInput', () => {
  it('renders label', () => {
    const { getByText } = render(
      <PasswordInput name="pass" label="Label" />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
