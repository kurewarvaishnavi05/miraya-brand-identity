"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const tabs = [
  {
    id: 'details',
    title: 'Product Details',
    content: (
      <div className="space-y-4 text-miraya-black/80 font-light text-sm leading-relaxed">
        <p>This exquisite Midnight Velvet Bridal Lehenga is a masterpiece of traditional craftsmanship. Featuring intricate zardosi and dabka embroidery, it is designed to make a statement on your special day.</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Set includes: Lehenga skirt, Blouse, and matching Dupatta.</li>
          <li>Can-can attached underneath for maximum volume.</li>
          <li>Padded blouse with back hook closure and dori tassels.</li>
          <li>Dupatta features heavy embroidered borders and buttis all over.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'fabric',
    title: 'Fabric & Craftsmanship',
    content: (
      <div className="space-y-4 text-miraya-black/80 font-light text-sm leading-relaxed">
        <p>We source only the finest materials for our luxury garments. Every piece is handcrafted by skilled artisans in our atelier.</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <strong className="block font-medium text-miraya-black mb-1">Lehenga Fabric:</strong>
            Premium Silk Velvet
          </div>
          <div>
            <strong className="block font-medium text-miraya-black mb-1">Blouse Fabric:</strong>
            Premium Silk Velvet
          </div>
          <div>
            <strong className="block font-medium text-miraya-black mb-1">Dupatta Fabric:</strong>
            Soft Net / Organza
          </div>
          <div>
            <strong className="block font-medium text-miraya-black mb-1">Embroidery:</strong>
            Zardosi, Sequins, Cutdana
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'care',
    title: 'Care Instructions',
    content: (
      <div className="space-y-4 text-miraya-black/80 font-light text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li>Dry clean only. Do not wash or bleach.</li>
          <li>Store in the provided breathable garment bag.</li>
          <li>Keep away from direct sunlight and moisture to preserve the embroidery.</li>
          <li>Iron on low heat with a protective cloth over the embroidery.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: (
      <div className="space-y-4 text-miraya-black/80 font-light text-sm leading-relaxed">
        <p className="strong"><strong>Standard Shipping:</strong> Dispatched within 15-20 business days as each piece is made to order.</p>
        <p className="strong"><strong>Express Delivery:</strong> Available for select pin codes at an additional charge. Contact our stylist team.</p>
        <p className="strong"><strong>Returns:</strong> Since this is a custom-made luxury item, returns are only accepted in case of a manufacturing defect within 48 hours of delivery.</p>
      </div>
    ),
  },
  {
    id: 'reviews',
    title: 'Customer Reviews',
    content: (
      <div className="space-y-8">
        {/* Mock Review 1 */}
        <div className="border-b border-miraya-black/10 dark:border-miraya-white/10 pb-6">
          <div className="flex items-center gap-4 mb-3">
             <div className="w-10 h-10 rounded-full bg-miraya-black dark:bg-miraya-white flex items-center justify-center text-miraya-white dark:text-miraya-black font-serif text-lg">S</div>
             <div>
               <p className="font-medium text-miraya-black dark:text-miraya-white">Sneha Sharma</p>
               <div className="flex text-miraya-gold text-sm"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/></div>
             </div>
             <span className="ml-auto text-xs text-miraya-black/50 dark:text-miraya-white/50">Verified Buyer</span>
          </div>
          <p className="text-miraya-black/80 dark:text-miraya-white/80 font-light text-sm mb-4">Absolutely breathtaking. The velvet is so rich and the embroidery shines beautifully in the light. Wore it for my reception and felt like royalty.</p>
          <div className="flex gap-2">
            <div className="w-20 h-24 bg-miraya-black/10 dark:bg-miraya-white/10 rounded-md overflow-hidden relative">
               <img src="/categories/lehenga.png" alt="Customer Photo" className="object-cover w-full h-full opacity-80 mix-blend-multiply dark:mix-blend-screen" />
            </div>
            <div className="w-20 h-24 bg-miraya-black/10 dark:bg-miraya-white/10 rounded-md overflow-hidden relative">
               <img src="/hero-banner.png" alt="Customer Photo" className="object-cover w-full h-full opacity-80 mix-blend-multiply dark:mix-blend-screen" />
            </div>
          </div>
        </div>
        
        {/* Mock Review 2 */}
        <div className="pb-2">
          <div className="flex items-center gap-4 mb-3">
             <div className="w-10 h-10 rounded-full bg-miraya-burgundy flex items-center justify-center text-miraya-white font-serif text-lg">A</div>
             <div>
               <p className="font-medium text-miraya-black dark:text-miraya-white">Anjali Verma</p>
               <div className="flex text-miraya-gold text-sm"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star size={14}/></div>
             </div>
          </div>
          <p className="text-miraya-black/80 dark:text-miraya-white/80 font-light text-sm">The craftsmanship is beyond what I expected. The fit was perfect. Deducting one star only because delivery took a bit longer than estimated, but worth the wait.</p>
        </div>
      </div>
    ),
  }
];

const ProductTabs = () => {
  const [openTab, setOpenTab] = useState<string | null>('details');

  const toggleTab = (id: string) => {
    setOpenTab(openTab === id ? null : id);
  };

  return (
    <div className="border-t border-miraya-black/10 dark:border-miraya-white/10 mt-16 pt-8">
      {tabs.map((tab) => (
        <div key={tab.id} className="border-b border-miraya-black/10 dark:border-miraya-white/10 last:border-0">
          <button
            onClick={() => toggleTab(tab.id)}
            className="flex w-full items-center justify-between py-6 text-left group"
          >
            <span className={`font-serif text-xl transition-colors ${openTab === tab.id ? 'text-miraya-burgundy dark:text-miraya-gold' : 'text-miraya-black dark:text-miraya-white group-hover:text-miraya-gold dark:group-hover:text-miraya-gold'}`}>
              {tab.title}
            </span>
            <span className="text-miraya-black/50 dark:text-miraya-white/50 group-hover:text-miraya-gold transition-colors">
              {openTab === tab.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          
          <AnimatePresence>
            {openTab === tab.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-8 pr-4">
                  {tab.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProductTabs;
