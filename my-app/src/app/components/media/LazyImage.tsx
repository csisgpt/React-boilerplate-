import React, { useEffect, useRef, useState } from 'react';

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: React.ReactNode;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  placeholder,
  className = '',
  ...rest
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        img.src = rest.src ?? '';
        observer.disconnect();
      }
    });
    observer.observe(img);
    return () => observer.disconnect();
  }, [rest.src]);

  return (
    <>
      {!loaded && placeholder}
      <img
        ref={ref}
        onLoad={() => setLoaded(true)}
        className={`${loaded ? 'block' : 'hidden'} ${className}`}
        alt={rest.alt}
        {...rest}
      />
    </>
  );
};
