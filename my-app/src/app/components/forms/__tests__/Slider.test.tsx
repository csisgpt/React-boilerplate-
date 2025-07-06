import { render } from '@testing-library/react';
import { Slider } from '../Slider';

describe('Slider', () => {
  it('renders label', () => {
    const { getByText } = render(<Slider name="slide" label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
