import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneHome from './components/PhoneHome';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import WhatsAppWidget from './components/WhatsAppWidget';
import BusinessPage from './components/BusinessPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBusinessPageOpen, setIsBusinessPageOpen] = useState(false);

  // Smooth scroll and scroll progress implementation
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressIndicator = document.getElementById("scroll-progress");
      if (progressIndicator) {
        progressIndicator.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial scroll to hash after loading
  useEffect(() => {
    if (!isLoading && window.location.hash) {
      const id = window.location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 800); // Increased delay to ensure all components are fully mounted
      }
    }
  }, [isLoading]);

  return (
    <div className="bg-dark min-h-screen selection:bg-gold/30">
      <CustomCursor />
      <WhatsAppWidget />
      
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-[2px] z-[110]">
             <div className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300" id="scroll-progress"></div>
          </div>
          
          <BusinessPage isOpen={isBusinessPageOpen} onClose={() => setIsBusinessPageOpen(false)} />
          
          <Navbar onJoinBusiness={() => setIsBusinessPageOpen(true)} />
          <main className="relative">
            <div id="home">
              <div className="hidden md:block">
                <Hero />
              </div>
              <div className="block md:hidden">
                <PhoneHome />
              </div>
            </div>
          <Projects />
          <About />
          <Services />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
          
          <footer className="py-20 border-t border-white/5 bg-charcoal/20">
            <div className="container mx-auto px-6 text-center">
               <div className="text-3xl font-black mb-8">SACHIN<span className="text-gold">.</span></div>
               <p className="text-white/40 font-light mb-12 max-w-lg mx-auto">
                 Creating intelligent digital experiences with a focus on luxury aesthetics and high-performance engineering.
               </p>
               <div className="flex justify-center gap-8 mb-12">
                 <a href="#" className="text-white/40 hover:text-white transition-colors">Home</a>
                 <a href="#projects" className="text-white/40 hover:text-white transition-colors">Projects</a>
                 <a href="#about" className="text-white/40 hover:text-white transition-colors">About</a>
                 <a href="#contact" className="text-white/40 hover:text-white transition-colors">Contact</a>
               </div>
               <div className="pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20">
                 © 2026 Sachin Pratap Singh. Crafted with Excellence.
               </div>
            </div>
          </footer>
        </main>
        </>
      )}

      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-electric/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
