import { render } from '@testing-library/react';
import { Slider } from '../Slider';

describe('Slider', () => {
  it('renders children', () => {
    const { getByText } = render(<Slider>Child</Slider>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
