"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin, Ruler } from 'lucide-react';

interface ProductInfoProps {
  id: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ id }) => {
  const [selectedColor, setSelectedColor] = useState('gold');
  const [selectedSize, setSelectedSize] = useState('m');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');

  const colors = [
    { value: 'gold', name: 'Champagne Gold', code: '#C6A46A' },
    { value: 'burgundy', name: 'Deep Burgundy', code: '#5E0A0B' },
    { value: 'ivory', name: 'Warm Ivory', code: '#F8F5F0' },
  ];

  const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

  return (
    <div className="flex flex-col h-full font-sans text-miraya-black">
      {/* Title & Reviews */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-serif mb-3 leading-tight">
          Midnight Velvet Bridal Lehenga
        </h1>
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center text-miraya-gold">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" opacity={0.5} />
          </div>
          <span className="text-miraya-black/60 hover:text-miraya-black cursor-pointer underline underline-offset-4 decoration-miraya-black/30">
            (42 Customer Reviews)
          </span>
        </div>
      </div>

      {/* Price Area */}
      <div className="mb-8 flex items-baseline gap-4">
        <span className="text-2xl font-serif">₹1,45,000</span>
        <span className="text-lg text-miraya-black/40 line-through">₹1,60,000</span>
        <span className="px-2 py-1 bg-miraya-burgundy text-miraya-white text-xs font-medium uppercase tracking-wider">
          Save 10%
        </span>
      </div>

      <div className="h-px w-full bg-miraya-black/10 mb-8" />

      {/* Color Selection */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium uppercase tracking-widest">
            Color: <span className="text-miraya-black/60 capitalize font-normal">{colors.find(c => c.value === selectedColor)?.name}</span>
          </span>
        </div>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                selectedColor === color.value ? 'ring-1 ring-offset-2 ring-miraya-black' : 'hover:scale-110'
              }`}
              style={{ backgroundColor: color.code }}
              title={color.name}
            >
              {color.value === 'ivory' && <div className="w-full h-full rounded-full border border-miraya-black/10" />}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium uppercase tracking-widest">Size</span>
          <button className="text-xs text-miraya-black/60 hover:text-miraya-black flex items-center gap-1 underline underline-offset-4">
            <Ruler size={14} /> Size Guide
          </button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 text-sm font-medium uppercase border transition-colors ${
                selectedSize === size 
                  ? 'border-miraya-black bg-miraya-black text-miraya-white' 
                  : 'border-miraya-black/20 text-miraya-black hover:border-miraya-gold hover:text-miraya-gold'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Premium Gift Wrapping */}
      <div className="mb-6 flex items-center justify-between p-4 border border-miraya-black/10 dark:border-miraya-white/10 rounded-lg bg-miraya-white/50 dark:bg-miraya-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
           <input type="checkbox" id="gift-wrap" className="w-5 h-5 accent-miraya-gold" />
           <div>
              <label htmlFor="gift-wrap" className="text-sm font-medium dark:text-miraya-white cursor-pointer select-none">Premium Gift Wrapping</label>
              <p className="text-xs text-miraya-black/60 dark:text-miraya-white/60 mt-0.5">Includes luxury box and personalized note</p>
           </div>
        </div>
        <span className="text-sm font-medium dark:text-miraya-white">+ ₹500</span>
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4">
        {/* Quantity */}
        <div className="flex items-center border border-miraya-black/20 dark:border-miraya-white/20 w-full sm:w-32 h-14 rounded-md overflow-hidden">
          <button 
            className="flex-1 h-full flex items-center justify-center hover:bg-miraya-black/5 dark:hover:bg-miraya-white/10 text-miraya-black/60 dark:text-miraya-white/60 hover:text-miraya-black dark:hover:text-miraya-white transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >-</button>
          <span className="w-10 text-center font-medium dark:text-miraya-white">{quantity}</span>
          <button 
            className="flex-1 h-full flex items-center justify-center hover:bg-miraya-black/5 dark:hover:bg-miraya-white/10 text-miraya-black/60 dark:text-miraya-white/60 hover:text-miraya-black dark:hover:text-miraya-white transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          >+</button>
        </div>
        
        <button className="flex-1 h-14 bg-miraya-burgundy text-miraya-white uppercase tracking-widest text-sm font-medium hover:bg-miraya-black dark:hover:bg-miraya-gold hover:text-miraya-white dark:hover:text-miraya-black hover:shadow-xl rounded-md transition-all duration-300">
          Add to Cart
        </button>
        
        <button className="w-14 h-14 border border-miraya-black/20 dark:border-miraya-white/20 flex items-center justify-center hover:border-miraya-burgundy dark:hover:border-miraya-gold hover:text-miraya-burgundy dark:hover:text-miraya-gold transition-colors text-miraya-black dark:text-miraya-white flex-shrink-0 rounded-md">
          <Heart size={20} />
        </button>
      </div>

      <button className="w-full h-14 bg-miraya-gold text-miraya-black uppercase tracking-widest text-sm font-semibold hover:bg-miraya-black hover:text-miraya-gold dark:hover:bg-miraya-white dark:hover:text-miraya-black transition-colors duration-300 mb-10 shadow-md rounded-md">
        Buy it Now
      </button>

      <div className="h-px w-full bg-miraya-black/10 dark:bg-miraya-white/10 mb-8" />

      {/* Delivery Check */}
      <div className="bg-miraya-white/50 dark:bg-miraya-black/50 p-6 border border-miraya-black/5 dark:border-miraya-white/10 rounded-xl">
        <h4 className="flex items-center gap-2 font-serif text-lg mb-4 text-miraya-black dark:text-miraya-white">
          <MapPin size={20} className="text-miraya-gold" /> Check Delivery
        </h4>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter Pincode / Zipcode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 border border-miraya-black/20 dark:border-miraya-white/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-miraya-gold dark:text-miraya-white rounded-md"
          />
          <button className="px-6 bg-miraya-black dark:bg-miraya-white text-miraya-white dark:text-miraya-black text-sm font-medium uppercase tracking-wider hover:bg-miraya-gold dark:hover:bg-miraya-gold hover:text-miraya-white transition-colors rounded-md">
            Check
          </button>
        </div>
        <p className="text-xs text-miraya-black/50 dark:text-miraya-white/50 mt-3 font-light">
          Please enter your pincode to check availability and estimated delivery time.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
