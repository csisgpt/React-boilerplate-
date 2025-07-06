import React from 'react';
import clsx from 'clsx';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;
  breadcrumbItems?: BreadcrumbItem[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbItems = [], className }) => (
  <header className={clsx('mb-6', className)}>
    <h1 className="text-2xl font-semibold mb-2 dark:text-white">{title}</h1>
    {breadcrumbItems.length > 0 && (
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-300">
        {breadcrumbItems.map((b, i) => (
          <span key={i}>
            {b.href ? (
              <a href={b.href} className="hover:underline">
                {b.label}
              </a>
            ) : (
              b.label
            )}
            {i < breadcrumbItems.length - 1 && ' / '}
          </span>
        ))}
      </nav>
    )}
  </header>
);
