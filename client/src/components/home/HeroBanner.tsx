"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-miraya-black">
      {/* Background Image Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/hero-banner.png"
          alt="Luxury Fashion Model showcasing Miraya Collection"
          fill
          className="object-cover object-top opacity-60"
          priority
          fetchPriority="high"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-miraya-black via-transparent to-miraya-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl text-miraya-white font-serif mb-6 leading-tight"
        >
          Discover True <br />
          <span className="text-miraya-gold italic font-light">Elegance</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-miraya-white/80 font-light mb-10 max-w-2xl"
        >
          Discover handcrafted fashion that honors true craftsmanship and timeless beauty, designed to celebrate the elegance within you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link 
            href="/shop" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest text-miraya-white bg-miraya-burgundy hover:bg-miraya-gold transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10 font-medium">Explore Collection</span>
            <div className="absolute inset-0 h-full w-0 bg-miraya-gold transition-all duration-500 ease-out group-hover:w-full z-0" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-miraya-white/60 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-miraya-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-miraya-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
