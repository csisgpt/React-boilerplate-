import { render } from '@testing-library/react';
import { Stepper } from '../Stepper';

describe('Stepper', () => {
  it('renders children', () => {
    const { getByText } = render(<Stepper>Child</Stepper>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
