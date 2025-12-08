import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'no' | 'en';

interface Translations {
  [key: string]: {
    no: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { no: 'Forside', en: 'Home' },
  about: { no: 'Om oss', en: 'About Us' },
  services: { no: 'Tjenester', en: 'Services' },
  machinery: { no: 'Maskinpark', en: 'Machinery' },
  projects: { no: 'Prosjekter', en: 'Projects' },
  contact: { no: 'Kontakt', en: 'Contact' },
  
  // Hero
  heroTitle: { no: 'Kvalitet i hvert prosjekt', en: 'Quality in Every Project' },
  heroSubtitle: { no: 'Din pålitelige partner for grunnarbeid og anleggsvirksomhet i Hallingdal og Østlandet', en: 'Your reliable partner for groundwork and construction in Hallingdal and Eastern Norway' },
  contactUs: { no: 'Kontakt oss', en: 'Contact Us' },
  ourServices: { no: 'Våre tjenester', en: 'Our Services' },
  
  // About
  aboutTitle: { no: 'Om oss', en: 'About Us' },
  aboutText1: { no: 'EGS Entreprenør AS er en fleksibel og kvalitetsbevisst entreprenør lokalisert i Hallingdal, med rekkevidde over hele Østlandet. Vi legger inn mye arbeid for å være en pålitelig og profesjonell aktør på markedet gjennom grundig utførsel av HMS, kvalitetssikring og dialog med kunden.', en: 'EGS Entreprenør AS is a flexible and quality-conscious contractor located in Hallingdal, with reach throughout Eastern Norway. We put in a lot of work to be a reliable and professional player in the market through thorough execution of HSE, quality assurance and dialogue with the customer.' },
  aboutText2: { no: 'Til privatkunden tilbys alt fra a - å vedrørende grunnarbeider, betong, landskapsutforming og murerarbeider. På dette området er vi totalentreprenør.', en: 'For private customers, we offer everything from A to Z regarding groundwork, concrete, landscaping and masonry. In this area, we are a general contractor.' },
  aboutText3: { no: 'Vi har i dag en stor og moderne maskinpark for å dekke de behov og ønsker kunden måtte ha, og vi har ca. 20 ansatte med bred kompetanse og utdanning innen ovennevnte arbeidsområder.', en: 'Today we have a large and modern fleet of machinery to meet the needs and wishes of the customer, and we have about 20 employees with broad expertise and education in the above-mentioned work areas.' },
  
  // Services
  servicesTitle: { no: 'Tjenester', en: 'Services' },
  servicesIntro: { no: 'Vi utfører alle typer grunnarbeid for nyanlegg og ombygging, samt terrengendringer, betongarbeider, grøftearbeid og anleggelse av vei, vann og avløp.', en: 'We perform all types of groundwork for new construction and renovation, as well as terrain changes, concrete work, trenching and construction of roads, water and sewage.' },
  ourServicesLabel: { no: 'Våre tjenester:', en: 'Our services:' },
  service1: { no: 'Tomtegraving for hytter, eneboliger, flermannsboliger, leilighets- og næringsbygg', en: 'Site excavation for cabins, single-family homes, multi-family homes, apartments and commercial buildings' },
  service2: { no: 'Fjellsprenging og pigging av fjell for utarbeidelse av tomter og annet', en: 'Rock blasting and chipping for site preparation and other work' },
  service3: { no: 'Riving av gamle bygninger og klargjøring for nye oppføringer', en: 'Demolition of old buildings and preparation for new construction' },
  service4: { no: 'Produksjon, transport og levering av alle massetyper', en: 'Production, transport and delivery of all types of materials' },
  service5: { no: 'Knusing og sikting av egne masser på prosjekt', en: 'Crushing and screening of own materials on project' },
  service6: { no: 'Drenering av boliger, hytter og næringsbygg', en: 'Drainage for homes, cabins and commercial buildings' },
  service7: { no: 'Vann, avløp og overvannshåndtering', en: 'Water, sewage and stormwater management' },
  service8: { no: 'Fundamentering og betongarbeider', en: 'Foundation and concrete work' },
  service9: { no: 'Planering og landskapsutforming', en: 'Grading and landscaping' },
  service10: { no: 'Støttemurer og maskinmuring', en: 'Retaining walls and machine masonry' },
  service11: { no: 'Asfaltering og veibygging', en: 'Asphalt paving and road construction' },
  service12: { no: 'Grøfting for VA og kabler', en: 'Trenching for water/sewage and cables' },
  noJobTooSmall: { no: 'Ingen jobb er for stor, ingen for liten. Vi har kompetansen til å ta fatt på det meste!', en: 'No job is too big, none too small. We have the expertise to tackle most things!' },
  
  // Machinery
  machineryTitle: { no: 'Maskinpark', en: 'Machinery' },
  
  // Projects
  projectsTitle: { no: 'Prosjekter', en: 'Projects' },
  projectDesc1: { no: 'Hovedentreprenør for grunnarbeid og betongarbeider, samt anlegging av 4 km gang/sykkelvei og vann/avløp for leilighetsprosjekt på Nesodden', en: 'Main contractor for groundwork and concrete work, as well as construction of 4 km walking/cycling path and water/sewage for apartment project at Nesodden' },
  projectDesc2: { no: 'Underentreprenør på grunnarbeid for leilighetsprosjekt Geilo', en: 'Subcontractor for groundwork on apartment project Geilo' },
  projectDesc3: { no: 'Underentreprenør på grunnarbeid for leilighetsprosjekt på Geilo', en: 'Subcontractor for groundwork on apartment project at Geilo' },
  projectDesc4: { no: 'Hovedentreprenør på grunnarbeid for leilighetsprosjekt på Geilo', en: 'Main contractor for groundwork on apartment project at Geilo' },
  projectDesc5: { no: 'Hovedentreprenør for grunnarbeid, tomteklargjøring, VA og veier for eiendomsprosjekt på Geilo', en: 'Main contractor for groundwork, site preparation, water/sewage and roads for property project at Geilo' },
  projectDesc6: { no: 'Hyttetomter, grøftearbeid, og andre oppdrag', en: 'Cabin plots, trenching work, and other assignments' },
  
  // Contact
  contactTitle: { no: 'Ønsker du å komme i kontakt med oss?', en: 'Want to get in touch with us?' },
  contactSubtitle: { no: 'Send en e-post eller ring oss for en hyggelig og uforpliktende prat!', en: 'Send an email or call us for a friendly and non-binding chat!' },
  contactPersons: { no: 'Kontaktpersoner', en: 'Contact Persons' },
  dailyManager: { no: 'Daglig leder', en: 'Managing Director' },
  projectManager: { no: 'Prosjektleder', en: 'Project Manager' },
  
  // Footer
  footerQuote: { no: 'Vi har god kompetanse, arbeidsstolthet og ansvarsbevissthet. Det viktigste for oss er å få til gode prosjekter med fornøyde kunder og et solid resultat.', en: 'We have good expertise, work pride and sense of responsibility. The most important thing for us is to achieve good projects with satisfied customers and solid results.' },
  followUs: { no: 'Følg oss på Facebook eller Instagram for oppdateringer og flere bilder!', en: 'Follow us on Facebook or Instagram for updates and more photos!' },
  
  // Language
  language: { no: 'NO', en: 'EN' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('no');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
