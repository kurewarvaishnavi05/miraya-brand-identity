"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Box, ZoomIn, Move3d } from 'lucide-react';
import ARViewerModal from './ARViewerModal';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAROpen, setIsAROpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
      {/* AR Modal */}
      <ARViewerModal 
        isOpen={isAROpen} 
        onClose={() => setIsAROpen(false)} 
        productImage={images[0]} 
      />

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 overflow-x-auto snap-x snap-mandatory md:overflow-y-auto scrollbar-hide py-2 md:py-0 w-full md:w-24 flex-shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative snap-center aspect-[3/4] w-20 md:w-full flex-shrink-0 overflow-hidden border transition-all duration-300 ${
              currentIndex === idx ? 'border-miraya-gold shadow-md' : 'border-miraya-black/10 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="absolute inset-0 bg-miraya-black/5" />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-miraya-black/30">
              Img {idx + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[3/4] md:aspect-auto md:h-[80vh] overflow-hidden bg-miraya-black/5 border border-miraya-black/5 group cursor-zoom-in">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            onClick={() => setIsZoomed(true)}
          >
            <div className="w-full h-full flex flex-col items-center justify-center text-miraya-black/20 group-hover:scale-105 transition-transform duration-700">
              <span className="text-xl font-serif">Product Image {currentIndex + 1}</span>
              <span className="text-sm mt-2 font-sans tracking-widest">(Click to Zoom)</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Actions overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="w-10 h-10 rounded-full bg-miraya-white text-miraya-black shadow-lg flex items-center justify-center hover:text-miraya-gold transition-colors"
            onClick={() => setIsAROpen(true)}
            title="View in AR"
          >
            <Box size={18} />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-miraya-white text-miraya-black shadow-lg flex items-center justify-center hover:text-miraya-gold transition-colors"
            title="360° View"
          >
            <Move3d size={18} />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-miraya-white text-miraya-black shadow-lg flex items-center justify-center hover:text-miraya-gold transition-colors"
            onClick={() => setIsZoomed(true)}
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </button>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-miraya-white flex items-center justify-center cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto flex items-center justify-center p-8">
               {/* Extremely large placeholder image */}
               <div className="w-full h-full bg-miraya-black/5 border border-miraya-black/10 flex items-center justify-center text-miraya-black/30 shadow-2xl">
                 <span className="text-3xl font-serif">HD Zoomed Image {activeIndex + 1}</span>
               </div>
               
               <button 
                 className="absolute top-8 right-8 text-miraya-black uppercase tracking-widest text-sm font-medium hover:text-miraya-gold"
                 onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
               >
                 Close [X]
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;
