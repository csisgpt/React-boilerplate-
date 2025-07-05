import { render } from '@testing-library/react';
import { ColorPicker } from '../ColorPicker';

describe('ColorPicker', () => {
  it('renders children', () => {
    const { getByText } = render(<ColorPicker>Child</ColorPicker>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
