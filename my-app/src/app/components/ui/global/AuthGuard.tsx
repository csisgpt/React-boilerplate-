import React, { useEffect } from 'react';
import { useIsAuthenticated } from '@app/stores/hooks';

export interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

/** Redirects unauthenticated users to login page */
export const AuthGuard: React.FC<AuthGuardProps> = ({ children, redirectTo = '/login' }) => {
  const isAuth = useIsAuthenticated();
  useEffect(() => {
    if (!isAuth) {
      window.location.assign(redirectTo);
    }
  }, [isAuth, redirectTo]);
  if (!isAuth) return null;
  return <>{children}</>;
};
