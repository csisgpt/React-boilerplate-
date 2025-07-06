import { render } from '@testing-library/react';
import { ResponsiveTable } from '../ResponsiveTable';

const rows = [{ id: 1, name: 'A', age: 20 }];
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];

describe('ResponsiveTable', () => {
  it('renders table', () => {
    const { getByText } = render(
      <ResponsiveTable data={rows} columns={columns} />,
    );
    expect(getByText('Age')).toBeInTheDocument();
  });
});
