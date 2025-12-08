import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
          {t('aboutTitle')}
        </h2>
        <div className="section-divider" />
        
        <div className="max-w-4xl mx-auto space-y-6 text-center text-muted-foreground leading-relaxed">
          <p>{t('aboutText1')}</p>
          <p>{t('aboutText2')}</p>
          <p>{t('aboutText3')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
