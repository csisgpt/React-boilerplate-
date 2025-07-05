import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface FileUploadProps {
  name: string;
  multiple?: boolean;
}

export function FileUpload({ name, multiple }: FileUploadProps) {
  const { setValue, watch } = useFormContext();
  const files: File[] = watch(name) || [];

  const onDrop = useCallback(
    (accepted: File[]) => {
      const newFiles = multiple ? [...files, ...accepted] : accepted;
      setValue(name, newFiles, { shouldValidate: true });
    },
    [files, multiple, name, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const remove = (index: number) => {
    const clone = [...files];
    clone.splice(index, 1);
    setValue(name, clone, { shouldValidate: true });
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={`p-4 border-dashed border-2 text-center ${isDragActive ? 'bg-gray-100' : ''}`}
      >
        <input {...getInputProps()} aria-label="file upload" />
        <p>Drag & drop files here, or click to select</p>
      </div>
      {files.length > 0 && (
        <ul className="mt-2">
          {files.map((file, i) => (
            <li key={i} className="flex items-center mb-1">
              <span className="mr-2">{file.name}</span>
              <button
                type="button"
                onClick={() => remove(i)}
                className="text-sm text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
