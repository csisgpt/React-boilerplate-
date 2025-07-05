import { render } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
  it('renders children', () => {
    const { getByText } = render(<Dropdown>Child</Dropdown>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
