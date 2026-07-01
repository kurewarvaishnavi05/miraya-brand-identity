"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Gem, Globe2 } from 'lucide-react';

const features = [
  {
    title: 'Finest Fabrics',
    description: 'Thoughtfully sourced from heritage weavers, ensuring true comfort and enduring quality in every thread.',
    icon: Sparkles,
  },
  {
    title: 'Authentic Craftsmanship',
    description: 'Meticulously handcrafted by artisans who pour generations of skill and dedication into every piece.',
    icon: Scissors,
  },
  {
    title: 'Timeless Design',
    description: 'A refined blend of cultural heritage and contemporary grace, made to be cherished for years to come.',
    icon: Gem,
  },
  {
    title: 'Global Delivery',
    description: 'Bringing the authentic Miraya experience directly to you, celebrating your elegance anywhere in the world.',
    icon: Globe2,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-miraya-black text-miraya-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full border border-miraya-gold blur-3xl" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full border border-miraya-gold blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif mb-4"
          >
            Why Choose Miraya
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-miraya-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                className="flex flex-col items-center text-center p-6 border border-miraya-white/10 rounded-xl hover:border-miraya-gold/50 transition-colors duration-500 bg-miraya-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-full bg-miraya-burgundy/20 flex items-center justify-center mb-6 text-miraya-gold">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-4 text-miraya-gold">{feature.title}</h3>
                <p className="text-miraya-white/70 font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
