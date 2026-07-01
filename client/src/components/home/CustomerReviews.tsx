"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    review: 'The craftsmanship on my bridal lehenga was absolutely breathtaking. Every detail was perfect. Miraya made me feel like royalty on my special day.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ananya Desai',
    location: 'New York, USA',
    review: 'I ordered a silk saree for a reception. The delivery was prompt, and the quality of the fabric exceeded my expectations. True luxury.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sneha Patel',
    location: 'London, UK',
    review: 'Elegant, modern, and deeply rooted in tradition. The fit was flawless. I have never received so many compliments.',
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-24 relative bg-miraya-white/90 overflow-hidden">
      {/* Abstract Background for Glassmorphism to pop */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/hero-banner-v2.png')] bg-cover bg-center bg-fixed blur-md" />
      <div className="absolute inset-0 bg-miraya-burgundy/5 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-miraya-black mb-4"
          >
            A Word from Our Brides
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-miraya-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Glassmorphism Card */}
              <div className="bg-miraya-white/60 backdrop-blur-xl border border-miraya-white/80 p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                <div className="flex gap-1 text-miraya-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-miraya-black/80 font-serif italic text-lg leading-relaxed mb-8">
                  "{review.review}"
                </p>
                <div>
                  <h4 className="font-semibold text-miraya-black uppercase tracking-widest text-sm">{review.name}</h4>
                  <span className="text-miraya-black/50 text-xs">{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
