import React from 'react';
import clsx from 'clsx';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { id, children, className },
  ref,
) {
  return (
    <section ref={ref} id={id} className={clsx('py-8', className)}>
      {children}
    </section>
  );
});
