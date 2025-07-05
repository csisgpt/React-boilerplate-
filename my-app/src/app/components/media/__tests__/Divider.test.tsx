import { render } from '@testing-library/react';
import { Divider } from '../Divider';

describe('Divider', () => {
  it('renders children', () => {
    const { getByText } = render(<Divider>Child</Divider>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
