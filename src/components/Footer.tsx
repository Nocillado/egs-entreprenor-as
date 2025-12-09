import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      {/* Quote Section */}
      <div className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="accent-line mx-auto mb-8" />
            <blockquote className="font-heading text-2xl md:text-3xl text-foreground uppercase tracking-wide leading-relaxed">
              "{t('footerQuote')}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 items-start">
            {/* Logo */}
            <div className="text-center md:text-left">
              <img
                src="/Logo/1.webp"
                alt="EGS Entreprenør AS"
                className="h-16 w-auto mx-auto md:mx-0 mb-4 opacity-80"
              />
              <p className="text-muted-foreground text-sm">
                {t('footerTagline')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                {t('quickLinks')}
              </p>
              <nav className="flex flex-col gap-2">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('home')}
                </a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('about')}
                </a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('services')}
                </a>
                <a href="#machinery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('machinery')}
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('projects')}
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('contact')}
                </a>
              </nav>
            </div>

            {/* Quick Contact */}
            <div className="text-center md:text-left space-y-3">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                {t('contact')}
              </p>
              <a
                href="mailto:roar@egsas.no"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                roar@egsas.no
              </a>
              <a
                href="tel:+4797145022"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                971 45 022
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Sando, 3570 ÅL
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                {t('followUs')}
              </p>
              <div className="flex gap-3 justify-center md:justify-end">
                <a
                  href="https://www.facebook.com/egsentreprenor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-border hover:bg-primary flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/egsentreprenor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-border hover:bg-primary flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} EGS Entreprenør AS. {t('allRightsReserved')}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  localStorage.removeItem('cookieConsent');
                  window.location.reload();
                }}
                className="hover:text-primary transition-colors"
              >
                {t('cookieSettings')}
              </button>
              <span className="text-border">|</span>
              <a href="#privacy" className="hover:text-primary transition-colors">
                {t('privacyPolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
