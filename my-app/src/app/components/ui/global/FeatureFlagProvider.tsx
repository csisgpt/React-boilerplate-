import React, { useEffect, useCallback } from 'react';
import { useFeatureToggleStore } from '@app/stores/useFeatureToggleStore';

interface Context {
  isEnabled: (key: string) => boolean;
  setFlag: (key: string, value: boolean) => void;
}

const FeatureFlagContext = React.createContext<Context | undefined>(undefined);

export interface FeatureFlagProviderProps {
  children: React.ReactNode;
}

/** Provider fetching remote feature flags and exposing helper hooks */
export const FeatureFlagProvider: React.FC<FeatureFlagProviderProps> = ({ children }) => {
  const { isEnabled, setFlag } = useFeatureToggleStore();

  const setFlagWithOverride = useCallback(
    (key: string, value: boolean) => {
      setFlag(key, value);
      const overrides = JSON.parse(localStorage.getItem('feature_overrides') || '{}');
      overrides[key] = value;
      localStorage.setItem('feature_overrides', JSON.stringify(overrides));
    },
    [setFlag]
  );

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/flags');
        if (res.ok) {
          const data: Record<string, boolean> = await res.json();
          Object.entries(data).forEach(([k, v]) => setFlag(k, v));
        }
      } catch {
        // ignore network errors in example
      }
      const overrides = JSON.parse(localStorage.getItem('feature_overrides') || '{}');
      Object.entries(overrides).forEach(([k, v]) => setFlag(k, Boolean(v)));
    }
    load();
  }, [setFlag]);

  return (
    <FeatureFlagContext.Provider value={{ isEnabled, setFlag: setFlagWithOverride }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export function useFeatureFlags() {
  const ctx = React.useContext(FeatureFlagContext);
  if (!ctx) throw new Error('useFeatureFlags must be used within FeatureFlagProvider');
  return ctx;
}
