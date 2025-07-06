import { render } from '@testing-library/react';
import { Responsive } from '../Responsive';

describe('Responsive', () => {
  it('renders children', () => {
    const { getByText } = render(<Responsive>child</Responsive>);
    expect(getByText('child')).toBeInTheDocument();
  });
});
