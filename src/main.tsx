import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { datadogLogs } from '@datadog/browser-logs';
import { consentManager } from './utils/consent';

// Only initialize Datadog if user has previously consented
if (consentManager.hasConsented()) {
  datadogLogs.init({
    clientToken: 'pubb1368dffbc42d59d60ea922125813310',
    site: 'datadoghq.eu',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
