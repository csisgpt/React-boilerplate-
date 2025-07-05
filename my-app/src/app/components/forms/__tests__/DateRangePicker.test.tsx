import { render } from '@testing-library/react';
import { DateRangePicker } from '../DateRangePicker';

describe('DateRangePicker', () => {
  it('renders children', () => {
    const { getByText } = render(<DateRangePicker>Child</DateRangePicker>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
