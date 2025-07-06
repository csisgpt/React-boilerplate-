import { render } from '@testing-library/react';
import { SortableDraggableTable } from '../SortableDraggableTable';

const rows = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
];
const columns = [{ key: 'name', title: 'Name' }];

describe('SortableDraggableTable', () => {
  it('calls onSortChange', () => {
    const handle = jest.fn();
    const { container } = render(
      <SortableDraggableTable data={rows} columns={columns} onSortChange={handle} />,
    );
    const row = container.querySelectorAll('tbody tr')[0];
    row?.dispatchEvent(new DragEvent('dragstart', { bubbles: true }));
    const dropRow = container.querySelectorAll('tbody tr')[1];
    dropRow?.dispatchEvent(new DragEvent('drop', { bubbles: true }));
    expect(handle).toHaveBeenCalled();
  });
});
