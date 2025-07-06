import React from 'react';
import clsx from 'clsx';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  leading?: string;
  className?: string;
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  function Paragraph({ leading, className, children, ...rest }, ref) {
    return (
      <p
        ref={ref}
        className={clsx(leading && `leading-${leading}`, className)}
        {...rest}
      >
        {children}
      </p>
    );
  }
);
