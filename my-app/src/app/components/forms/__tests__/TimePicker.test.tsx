import { render } from '@testing-library/react';
import { TimePicker } from '../TimePicker';

describe('TimePicker', () => {
  it('renders children', () => {
    const { getByText } = render(<TimePicker>Child</TimePicker>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
