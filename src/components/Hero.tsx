import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-28 relative">
      <div className="w-full h-full overflow-hidden relative">
        <img
          src="/sachinnn.jpeg"
          alt="Sachin Portfolio"
          className="w-full h-full object-cover"
        />

        {/* Buttons Overlay */}
        <div className="absolute bottom-[32.2%] left-[6.5%] flex items-center gap-4 z-10 whitespace-nowrap">
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-2.5 px-7 py-3 bg-gold text-dark rounded-xl text-[12px] font-black uppercase tracking-widest transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-20deg] -translate-x-[200%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </motion.a>

          <motion.a 
            href="/Sachin_Pratap_Singh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-2.5 px-7 py-3 bg-white/5 backdrop-blur-xl border border-white/20 hover:border-gold/50 rounded-xl text-white text-[12px] font-black uppercase tracking-widest transition-all duration-500 hover:bg-white/10"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold transition-transform group-hover:translate-y-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m7-10-5 5 5 5m-5-5h12"/></svg>
            
            {/* Subtle Glow Corner */}
            <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-gold/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
