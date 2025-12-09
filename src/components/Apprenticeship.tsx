import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, GraduationCap, Users, Award } from 'lucide-react';

const Apprenticeship = () => {
  const { t } = useLanguage();

  const links = [
    {
      name: 'Utdanning.no',
      logo: '/Logo/utdanning.png',
      url: 'https://utdanning.no/bedrift/994267124',
      descKey: 'apprenticeUtdanningDesc',
    },
    {
      name: 'Vilbli.no',
      logo: '/Logo/vibli.svg',
      url: 'https://www.vilbli.no/en/buskerud/adr/2052854/egs-entreprenor-as',
      descKey: 'apprenticeVilbliDesc',
    },
  ];

  const features = [
    {
      icon: GraduationCap,
      titleKey: 'apprenticeFeature1Title',
      descKey: 'apprenticeFeature1Desc',
    },
    {
      icon: Users,
      titleKey: 'apprenticeFeature2Title',
      descKey: 'apprenticeFeature2Desc',
    },
    {
      icon: Award,
      titleKey: 'apprenticeFeature3Title',
      descKey: 'apprenticeFeature3Desc',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('apprenticeLabel')}</span>
          <h2 className="section-title mb-4">{t('apprenticeTitle')}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('apprenticeSubtitle')}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 text-center hover:border-primary transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground uppercase tracking-wide mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Links to official pages */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-xl text-foreground uppercase tracking-wide text-center mb-8">
            {t('apprenticeLinksTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border p-6 flex items-center gap-6 hover:border-primary transition-all duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-3 flex-shrink-0">
                  <img
                    src={link.logo}
                    alt={link.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-heading text-lg text-foreground uppercase tracking-wide group-hover:text-primary transition-colors">
                      {link.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(link.descKey)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary/10 border border-primary/20 p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-xl text-foreground uppercase tracking-wide mb-4">
              {t('apprenticeCTATitle')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('apprenticeCTADesc')}
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apprenticeship;
