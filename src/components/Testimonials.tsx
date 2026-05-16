import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    text: "Sachin is a rare talent who understands both the deep technical nuances of AI and the elegance of high-end design. He delivered beyond our expectations.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Elena Vance",
    role: "Founder, Zenith SaaS",
    text: "The portfolio Sachin built for us wasn't just a website; it was a cinematic experience. His attention to detail in animations is world-class.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marcus Thorne",
    role: "CTO, AI Nexus",
    text: "Implementing agentic workflows with Sachin was seamless. He possesses a deep understanding of LLMs and system architecture.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Sofia Chen",
    role: "Design Lead, Studio Luxe",
    text: "Collaborating with Sachin was a dream. He translates complex design visions into pixel-perfect, high-performance reality.",
    avatar: "https://i.pravatar.cc/150?u=sofia"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            Client Voices
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Trusted by <span className="text-white/40">Industry Leaders</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* First Row Marquee */}
          <motion.div 
            drag="x"
            dragConstraints={{ left: -1000, right: 1000 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 mb-8 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass-panel p-10 rounded-[2.5rem] min-w-[300px] md:min-w-[400px] flex flex-col gap-8 group hover:border-gold/30 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-gold transition-colors">{t.name}</h4>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
                <p className="text-lg text-white/60 font-light leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
