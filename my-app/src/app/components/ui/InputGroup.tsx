import React from 'react';
import clsx from 'clsx';

export interface InputGroupProps {
  label: string;
  htmlFor: string;
  labelPosition?: 'top' | 'left';
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  htmlFor,
  labelPosition = 'top',
  error,
  children,
  className,
}) => {
  const id = `${htmlFor}-error`;
  return (
    <div className={clsx('flex', labelPosition === 'left' && 'items-center', className)}>
      <label htmlFor={htmlFor} className={clsx('mr-2', labelPosition === 'top' && 'block mb-1')}>
        {label}
      </label>
      <div className="flex-1" aria-describedby={error ? id : undefined}>{children}</div>
      {error && (
        <p id={id} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};
