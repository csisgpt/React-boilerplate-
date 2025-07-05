import React from 'react';
import { motion } from 'framer-motion';

export interface MaskedInputProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** MaskedInput component */
export const MaskedInput: React.FC<MaskedInputProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
