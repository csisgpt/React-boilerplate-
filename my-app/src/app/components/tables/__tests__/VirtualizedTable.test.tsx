import { render } from '@testing-library/react';
import { VirtualizedTable } from '../VirtualizedTable';

const columns = [
  { key: 'name', title: 'Name' },
];
const data = Array.from({ length: 20 }, (_, i) => ({ name: `Item ${i}` }));

describe('VirtualizedTable', () => {
  it('renders without crashing', () => {
    render(<VirtualizedTable columns={columns} data={data} height={100} />);
  });
});
