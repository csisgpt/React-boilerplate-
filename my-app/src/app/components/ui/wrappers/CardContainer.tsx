import React from 'react';
import clsx from 'clsx';

export interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({ children, className }) => (
  <div className={clsx('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>{children}</div>
);
