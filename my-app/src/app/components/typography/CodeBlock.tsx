import React from 'react';
import clsx from 'clsx';

export interface CodeBlockProps {
  language?: string;
  children: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, children, className }) => {
  return (
    <pre className={clsx('overflow-auto rounded bg-gray-800 p-4', className)}>
      <code className={clsx(language && `language-${language}`, 'text-white')}>{children}</code>
    </pre>
  );
};
