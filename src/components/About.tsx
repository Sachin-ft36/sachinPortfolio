import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-electric/20 opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Experience Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass-panel p-10 rounded-[3rem] text-center"
            >
              <h3 className="text-5xl font-bold text-gold mb-1">3+</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Years of Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-6">The Journey</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
              Driven by <span className="text-white/40">Innovation</span> & Creative Excellence
            </h2>
            
            <div className="space-y-8 text-white/60 font-light text-lg leading-relaxed">
              <p>
                My name is Sachin Pratap Singh, a Full Stack Developer and Agentic AI Engineer with a passion for creating high-end digital experiences that merge cutting-edge technology with premium design.
              </p>
              <p>
                Over the past 3 years, I've collaborated with startups and elite studios to build intelligent systems, autonomous AI agents, and luxury web applications. My mindset is centered on the intersection of creativity and automation.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-10">
                <div>
                  <h4 className="text-white font-bold mb-2">Philosophy</h4>
                  <p className="text-sm">Minimalism in design, complexity in logic.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Mission</h4>
                  <p className="text-sm">Bridging the gap between human intent and AI execution.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
