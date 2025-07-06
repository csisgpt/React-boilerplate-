import { useEffect, PropsWithChildren } from 'react';

let lockCount = 0;

function lock() {
  if (lockCount === 0) {
    document.body.style.overflow = 'hidden';
  }
  lockCount += 1;
}

function unlock() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = '';
  }
}

export function useScrollLock() {
  useEffect(() => {
    lock();
    return unlock;
  }, []);
}

export const ScrollLock: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  useScrollLock();
  return <>{children}</>;
};
