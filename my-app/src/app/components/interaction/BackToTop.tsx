import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface BackToTopProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  threshold?: number;
  className?: string;
}

export const BackToTop: React.FC<BackToTopProps> = ({ threshold = 200, className = '', ...rest }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > threshold);
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;
  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-blue-600 text-white shadow ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      {...rest}
    >
      ↑
    </motion.button>
  );
};
