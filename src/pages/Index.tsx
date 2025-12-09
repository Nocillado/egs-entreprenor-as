import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Machinery from '@/components/Machinery';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Partners from '@/components/Partners';
import Apprenticeship from '@/components/Apprenticeship';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Partners />
          <Services />
          <Machinery />
          <Projects />
          <Reviews />
          <Apprenticeship />
          <Contact />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
};

export default Index;
