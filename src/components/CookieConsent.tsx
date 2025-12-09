import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              {t('cookieText')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('cookieDecline')}
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              {t('cookieAccept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
