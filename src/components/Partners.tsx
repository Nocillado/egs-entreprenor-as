import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

interface PartnerLogoProps {
  src: string;
  alt: string;
  className?: string;
  fallback: string;
}

const PartnerLogo = ({ src, alt, className = '', fallback }: PartnerLogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse rounded">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shimmer" />
        </div>
      )}
      {hasError ? (
        <span className="text-primary font-heading text-sm">{fallback}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      )}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

const Partners = () => {
  const { t } = useLanguage();

  const featuredPartner = {
    name: 'SkiGeilo',
    logo: 'https://www.skigeilo.no/themes/custom/citybreakweb/cb_skigeilo_v2/logo.png',
    fallback: 'SkiGeilo',
    titleKey: 'partnerSkiGeiloTitle',
    descKey: 'partnerSkiGeiloDesc',
    url: 'https://www.skigeilo.no',
    bgDark: true,
  };

  const otherPartners = [
    {
      name: 'Zeppelin CAT',
      logo: 'https://www.zeppelin-cat.no/packages/pon_cat/themes/pon_cat/assets/images/logo-bordered.svg',
      fallback: 'CAT',
      url: 'https://www.zeppelin-cat.no/no/equipment/produkter/cat-produkter/gravemaskiner',
      bgDark: false,
    },
    {
      name: 'Merkantilbygg',
      logo: 'https://images.squarespace-cdn.com/content/v1/613f17727b37a401721185c7/5ff7f873-35b3-45a3-8670-9313c7787912/MTB_Full+Logo_Hvit.png',
      fallback: 'MTB',
      url: 'https://www.merkantilbygg.no/',
      bgDark: false,
      invert: true,
    },
    {
      name: 'Norges Bilsportforbund',
      logo: '/Logo/Bilsport.png',
      fallback: 'NBF',
      url: 'https://bilsport.no/rallycross-junior-og-fair-race-stipend/',
      bgDark: false,
    },
  ];

  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">{t('partnersLabel')}</span>
          <h2 className="section-title mb-4">
            {t('partnersTitle')}
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('partnersSubtitle')}
          </p>
        </div>

        {/* Featured Partner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-background border border-border p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-lg flex items-center justify-center p-4 bg-zinc-100">
                  <PartnerLogo
                    src={featuredPartner.logo}
                    alt={featuredPartner.name}
                    className="w-full h-full object-contain"
                    fallback={featuredPartner.fallback}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-xl md:text-2xl text-foreground uppercase tracking-wide mb-3">
                  {t(featuredPartner.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(featuredPartner.descKey)}
                </p>
                <a
                  href={featuredPartner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm uppercase tracking-wider"
                >
                  {t('readMore')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Partners - Logo Row */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {otherPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`w-36 h-24 rounded-lg flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 ${partner.bgDark ? 'bg-zinc-800' : 'bg-white'}`}>
                <PartnerLogo
                  src={partner.logo}
                  alt={partner.name}
                  className={`w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity ${partner.invert ? 'invert' : ''}`}
                  fallback={partner.fallback}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
