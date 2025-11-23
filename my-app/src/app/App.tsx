import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProviders } from '@/app/components/ui/global/GlobalProviders';
import { AppRoutes } from './routes';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => (
  <HelmetProvider >
    <BrowserRouter>
      <GlobalProviders>
        <AppRoutes />
      </GlobalProviders>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
