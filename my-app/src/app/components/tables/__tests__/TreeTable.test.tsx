import { render, fireEvent } from '@testing-library/react';
import { TreeTable, TreeNode } from '../TreeTable';

const rows: TreeNode[] = [
  { id: '1', name: 'Parent', children: [{ id: '2', name: 'Child' }] },
];
const columns = [{ key: 'name', title: 'Name' }];

describe('TreeTable', () => {
  it('toggles children', () => {
    const { getByText, queryByText } = render(
      <TreeTable data={rows} columns={columns} />,
    );
    expect(queryByText('Child')).toBeNull();
    fireEvent.click(getByText('+'));
    expect(getByText('Child')).toBeInTheDocument();
  });
});
