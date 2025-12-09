import { useLanguage } from '@/contexts/LanguageContext';
import { Gauge, Ruler, Weight } from 'lucide-react';

const machines = [
  {
    name: 'CAT 313',
    category: 'Excavator',
    image: '/Machinery/1.png',
    specs: { weight: '14.4 t', reach: '8.5 m', power: '75 kW' },
  },
  {
    name: 'CAT 320',
    category: 'Excavator',
    image: '/Machinery/2.png',
    specs: { weight: '22.2 t', reach: '9.9 m', power: '121 kW' },
  },
  {
    name: 'CAT 320 GC',
    category: 'Excavator',
    image: '/Machinery/3.png',
    specs: { weight: '21.5 t', reach: '9.8 m', power: '97 kW' },
  },
  {
    name: 'CAT 730',
    category: 'Dumper',
    image: '/Machinery/4.png',
    specs: { weight: '21.3 t', capacity: '28 t', power: '265 kW' },
  },
  {
    name: 'CAT 315',
    category: 'Excavator',
    image: '/Machinery/5.png',
    specs: { weight: '17.3 t', reach: '9.1 m', power: '93 kW' },
  },
  {
    name: 'CAT 313',
    category: 'Excavator',
    image: '/Machinery/6.png',
    specs: { weight: '14.4 t', reach: '8.5 m', power: '75 kW' },
  },
  {
    name: 'CAT 966',
    category: 'Wheel Loader',
    image: '/Machinery/7.png',
    specs: { weight: '24.8 t', capacity: '4.2 m³', power: '218 kW' },
  },
  {
    name: 'CAT 335',
    category: 'Excavator',
    image: '/Machinery/8.png',
    specs: { weight: '37.4 t', reach: '11.8 m', power: '196 kW' },
  },
];

const categoryColors: { [key: string]: string } = {
  Excavator: 'bg-primary',
  Dumper: 'bg-amber-600',
  'Wheel Loader': 'bg-emerald-600',
};

const Machinery = () => {
  const { t } = useLanguage();

  return (
    <section id="machinery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('machinery')}</span>
          <h2 className="section-title mb-4">{t('machineryTitle')}</h2>
          <div className="accent-line mx-auto" />
        </div>

        {/* Machinery Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-all duration-500"
            >
              {/* Category badge */}
              <div
                className={`absolute top-3 left-3 z-20 px-3 py-1 ${
                  categoryColors[machine.category] || 'bg-primary'
                }`}
              >
                <span className="text-xs text-white uppercase tracking-wider font-semibold">
                  {machine.category}
                </span>
              </div>

              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/50 to-background">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Default gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay with specs */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start items-center pt-12 px-4">
                  {/* Machine name on hover */}
                  <h3 className="font-heading text-lg text-primary uppercase tracking-wide mb-4 text-center">
                    {machine.name}
                  </h3>
                  {/* Specs grid */}
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-8 h-8 bg-primary/20 flex items-center justify-center mb-1">
                        <Weight className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider">Weight</p>
                      <p className="text-sm font-semibold text-white">{machine.specs.weight}</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-8 h-8 bg-primary/20 flex items-center justify-center mb-1">
                        <Ruler className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider">
                        {machine.specs.reach ? 'Reach' : 'Cap.'}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {machine.specs.reach || machine.specs.capacity}
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-8 h-8 bg-primary/20 flex items-center justify-center mb-1">
                        <Gauge className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider">Power</p>
                      <p className="text-sm font-semibold text-white">{machine.specs.power}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="relative p-4 bg-card border-t border-border group-hover:bg-primary transition-colors duration-500">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl text-foreground uppercase tracking-wide group-hover:text-primary-foreground transition-colors">
                    {machine.name}
                  </h3>
                  <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary-foreground/30 group-hover:bg-primary-foreground/10 transition-all">
                    <span className="text-xs text-muted-foreground group-hover:text-primary-foreground transition-colors font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t('machineryMore')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Machinery;
