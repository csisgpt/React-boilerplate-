import { render, fireEvent } from '@testing-library/react';
import { ExpandableTable } from '../ExpandableTable';

const columns = [
  { key: 'name', title: 'Name' },
];
const data = [
  { name: 'Alice', info: 'Info' },
];

describe('ExpandableTable', () => {
  it('expands row on click', () => {
    const { getByText } = render(<ExpandableTable columns={columns} data={data} renderExpanded={row => <div>{row.info}</div>} />);
    fireEvent.click(getByText('Alice'));
    expect(getByText('Info')).toBeInTheDocument();
  });
});
