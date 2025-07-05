import React from 'react';
import { motion } from 'framer-motion';

export interface AutocompleteProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Autocomplete component */
export const Autocomplete: React.FC<AutocompleteProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
