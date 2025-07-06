import React from 'react';
import clsx from 'clsx';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const variantMap: Record<'primary' | 'secondary', string> = {
  primary: 'text-blue-600 hover:underline',
  secondary: 'text-gray-600 hover:underline',
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, external, variant = 'primary', className, children, ...rest },
  ref
) {
  return (
    <a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={clsx(variantMap[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
});
