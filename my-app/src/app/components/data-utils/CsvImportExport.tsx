import React from 'react';
import { motion } from 'framer-motion';

export interface CsvImportExportProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** CsvImportExport component */
export const CsvImportExport: React.FC<CsvImportExportProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
