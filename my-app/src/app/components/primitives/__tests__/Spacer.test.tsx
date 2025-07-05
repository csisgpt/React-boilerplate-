import { render } from '@testing-library/react';
import { Spacer } from '../Spacer';

describe('Spacer', () => {
  it('renders children', () => {
    const { getByText } = render(<Spacer>Child</Spacer>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
