import React from 'react';
import clsx from 'clsx';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'success' | 'info' | 'warning' | 'error';
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  className,
  children,
  ...rest
}) => {
  const variants: Record<string, string> = {
    success: 'bg-green-100 text-green-800',
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };
  return (
    <div role="alert" className={clsx('rounded p-4', variants[type], className)} {...rest}>
      {children}
    </div>
  );
};
