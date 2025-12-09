import { useLanguage } from '@/contexts/LanguageContext';

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
          </div>

          {/* Right side - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg" />
            <div className="relative overflow-hidden rounded-lg border border-border">
              <img
                src="/About Us/1.jpg"
                alt="EGS Entreprenør team at work"
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
