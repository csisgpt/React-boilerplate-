import { render, fireEvent } from '@testing-library/react';
import { EditableTable } from '../EditableTable';

const rows = [
  { id: 1, name: 'A' },
];
const columns = [{ key: 'name', title: 'Name' }];

describe('EditableTable', () => {
  it('saves edited value', () => {
    const handle = jest.fn();
    const { getByText, getByDisplayValue } = render(
      <EditableTable data={rows} columns={columns} onEditSave={handle} />,
    );
    fireEvent.doubleClick(getByText('A'));
    const input = getByDisplayValue('A');
    fireEvent.change(input, { target: { value: 'B' } });
    fireEvent.blur(input);
    expect(handle).toHaveBeenCalledWith([{ id: 1, name: 'B' }]);
  });
});
