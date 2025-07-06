import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute left-1/2 top-full z-10 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};
