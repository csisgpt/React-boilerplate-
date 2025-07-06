import React from 'react';
import clsx from 'clsx';

export interface ButtonGroupProps {
  children: React.ReactNode[];
  orientation?: 'horizontal' | 'vertical';
  spacing?: number | string;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
  spacing = 2,
  className,
}) => {
  const flexDir = orientation === 'vertical' ? 'flex-col' : 'flex-row';
  const spaceClass = orientation === 'vertical' ? `space-y-${spacing}` : `space-x-${spacing}`;
  return (
    <div className={clsx('flex', flexDir, spaceClass, className)}>{children}</div>
  );
};
