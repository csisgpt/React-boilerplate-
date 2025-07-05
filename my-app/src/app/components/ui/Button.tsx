import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  const base =
    'px-4 py-2 rounded focus:outline-none focus:ring disabled:opacity-50';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  return <button className={`${base} ${variants[variant]}`} {...props} />;
}
