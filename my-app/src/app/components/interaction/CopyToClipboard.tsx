import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface CopyToClipboardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, className = '', children, ...rest }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <motion.button onClick={handleClick} className={`relative ${className}`} {...rest}>
      {children}
      {copied && <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-1">Copied!</span>}
    </motion.button>
  );
};
