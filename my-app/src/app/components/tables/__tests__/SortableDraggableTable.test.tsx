import { render } from '@testing-library/react';
import { SortableDraggableTable } from '../SortableDraggableTable';

const columns = [{ key: 'name', title: 'Name' }];
const data = [{ name: 'A' }, { name: 'B' }];

describe('SortableDraggableTable', () => {
  it('renders', () => {
    render(<SortableDraggableTable columns={columns} data={data} />);
  });
});
