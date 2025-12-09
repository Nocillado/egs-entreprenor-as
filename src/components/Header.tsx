import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'machinery', href: '#machinery' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'no' ? 'en' : 'no');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-sm border-border'
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo - hidden on mobile, shown on desktop */}
          <a href="#home" className="hidden lg:flex items-center mr-10">
            <img src="/Logo/1.webp" alt="EGS Entreprenør AS" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation - right after logo */}
          <nav className="hidden lg:flex items-center gap-6 flex-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-heading text-sm tracking-[0.1em] uppercase transition-colors text-foreground/80 hover:text-primary"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side - Language toggle */}
          <div className="hidden lg:flex items-center">
            {/* Language toggle - Both flags visible */}
            <div className="flex items-center bg-muted/50 border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setLanguage('no')}
                className={`flex items-center gap-2 px-3 py-2 transition-all ${
                  language === 'no'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <img
                  src="/Translate/No.webp"
                  alt="Norwegian"
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span className="font-semibold text-xs uppercase">NOR</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 px-3 py-2 transition-all ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <img
                  src="/Translate/UK.png"
                  alt="English"
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span className="font-semibold text-xs uppercase">ENG</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button - on the left */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm -mx-4 px-4 animate-fade-in">
            {/* Logo inside mobile menu */}
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center mb-6 pb-4 border-b border-border">
              <img src="/Logo/1.webp" alt="EGS Entreprenør AS" className="h-14 w-auto" />
            </a>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-heading text-lg tracking-[0.1em] uppercase transition-colors py-2 text-foreground/80 hover:text-primary"
                >
                  {t(item.key)}
                </a>
              ))}
              {/* Contact Info */}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href="mailto:roar@egsas.no"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">roar@egsas.no</span>
                </a>
                <a
                  href="tel:+4797145022"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">971 45 022</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Sando, 3570 ÅL</span>
                </div>
              </div>

              {/* Language toggle - Both flags visible */}
              <div className="flex items-center pt-4 border-t border-border">
                <div className="flex items-center bg-muted/50 border border-border rounded-sm overflow-hidden">
                  <button
                    onClick={() => setLanguage('no')}
                    className={`flex items-center gap-2 px-3 py-2 transition-all ${
                      language === 'no'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <img
                      src="/Translate/No.webp"
                      alt="Norwegian"
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    <span className="font-semibold text-xs uppercase">NOR</span>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center gap-2 px-3 py-2 transition-all ${
                      language === 'en'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <img
                      src="/Translate/UK.png"
                      alt="English"
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    <span className="font-semibold text-xs uppercase">ENG</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
