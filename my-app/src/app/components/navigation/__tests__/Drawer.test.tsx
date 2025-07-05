import { render } from '@testing-library/react';
import { Drawer } from '../Drawer';

describe('Drawer', () => {
  it('renders children', () => {
    const { getByText } = render(<Drawer>Child</Drawer>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
