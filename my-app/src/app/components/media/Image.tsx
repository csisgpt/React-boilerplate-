import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ className = '', ...rest }) => (
  <img className={`max-w-full ${className}`} {...rest} />
);
