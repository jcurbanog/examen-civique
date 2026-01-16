import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ConsentBanner } from './components/ConsentBanner';
import { MainView } from './views/MainView';
import { ListView } from './views/ListView';
import { MockView } from './views/MockView';
import { HistoryView } from './views/HistoryView';
import { ReviewView } from './views/ReviewView';
import { AboutView } from './views/AboutView';

function App() {
  const [showConsent, setShowConsent] = useState(true);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/quiz" replace />} />
          <Route path="/quiz" element={<MainView />} />
          <Route path="/liste" element={<ListView />} />
          <Route path="/examen" element={<MockView />} />
          <Route path="/historique" element={<HistoryView />} />
          <Route path="/a-propos" element={<AboutView />} />
          <Route path="/reviser/:attemptId" element={<ReviewView />} />
        </Routes>
      </Layout>
      {showConsent && <ConsentBanner onConsentDecided={() => setShowConsent(false)} />}
    </Router>
  );
}

export default App;
