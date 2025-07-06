import React, { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';

export interface FocusLockProps {
  children: React.ReactNode;
  initialFocusRef?: React.RefObject<HTMLElement>;
  className?: string;
  onRelease?: () => void;
}

export const FocusLock: React.FC<FocusLockProps> = ({
  children,
  initialFocusRef,
  className,
  onRelease,
}) => {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onRelease?.();
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [onRelease]);

  return (
    <FocusTrap focusTrapOptions={{ initialFocus: initialFocusRef?.current ?? undefined }}>
      <div className={className}>{children}</div>
    </FocusTrap>
  );
};
