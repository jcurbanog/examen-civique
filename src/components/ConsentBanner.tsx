import { useState } from 'react';
import { consentManager } from '../utils/consent';
import { datadogLogs } from '@datadog/browser-logs';

interface ConsentBannerProps {
  onConsentDecided: () => void;
}

export function ConsentBanner({ onConsentDecided }: ConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(consentManager.needsConsent());

  if (!isVisible) return null;

  const handleAccept = () => {
    consentManager.setConsent('accepted');

    // Initialize Datadog now that we have consent
    datadogLogs.init({
      clientToken: 'pubb1368dffbc42d59d60ea922125813310',
      site: 'datadoghq.eu',
      forwardErrorsToLogs: true,
      sessionSampleRate: 100
    });

    setIsVisible(false);
    onConsentDecided();
  };

  const handleDecline = () => {
    consentManager.setConsent('declined');
    setIsVisible(false);
    onConsentDecided();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Analyses anonymes
            </h3>
            <p className="text-sm text-gray-600">
              Nous collectons des données d'utilisation anonymes (taux de réussite, usage de l'application) via Datadog pour améliorer l'expérience. Des informations réseau (adresse IP, localisation approximée) peuvent être collectées. Aucune donnée personnelle identifiable n'est stockée.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-all"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
