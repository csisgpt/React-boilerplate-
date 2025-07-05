import React from 'react';
import { motion } from 'framer-motion';

export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Accordion component */
export const Accordion: React.FC<AccordionProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
