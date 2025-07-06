import { render, fireEvent } from '@testing-library/react';
import { TreeTable } from '../TreeTable';

const columns = [{ key: 'name', title: 'Name' }];
const data = [
  { id: '1', data: { name: 'Root' } },
  { id: '2', parentId: '1', data: { name: 'Child' } },
];

describe('TreeTable', () => {
  it('toggles child rows', () => {
    const { getByText, queryByText } = render(<TreeTable columns={columns} data={data} />);
    fireEvent.click(getByText('Root'));
    expect(getByText('Child')).toBeInTheDocument();
    fireEvent.click(getByText('Root'));
    expect(queryByText('Child')).not.toBeVisible();
  });
});
