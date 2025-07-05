import { useState } from 'react';
import Papa from 'papaparse';

export function useCsvImportExport<T>() {
  const [data, setData] = useState<T[]>([]);

  const importCsv = (file: File) => {
    Papa.parse<T>(file, {
      header: true,
      complete: results => {
        setData(results.data as T[]);
      },
    });
  };

  const exportCsv = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { data, importCsv, exportCsv };
}
