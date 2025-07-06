import React from 'react';

const breakpoints: Record<'sm' | 'md' | 'lg' | 'xl', number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

type Breakpoint = keyof typeof breakpoints;

function useBreakpoint(): Breakpoint {
  const [width, setWidth] = React.useState(() => window.innerWidth);
  React.useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'sm';
}

export interface ResponsiveProps {
  showAt?: Breakpoint;
  hideBelow?: Breakpoint;
  children: React.ReactNode;
  className?: string;
}

export const Responsive: React.FC<ResponsiveProps> = ({
  showAt,
  hideBelow,
  children,
  className,
}) => {
  const bp = useBreakpoint();
  const order: Breakpoint[] = ['sm', 'md', 'lg', 'xl'];
  const index = order.indexOf(bp);
  const showIndex = showAt ? order.indexOf(showAt) : 0;
  const hideIndex = hideBelow ? order.indexOf(hideBelow) : -1;
  const visible = index >= showIndex && index >= hideIndex;
  if (!visible) return null;
  return <div className={className}>{children}</div>;
};
