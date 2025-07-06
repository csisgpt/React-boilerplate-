import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export interface TransitionProps {
  type?: 'fade' | 'slide' | 'scale';
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
};

export const Transition: React.FC<TransitionProps> = ({
  type = 'fade',
  duration = 0.2,
  delay = 0,
  children,
  className,
}) => (
  <AnimatePresence>
    <motion.div
      className={clsx(className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[type]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
