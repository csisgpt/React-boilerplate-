import React from 'react';

export interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}

/** Simple pagination */
export const Pagination: React.FC<PaginationProps> = ({ page, total, onChange, className = '' }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav role="navigation" className={className} aria-label="Pagination">
      <ul className="inline-flex gap-2">
        {pages.map((p) => (
          <li key={p}>
            <button
              onClick={() => onChange(p)}
              aria-current={page === p ? 'page' : undefined}
              className={`px-3 py-1 rounded ${page === p ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
