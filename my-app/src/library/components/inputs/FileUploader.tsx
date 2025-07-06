import React, { useCallback, useState, useImperativeHandle } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop, { Crop } from 'react-image-crop';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import 'react-image-crop/dist/ReactCrop.css';

export interface FileData {
  file: File;
  preview: string;
  croppedPreview?: string;
}

export interface FileUploaderRef {
  removeFile: (file: File) => void;
}

export interface Props {
  name: string;
  label?: string;
  multiple?: boolean;
  accept?: string | string[];
  onUpload?: (files: File[]) => void;
  className?: string;
}

export const FileUploader = React.forwardRef<FileUploaderRef, Props>(function FileUploader(
  { name, label, multiple = false, accept, onUpload, className },
  ref,
) {
  const [files, setFiles] = useState<FileData[]>([]);
  const [cropFile, setCropFile] = useState<FileData | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: '%', width: 80, x: 10, y: 10 });
  const [completedCrop, setCompletedCrop] = useState<Crop>();
  const [imageEl, setImageEl] = useState<HTMLImageElement | null>(null);

  const onDrop = useCallback(
    (accepted: File[]) => {
      const mapped = accepted.map((f) => ({ file: f, preview: URL.createObjectURL(f) }));
      setFiles((prev) => [...prev, ...mapped]);
      onUpload?.(accepted);
    },
    [onUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept,
  });

  const removeFile = useCallback((file: File) => {
    setFiles((prev) => prev.filter((f) => f.file !== file));
  }, []);

  useImperativeHandle(ref, () => ({ removeFile }), [removeFile]);

  const startCrop = useCallback((fd: FileData) => {
    setCropFile(fd);
    setCrop({ unit: '%', width: 80, x: 10, y: 10 });
    setCompletedCrop(undefined);
  }, []);

  const applyCrop = useCallback(() => {
    if (!cropFile || !completedCrop || !imageEl) return;
    const canvas = document.createElement('canvas');
    const scaleX = imageEl.naturalWidth / imageEl.width;
    const scaleY = imageEl.naturalHeight / imageEl.height;
    canvas.width = completedCrop.width || 0;
    canvas.height = completedCrop.height || 0;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(
      imageEl,
      (completedCrop.x || 0) * scaleX,
      (completedCrop.y || 0) * scaleY,
      (completedCrop.width || 0) * scaleX,
      (completedCrop.height || 0) * scaleY,
      0,
      0,
      completedCrop.width || 0,
      completedCrop.height || 0,
    );
    canvas.toBlob((blob) => {
      if (!blob) return;
      const newFile = new File([blob], cropFile.file.name, { type: cropFile.file.type });
      const preview = URL.createObjectURL(blob);
      setFiles((prev) =>
        prev.map((f) => (f.file === cropFile.file ? { ...f, file: newFile, croppedPreview: preview } : f)),
      );
      setCropFile(null);
    });
  }, [cropFile, completedCrop, imageEl]);

  const listRoleProps = { role: 'list', 'aria-label': 'Uploaded files' } as const;

  return (
    <div className={clsx('border border-dashed p-4', className)}>
      {label && (
        <label htmlFor={name} className="block mb-2">
          {label}
        </label>
      )}
      <div
        {...getRootProps({
          className: clsx('p-4 text-center cursor-pointer', isDragActive && 'bg-gray-100'),
        })}
      >
        <input {...getInputProps({ name })} />
        {isDragActive ? <p>Drop the files here...</p> : <p>Drag & drop files here, or click to select</p>}
      </div>
      <ul {...listRoleProps} className="flex flex-wrap gap-2 mt-2">
        <AnimatePresence>
          {files.map((f) => {
            const preview = f.croppedPreview || f.preview;
            const isImage = f.file.type.startsWith('image/');
            const isVideo = f.file.type.startsWith('video/');
            return (
              <motion.li
                key={preview}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative"
              >
                {isImage && <img src={preview} alt={f.file.name} className="h-20 w-20 object-cover" />}
                {isVideo && (
                  <video src={preview} className="h-20 w-20 object-cover" aria-label={f.file.name} />
                )}
                {!isImage && !isVideo && <span>{f.file.name}</span>}
                <button
                  type="button"
                  onClick={() => removeFile(f.file)}
                  aria-label={`Remove ${f.file.name}`}
                  className="absolute top-0 right-0 bg-white bg-opacity-70"
                >
                  ✕
                </button>
                {isImage && (
                  <button
                    type="button"
                    onClick={() => startCrop(f)}
                    aria-label={`Crop ${f.file.name}`}
                    className="absolute bottom-0 right-0 bg-white bg-opacity-70"
                  >
                    Crop
                  </button>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
      {cropFile && (
        <div className="mt-4">
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
            onImageLoaded={(img) => setImageEl(img)}
          >
            <img src={cropFile.preview} alt="Crop source" />
          </ReactCrop>
          <div className="mt-2 flex gap-2">
            <button type="button" onClick={applyCrop} aria-label="Apply crop" className="px-2 py-1 border">
              Apply
            </button>
            <button type="button" onClick={() => setCropFile(null)} aria-label="Cancel crop" className="px-2 py-1 border">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default FileUploader;
