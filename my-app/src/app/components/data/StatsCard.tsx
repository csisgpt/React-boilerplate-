import React from 'react';
import { motion } from 'framer-motion';

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Display a statistic with an optional icon.
 */
export const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(function StatsCard(
  { title, value, icon, className = '', ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded shadow p-4 flex items-center ${className}`}
      {...rest}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </motion.div>
  );
});

StatsCard.displayName = 'StatsCard';
