import { render } from '@testing-library/react';
import { VirtualizedTable } from '../VirtualizedTable';

const rows = Array.from({ length: 50 }, (_, i) => ({ id: i, name: `Row ${i}` }));
const columns = [{ key: 'name', title: 'Name' }];

describe('VirtualizedTable', () => {
  it('renders limited rows', () => {
    const { container } = render(
      <VirtualizedTable data={rows} columns={columns} height={100} rowHeight={20} />,
    );
    const trs = container.querySelectorAll('tbody tr');
    expect(trs.length).toBeLessThan(rows.length);
  });
});
