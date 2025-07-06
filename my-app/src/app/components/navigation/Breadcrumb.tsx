import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Simple breadcrumb navigation component.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap text-sm text-gray-600">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.href ? (
              <a href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </a>
            ) : (
              <span aria-current={idx === items.length - 1 ? 'page' : undefined}>{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
