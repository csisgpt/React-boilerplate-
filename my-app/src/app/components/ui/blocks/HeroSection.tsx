import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Button } from '../Button';

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  className,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx('text-center py-16 text-text-strong bg-base-soft border border-neutral rounded-lg', className)}
    >
      <h1 className="text-4xl font-bold mb-4 ">{title}</h1>
      {subtitle && <p className="text-lg mb-6 text-text-muted" >{subtitle}</p>}
      {ctaText && (
        <Button onClick={onCtaClick} className="px-6 py-3 text-lg">
          {ctaText}
        </Button>
      )}
    </motion.section>
  );
};
