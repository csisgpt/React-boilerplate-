import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLPreElement> {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'semibold' | 'bold';
  truncate?: boolean;
  ellipsisLines?: number;
  className?: string;
}

const sizeClasses: Record<NonNullable<Props['size']>, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const weightClasses: Record<NonNullable<Props['weight']>, string> = {
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const CodeBlock: React.FC<Props> = ({
  size = 'md',
  weight = 'normal',
  truncate,
  ellipsisLines,
  className = '',
  children,
  ...rest
}) => {
  const classes = [sizeClasses[size], weightClasses[weight]];
  if (truncate) classes.push('truncate');
  if (ellipsisLines) classes.push(`line-clamp-${ellipsisLines}`);
  if (className) classes.push(className);
  return (
    <pre className={classes.join(' ')} {...rest}>
      <code>{children}</code>
    </pre>
  );
};

export default CodeBlock;
