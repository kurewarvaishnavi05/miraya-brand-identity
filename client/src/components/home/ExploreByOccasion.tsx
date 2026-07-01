"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const occasions = [
  { name: 'Wedding', image: '/occasions/wedding.jpg', link: '/shop?occasion=wedding' },
  { name: 'Engagement', image: '/occasions/engagement.jpg', link: '/shop?occasion=engagement' },
  { name: 'Reception', image: '/occasions/reception.jpg', link: '/shop?occasion=reception' },
  { name: 'Mehendi', image: '/occasions/mehendi.jpg', link: '/shop?occasion=mehendi' },
  { name: 'Sangeet', image: '/occasions/sangeet.jpg', link: '/shop?occasion=sangeet' },
  { name: 'Festival', image: '/occasions/festival.jpg', link: '/shop?occasion=festival' },
  { name: 'Eid', image: '/occasions/eid.jpg', link: '/shop?occasion=eid' },
  { name: 'Cocktail Party', image: '/occasions/cocktail.jpg', link: '/shop?occasion=cocktail-party' },
  { name: 'Office Wear', image: '/occasions/office.jpg', link: '/shop?occasion=office-wear' },
  { name: 'Daily Wear', image: '/occasions/daily.jpg', link: '/shop?occasion=daily-wear' },
  { name: 'Casual Wear', image: '/occasions/casual.jpg', link: '/shop?occasion=casual-wear' },
  { name: 'Travel', image: '/occasions/travel.jpg', link: '/shop?occasion=travel' },
];

const ExploreByOccasion = () => {
  return (
    <section className="py-24 bg-miraya-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-miraya-black mb-4"
          >
            Explore by Occasion
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-miraya-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link href={occasion.link} className="group relative block aspect-[4/5] overflow-hidden rounded-xl shadow-md">
                <div className="absolute inset-0 bg-miraya-black/10 group-hover:bg-miraya-black/40 transition-colors duration-500 z-10" />
                
                {/* Image Placeholder Background */}
                <div className="absolute inset-0 bg-miraya-black/5" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 z-20">
                  <h3 className="font-serif text-miraya-white text-xl md:text-2xl mb-2 drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {occasion.name}
                  </h3>
                  <span className="text-miraya-gold text-sm uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Shop Now
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByOccasion;
