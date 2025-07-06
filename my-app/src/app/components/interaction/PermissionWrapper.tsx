import React from 'react';

export interface PermissionWrapperProps {
  allowed: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const PermissionWrapper: React.FC<PermissionWrapperProps> = ({ allowed, children, fallback = null }) => (
  <>{allowed ? children : fallback}</>
);
