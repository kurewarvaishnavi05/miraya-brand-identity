"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const instagramPosts = [
  '/categories/saree-v4.png',
  '/categories/anarkali-v4.png',
  '/categories/sharara-v4.png',
  '/categories/kurti-v4.png',
  '/categories/salwar-v4.png',
  '/categories/gown-v4.png',
  '/categories/coord-v3.png',
];

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-miraya-white">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-12 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif text-miraya-black mb-4 flex items-center justify-center gap-3"
          >
            <Camera size={32} className="text-miraya-gold" /> @miraya.by.garima
          </motion.h2>
          <p className="text-miraya-black/60">Follow our luxury journey on Instagram</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden bg-miraya-black/5"
            >
              {/* Using colored placeholder for now, replace with next/image in production */}
              <div className="absolute inset-0 bg-miraya-black/10 transition-transform duration-700 group-hover:scale-110" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-miraya-black/0 group-hover:bg-miraya-black/40 transition-colors duration-300 flex items-center justify-center">
                <Camera size={32} className="text-miraya-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
