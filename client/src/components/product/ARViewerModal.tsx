"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, RefreshCw } from 'lucide-react';
import Image from 'next/image';

interface ARViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  productImage: string;
}

const ARViewerModal: React.FC<ARViewerModalProps> = ({ isOpen, onClose, productImage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Simulate AR camera initialization
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-miraya-black/90 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-lg h-[80vh] bg-miraya-black border border-miraya-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-miraya-black/80 to-transparent">
              <h3 className="text-miraya-white font-serif tracking-widest text-sm uppercase">Try in AR</h3>
              <button onClick={onClose} className="text-miraya-white hover:text-miraya-gold transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content area simulating camera */}
            <div className="relative flex-grow flex items-center justify-center bg-zinc-900">
              {loading ? (
                <div className="flex flex-col items-center justify-center text-miraya-white">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  >
                    <RefreshCw size={40} className="text-miraya-gold mb-4" />
                  </motion.div>
                  <p className="font-sans text-sm tracking-widest uppercase">Initializing Camera...</p>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  {/* Simulated camera feed background (noise/blur placeholder) */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                  
                  {/* AR Guide */}
                  <div className="absolute inset-0 flex items-center justify-center border-[1px] border-dashed border-miraya-gold/30 m-8 rounded-lg pointer-events-none">
                    <p className="absolute top-4 text-miraya-white/50 text-xs uppercase tracking-widest">Point at flat surface or mirror</p>
                  </div>

                  {/* The Product overlaying */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                     <div className="relative w-[70%] h-[70%]">
                        <Image src={productImage} alt="AR Overlay" fill className="object-contain drop-shadow-2xl opacity-90 mix-blend-screen" />
                     </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-center z-20 bg-gradient-to-t from-miraya-black/80 to-transparent">
               {!loading && (
                 <button className="w-16 h-16 rounded-full border-4 border-miraya-white flex items-center justify-center hover:bg-miraya-white/20 transition-colors">
                    <div className="w-12 h-12 bg-miraya-white rounded-full flex items-center justify-center text-miraya-black">
                       <Camera size={24} />
                    </div>
                 </button>
               )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ARViewerModal;
