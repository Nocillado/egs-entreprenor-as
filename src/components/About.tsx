import { useLanguage } from '@/contexts/LanguageContext';
import LazyImage from './LazyImage';
import { ExternalLink } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <span className="section-label">{t('about')}</span>
            <h2 className="section-title mb-6">{t('aboutTitle')}</h2>
            <div className="accent-line mb-8" />

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t('aboutText1')}
              </p>
              <p className="leading-relaxed">
                {t('aboutText2')}
              </p>
              <p className="leading-relaxed">
                {t('aboutText3')}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#contact" className="btn-primary inline-flex items-center">
                {t('contactUs')}
              </a>
            </div>

            {/* Certifications */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                {t('aboutCertifications')}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <a
                  href="https://nrl.udir.no/enheter/994267124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-card border border-border px-4 py-3 hover:border-primary transition-colors flex-1"
                >
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center p-1 flex-shrink-0">
                    <img src="/Logo/Ling.png" alt="Lærebedrift" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {t('aboutTrainingCompany')}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
                <a
                  href="https://www.okab.no/medlem/egs-entreprenor-as/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-card border border-border px-4 py-3 hover:border-primary transition-colors flex-1"
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img src="/Logo/okab.png" alt="OK Anleggsbedrift" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {t('aboutOKCompany')}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg" />
            <div className="relative overflow-hidden rounded-lg border border-border aspect-[4/3]">
              <LazyImage
                src="/About Us/1.jpg"
                alt="EGS Entreprenør team at work"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                skeletonClassName="rounded-lg"
              />
              <div className="absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
