import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Social CTA */}
        <div className="text-center mb-12">
          <p className="text-foreground italic font-medium text-lg">
            {t('followUs').split('Facebook')[0]}
            <a href="https://facebook.com" className="underline text-primary hover:text-primary/80">Facebook</a>
            {t('followUs').split('Facebook')[1].split('Instagram')[0]}
            <a href="https://instagram.com" className="underline text-primary hover:text-primary/80">Instagram</a>
            {t('followUs').split('Instagram')[1]}
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-foreground italic text-xl leading-relaxed font-medium">
            "{t('footerQuote')}"
          </p>
        </div>

        {/* Logo and Social */}
        <div className="flex flex-col items-center gap-6">
          <div className="font-heading font-bold text-6xl text-muted-foreground/20">
            EGS
          </div>
          <p className="text-muted-foreground/50 text-sm tracking-widest uppercase">
            Entreprenør AS
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <Facebook className="w-5 h-5 text-primary-foreground" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} EGS Entreprenør AS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
