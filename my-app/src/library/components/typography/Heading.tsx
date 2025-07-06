import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
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

export const Heading: React.FC<Props> = ({
  level = 1,
  size = 'md',
  weight = 'normal',
  truncate,
  ellipsisLines,
  className = '',
  children,
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = [sizeClasses[size], weightClasses[weight]];
  if (truncate) classes.push('truncate');
  if (ellipsisLines) classes.push(`line-clamp-${ellipsisLines}`);
  if (className) classes.push(className);
  return (
    <Tag className={classes.join(' ')} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
