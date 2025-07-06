import React from 'react';
import clsx from 'clsx';

export interface FeatureItem {
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface FeatureGridProps {
  features: FeatureItem[];
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className }) => (
  <div className={clsx('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
    {features.map((f, idx) => (
      <div
        key={idx}
        className="p-4 rounded shadow bg-white dark:bg-gray-800 text-center"
      >
        {f.icon && <div className="mb-2 text-3xl">{f.icon}</div>}
        <h3 className="font-semibold mb-1 dark:text-white">{f.title}</h3>
        {f.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300">{f.description}</p>
        )}
      </div>
    ))}
  </div>
);
