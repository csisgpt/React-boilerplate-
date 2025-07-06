import React from 'react';

interface Step {
  label: string;
}

export interface StepperProps {
  steps: Step[];
  active: number;
  className?: string;
}

/** Linear stepper */
export const Stepper: React.FC<StepperProps> = ({ steps, active, className = '' }) => {
  return (
    <ol className={`flex gap-4 ${className}`} role="list">
      {steps.map((step, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span
            className={`w-6 h-6 flex items-center justify-center rounded-full text-sm ${
              idx <= active ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {idx + 1}
          </span>
          <span>{step.label}</span>
        </li>
      ))}
    </ol>
  );
};
