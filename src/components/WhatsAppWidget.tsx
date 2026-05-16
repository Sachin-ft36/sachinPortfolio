import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppWidget = () => {
  const phoneNumber = "917805072925";
  const message = "Hello Sachin, I visited your portfolio and I'm interested in collaborating on a project. Let's connect!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-14 h-14 bg-black/40 backdrop-blur-xl border border-gold/40 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.15)] group"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-charcoal border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl">
        Let's Chat
        <div className="absolute top-1/2 left-full -translate-y-1/2 border-8 border-transparent border-l-charcoal" />
      </div>

      {/* Modern WhatsApp Icon in Gold */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="26" 
        height="26" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-gold"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" />
        <path d="M8 13h6" />
      </svg>

      {/* Gold Pulse Animation Layer */}
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-10 -z-10" />
    </motion.a>
  );
};

export default WhatsAppWidget;
