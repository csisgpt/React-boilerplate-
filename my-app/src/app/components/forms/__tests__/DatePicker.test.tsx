import { render } from '@testing-library/react';
import { DatePicker } from '../DatePicker';

describe('DatePicker', () => {
  it('renders label', () => {
    const { getByText } = render(<DatePicker name="date" label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
