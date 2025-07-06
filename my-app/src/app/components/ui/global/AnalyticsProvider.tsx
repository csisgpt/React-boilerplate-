import React, { useCallback } from 'react';

interface AnalyticsContext {
  track: (event: string, data?: Record<string, any>) => void;
}

const AnalyticsContext = React.createContext<AnalyticsContext | undefined>(undefined);

export interface AnalyticsProviderProps {
  children: React.ReactNode;
}

/** Simple analytics provider initializing Google Analytics/Sentry */
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  React.useEffect(() => {
    // initialize analytics libs here (ga, sentry, ...)
    console.debug('Analytics initialized');
  }, []);

  const track = useCallback((event: string, data?: Record<string, any>) => {
    console.debug('track', event, data);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export function useAnalytics() {
  const ctx = React.useContext(AnalyticsContext);
  if (!ctx) throw new Error('useAnalytics must be used within AnalyticsProvider');
  return ctx;
}
