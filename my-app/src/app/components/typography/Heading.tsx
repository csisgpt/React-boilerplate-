import React from 'react';
import clsx from 'clsx';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'semibold' | 'bold';
  className?: string;
}

const sizeMap: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-sm',
  md: 'text-xl',
  lg: 'text-2xl',
};

const weightMap: Record<'normal' | 'semibold' | 'bold', string> = {
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level, size = 'lg', weight = 'bold', className, children, ...rest },
  ref
) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Component
      ref={ref as any}
      className={clsx(sizeMap[size], weightMap[weight], className)}
      {...rest}
    >
      {children}
    </Component>
  );
});
