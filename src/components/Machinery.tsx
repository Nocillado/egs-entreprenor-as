import { useLanguage } from '@/contexts/LanguageContext';

const machines = [
  { name: 'CAT 313 NG', image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 340 NG', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 330 NG', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 336 NG', image: 'https://images.unsplash.com/photo-1621922688758-359c897548e8?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 730', image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 950', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 966', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAT 323', image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=800&auto=format&fit=crop' },
];

const Machinery = () => {
  const { t } = useLanguage();

  return (
    <section id="machinery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
          {t('machineryTitle')}
        </h2>
        <div className="section-divider" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground">{machine.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Machinery;
