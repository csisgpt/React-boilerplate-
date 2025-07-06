import React from 'react';

export interface FeatureToggleProps {
  enabled: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const FeatureToggle: React.FC<FeatureToggleProps> = ({ enabled, children, fallback = null }) => (
  <>{enabled ? children : fallback}</>
);
