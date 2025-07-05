import { render } from '@testing-library/react';
import { ColorSwatch } from '../ColorSwatch';

describe('ColorSwatch', () => {
  it('renders children', () => {
    const { getByText } = render(<ColorSwatch>Child</ColorSwatch>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
