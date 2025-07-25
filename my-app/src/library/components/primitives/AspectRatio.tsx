import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Props as BoxProps } from './Box';
import { buildClasses } from './utils';

export interface Props extends BoxProps {
  ratio?: string;
}

export const AspectRatio = React.forwardRef<HTMLElement, Props>(function AspectRatio({
  as: Component = 'div',
  ratio = '1/1',
  className,
  ...rest
}, ref) {
  const MotionComponent: any = motion(Component as any);
  const {
    w, h, p, m, gap, bg, textColor, children, role,
    ...other
  } = rest as any;
  const classes = clsx(
    `aspect-[${ratio}]`,
    buildClasses(w, 'w-'),
    buildClasses(h, 'h-'),
    buildClasses(p, 'p-'),
    buildClasses(m, 'm-'),
    buildClasses(gap, 'gap-'),
    buildClasses(bg, 'bg-'),
    buildClasses(textColor, 'text-'),
    className,
  );
  const resolvedRole = role ?? (Component === 'div' ? 'presentation' : undefined);
  return (
    <MotionComponent
      ref={ref}
      className={classes}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role={resolvedRole}
      {...other}
    >
      {children}
    </MotionComponent>
  );
});
