"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import Link from 'next/link';

const products = [
  { id: '5', name: 'Gold Tissue Saree', price: 95000, isNew: true, image: '/categories/saree-v4.png' },
  { id: '6', name: 'Champagne Sharara Set', price: 110000, isNew: true, image: '/categories/sharara-v4.png' },
  { id: '7', name: 'Crimson Georgette Kurti', price: 45000, isNew: true, image: '/categories/kurti-v4.png' },
  { id: '8', name: 'Sapphire Fusion Gown', price: 175000, isNew: true, image: '/categories/gown-v4.png' },
];

const NewArrivals = () => {
  return (
    <section className="py-24 bg-miraya-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-miraya-black/10 pb-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif text-miraya-black mb-4"
            >
              New Arrivals
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-miraya-gold"
            />
          </div>
          <Link href="/shop/new" className="text-miraya-black hover:text-miraya-gold uppercase tracking-widest text-sm font-medium mt-4 md:mt-0 transition-colors">
            View All
          </Link>
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

export default NewArrivals;
