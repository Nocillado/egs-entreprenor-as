import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    'service1', 'service2', 'service3', 'service4', 'service5', 'service6',
    'service7', 'service8', 'service9', 'service10', 'service11', 'service12',
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
          {t('servicesTitle')}
        </h2>
        <div className="section-divider" />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-primary italic font-medium text-lg mb-8">
            {t('servicesIntro')}
          </p>
          
          <p className="text-center text-muted-foreground mb-6 italic">
            {t('ourServicesLabel')}
          </p>
          
          <ul className="space-y-3 text-center text-muted-foreground">
            {services.map((service, index) => (
              <li key={index} className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span>{t(service)}</span>
              </li>
            ))}
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span>m.m.</span>
            </li>
          </ul>
          
          <p className="text-center text-primary mt-10 font-semibold text-lg">
            {t('noJobTooSmall')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
