import React from 'react';
import { motion } from 'framer-motion';

export interface SuspenseFallbackProps {
  className?: string;
}

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ className = '' }) => (
  <motion.div className={`animate-pulse p-4 ${className}`}>Loading...</motion.div>
);
