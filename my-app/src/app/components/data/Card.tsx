import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'vertical' | 'horizontal';
  clickable?: boolean;
  className?: string;
}

/**
 * Generic card container supporting horizontal/vertical layouts.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'vertical', clickable = false, className = '', children, ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      whileHover={clickable ? { scale: 1.02 } : undefined}
      className={`bg-white dark:bg-gray-800 rounded shadow-sm p-4 flex ${
        variant === 'horizontal' ? 'flex-row space-x-4' : 'flex-col'
      } ${clickable ? 'cursor-pointer hover:shadow-md' : ''} ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';
