import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            <a href="#contact">{t('contactUs')}</a>
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold px-8">
            <a href="#services">{t('ourServices')}</a>
          </Button>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm py-4 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
            <a href="mailto:roar@egsas.no" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              roar@egsas.no
            </a>
            <a href="tel:+4797145022" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              971 45 022
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Sando, 3570 ÅL
            </span>
            <span className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Orgnr 994 267 124
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
