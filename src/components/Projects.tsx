import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
  </svg>
);
import projectAi from '../assets/project-ai.png';
import projectSaas from '../assets/project-saas.png';

const projects = [
  {
    id: 1,
    title: "Hotel Vishnu Empire",
    category: "Hospitality Platform",
    description: "A premium hotel management and booking platform designed for a luxury hospitality experience.",
    image: "/thumbnail/1desktop.png",
    tags: ["React", "TailwindCSS", "Node.js", "Vercel"],
    link: "https://hotel-vishnu-empire.vercel.app/",
    github: "#"
  },
  {
    id: 2,
    title: "Golden Memory Studio",
    category: "Photography Portfolio",
    description: "A cinematic photography and studio portfolio website with high-end animations.",
    image: "/thumbnail/2desktop.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "GSAP"],
    link: "https://golden-memory-studio-8emi.vercel.app/",
    github: "https://github.com/Sachin-ft36/golden_memory_studio"
  },
  {
    id: 3,
    title: "Amulya Computers",
    category: "E-commerce & Tech",
    description: "A specialized computer sales and tech service platform for a local hardware enterprise.",
    image: "/thumbnail/3desktop.png",
    tags: ["React", "Firebase", "TailwindCSS", "Node.js"],
    link: "https://amulya-computers.vercel.app/",
    github: "https://github.com/Sachin-ft36/amulya_computers"
  },
  {
    id: 4,
    title: "Anti-Resume",
    category: "Personal Branding",
    description: "A modern, bold, and interactive portfolio experience that breaks traditional resume standards.",
    image: "/thumbnail/4desktop.png",
    tags: ["Vite", "React", "TailwindCSS", "Vercel"],
    link: "https://anti-resume.vercel.app/",
    github: "#"
  },
  {
    id: 5,
    title: "Bean & Bite",
    category: "Restaurant & Cafe",
    description: "A cozy and elegant landing page for a modern coffee shop and gourmet eatery.",
    image: "/thumbnail/5desktop.png",
    tags: ["HTML", "CSS", "JS", "Netlify"],
    link: "https://bean-and-bite.netlify.app/",
    github: "#"
  },
  {
    id: 6,
    title: "8343 Experimental",
    category: "Web Application",
    description: "An experimental high-performance web project focusing on clean code and rapid deployment.",
    image: "/thumbnail/6desktop.png",
    tags: ["React", "Vite", "TailwindCSS", "Vercel"],
    link: "https://8343-project1.vercel.app/",
    github: "#"
  },
  {
    id: 7,
    title: "Reebok Clone",
    category: "E-commerce UI",
    description: "A high-fidelity landing page clone of the Reebok official store, focusing on pixel-perfect UI.",
    image: "/thumbnail/7desktop.png",
    tags: ["React", "CSS Grid", "Netlify"],
    link: "https://reebokclones.netlify.app/",
    github: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-charcoal/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Cinematic <span className="text-white/40">Creations</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 rounded-full border border-white/10 hover:border-gold/50 transition-all text-sm font-medium">
              View All Archive
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/10 mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-all duration-500"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-dark/60 backdrop-blur-sm">
                   <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-6 py-3 bg-gold text-dark font-bold rounded-full text-sm uppercase tracking-widest">View Case Study</span>
                   </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-gold transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/5 text-white/50">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5">
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.link} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-2xl" onClick={() => setSelectedProject(null)}></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-charcoal rounded-[3rem] border border-white/10 overflow-hidden overflow-y-auto"
            >
              <button 
                className="absolute top-8 right-8 z-10 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all"
                onClick={() => setSelectedProject(null)}
              >
                <X />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-transparent to-transparent"></div>
                </div>
                <div className="p-12 lg:p-20">
                  <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{selectedProject.category}</span>
                  <h2 className="text-5xl font-bold mb-8">{selectedProject.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
                    {selectedProject.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-12 mb-12">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Role</h4>
                      <p className="text-white/80">Lead Architect & Developer</p>
                    </div>
                  </div>

                  <div className="flex gap-6 pt-12 border-t border-white/5">
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-premium btn-gold flex items-center justify-center"
                    >
                      Live Preview
                    </a>
                    {selectedProject.github !== "#" && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-premium btn-outline flex items-center gap-2 justify-center"
                      >
                        <GithubIcon size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
