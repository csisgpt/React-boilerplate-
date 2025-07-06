import { render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders label', () => {
    const { getByText } = render(<Checkbox name="check" label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
