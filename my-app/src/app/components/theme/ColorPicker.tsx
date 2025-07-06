import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface ColorPickerProps {
  value: string;
  onChange: (hex: string) => void;
  className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, className }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      <motion.input
        type="color"
        aria-label="Color picker"
        role="slider"
        whileTap={{ scale: 0.95 }}
        className="h-8 w-8 border rounded"
        value={value}
        onChange={handleChange}
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border rounded px-2 py-1 text-sm w-24"
      />
    </div>
  );
};
