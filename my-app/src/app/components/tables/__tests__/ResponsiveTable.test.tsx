import { render } from '@testing-library/react';
import { ResponsiveTable } from '../ResponsiveTable';

const columns = [
  { key: 'name', title: 'Name' },
];
const data = [
  { name: 'Alice' },
];

describe('ResponsiveTable', () => {
  it('renders', () => {
    render(<ResponsiveTable columns={columns} data={data} />);
  });
});
