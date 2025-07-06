import { render } from '@testing-library/react';
import { DateRangePicker } from '../DateRangePicker';

describe('DateRangePicker', () => {
  it('renders label', () => {
    const { getByText } = render(
      <DateRangePicker name="range" label="Label" />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
