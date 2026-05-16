import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "TailwindCSS", level: 95 },
      { name: "Framer Motion", level: 90 },
      { name: "GSAP", level: 85 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 75 },
      { name: "GraphQL", level: 80 }
    ]
  },
  {
    name: "AI & Automation",
    skills: [
      { name: "OpenAI APIs", level: 95 },
      { name: "AI Agents", level: 92 },
      { name: "LangChain", level: 88 },
      { name: "Vector DBs", level: 85 },
      { name: "Automation", level: 90 },
      { name: "LLM Fine-tuning", level: 82 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            Technical Arsenal
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Mastering the <span className="text-white/40">Modern Stack</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium group"
            >
              <h3 className="text-2xl font-bold mb-10 text-white/80 group-hover:text-gold transition-colors">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-white/70 uppercase tracking-widest">{skill.name}</span>
                      <span className="text-xs font-black text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Marquee */}
        <div className="mt-32 relative overflow-hidden h-24 flex items-center bg-white/[0.02] border-y border-white/[0.05]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap px-10"
          >
            {[...Array(10)].map((_, i) => (
              <span key={`marquee-${i}`} className="text-4xl font-extrabold text-white/5 tracking-[0.5em] uppercase">
                Premium Code • Intelligent Design • Scalable Systems • 
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
