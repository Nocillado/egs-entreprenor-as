import { useLanguage } from '@/contexts/LanguageContext';
import {
  Mountain,
  Hammer,
  Building2,
  Truck,
  Droplets,
  Wrench,
  TreePine,
  Layers,
  Route,
  Construction,
  HardHat,
  Shovel,
  ArrowRight,
  Facebook,
  Instagram,
} from 'lucide-react';

const services = [
  { key: 'service1', icon: Mountain, image: '/Services/1.jpg' },
  { key: 'service2', icon: Hammer, image: '/Services/2.jpg' },
  { key: 'service3', icon: Building2, image: '/Services/3.jpg' },
  { key: 'service4', icon: Truck, image: '/Services/4.jpg' },
  { key: 'service5', icon: Layers, image: '/Services/5.jpg' },
  { key: 'service6', icon: Droplets, image: '/Services/6.jpg' },
  { key: 'service7', icon: Wrench, image: '/Services/7.jpg' },
  { key: 'service8', icon: Construction, image: '/Services/8.jpg' },
  { key: 'service9', icon: TreePine, image: '/Services/9.jpg' },
  { key: 'service10', icon: HardHat, image: '/Services/10.jpg' },
  { key: 'service11', icon: Route, image: '/Services/11.jpg' },
  { key: 'service12', icon: Shovel, image: '/Services/12.jpg' },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side - Sticky intro and CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="section-label">{t('services')}</span>
              <h2 className="section-title mb-4">{t('servicesTitle')}</h2>
              <div className="accent-line mb-8" />

              <p className="text-muted-foreground leading-relaxed mb-8">
                {t('servicesIntro')}
              </p>

              {/* CTA Box */}
              <div className="bg-background border border-border p-6 mb-8">
                <p className="font-heading text-xl text-primary uppercase tracking-wide mb-4">
                  {t('noJobTooSmall')}
                </p>
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  {t('contactUs')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Social Links */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  <a
                    href="https://www.facebook.com/egsentreprenor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-muted/50 border border-border rounded-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/egsentreprenor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-muted/50 border border-border rounded-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="w-1 h-16 bg-primary" />
                <div className="flex flex-col gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-primary/60" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Scrolling service cards */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-background border border-border hover:border-primary transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.key)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>

                    {/* Number indicator */}
                    <span className="absolute bottom-3 left-3 font-heading text-4xl text-white/20 font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      {t(service.key)}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
