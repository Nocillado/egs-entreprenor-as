import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Building, Facebook, Instagram, User, ArrowRight, ExternalLink } from 'lucide-react';

const contacts = [
  {
    name: 'Roar Evjen',
    role: 'dailyManager',
    phone: '971 45 022',
    email: 'roar@egsas.no',
  },
  {
    name: 'Terje Gabrielsen',
    role: 'projectManager',
    phone: '916 58 535',
    email: 'terje@egsas.no',
  },
];

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">{t('contact')}</span>
          <h2 className="section-title mb-4">{t('contactTitle')}</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="card-industrial p-6 group"
                >
                  <div className="w-16 h-16 bg-muted rounded-full mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <User className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-heading text-xl text-foreground uppercase tracking-wide mb-1">
                    {contact.name}
                  </h4>
                  <p className="text-primary text-sm uppercase tracking-wider mb-4">
                    {t(contact.role)}
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`tel:+47${contact.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Info */}
            <div className="card-industrial p-6">
              <h4 className="font-heading text-xl text-foreground uppercase tracking-wide mb-6">
                {t('contactInfo')}
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:roar@egsas.no"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>roar@egsas.no</span>
                </a>
                <a
                  href="tel:+4797145022"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>971 45 022</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Sando, 3570 ÅL</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <span>Orgnr 994 267 124</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                <a
                  href="https://www.facebook.com/egsentreprenor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/egsentreprenor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Map / CTA Side */}
          <div className="space-y-6">
            {/* Google Maps Embed */}
            <div className="bg-card border border-border relative overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.5!2d8.5647!3d60.6267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463ff5c5a5a5a5a5%3A0x0!2sNordbygdvegen%2020%2C%203570%20%C3%85l%2C%20Norway!5e0!3m2!1sen!2sno!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EGS Entreprenør AS Location"
                  className="w-full h-full"
                />
              </div>
              {/* Map overlay with address */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg text-white uppercase tracking-wide">
                      Nordbygdvegen 20
                    </p>
                    <p className="text-white/70 text-sm">3570 Ål, {t('norway')}</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=EGS+Entreprenør+AS,+Nordbygdvegen+20,+3570+Ål,+Norge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary px-4 py-2 text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {t('getDirections')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary p-8 text-center">
              <h4 className="font-heading text-2xl text-primary-foreground uppercase tracking-wide mb-4">
                {t('readyToStart')}
              </h4>
              <p className="text-primary-foreground/80 mb-6">
                {t('contactCta')}
              </p>
              <a
                href="mailto:roar@egsas.no"
                className="inline-flex items-center gap-2 bg-background text-foreground font-heading uppercase tracking-wide px-6 py-3 hover:bg-background/90 transition-colors"
              >
                {t('sendEmail')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
