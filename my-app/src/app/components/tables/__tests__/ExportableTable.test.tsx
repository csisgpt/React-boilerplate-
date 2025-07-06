import { render, fireEvent } from '@testing-library/react';
import { ExportableTable } from '../ExportableTable';

const columns = [{ key: 'name', title: 'Name' }];
const data = [{ name: 'Alice' }];

describe('ExportableTable', () => {
  it('triggers export', () => {
    const { getByText } = render(<ExportableTable columns={columns} data={data} />);
    const spy = jest.spyOn(URL, 'createObjectURL').mockReturnValue('url');
    fireEvent.click(getByText('Export CSV'));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
