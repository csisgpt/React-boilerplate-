import React from 'react';
import clsx from 'clsx';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'success' | 'info' | 'warning' | 'error';
  onClose?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  type = 'info',
  className,
  onClose,
  children,
  ...rest
}) => {
  const variants: Record<string, string> = {
    success: 'bg-green-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
  };
  return (
    <div className={clsx('flex items-center p-4', variants[type], className)} {...rest}>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button aria-label="Close" onClick={onClose} className="ml-4">✕</button>
      )}
    </div>
  );
};
