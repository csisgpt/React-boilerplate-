import React from 'react';
import { motion } from 'framer-motion';

export interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  name: string;
  role?: string;
  className?: string;
}

/**
 * Display user information with avatar.
 */
export const MemberCard = React.forwardRef<HTMLDivElement, MemberCardProps>(function MemberCard(
  { avatar, name, role, className = '', ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={`flex items-center space-x-4 bg-white dark:bg-gray-800 rounded shadow p-4 ${className}`}
      {...rest}
    >
      {avatar ? (
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      ) : (
        <span className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
          {name[0]}
        </span>
      )}
      <div>
        <p className="font-semibold">{name}</p>
        {role && <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>}
      </div>
    </motion.div>
  );
});

MemberCard.displayName = 'MemberCard';
