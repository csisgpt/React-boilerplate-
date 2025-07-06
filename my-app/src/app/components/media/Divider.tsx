import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  thickness?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = '1px',
  className = '',
  ...rest
}) => {
  const classes =
    orientation === 'vertical'
      ? `h-full w-px ${className}`
      : `w-full h-px ${className}`;
  return <hr style={{ borderWidth: thickness }} className={`bg-gray-200 dark:bg-gray-700 border-0 ${classes}`} {...rest} />;
};
