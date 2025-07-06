import { render, fireEvent } from '@testing-library/react';
import { Table } from '../Table';

describe('Table', () => {
  it('sorts rows when header clicked', () => {
    const rows = [
      { id: 1, name: 'B' },
      { id: 2, name: 'A' },
    ];
    const columns = [{ key: 'name', title: 'Name', sortable: true }];
    const { getAllByRole, getByText } = render(
      <Table data={rows} columns={columns} sortable />,
    );
    fireEvent.click(getByText('Name'));
    const cells = getAllByRole('gridcell');
    expect(cells[0]).toHaveTextContent('A');
  });
});
