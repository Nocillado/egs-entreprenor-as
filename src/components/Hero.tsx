import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const heroImages = [
  '/Hero Image/1.jpg',
  '/Hero Image/2.jpg',
  '/Hero Image/3.jpg',
];

const Hero = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(heroImages.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    heroImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Skeleton background */}
      {!loadedImages[currentIndex] && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer" />
        </div>
      )}

      {/* Background Images with zoom animation */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex && loadedImages[index] ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            animation: index === currentIndex ? 'slowZoom 6s ease-out forwards' : 'none',
          }}
        />
      ))}

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      {/* Dark overlay for mobile */}
      <div className="absolute inset-0 bg-background/80 z-10 lg:hidden" />

      {/* Diagonal dark overlay for desktop */}
      <div
        className="absolute inset-y-0 left-0 w-[55%] bg-background/95 z-10 hidden lg:block"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
        }}
      />

      {/* Secondary diagonal line accent */}
      <div
        className="absolute inset-y-0 left-0 w-[57%] bg-primary/20 z-[5] hidden lg:block"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 87% 100%, 0 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center pt-20 lg:pt-0">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {/* Accent dots */}
            <div className="flex items-center gap-1 mb-4 md:mb-6">
              <div className="w-1 h-6 md:h-8 bg-primary" />
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-primary" />
                ))}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-wide mb-1 md:mb-2 animate-fade-in">
              {t('heroTitle')}
            </h1>

            {/* Highlighted word */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary uppercase tracking-wide mb-6 md:mb-8 animate-fade-in">
              {t('heroHighlight')}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mb-8 md:mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
              >
                {t('contactUs')}
              </a>
              <a
                href="#services"
                className="btn-outline inline-flex items-center justify-center text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
              >
                {t('ourServices')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-8 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
