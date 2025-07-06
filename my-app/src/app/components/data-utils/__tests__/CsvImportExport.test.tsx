import { render, fireEvent, waitFor } from '@testing-library/react';
import { CsvImportExport } from '../CsvImportExport';

describe('CsvImportExport', () => {
  it('parses dropped csv', async () => {
    const onData = jest.fn();
    const file = new File(['a,b\n1,2'], 'data.csv', { type: 'text/csv' });
    const { getByText } = render(
      <CsvImportExport data={[]} onData={onData} />,
    );
    const dropArea = getByText(/drag/i).parentElement as HTMLElement;
    fireEvent.drop(dropArea, { dataTransfer: { files: [file] } });
    await waitFor(() => expect(onData).toHaveBeenCalled());
  });
});
