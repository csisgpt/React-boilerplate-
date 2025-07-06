import React from 'react';
import clsx from 'clsx';

export interface StatItem {
  label: string;
  value: string | number;
}

export interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats, className }) => (
  <section className={clsx('grid gap-6 sm:grid-cols-2 lg:grid-cols-4', className)}>
    {stats.map((s, i) => (
      <div key={i} className="p-4 text-center bg-white dark:bg-gray-800 rounded shadow">
        <p className="text-3xl font-bold mb-1 dark:text-white">{s.value}</p>
        <p className="text-gray-600 dark:text-gray-300">{s.label}</p>
      </div>
    ))}
  </section>
);
