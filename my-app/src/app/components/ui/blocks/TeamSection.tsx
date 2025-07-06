import React from 'react';
import clsx from 'clsx';

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface TeamSectionProps {
  members: TeamMember[];
  className?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ members, className }) => (
  <section className={clsx('grid gap-6 sm:grid-cols-2 md:grid-cols-3', className)}>
    {members.map((m, i) => (
      <div key={i} className="text-center">
        {m.image && (
          <img src={m.image} alt="" className="mx-auto mb-2 w-24 h-24 rounded-full object-cover" />
        )}
        <p className="font-semibold dark:text-white">{m.name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{m.role}</p>
      </div>
    ))}
  </section>
);
