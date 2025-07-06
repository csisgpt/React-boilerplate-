import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface PageTemplateProps {
  title: string;
  breadcrumbItems?: BreadcrumbItem[];
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  breadcrumbItems = [],
  footer,
  children,
}) => (
  <div className="container mx-auto px-4 py-6 space-y-6">
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold dark:text-white">{title}</h1>
      {breadcrumbItems.length > 0 && (
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-300">
          <ol className="flex space-x-1" role="list">
            {breadcrumbItems.map((b, i) => (
              <li key={i} className="flex items-center">
                {b.to ? (
                  <Link to={b.to} className="hover:underline">
                    {b.label}
                  </Link>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumbItems.length - 1 && <span className="px-1">/</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
    <section>{children}</section>
    {footer && <footer>{footer}</footer>}
  </div>
);
