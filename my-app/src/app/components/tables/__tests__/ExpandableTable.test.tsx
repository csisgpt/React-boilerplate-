import { render, fireEvent } from '@testing-library/react';
import { ExpandableTable } from '../ExpandableTable';

const rows = [
  { id: 1, name: 'A' },
];
const columns = [{ key: 'name', title: 'Name' }];

describe('ExpandableTable', () => {
  it('expands row', () => {
    const { getByRole, getByText, queryByText } = render(
      <ExpandableTable
        data={rows}
        columns={columns}
        renderExpanded={() => <div>More</div>}
      />,
    );
    expect(queryByText('More')).toBeNull();
    fireEvent.click(getByRole('button'));
    expect(getByText('More')).toBeInTheDocument();
  });
});
