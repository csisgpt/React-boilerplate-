import { render, fireEvent } from '@testing-library/react';
import { List } from '../List';

describe('List', () => {
  it('filters items', () => {
    const { getByPlaceholderText, queryByText } = render(
      <List data={['a', 'b', 'c']} filterable />,
    );
    fireEvent.change(getByPlaceholderText('Filter...'), { target: { value: 'b' } });
    expect(queryByText('b')).toBeInTheDocument();
    expect(queryByText('a')).not.toBeInTheDocument();
  });
});
