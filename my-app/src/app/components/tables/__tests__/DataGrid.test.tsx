import { render, fireEvent } from '@testing-library/react';
import { DataGrid } from '../DataGrid';

const columns = [
  { key: 'name', title: 'Name', sortable: true },
];
const data = [
  { name: 'Alice' },
  { name: 'Bob' },
];

describe('DataGrid', () => {
  it('filters rows', () => {
    const { getByLabelText, queryByText } = render(<DataGrid columns={columns} data={data} pageSize={10} />);
    fireEvent.change(getByLabelText('Filter rows'), { target: { value: 'Bob' } });
    expect(queryByText('Alice')).not.toBeInTheDocument();
  });
});
