import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2024 - Present",
    company: "Freelance & Independent Projects",
    role: "Full Stack & Agentic AI Engineer",
    description: "Developing custom AI-driven applications, luxury portfolios, and high-performance web systems for diverse clients globally."
  },
  {
    year: "2023 - 2024",
    company: "Self-Initiated Research",
    role: "AI Developer & Open Source Contributor",
    description: "Deep-dived into LLM architectures, autonomous agents, and modern frontend frameworks to build a solid foundation in cinematic web engineering."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            My Timeline
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Professional <span className="text-white/40">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/50 to-transparent transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2 z-10 border-4 border-dark hidden md:block">
                  <div className="absolute inset-0 bg-gold animate-ping rounded-full opacity-40"></div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                   <span className="text-gold font-bold text-lg mb-2 block">{exp.year}</span>
                   <h3 className="text-3xl font-bold mb-1">{exp.role}</h3>
                   <p className="text-white/60 font-medium mb-6">{exp.company}</p>
                </div>
                
                <div className={`w-full md:w-1/2`}>
                   <div className="card-premium text-left">
                      <p className="text-white/40 leading-relaxed font-light">
                        {exp.description}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
