import { render, fireEvent } from '@testing-library/react';
import { DataGrid } from '../DataGrid';

const rows = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const columns = [{ key: 'name', title: 'Name', sortable: true }];

describe('DataGrid', () => {
  it('filters rows', () => {
    const { getByPlaceholderText, queryByText } = render(
      <DataGrid data={rows} columns={columns} filterable />,
    );
    fireEvent.change(getByPlaceholderText('Filter...'), { target: { value: 'Bob' } });
    expect(queryByText('Alice')).toBeNull();
  });
});
