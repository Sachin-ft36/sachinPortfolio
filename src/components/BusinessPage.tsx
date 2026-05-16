import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Cpu, ArrowRight, Star, ShieldCheck, Briefcase } from 'lucide-react';

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
          className="fixed inset-0 z-[200] bg-dark flex flex-col overflow-y-auto selection:bg-gold/30"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="fixed top-8 right-8 z-[210] p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 group backdrop-blur-xl"
          >
            <X className="text-white group-hover:rotate-90 transition-transform" />
          </button>

          {/* Hero Section */}
          <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-gold/5 to-transparent -z-10" />
            
            <div className="container mx-auto max-w-6xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
              >
                <Star size={14} className="text-gold fill-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Enterprise AI Solutions 2026</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter"
              >
                POWERING THE <br />
                <span className="text-gold">NEXT GENERATION</span> <br />
                <span className="text-white/40">OF BUSINESS.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-16"
              >
                I help enterprises scale through agentic AI, autonomous workflows, and world-class technical architecture. Let's build your competitive edge.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" className="h-6" />
              </div>
            </div>
          </section>

          {/* Core Pillars */}
          <section className="py-32 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {[
                  {
                    title: "Agentic AI Mastery",
                    desc: "Autonomous agents that handle complex logic, multi-step tasks, and intelligent decision making for your core business.",
                    icon: <Cpu className="text-gold" />,
                    stat: "80% Automation"
                  },
                  {
                    title: "Scale Engineering",
                    desc: "Architecting systems that don't just work, but scale to millions. High-availability, low-latency enterprise products.",
                    icon: <TrendingUp className="text-gold" />,
                    stat: "99.9% Uptime"
                  },
                  {
                    title: "Strategic Impact",
                    desc: "Direct ROI-focused engineering. We don't just build features; we build strategic assets that drive market value.",
                    icon: <Briefcase className="text-gold" />,
                    stat: "3X Growth"
                  }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/10 flex flex-col items-start gap-8 group hover:border-gold/30 transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gold/10 flex items-center justify-center text-gold">{pillar.icon}</div>
                    <h3 className="text-3xl font-black group-hover:text-gold transition-colors">{pillar.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed text-lg">{pillar.desc}</p>
                    <div className="mt-auto pt-8 border-t border-white/5 w-full flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Metric</span>
                      <span className="text-xl font-black text-gold">{pillar.stat}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Proof / Testimonial */}
          <section className="py-24 px-6 bg-charcoal/20">
            <div className="container mx-auto max-w-4xl text-center">
               <div className="mb-10 flex justify-center gap-1">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold fill-gold" />)}
               </div>
               <blockquote className="text-3xl md:text-5xl font-light italic text-white/80 leading-tight mb-10">
                 "Sachin's ability to translate complex business needs into autonomous AI systems is truly world-class. He doesn't just write code; he builds future-proof business engines."
               </blockquote>
               <cite className="text-gold font-black uppercase tracking-[0.4em] text-sm not-italic">— CTO, GLOBAL AI ENTERPRISE</cite>
            </div>
          </section>

          {/* Partnership Form */}
          <section className="py-40 px-6">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">READY TO <br /> <span className="text-gold">TRANSFORM?</span></h2>
                  <p className="text-white/40 text-xl font-light mb-12">Join a select group of enterprises leveraging my dedicated technical partnership. Limited slots available for 2026.</p>
                  
                  <div className="space-y-6">
                    {[
                      "Priority Strategic Planning",
                      "Full Lifecycle Development",
                      "AI Integration & Audits",
                      "CTO-as-a-Service Consultation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <ShieldCheck className="text-gold" size={24} />
                        <span className="text-lg text-white/60 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-12 rounded-[5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 blur-[60px] rounded-full" />
                  
                  <form className="space-y-8" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="6362d6ca-5e5d-451e-9279-3733d3170b02" />
                    <input type="hidden" name="subject" value="STRATEGIC BUSINESS INQUIRY" />
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Corporate Entity</label>
                      <input name="name" type="text" placeholder="Full Name / Company" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Contact Gateway</label>
                      <input name="email" type="email" placeholder="official@enterprise.com" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Strategic Interest</label>
                      <select name="interest" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white/60 appearance-none cursor-pointer">
                        <option className="bg-dark">Autonomous AI Systems</option>
                        <option className="bg-dark">High-Scale Enterprise Platform</option>
                        <option className="bg-dark">Strategic Technical Advisory</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Brief Vision</label>
                      <textarea name="message" rows={4} placeholder="Describe the strategic requirement..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-gold/50 transition-all text-white resize-none" required></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-6 bg-gold text-dark font-black uppercase tracking-[0.4em] rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-4"
                    >
                      INITIATE PARTNERSHIP
                      <ArrowRight size={20} />
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Footer */}
          <footer className="mt-auto py-20 border-t border-white/5 bg-black/40">
            <div className="container mx-auto px-6 text-center">
              <div className="text-2xl font-black mb-6 tracking-tighter">SACHIN <span className="text-gold">STRATEGIC.</span></div>
              <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                © 2026 SACHIN PRATAP SINGH ENTERPRISE SOLUTIONS. GLOBAL DELIVERY.
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessPage;
