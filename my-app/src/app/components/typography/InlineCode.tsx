import React from 'react';
import clsx from 'clsx';

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const InlineCode = React.forwardRef<HTMLElement, InlineCodeProps>(
  function InlineCode({ className, children, ...rest }, ref) {
    return (
      <code
        ref={ref}
        className={clsx('rounded bg-gray-100 px-1 py-0.5 font-mono', className)}
        {...rest}
      >
        {children}
      </code>
    );
  }
);
