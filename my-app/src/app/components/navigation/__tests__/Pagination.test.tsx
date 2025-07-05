import { render } from '@testing-library/react';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('renders children', () => {
    const { getByText } = render(<Pagination>Child</Pagination>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
