import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl font-black tracking-tighter mb-4"
        >
          SACHIN<span className="text-gold">.</span>
        </motion.div>
        
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 flex justify-between items-center w-full">
          <span className="text-[10px] uppercase tracking-widest text-white/40">Loading Excellence</span>
          <span className="text-[10px] font-bold text-gold">{progress}%</span>
        </div>
      </div>
      
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 text-[10px] uppercase tracking-[0.5em] text-white/20"
      >
        Agentic AI Engineer • Full Stack Developer
      </motion.div>
    </motion.div>
  );
};

export default Loader;
