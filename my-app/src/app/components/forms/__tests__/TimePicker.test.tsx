import { render } from '@testing-library/react';
import { TimePicker } from '../TimePicker';

describe('TimePicker', () => {
  it('renders label', () => {
    const { getByText } = render(<TimePicker name="time" label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
