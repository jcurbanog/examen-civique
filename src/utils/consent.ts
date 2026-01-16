const CONSENT_KEY = 'analytics-consent';

export type ConsentStatus = 'pending' | 'accepted' | 'declined';

export const consentManager = {
  getConsent(): ConsentStatus {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      return stored;
    }
    return 'pending';
  },

  setConsent(status: 'accepted' | 'declined'): void {
    localStorage.setItem(CONSENT_KEY, status);
  },

  hasConsented(): boolean {
    return this.getConsent() === 'accepted';
  },

  needsConsent(): boolean {
    return this.getConsent() === 'pending';
  },
};
