import { render, fireEvent } from '@testing-library/react';
import { ExportableTable } from '../ExportableTable';

const rows = [{ id: 1, name: 'A' }];
const columns = [{ key: 'name', title: 'Name' }];

describe('ExportableTable', () => {
  it('triggers download', () => {
    const create = jest.spyOn(document, 'createElement');
    const { getByText } = render(
      <ExportableTable data={rows} columns={columns} />,
    );
    fireEvent.click(getByText('Export CSV'));
    expect(create).toHaveBeenCalledWith('a');
  });
});
