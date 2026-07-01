"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Mic, Image as ImageIcon, UploadCloud } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setIsListening(false);
    }
  }, [isOpen]);

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate AI voice processing
    setTimeout(() => {
      setIsListening(false);
      setQuery("Bridal Lehenga in Red");
    }, 3000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate image search trigger
    alert("AI Image Search triggered with uploaded image!");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-miraya-white/95 dark:bg-miraya-black/95 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex justify-end p-6 md:p-8">
            <button 
              onClick={onClose}
              className="text-miraya-black dark:text-miraya-white hover:text-miraya-gold transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center pt-10 px-4 max-w-4xl mx-auto w-full">
            <h2 className="text-3xl md:text-5xl font-serif text-miraya-black dark:text-miraya-white mb-10 text-center">
              What are you looking for?
            </h2>

            {/* AI Text Search Bar */}
            <div className="relative w-full mb-12">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search collections, colors..."
                className="w-full bg-transparent border-b-2 border-miraya-black/20 dark:border-miraya-white/20 text-2xl md:text-3xl font-light text-miraya-black dark:text-miraya-white placeholder-miraya-black/40 dark:placeholder-miraya-white/40 pb-4 pr-16 focus:outline-none focus:border-miraya-gold transition-colors"
              />
              <div className="absolute right-0 bottom-4 flex gap-4">
                <button 
                  onClick={handleVoiceSearch}
                  className={`transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-miraya-black dark:text-miraya-white hover:text-miraya-gold'}`}
                >
                  <Mic size={28} strokeWidth={1.5} />
                </button>
                <button className="text-miraya-black dark:text-miraya-white hover:text-miraya-gold transition-colors">
                  <Search size={28} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Image Search Dropzone */}
            <div className="w-full">
              <p className="text-center text-sm uppercase tracking-widest text-miraya-black/60 dark:text-miraya-white/60 mb-4">Or Search by Outfit</p>
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                  isDragging 
                    ? 'border-miraya-gold bg-miraya-gold/10' 
                    : 'border-miraya-black/20 dark:border-miraya-white/20 hover:border-miraya-gold hover:bg-miraya-black/5 dark:hover:bg-miraya-white/5'
                }`}
              >
                <UploadCloud size={40} className="text-miraya-black/40 dark:text-miraya-white/40 mb-4" />
                <p className="text-miraya-black dark:text-miraya-white font-medium">Drag & Drop an image here</p>
                <p className="text-miraya-black/60 dark:text-miraya-white/60 text-sm mt-2">or click to browse</p>
              </div>
            </div>

            {/* Trending Searches */}
            <div className="mt-16 w-full text-center">
              <p className="text-sm uppercase tracking-widest text-miraya-black/60 dark:text-miraya-white/60 mb-6">Trending Now</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Bridal Lehengas', 'Silk Sarees', 'Cocktail Gowns', 'Velvet Anarkalis'].map(term => (
                  <button 
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-6 py-2 rounded-full border border-miraya-black/10 dark:border-miraya-white/10 hover:border-miraya-gold text-miraya-black dark:text-miraya-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
