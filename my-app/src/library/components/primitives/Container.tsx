import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Props as BoxProps } from './Box';
import { buildClasses } from './utils';

export interface Props extends BoxProps {}

export const Container = React.forwardRef<HTMLElement, Props>(function Container({
  as: Component = 'div',
  className,
  ...rest
}, ref) {
  const MotionComponent: any = motion(Component as any);
  const {
    w, h, p, m, gap, bg, textColor, children, role,
    ...other
  } = rest as any;
  const classes = clsx(
    'container mx-auto',
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
