import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import LazyImage from './LazyImage';

const projects = [
  {
    title: 'Spro Havn Rekkehus',
    descKey: 'projectDesc1',
    location: 'Fagerstrand',
    year: '2022-2025',
    image: '/Projects/1.jpg',
    featured: true,
  },
  {
    title: 'Lyttestasjonen Kløfta',
    descKey: 'projectDesc2',
    location: 'Kløfta',
    year: '2025-2026',
    image: '/Projects/2.jpg',
  },
  {
    title: 'Sæterkrysset',
    descKey: 'projectDesc3',
    location: 'Oslo',
    year: '2025',
    image: '/Projects/3.jpg',
  },
  {
    title: 'Storåsveien 31D',
    descKey: 'projectDesc4',
    location: 'Oslo',
    year: '2024',
    image: '/Projects/4.jpg',
  },
  {
    title: 'Ringveien 3',
    descKey: 'projectDesc5',
    location: 'Nesodden',
    year: '2019-2024',
    image: '/Projects/5.jpg',
    featured: true,
  },
  {
    title: 'Østre vei 60',
    descKey: 'projectDesc6',
    location: 'Nesøya',
    year: '2025',
    image: '/Projects/6.jpg',
  },
];

const Projects = () => {
  const { t } = useLanguage();

  // Separate featured and regular projects
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('projects')}</span>
          <h2 className="section-title mb-4">{t('projectsTitle')}</h2>
          <div className="accent-line mx-auto" />
        </div>

        {/* Featured Projects - Large Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500 bg-background"
            >
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary">
                <span className="text-xs text-primary-foreground uppercase tracking-wider font-semibold">
                  Featured
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5 text-primary">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl lg:text-3xl text-white uppercase tracking-wide mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-xl">
                    {t(project.descKey)}
                  </p>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Regular Projects - Smaller Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-border hover:border-primary transition-all duration-500 bg-background"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Quick info on image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-white/80">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium">{project.location}</span>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm">
                  <span className="text-xs text-white/80">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading text-lg text-foreground uppercase tracking-wide mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {t(project.descKey)}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
