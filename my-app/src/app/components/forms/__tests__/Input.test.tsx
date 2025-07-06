import { render } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders label', () => {
    const { getByLabelText } = render(<Input name="test" label="Label" />);
    expect(getByLabelText('Label')).toBeInTheDocument();
  });
});
