import { render } from '@testing-library/react';
import { Popover } from '../Popover';

describe('Popover', () => {
  it('renders children', () => {
    const { getByText } = render(<Popover>Child</Popover>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
