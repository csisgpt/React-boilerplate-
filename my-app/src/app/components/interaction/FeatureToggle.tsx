import React from 'react';
import { motion } from 'framer-motion';

export interface FeatureToggleProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** FeatureToggle component */
export const FeatureToggle: React.FC<FeatureToggleProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
