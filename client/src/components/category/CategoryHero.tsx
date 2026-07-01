"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CategoryHeroProps {
  title: string;
  description: string;
  image: string;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title, description, image }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden bg-miraya-black">
      {/* Background Image with Parallax Effect (simulated with Framer Motion) */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-miraya-black/80 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif text-miraya-white mb-6 capitalize tracking-wide drop-shadow-lg"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-miraya-white/80 font-sans text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
        >
          {description}
        </motion.p>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="h-1 bg-miraya-gold mx-auto mt-8"
        />
      </div>
    </div>
  );
};

export default CategoryHero;
