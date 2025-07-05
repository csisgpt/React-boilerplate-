import React from 'react';
import { motion } from 'framer-motion';

export interface RichTextEditorProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** RichTextEditor component */
export const RichTextEditor: React.FC<RichTextEditorProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
