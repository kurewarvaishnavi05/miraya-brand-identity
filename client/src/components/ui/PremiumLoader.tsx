"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const PremiumLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence for cinematic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-miraya-black text-miraya-white"
        >
          {/* Logo pulsing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <Image 
              src="/logo.png" 
              alt="MIRAYA" 
              width={180} 
              height={80} 
              className="object-contain" 
              priority
            />
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-[1px] bg-miraya-white/20 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-1/2 bg-miraya-gold"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 font-serif text-miraya-gold tracking-widest text-sm uppercase"
          >
            Curating Elegance
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumLoader;
