import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface CsvImportExportProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  onData: (data: T[]) => void;
  exportFileName?: string;
  className?: string;
}

export function CsvImportExport<T>({
  data,
  onData,
  exportFileName = 'data.csv',
  className,
  ...rest
}: CsvImportExportProps<T>) {
  const onDrop = useCallback((files: File[]) => {
    const file = files[0];
    if (!file) return;
    Papa.parse<T>(file, {
      header: true,
      complete: results => {
        onData(results.data as T[]);
      },
    });
  }, [onData]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: { 'text/csv': ['.csv'] }, onDrop });

  const exportCsv = useCallback(() => {
    const csv = Papa.unparse(data as any);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', exportFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [data, exportFileName]);

  return (
    <motion.div className={clsx('space-y-2', className)} {...rest}>
      <div
        {...getRootProps({ className: clsx('p-4 border-2 border-dashed text-center cursor-pointer', isDragActive && 'bg-gray-100') })}
      >
        <input {...getInputProps()} />
        {isDragActive ? 'Drop the files here...' : 'Drag & drop CSV here, or click to select'}
      </div>
      <button type="button" onClick={exportCsv} className="px-2 py-1 border">
        Export CSV
      </button>
    </motion.div>
  );
}
