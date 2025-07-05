import { render } from '@testing-library/react';
import { Table } from '../Table';

describe('Table', () => {
  it('renders children', () => {
    const { getByText } = render(<Table>Child</Table>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
