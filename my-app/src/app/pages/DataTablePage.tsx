import React from 'react';
import { PageTemplate } from '@/app/components/layout';
import { useCsvImportExport } from '@/app/hooks/useCsvImportExport';

export function DataTablePage() {
  const { data, importCsv, exportCsv } = useCsvImportExport<any>();

  return (
    <PageTemplate title="Data Table">
      <div className="mb-4">
        <input
          type="file"
          accept=".csv"
          onChange={e => e.target.files && importCsv(e.target.files[0])}
        />
        <button className="btn ml-2" onClick={exportCsv}>
          Export
        </button>
      </div>
      <pre className="text-sm bg-gray-100 p-2">
        {JSON.stringify(data, null, 2)}
      </pre>
    </PageTemplate>
  );
}
