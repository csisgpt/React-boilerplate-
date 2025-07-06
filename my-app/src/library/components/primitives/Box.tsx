import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ResponsiveProp, buildClasses } from './utils';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  w?: ResponsiveProp;
  h?: ResponsiveProp;
  p?: ResponsiveProp;
  m?: ResponsiveProp;
  gap?: ResponsiveProp;
  bg?: ResponsiveProp;
  textColor?: ResponsiveProp;
  className?: string;
}


export const Box = React.forwardRef<HTMLElement, Props>(function Box(
  {
    as: Component = 'div',
    w,
    h,
    p,
    m,
    gap,
    bg,
    textColor,
    className,
    children,
    role,
    ...rest
  },
  ref,
) {
  const classes = clsx(
    buildClasses(w, 'w-'),
    buildClasses(h, 'h-'),
    buildClasses(p, 'p-'),
    buildClasses(m, 'm-'),
    buildClasses(gap, 'gap-'),
    buildClasses(bg, 'bg-'),
    buildClasses(textColor, 'text-'),
    className,
  );
  const MotionComponent: any = motion(Component as any);
  const resolvedRole = role ?? (Component === 'div' ? 'presentation' : undefined);
  return (
    <MotionComponent
      ref={ref}
      className={classes}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role={resolvedRole}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
});
