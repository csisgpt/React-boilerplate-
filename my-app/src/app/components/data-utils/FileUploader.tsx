import React from 'react';
import { motion } from 'framer-motion';

export interface FileUploaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** FileUploader component */
export const FileUploader: React.FC<FileUploaderProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
