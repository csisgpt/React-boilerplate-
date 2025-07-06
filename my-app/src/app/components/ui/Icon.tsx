import React from 'react';
import clsx from 'clsx';
import check from './icons/check.svg';
import close from './icons/close.svg';

const iconMap = {
  check,
  close,
};

export interface IconProps {
  name: keyof typeof iconMap;
  size?: number | string;
  color?: string;
  spin?: boolean;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  spin = false,
  className,
}) => {
  const src = iconMap[name];
  return (
    <img
      src={src}
      style={{ width: size, height: size, color }}
      className={clsx(className, spin && 'animate-spin')}
      aria-hidden="true"
    />
  );
};
