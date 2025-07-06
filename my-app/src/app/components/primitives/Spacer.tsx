import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ResponsiveProp, buildClasses } from './utils';
import { BoxProps } from './Box';

export interface SpacerProps extends BoxProps {}

export const Spacer = React.forwardRef<HTMLElement, SpacerProps>(function Spacer(
  { as: Component = 'div', className, ...rest },
  ref,
) {
  const MotionComponent: any = motion(Component as any);
  const { w, h, p, m, gap, bg, textColor, children, role, ...other } = rest as any;
  const classes = clsx(
    'grow',
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
    <MotionComponent ref={ref} className={classes} initial={{ opacity: 0 }} animate={{ opacity: 1 }} role={resolvedRole} {...other}>
      {children}
    </MotionComponent>
  );
});
