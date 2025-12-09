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
  heroTitle: { no: 'Grunnarbeid &', en: 'Groundwork &' },
  heroHighlight: { no: 'Anleggstjenester', en: 'Construction Services' },
  heroSubtitle: { no: 'Din pålitelige partner for grunnarbeid og anleggsvirksomhet i Hallingdal og Østlandet. Vi leverer kvalitet i hvert prosjekt.', en: 'Your reliable partner for groundwork and construction in Hallingdal and Eastern Norway. We deliver quality in every project.' },
  contactUs: { no: 'Kontakt oss', en: 'Contact Us' },
  ourServices: { no: 'Våre tjenester', en: 'Our Services' },
  
  // About
  aboutTitle: { no: 'Om oss', en: 'About Us' },
  aboutText1: { no: 'EGS Entreprenør AS er en fleksibel og kvalitetsbevisst entreprenør lokalisert i Hallingdal, med rekkevidde over hele Østlandet. Vi legger inn mye arbeid for å være en pålitelig og profesjonell aktør på markedet gjennom grundig utførsel av HMS, kvalitetssikring og dialog med kunden.', en: 'EGS Entreprenør AS is a flexible and quality-conscious contractor located in Hallingdal, with reach throughout Eastern Norway. We put in a lot of work to be a reliable and professional player in the market through thorough execution of HSE, quality assurance and dialogue with the customer.' },
  aboutText2: { no: 'Til privatkunden tilbys alt fra a - å vedrørende grunnarbeider, betong, landskapsutforming og murerarbeider. På dette området er vi totalentreprenør.', en: 'For private customers, we offer everything from A to Z regarding groundwork, concrete, landscaping and masonry. In this area, we are a general contractor.' },
  aboutText3: { no: 'Vi har i dag en stor og moderne maskinpark for å dekke de behov og ønsker kunden måtte ha, og vi har ca. 20 ansatte med bred kompetanse og utdanning innen ovennevnte arbeidsområder.', en: 'Today we have a large and modern fleet of machinery to meet the needs and wishes of the customer, and we have about 20 employees with broad expertise and education in the above-mentioned work areas.' },
  aboutCertifications: { no: 'Godkjenninger', en: 'Certifications' },
  aboutTrainingCompany: { no: 'Godkjent Lærebedrift', en: 'Approved Training Company' },
  aboutOKCompany: { no: 'OK Anleggsbedrift', en: 'OK Construction Company' },

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
  machineryMore: { no: '+ flere maskiner og utstyr tilgjengelig for alle typer prosjekter', en: '+ more machines and equipment available for all types of projects' },
  
  // Projects
  projectsTitle: { no: 'Prosjekter', en: 'Projects' },
  projectDesc1: { no: 'Totalentreprise for rekkehusprosjekt med grunnarbeid, VA og infrastruktur', en: 'Turnkey contract for row house project with groundwork, water/sewage and infrastructure' },
  projectDesc2: { no: 'Boligutvikling med flermannsboliger - grunnarbeid og infrastruktur', en: 'Residential development with multi-unit housing - groundwork and infrastructure' },
  projectDesc3: { no: 'Bolig- og næringsprosjekt med komplett grunnarbeid og VA', en: 'Residential and commercial project with complete groundwork and water/sewage' },
  projectDesc4: { no: 'Riving og bygging av enebolig og tre tomannsboliger', en: 'Demolition and construction of single-family home and three duplex units' },
  projectDesc5: { no: 'Nybygg av moderne eneboliger med tomteklargjøring og infrastruktur', en: 'New construction of modern single-family homes with site preparation and infrastructure' },
  projectDesc6: { no: 'Nybygg enebolig med dobbeltgarasje - komplett grunnarbeid', en: 'New single-family home with double garage - complete groundwork' },
  
  // Contact
  contactTitle: { no: 'Ønsker du å komme i kontakt med oss?', en: 'Want to get in touch with us?' },
  contactSubtitle: { no: 'Send en e-post eller ring oss for en hyggelig og uforpliktende prat!', en: 'Send an email or call us for a friendly and non-binding chat!' },
  contactPersons: { no: 'Kontaktpersoner', en: 'Contact Persons' },
  dailyManager: { no: 'Daglig leder', en: 'Managing Director' },
  projectManager: { no: 'Prosjektleder', en: 'Project Manager' },
  contactInfo: { no: 'Kontaktinformasjon', en: 'Contact Information' },
  readyToStart: { no: 'Klar for å starte?', en: 'Ready to start?' },
  contactCta: { no: 'Ta kontakt i dag for en uforpliktende prat om ditt prosjekt.', en: 'Get in touch today for a non-binding chat about your project.' },
  sendEmail: { no: 'Send e-post', en: 'Send Email' },
  norway: { no: 'Norge', en: 'Norway' },
  getDirections: { no: 'Veibeskrivelse', en: 'Get Directions' },
  
  // Partners
  partnersLabel: { no: 'Samarbeid', en: 'Partnership' },
  partnersTitle: { no: 'Våre Partnere', en: 'Our Partners' },
  partnersSubtitle: { no: 'Vi samarbeider med ledende aktører i regionen.', en: 'We collaborate with leading partners in the region.' },
  partnerSkiGeiloTitle: { no: 'SkiGeilo', en: 'SkiGeilo' },
  partnerSkiGeiloDesc: { no: 'Familievennlig skidestinasjon i Hallingdal med alpinbakker, aktiviteter og overnatting.', en: 'Family-friendly ski destination in Hallingdal with alpine slopes, activities and accommodation.' },
  partnerZeppelinTitle: { no: 'Zeppelin CAT', en: 'Zeppelin CAT' },
  partnerZeppelinDesc: { no: 'Norsk forhandler av Cat anleggsmaskiner, gravemaskiner og utstyr for bygg og anlegg.', en: 'Norwegian dealer of Cat construction machinery, excavators and equipment for construction.' },
  partnerMerkantilTitle: { no: 'Merkantilbygg AS', en: 'Merkantilbygg AS' },
  partnerMerkantilDesc: { no: 'Eiendomsselskap med fokus på utvikling, bolig og næring i Oslo-regionen og Geilo.', en: 'Real estate company focused on development, residential and commercial properties in Oslo region and Geilo.' },
  partnerNBFTitle: { no: 'Norges Bilsportforbund', en: 'Norwegian Motorsport Federation' },
  partnerNBFDesc: { no: 'Stolt sponsor av Rallycross Junior og Fair Race Stipend for unge motorsporttalenter.', en: 'Proud sponsor of Rallycross Junior and Fair Race Scholarship for young motorsport talents.' },
  readMore: { no: 'Les mer', en: 'Read More' },

  // Apprenticeship
  apprenticeLabel: { no: 'Lærebedrift', en: 'Training Company' },
  apprenticeTitle: { no: 'Godkjent Lærebedrift', en: 'Approved Training Company' },
  apprenticeSubtitle: { no: 'EGS Entreprenør AS er en godkjent lærebedrift som tilbyr lærlingplasser innen anleggsfagene. Vi er stolte av å bidra til utviklingen av fremtidens fagarbeidere.', en: 'EGS Entreprenør AS is an approved training company offering apprenticeships in construction trades. We are proud to contribute to the development of future skilled workers.' },
  apprenticeFeature1Title: { no: 'Praktisk Opplæring', en: 'Practical Training' },
  apprenticeFeature1Desc: { no: 'Lærlinger får hands-on erfaring med moderne maskiner og utstyr på virkelige prosjekter.', en: 'Apprentices gain hands-on experience with modern machinery and equipment on real projects.' },
  apprenticeFeature2Title: { no: 'Erfarne Veiledere', en: 'Experienced Mentors' },
  apprenticeFeature2Desc: { no: 'Våre erfarne fagarbeidere veileder og støtter lærlinger gjennom hele læretiden.', en: 'Our experienced skilled workers guide and support apprentices throughout their training.' },
  apprenticeFeature3Title: { no: 'Karrieremuligheter', en: 'Career Opportunities' },
  apprenticeFeature3Desc: { no: 'Mange av våre lærlinger fortsetter som fast ansatte etter fullført fagbrev.', en: 'Many of our apprentices continue as permanent employees after completing their certification.' },
  apprenticeLinksTitle: { no: 'Offisielle Registreringer', en: 'Official Registrations' },
  apprenticeUtdanningDesc: { no: 'Se vår godkjenning som lærebedrift og tilgjengelige lærlingfag på Utdanning.no', en: 'View our approval as a training company and available apprenticeship trades on Utdanning.no' },
  apprenticeVilbliDesc: { no: 'Finn informasjon om våre lærlingplasser og kontaktdetaljer på Vilbli.no', en: 'Find information about our apprenticeship positions and contact details on Vilbli.no' },
  apprenticeCTATitle: { no: 'Interessert i lærlingplass?', en: 'Interested in an apprenticeship?' },
  apprenticeCTADesc: { no: 'Ta kontakt med oss for å høre om ledige lærlingplasser og muligheter hos EGS Entreprenør AS.', en: 'Contact us to learn about available apprenticeship positions and opportunities at EGS Entreprenør AS.' },

  // Reviews
  reviewsLabel: { no: 'Anmeldelser', en: 'Reviews' },
  reviewsTitle: { no: 'Hva Kundene Sier', en: 'What Our Customers Say' },
  reviewsSubtitle: { no: '5.0 basert på Facebook-anmeldelser', en: '5.0 based on Facebook reviews' },
  review1Name: { no: 'Roger', en: 'Roger' },
  review1Text: { no: 'Knall bra service og hyggelige folk', en: 'Excellent service and friendly people' },
  review2Name: { no: 'Dag', en: 'Dag' },
  review2Text: { no: 'En helt fantastisk betjening', en: 'Absolutely fantastic service' },
  review3Name: { no: 'Stein', en: 'Stein' },
  review3Text: { no: 'Hyggelige og kunnskapsrike folk skaffer det meste', en: 'Friendly and knowledgeable people who can get most things' },
  review4Name: { no: 'Runar', en: 'Runar' },
  review4Text: { no: 'Flinke og hyggelige folk', en: 'Skilled and friendly people' },
  review5Name: { no: 'Hans', en: 'Hans' },
  review5Text: { no: 'Veldig bra butikk. God service. Hyggelige folk', en: 'Very good business. Good service. Friendly people' },
  reviewsCTA: { no: 'Se alle anmeldelser på Facebook', en: 'See all reviews on Facebook' },

  // Footer
  footerQuote: { no: 'Vi har god kompetanse, arbeidsstolthet og ansvarsbevissthet. Det viktigste for oss er å få til gode prosjekter med fornøyde kunder og et solid resultat.', en: 'We have good expertise, work pride and sense of responsibility. The most important thing for us is to achieve good projects with satisfied customers and solid results.' },
  followUs: { no: 'Følg oss', en: 'Follow Us' },
  quickLinks: { no: 'Snarveier', en: 'Quick Links' },
  footerTagline: { no: 'Din pålitelige partner for grunnarbeid og anleggsvirksomhet', en: 'Your reliable partner for groundwork and construction' },
  allRightsReserved: { no: 'Alle rettigheter reservert.', en: 'All rights reserved.' },

  // Language
  language: { no: 'NO', en: 'EN' },

  // Cookies & Privacy
  cookieText: { no: 'Vi bruker informasjonskapsler for å forbedre din opplevelse på nettstedet vårt.', en: 'We use cookies to improve your experience on our website.' },
  cookieAccept: { no: 'Godta', en: 'Accept' },
  cookieDecline: { no: 'Avslå', en: 'Decline' },
  cookieSettings: { no: 'Informasjonskapsler', en: 'Cookie Settings' },
  privacyPolicy: { no: 'Personvern', en: 'Privacy Policy' },
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
