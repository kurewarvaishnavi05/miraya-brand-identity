"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-24 h-24 bg-miraya-white rounded-full flex items-center justify-center border border-miraya-black/10 shadow-sm mb-6 text-miraya-black/20"
      >
        <ShoppingBag size={40} />
      </motion.div>
      
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-serif text-3xl md:text-4xl text-miraya-black mb-4"
      >
        Your cart is empty
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-miraya-black/60 max-w-md mx-auto mb-10 font-light leading-relaxed"
      >
        Looks like you haven't added any luxury pieces to your cart yet. Discover our exclusive handcrafted collections to begin.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link 
          href="/shop"
          className="inline-block px-10 py-4 bg-miraya-black text-miraya-white uppercase tracking-widest text-sm font-medium hover:bg-miraya-burgundy transition-colors duration-300 shadow-md"
        >
          Explore Collections
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
