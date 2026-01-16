import { useState } from 'react';
import { RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { createBrowserRouter } from '@datadog/browser-rum-react/react-router-v6'
import { Layout } from './components/Layout';
import { ConsentBanner } from './components/ConsentBanner';
import { MainView } from './views/MainView';
import { ListView } from './views/ListView';
import { MockView } from './views/MockView';
import { HistoryView } from './views/HistoryView';
import { ReviewView } from './views/ReviewView';
import { AboutView } from './views/AboutView';

function AppLayout() {
  const [showConsent, setShowConsent] = useState(true);

  return (
    <Layout>
      <Outlet />
      {showConsent && <ConsentBanner onConsentDecided={() => setShowConsent(false)} />}
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainView />
      },
      {
        path: '/quiz',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/liste',
        element: <ListView />,
      },
      {
        path: '/examen',
        element: <MockView />,
      },
      {
        path: '/historique',
        element: <HistoryView />,
      },
      {
        path: '/a-propos',
        element: <AboutView />,
      },
      {
        path: '/reviser/:attemptId',
        element: <ReviewView />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
