import { render } from '@testing-library/react';
import { DatePicker } from '../DatePicker';

describe('DatePicker', () => {
  it('renders children', () => {
    const { getByText } = render(<DatePicker>Child</DatePicker>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
