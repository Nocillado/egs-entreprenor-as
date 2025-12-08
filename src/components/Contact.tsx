import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, Smartphone, Building, Facebook, Instagram, User } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      name: 'Roar Evjen',
      role: 'dailyManager',
      phone: '971 45 022',
    },
    {
      name: 'Terje Gabrielsen',
      role: 'projectManager',
      phone: '916 58 535',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-center text-foreground">
          {t('contactTitle')}
        </h2>
        <p className="text-center text-muted-foreground mt-4 mb-8">
          {t('contactSubtitle')}
        </p>
        <div className="section-divider" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 text-muted-foreground">
            <a href="mailto:roar@egsas.no" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              roar@egsas.no
            </a>
            <a href="tel:+4797145022" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              971 45 022
            </a>
            <a href="tel:+4791658535" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Smartphone className="w-5 h-5 text-primary" />
              916 58 535
            </a>
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-primary" />
              Orgnr 994 267 124
            </div>
            <div className="flex gap-3 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-card rounded-lg h-64 flex items-center justify-center border border-border">
            <p className="text-muted-foreground">Sando, 3570 ÅL</p>
          </div>
        </div>

        {/* Contact Persons */}
        <div className="mt-20">
          <h3 className="font-heading font-bold text-2xl text-center text-foreground mb-4">
            {t('contactPersons')}
          </h3>
          <div className="section-divider" />
          
          <div className="flex flex-wrap justify-center gap-12">
            {contacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <h4 className="font-heading font-semibold text-foreground">{contact.name}</h4>
                <p className="text-muted-foreground text-sm">{t(contact.role)}</p>
                <a
                  href={`tel:+47${contact.phone.replace(/\s/g, '')}`}
                  className="text-foreground underline mt-2 inline-block hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
