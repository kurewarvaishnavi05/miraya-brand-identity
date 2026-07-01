"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Mock API Call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-miraya-burgundy text-miraya-white py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
             backgroundSize: '32px 32px' 
           }} 
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl mb-4"
        >
          Join the MIRAYA Insider
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-miraya-white/80 font-light max-w-2xl mx-auto mb-10 text-lg"
        >
          Subscribe to receive exclusive access to our newest collections, private sales, and fashion insights directly to your inbox.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto relative"
        >
          {status === 'success' ? (
            <div className="bg-miraya-gold/20 border border-miraya-gold text-miraya-white p-4 rounded-sm">
              Thank you for subscribing! Welcome to the family.
            </div>
          ) : (
            <div className="flex bg-white/10 p-1 border border-white/20 backdrop-blur-sm focus-within:border-miraya-gold transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none text-white placeholder:text-white/50 px-4 py-3 focus:outline-none focus:ring-0"
                required
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-miraya-gold text-miraya-black px-6 font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center min-w-[120px]"
              >
                {status === 'loading' ? 'Sending...' : (
                  <span className="flex items-center gap-2">Subscribe <Send size={16} /></span>
                )}
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
