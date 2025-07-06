import React from 'react';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
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

export const Link: React.FC<Props> = ({
  href,
  external,
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
    <a
      href={href}
      className={classes.join(' ')}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
