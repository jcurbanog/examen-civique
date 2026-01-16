import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ErrorBoundary } from '@datadog/browser-rum-react'
import { consentManager } from './utils/consent';
import { initDatadog } from './datadog';
import { ErrorFallback } from './components/ErrorFallback';

// Only initialize Datadog if user has previously consented
if (consentManager.hasConsented()) {
  initDatadog()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

