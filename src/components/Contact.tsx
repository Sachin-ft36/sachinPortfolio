import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'SaaS Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "b0d8b827-1134-47aa-82e6-b3aa2b1ae008",
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
          subject: `New Portfolio Inquiry from ${formData.name}`,
          from_name: "Sachin Portfolio"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          project: 'SaaS Development',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: <GithubIcon size={24} />, href: "https://github.com/Sachin-ft36" },
    { icon: <LinkedinIcon size={24} />, href: "https://www.linkedin.com/in/sachin-developer16559" },
    { icon: <TwitterIcon size={24} />, href: "#" },
    { icon: <Mail size={24} />, href: "mailto:singh.sachin16559@gmail.com" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-6">Connect</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
              Let's Create <br />
              <span className="text-white/40">Something Iconic.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md font-light">
              I'm always open to discussing high-impact projects, AI integrations, or creative collaborations.
            </p>

            <div className="space-y-10 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-500">
                  <Mail className="text-white/60 group-hover:text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-medium">singh.sachin16559@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-electric/30 group-hover:bg-electric/10 transition-all duration-500">
                  <Phone className="text-white/60 group-hover:text-electric" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xl font-medium">+91 78050 72925</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/5 hover:border-gold/50 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-10 md:p-16"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-all text-white placeholder:text-white/10"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-all text-white placeholder:text-white/10"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Project Type</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-all text-white appearance-none"
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                >
                  <option className="bg-charcoal">SaaS Development</option>
                  <option className="bg-charcoal">AI Integration</option>
                  <option className="bg-charcoal">Web Application</option>
                  <option className="bg-charcoal">UI/UX Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold/50 transition-all text-white placeholder:text-white/10 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full btn-premium flex items-center justify-center gap-3 text-lg py-5 group transition-all ${
                  status === 'success' ? 'bg-green-500/20 border-green-500/50 text-green-400' : 
                  status === 'error' ? 'bg-red-500/20 border-red-500/50 text-red-400' : 'btn-gold'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Sent Successfully!'}
                {status === 'error' && 'Failed to Send. Try Again.'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
