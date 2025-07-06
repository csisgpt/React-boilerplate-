import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '@library/hooks/useTheme';

export interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
  className?: string;
}

export const Portal = React.forwardRef<HTMLDivElement, PortalProps>(function Portal(
  { children, containerId, className },
  ref,
) {
  useTheme();
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const container = containerId
      ? document.getElementById(containerId)
      : document.body;
    if (!container) return;
    const el = elRef.current!;
    if (className) el.className = className;
    container.appendChild(el);
    if (typeof ref === 'function') ref(el);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    return () => {
      container.removeChild(el);
    };
  }, [containerId, className, ref]);

  return ReactDOM.createPortal(children, elRef.current!);
});
