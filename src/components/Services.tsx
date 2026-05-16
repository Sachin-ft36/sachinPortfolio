import { motion } from 'framer-motion';
import { Code, Bot, Palette, Rocket, Zap, Smartphone } from 'lucide-react';

const services = [
  {
    title: "Full Stack Development",
    description: "Architecting high-performance web systems with modern frameworks and robust backends.",
    icon: <Code className="w-8 h-8" />,
    color: "gold",
    features: ["React / Next.js", "Scalable Node.js", "Cloud Architecture"]
  },
  {
    title: "AI Automation",
    description: "Revolutionizing workflows with intelligent agents and automated decision-making systems.",
    icon: <Bot className="w-8 h-8" />,
    color: "electric",
    features: ["Custom AI Agents", "Workflow Sync", "Data Intelligence"]
  },
  {
    title: "UI/UX Visionary",
    description: "Designing cinematic, high-end interfaces that prioritize emotion and user engagement.",
    icon: <Palette className="w-8 h-8" />,
    color: "gold",
    features: ["Luxury Aesthetics", "Interactive Motion", "User Psychology"]
  },
  {
    title: "SaaS Architecture",
    description: "Building production-ready software platforms with multi-tenancy and global scaling.",
    icon: <Rocket className="w-8 h-8" />,
    color: "electric",
    features: ["Subscription Systems", "Multi-tenant DB", "API First Design"]
  },
  {
    title: "Agentic AI Systems",
    description: "Deploying autonomous entities capable of complex reasoning and independent execution.",
    icon: <Zap className="w-8 h-8" />,
    color: "gold",
    features: ["LLM Orchestration", "Task Autonomy", "RAG Systems"]
  },
  {
    title: "Mobile Experiences",
    description: "Crafting flawless mobile applications that feel native and perform at lightspeed.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "electric",
    features: ["Progressive Web Apps", "Responsive Design", "Touch Optimization"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Premium <span className="text-white/40">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-premium h-full flex flex-col items-start gap-6 group relative overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition-all duration-700 opacity-20 group-hover:opacity-40 ${service.color === 'gold' ? 'bg-gold' : 'bg-electric'}`} />
              
              <div className="relative z-10 w-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 mb-8 ${service.color === 'gold' ? 'bg-gold/10 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:bg-gold group-hover:text-dark group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]' : 'bg-electric/10 text-electric shadow-[0_0_20px_rgba(0,183,255,0.1)] group-hover:bg-electric group-hover:text-white group-hover:shadow-[0_0_30px_rgba(0,183,255,0.4)]'}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight mb-4 transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                
                <p className="text-white/40 font-light leading-relaxed mb-8 text-sm group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1 h-1 rounded-full ${service.color === 'gold' ? 'bg-gold' : 'bg-electric'}`} />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 group-hover:text-white/60 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between w-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    Get Started
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:text-dark">
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
