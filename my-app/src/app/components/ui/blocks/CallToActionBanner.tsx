import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { motion } from 'framer-motion';

export interface CallToActionBannerProps {
  text: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  text,
  buttonText,
  onClick,
  className,
}) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={clsx(
      'flex flex-col sm:flex-row items-center justify-between bg-blue-600 text-white px-6 py-4 rounded',
      className,
    )}
  >
    <p className="mb-2 sm:mb-0">{text}</p>
    {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
  </motion.section>
);
