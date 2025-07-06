import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ResponsiveProp, buildClasses } from './utils';
import { BoxProps } from './Box';

export interface FlexProps extends BoxProps {}

export const Flex = React.forwardRef<HTMLElement, FlexProps>(function Flex(
  { as: Component = 'div', className, ...rest },
  ref,
) {
  const MotionComponent: any = motion(Component as any);
  const { w, h, p, m, gap, bg, textColor, children, role, ...other } = rest as any;
  const classes = clsx(
    'flex',
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
