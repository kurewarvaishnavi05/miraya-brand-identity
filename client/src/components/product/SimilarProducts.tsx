"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';

const products = [
  { id: 'sim-1', name: 'Emerald Velvet Lehenga', price: 135000, image: '/categories/lehenga-v4.png' },
  { id: 'sim-2', name: 'Ruby Silk Organza Saree', price: 95000, image: '/categories/saree-v4.png' },
  { id: 'sim-3', name: 'Sapphire Embroidered Anarkali', price: 110000, image: '/categories/anarkali-v4.png' },
  { id: 'sim-4', name: 'Golden Banarasi Suit', price: 75000, image: '/categories/salwar-v4.png' },
];

const SimilarProducts = () => {
  return (
    <section className="py-24 bg-miraya-white/50 border-t border-miraya-black/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-miraya-black mb-4"
          >
            You May Also Like
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-miraya-gold"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
