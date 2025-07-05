import { render } from '@testing-library/react';
import { List } from '../List';

describe('List', () => {
  it('renders children', () => {
    const { getByText } = render(<List>Child</List>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
