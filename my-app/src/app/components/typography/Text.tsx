import React from 'react';
import clsx from 'clsx';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'semibold' | 'bold';
  truncate?: boolean;
  className?: string;
}

const sizeMap: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const weightMap: Record<'normal' | 'semibold' | 'bold', string> = {
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text = React.forwardRef<HTMLElement, TextProps>(function Text(
  {
    as: Component = 'p',
    size = 'md',
    weight = 'normal',
    truncate,
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <Component
      ref={ref as any}
      className={clsx(sizeMap[size], weightMap[weight], { truncate }, className)}
      {...rest}
    >
      {children}
    </Component>
  );
});
