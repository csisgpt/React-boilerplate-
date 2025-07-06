import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProviders } from '@/app/components/ui/global/GlobalProviders';
import { AppRoutes } from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalProviders>
      <AppRoutes />
    </GlobalProviders>
  </BrowserRouter>
);

export default App;
