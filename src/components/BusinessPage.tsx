import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, TrendingUp, Cpu, Globe, Users, ArrowRight } from 'lucide-react';

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
            className="fixed top-8 right-8 z-[210] p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 group"
          >
            <X className="text-white group-hover:rotate-90 transition-transform" />
          </button>

          {/* Business Hero */}
          <section className="relative pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
                >
                  <TrendingUp size={14} className="text-gold" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Strategic Partnerships 2026</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
                >
                  ELEVATE YOUR <br />
                  <span className="text-white/40">ENTERPRISE</span> WITH AI
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12"
                >
                  I partner with forward-thinking businesses to implement agentic AI workflows, cinematic digital experiences, and scalable technical architectures.
                </motion.p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { label: "Efficiency Gain", val: "30%+", icon: <TrendingUp className="text-gold" /> },
                  { label: "AI Integration", val: "Seamless", icon: <Cpu className="text-gold" /> },
                  { label: "Scale Potential", val: "Global", icon: <Globe className="text-gold" /> },
                  { label: "User Trust", val: "99%", icon: <Users className="text-gold" /> },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-4"
                  >
                    <div className="p-3 bg-gold/10 rounded-2xl">{stat.icon}</div>
                    <div className="text-3xl font-black">{stat.val}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Models */}
          <section className="py-24 px-6 bg-charcoal/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-black mb-16 text-center uppercase tracking-[0.2em]">Partnership Models</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Project Based",
                    desc: "Perfect for specific technical implementations or digital transformations.",
                    features: ["Dedicated Timeline", "Fixed Scope", "High Impact Delivery"]
                  },
                  {
                    title: "Strategic Retainer",
                    desc: "Ongoing technical leadership and AI advisory for growing enterprises.",
                    features: ["Continuous Support", "Priority Execution", "Roadmap Planning"]
                  },
                  {
                    title: "Venture Partner",
                    desc: "Deep integration into your core product team for high-stakes innovation.",
                    features: ["Equity Based Models", "Co-Founder Mindset", "Long-term Scaling"]
                  }
                ].map((model, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-[3rem] bg-dark border border-white/10 flex flex-col items-start gap-8 group hover:border-gold/30 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-black text-xl">0{i+1}</div>
                    <h3 className="text-2xl font-black group-hover:text-gold transition-colors">{model.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{model.desc}</p>
                    <div className="space-y-4 w-full">
                      {model.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-gold" />
                          <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">{f}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Business Inquiry Form */}
          <section className="py-32 px-6">
            <div className="container mx-auto max-w-3xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-4">START THE <span className="text-gold">CONVERSATION</span></h2>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Secure your business future with intelligent engineering</p>
              </div>
              
              <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -z-10 rounded-full" />
                
                <form className="space-y-8" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="6362d6ca-5e5d-451e-9279-3733d3170b02" />
                  <input type="hidden" name="subject" value="New Business Inquiry from Sachin Portfolio" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                      <input name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-4">Business Email</label>
                      <input name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-4">Company Name</label>
                    <input name="company" type="text" placeholder="Your Enterprise" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-4">Strategic Interest</label>
                    <select name="interest" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white/60 appearance-none">
                      <option className="bg-dark">AI Automation & Agents</option>
                      <option className="bg-dark">Full Stack Scalable Product</option>
                      <option className="bg-dark">Strategic Technical Retainer</option>
                      <option className="bg-dark">Venture Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-4">Message</label>
                    <textarea name="message" rows={4} placeholder="Describe your vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-white resize-none" required></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-6 bg-gold text-dark font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-4"
                  >
                    SEND STRATEGIC INQUIRY
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-auto py-12 border-t border-white/5 text-center">
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/20">
              © 2026 Sachin Business Division. Reserved Excellence.
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessPage;
