import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Facebook, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useRef } from 'react';

const Reviews = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      nameKey: 'review1Name',
      textKey: 'review1Text',
      rating: 5,
    },
    {
      nameKey: 'review2Name',
      textKey: 'review2Text',
      rating: 5,
    },
    {
      nameKey: 'review3Name',
      textKey: 'review3Text',
      rating: 5,
    },
    {
      nameKey: 'review4Name',
      textKey: 'review4Text',
      rating: 5,
    },
    {
      nameKey: 'review5Name',
      textKey: 'review5Text',
      rating: 5,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label">{t('reviewsLabel')}</span>
            <h2 className="section-title mb-4">{t('reviewsTitle')}</h2>
            <div className="accent-line mb-0" />
          </div>

          {/* Rating & Navigation */}
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            {/* Overall Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="font-heading text-2xl text-foreground">5.0</span>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[300px] snap-center md:snap-start"
            >
              <div className="h-full min-h-[280px] bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-border p-6 relative group hover:border-primary transition-all duration-300 flex flex-col">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

                {/* Profile Icon */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl text-foreground uppercase tracking-wide mb-2">
                  {t(review.nameKey)}
                </h3>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  "{t(review.textKey)}"
                </p>

                {/* Facebook Badge - Bottom Left */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-auto pt-4">
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook Review</span>
                </div>
              </div>
            </div>
          ))}

          {/* View All Card */}
          <div className="flex-shrink-0 w-full md:w-[300px] snap-center md:snap-start">
            <a
              href="https://www.facebook.com/egsentreprenor/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full min-h-[280px] bg-[#1877F2] p-6 flex flex-col items-center justify-center text-white hover:bg-[#166FE5] transition-colors group"
            >
              <Facebook className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-heading text-lg uppercase tracking-wide text-center mb-2">
                {t('reviewsCTA')}
              </span>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-white fill-white"
                  />
                ))}
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <span className="text-muted-foreground text-sm">
            ← Swipe to see more →
          </span>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
