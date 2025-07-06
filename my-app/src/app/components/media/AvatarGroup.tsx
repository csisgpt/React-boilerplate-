import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarProps } from './Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarProps['size'];
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = avatars.length,
  size = 'md',
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex -space-x-2 ${className}`} {...rest}>
      {avatars.slice(0, max).map((avatar, idx) => (
        <motion.div key={idx} className="border-2 border-white rounded-full dark:border-gray-800">
          <Avatar {...avatar} size={size} />
        </motion.div>
      ))}
      {avatars.length > max && (
        <span className="flex items-center justify-center w-8 h-8 text-xs rounded-full bg-gray-300 dark:bg-gray-600">
          +{avatars.length - max}
        </span>
      )}
    </div>
  );
};
