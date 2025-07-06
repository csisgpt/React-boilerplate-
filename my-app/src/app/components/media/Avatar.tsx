import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
}

const sizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt = 'avatar', size = 'md', fallback, className = '', ...rest }, ref) => {
    const [errored, setErrored] = useState(false);
    const initials = fallback?.[0] ?? alt[0];

    return (
      <motion.span
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ${sizes[size]} ${className}`}
        {...rest}
      >
        {!errored && src ? (
          <img
            className="object-cover w-full h-full"
            src={src}
            alt={alt}
            onError={() => setErrored(true)}
          />
        ) : (
          <span className="uppercase text-gray-600 dark:text-gray-300">{initials}</span>
        )}
      </motion.span>
    );
  }
);
Avatar.displayName = 'Avatar';
