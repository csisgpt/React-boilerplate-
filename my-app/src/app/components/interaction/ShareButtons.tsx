import React from 'react';

export interface ShareButtonsProps {
  url: string;
  className?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, className = '' }) => {
  const share = (network: string) => {
    const encoded = encodeURIComponent(url);
    const href =
      network === 'twitter'
        ? `https://twitter.com/intent/tweet?url=${encoded}`
        : `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
    window.open(href, '_blank');
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      <button className="text-blue-600" onClick={() => share('twitter')}>Twitter</button>
      <button className="text-blue-800" onClick={() => share('facebook')}>Facebook</button>
    </div>
  );
};
