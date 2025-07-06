import { render, fireEvent } from '@testing-library/react';
import { EditableTable } from '../EditableTable';

const columns = [
  { key: 'name', title: 'Name' },
];
const data = [
  { name: 'Alice' },
];

describe('EditableTable', () => {
  it('edits cell on double click', () => {
    const { getByText, getByDisplayValue } = render(<EditableTable columns={columns} data={data} />);
    fireEvent.doubleClick(getByText('Alice'));
    const input = getByDisplayValue('Alice') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Bob' } });
    fireEvent.blur(input);
    expect(getByText('Bob')).toBeInTheDocument();
  });
});
