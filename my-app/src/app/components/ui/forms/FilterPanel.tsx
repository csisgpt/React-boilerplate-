import React from 'react';
import { Checkbox } from '@app/components/forms';
import clsx from 'clsx';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterPanelProps {
  options: FilterOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ options, selected, onChange, className }) => {
  const toggle = (value: string, checked: boolean) => {
    const newVals = checked ? [...selected, value] : selected.filter((v) => v !== value);
    onChange(newVals);
  };

  return (
    <div className={clsx('space-y-2', className)}>
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          name={opt.value}
          label={opt.label}
          value={selected.includes(opt.value)}
          onChange={(checked) => toggle(opt.value, checked)}
        />
      ))}
    </div>
  );
};
