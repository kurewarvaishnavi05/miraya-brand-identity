"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Lehenga', image: '/categories/lehenga-v4.png' },
  { name: 'Saree', image: '/categories/saree-v4.png' },
  { name: 'Kurti', image: '/categories/kurti-v4.png' },
  { name: 'Anarkali Suit', image: '/categories/anarkali-v4.png' },
  { name: 'Sharara Suit', image: '/categories/sharara-v4.png' },
  { name: 'Salwar Suit', image: '/categories/salwar-v4.png' },
  { name: 'Indo-Western Gown', image: '/categories/gown-v4.png' },
  { name: 'Co-ord Set', image: '/categories/coord-v3.png' }, // Quota limit reached, keeping v3
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-miraya-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-miraya-black mb-4"
          >
            Featured Collections
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-miraya-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} className="group block relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm gradient-border hover:shadow-luxury transition-shadow duration-500">
                <div className="absolute inset-0 bg-miraya-burgundy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                <Image 
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                
                <div className="absolute inset-0 flex items-end justify-center p-6 z-20">
                  <div className="bg-miraya-white/90 backdrop-blur-sm px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full text-center">
                    <h3 className="font-serif text-miraya-black text-lg md:text-xl">{category.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
