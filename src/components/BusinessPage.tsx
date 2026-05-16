import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Cpu, ArrowRight, Star, ShieldCheck, Briefcase, Globe, Zap, CheckCircle2 } from 'lucide-react';

interface BusinessPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-[#050505] overflow-y-auto selection:bg-gold/30"
        >
          {/* 0. NAVIGATION / CLOSE */}
          <div className="fixed top-0 left-0 w-full z-[1100] p-6 md:p-10 flex justify-between items-center pointer-events-none">
            <div className="text-xl font-black tracking-tighter text-white opacity-40">SACHIN<span className="text-gold">.</span>STRATEGIC</div>
            <button 
              onClick={onClose}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 backdrop-blur-3xl group pointer-events-auto"
            >
              <X className="text-white group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          {/* 1. HERO SECTION - CLEAN & BOLD */}
          <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1)_0%,transparent_70%)] -z-10" />
            
            <div className="container mx-auto max-w-5xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 mb-10"
              >
                <Zap size={14} className="text-gold fill-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">2026 STRATEGIC INTAKE OPEN</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-8xl font-black mb-10 leading-[1.1] tracking-tighter text-white"
              >
                ELEVATING BUSINESS <br />
                <span className="text-gold">WITH AGENTIC AI.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/40 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-16"
              >
                High-performance technical leadership for enterprises ready to implement autonomous agents, scalable products, and intelligent automation.
              </motion.p>

              {/* Social Proof Strip */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-20 grayscale py-12 border-y border-white/5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5 md:h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-5 md:h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" className="h-5 md:h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-5 md:h-6" />
              </div>
            </div>
          </section>

          {/* 2. CORE EXPERTISE - BENTO CARDS */}
          <section className="py-32 px-6 bg-[#080808]">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-24">
                <h2 className="text-3xl md:text-5xl font-black mb-4">STRATEGIC <span className="text-gold">CAPABILITIES</span></h2>
                <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold">Driving measurable enterprise growth</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Agentic AI Mastery",
                    desc: "Engineering autonomous agents that handle complex logic and decision-making workflows.",
                    icon: <Cpu className="text-gold" />,
                    feature: "80% Efficiency Gain"
                  },
                  {
                    title: "Scale Engineering",
                    desc: "Architecting zero-downtime technical products designed for millions of users.",
                    icon: <Globe className="text-gold" />,
                    feature: "99.9% Reliable"
                  },
                  {
                    title: "Technical Strategy",
                    desc: "High-level advisory on technical roadmaps, AI audits, and system transformations.",
                    icon: <Briefcase className="text-gold" />,
                    feature: "3X Faster Scaling"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed mb-8">{item.desc}</p>
                    <div className="flex items-center gap-2 pt-8 border-t border-white/5">
                      <CheckCircle2 size={14} className="text-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80">{item.feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. PARTNERSHIP INTAKE FORM */}
          <section className="py-40 px-6 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] -z-10 rounded-full" />
            
            <div className="container mx-auto max-w-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">READY TO <br /> <span className="text-gold">START?</span></h2>
                  <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-10">Limited availability for strategic enterprise partnerships in 2026. Secure your slot now.</p>
                  
                  <div className="space-y-6 flex flex-col items-center lg:items-start">
                    {["Full Project Lifecycle", "AI Audits & Integration", "CTO Advisory"].map((li, idx) => (
                       <div key={idx} className="flex items-center gap-4">
                          <ShieldCheck className="text-gold" size={20} />
                          <span className="text-white/60 font-medium tracking-wide">{li}</span>
                       </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 md:p-14 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl">
                  <form className="space-y-8" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="6362d6ca-5e5d-451e-9279-3733d3170b02" />
                    <input type="hidden" name="subject" value="NEW BUSINESS INQUIRY" />
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/30 ml-4">Full Name</label>
                      <input name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/30 ml-4">Business Email</label>
                      <input name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-white/30 ml-4">Strategic Interest</label>
                      <select name="interest" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white/60 appearance-none cursor-pointer">
                        <option className="bg-[#050505]">Agentic AI Systems</option>
                        <option className="bg-[#050505]">Scalable Product Architecture</option>
                        <option className="bg-[#050505]">Strategic Technical Advisory</option>
                      </select>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-6 bg-gold text-dark font-black uppercase tracking-[0.4em] rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-4 text-sm"
                    >
                      SEND INQUIRY
                      <ArrowRight size={20} />
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PROFESSIONAL FOOTER */}
          <footer className="py-20 border-t border-white/5 bg-black/40 text-center">
            <div className="container mx-auto px-6">
              <div className="text-3xl font-black mb-6 tracking-tighter text-white">SACHIN<span className="text-gold">.</span>STRATEGIC</div>
              <div className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
                © 2026 SACHIN PRATAP SINGH. GLOBAL TECHNICAL EXCELLENCE.
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessPage;
