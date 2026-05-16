import { motion } from 'framer-motion';

const PhoneHome = () => {
  return (
    <section className="w-full min-h-screen pt-16 pb-12 relative bg-[#0a0a0a] overflow-hidden flex flex-col font-sans selection:bg-gold/30">
      {/* --- BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 z-0">
        {/* Charcoal Gradient Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(40,40,40,0.4)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
        
        {/* Futuristic UI Lines (HUD) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[15%] left-[5%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute top-[15%] left-[5%] w-[1px] h-[20%] bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="absolute bottom-[25%] right-[5%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute bottom-[25%] right-[5%] w-[1px] h-[15%] bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>

        {/* Minimal Particles / Texture Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Soft Vignette */}
        <div className="absolute inset-0 shadow-[inner_0_0_150px_rgba(0,0,0,0.9)]" />
      </div>

      {/* --- MAIN PERSON & GOLDEN CIRCLE --- */}
      <div className="relative flex-1 flex flex-col items-center justify-center z-10">
        <div className="relative w-full aspect-[3/4] max-h-[50vh] flex items-center justify-center mt-[-10px]">
          {/* GOLDEN CIRCLE EFFECT */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square">
            {/* Main Halo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-[0.5px] border-gold/40 shadow-[0_0_60px_rgba(212,175,55,0.15)] flex items-center justify-center"
            >
              <div className="w-[98%] h-[98%] rounded-full border-[0.5px] border-gold/20" />
            </motion.div>
            
            {/* Volumetric Glow */}
            <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full animate-pulse" />
            
            {/* Subtle HUD Arcs */}
            <svg className="absolute inset-0 w-full h-full rotate-[-45deg] opacity-20" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="20 180" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="10 190" strokeDashoffset="100" />
            </svg>
          </div>

          {/* MAIN PERSON IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-full z-20"
          >
            <img
              src="/herosachin.png"
              alt="Sachin Pratap Singh"
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
            />
            {/* Rim Light Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-gold/5 pointer-events-none" />
          </motion.div>

          {/* FLOATING GLASS CARDS */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[25%] z-30 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col">
              <span className="text-[14px] font-black text-white leading-tight">3+ Years</span>
              <span className="text-[7px] text-white/50 uppercase tracking-widest font-bold">Experience</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[5%] bottom-[30%] z-30 bg-black/40 backdrop-blur-xl border border-gold/20 px-4 py-3 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span className="text-[9px] text-white/80 font-bold uppercase tracking-widest">AI Systems</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- TYPOGRAPHY SECTION --- */}
      <div className="px-8 relative z-40 mt-[-60px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-gold/80 text-[11px] font-bold uppercase tracking-[0.4em] block mb-2">Hello, I’m</span>
          
          <h1 className="flex flex-col">
            <span className="text-white text-[56px] font-black leading-[0.85] tracking-tight">SACHIN</span>
            <span className="text-gold text-[42px] font-black leading-[0.95] tracking-tighter mt-1">PRATAP SINGH</span>
          </h1>

          <div className="flex items-center gap-3 my-5">
            <div className="h-[0.5px] w-6 bg-gold/50" />
            <span className="text-[9px] text-white/40 font-black uppercase tracking-[0.3em]">Agentic AI Engineer</span>
            <div className="h-[0.5px] w-6 bg-gold/50" />
          </div>

          <p className="text-white/70 text-[14px] leading-relaxed max-w-[95%] font-medium">
            I build intelligent digital experiences with code & <span className="text-gold font-bold">artificial intelligence.</span>
          </p>
        </motion.div>

        {/* ROLE LABELS */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 opacity-40">
           {["Full Stack Developer", "AI Automation", "UI/UX Visionary"].map((role, i) => (
             <div key={i} className="flex items-center gap-2">
                <span className="text-[7px] text-white uppercase tracking-widest font-bold">{role}</span>
                {i < 2 && <span className="w-1 h-[1px] bg-white/50" />}
             </div>
           ))}
        </div>
      </div>

      {/* --- BUTTONS --- */}
      <div className="px-8 flex gap-3 mt-10 z-40">
        <motion.a 
          href="#projects"
          whileTap={{ scale: 0.95 }}
          className="group relative flex-1 bg-gold py-3 rounded-2xl text-[10px] text-dark font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 overflow-hidden"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-20deg] -translate-x-[200%] animate-[shimmer_3s_infinite]" />
          
          View Projects
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
        </motion.a>
        
        <motion.a 
          href="/Sachin_Pratap_Singh_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 py-3 rounded-2xl text-[10px] text-white font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
        >
          Download CV
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="gold" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m7-10-5 5 5 5m-5-5h12"/></svg>
        </motion.a>
      </div>

      {/* --- BOTTOM TECH STRIP --- */}
      <div className="mt-auto pt-12">
        <div className="text-center">
          <span className="text-[7px] text-white/20 uppercase tracking-[0.6em] font-bold">Trusted By Innovative Brands</span>
        </div>
        <div className="flex justify-between items-center px-8 mt-6 opacity-30 grayscale contrast-125">
          {["NEXT.JS", "REACT", "TS", "NODE", "PYTHON", "OPENAI"].map((tech, i) => (
            <span key={i} className="text-[9px] font-black text-white tracking-tighter">{tech}</span>
          ))}
        </div>
      </div>

      {/* LUXURY AMBIENT GLOWS */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[30%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default PhoneHome;
