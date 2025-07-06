import React, { Suspense } from 'react';
import { ErrorBoundaryWrapper } from '@app/components/interaction';

export interface DataLoaderProps {
  loader: () => Promise<React.ReactNode>;
  fallback?: React.ReactNode;
}

/** Lazily load data/components with suspense and error boundary */
export const DataLoader: React.FC<DataLoaderProps> = ({ loader, fallback = 'Loading...' }) => {
  const Lazy = React.lazy(async () => ({ default: () => <>{await loader()}</> }));
  return (
    <ErrorBoundaryWrapper>
      <Suspense fallback={fallback}>
        <Lazy />
      </Suspense>
    </ErrorBoundaryWrapper>
  );
};
