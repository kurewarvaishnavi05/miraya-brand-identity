"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';

const products = [
  { id: '1', name: 'Midnight Velvet Lehenga', price: 145000, originalPrice: 160000, discount: 10, image: '/categories/lehenga-v4.png' },
  { id: '2', name: 'Ivory Silk Organza Saree', price: 85000, image: '/categories/saree-v4.png' },
  { id: '3', name: 'Ruby Embroidered Anarkali', price: 120000, image: '/categories/anarkali-v4.png' },
  { id: '4', name: 'Emerald Banarasi Suit', price: 65000, image: '/categories/salwar-v4.png' },
];

const BestSeller = () => {
  return (
    <section className="py-24 bg-miraya-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-miraya-black mb-4"
          >
            Best Sellers
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

export default BestSeller;
