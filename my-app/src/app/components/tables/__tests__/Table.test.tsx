import { render, fireEvent } from '@testing-library/react';
import { Table } from '../Table';

const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'age', title: 'Age', sortable: true },
];
const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

describe('Table', () => {
  it('sorts rows when header clicked', () => {
    const { getByText, container } = render(<Table columns={columns} data={data} />);
    fireEvent.click(getByText('Age'));
    const firstRow = container.querySelector('tbody tr:first-child td') as HTMLElement;
    expect(firstRow.textContent).toBe('Bob');
  });
});
