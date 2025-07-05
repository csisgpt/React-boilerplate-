import { render } from '@testing-library/react';
import { CsvImportExport } from '../CsvImportExport';

describe('CsvImportExport', () => {
  it('renders children', () => {
    const { getByText } = render(<CsvImportExport>Child</CsvImportExport>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
