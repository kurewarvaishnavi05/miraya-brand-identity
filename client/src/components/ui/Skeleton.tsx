"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.div 
        className="w-full aspect-[3/4] bg-miraya-black/5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex flex-col items-center gap-2">
        <motion.div 
          className="w-3/4 h-5 bg-miraya-black/5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div 
          className="w-1/4 h-4 bg-miraya-black/5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div 
        className="w-48 h-48 rounded-full bg-miraya-black/5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="w-32 h-5 bg-miraya-black/5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
};
