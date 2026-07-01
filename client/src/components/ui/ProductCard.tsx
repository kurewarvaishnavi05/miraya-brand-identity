"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id, name, price, originalPrice, image, isNew, discount
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col bg-miraya-white rounded-2xl transition-all duration-500 hover:shadow-luxury overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {isNew && (
            <span className="bg-miraya-black text-miraya-white text-xs font-medium uppercase tracking-wider px-3 py-1">
              New
            </span>
          )}
          {discount && (
            <span className="bg-miraya-burgundy text-miraya-white text-xs font-medium uppercase tracking-wider px-3 py-1">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-20 w-8 h-8 bg-miraya-white rounded-full flex items-center justify-center text-miraya-black shadow-sm hover:text-miraya-burgundy transition-colors opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300">
          <Heart size={16} />
        </button>

        {/* Image */}
        <Link href={`/product/${id}`} className="block w-full h-full">
          <motion.div 
            className="w-full h-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            {/* Enhanced Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-miraya-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          </motion.div>
        </Link>

        {/* Quick Actions (Luxury Sweep Button) */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <button className="group/btn relative flex-1 bg-miraya-white overflow-hidden text-miraya-black py-3 text-sm font-medium uppercase tracking-wider shadow-lg flex justify-center items-center gap-2 border border-transparent hover:border-miraya-gold transition-colors">
            <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-miraya-white transition-colors duration-300">
              <ShoppingBag size={16} /> Add to Cart
            </span>
            <div className="absolute inset-0 h-full w-0 bg-miraya-gold transition-all duration-300 ease-out group-hover/btn:w-full z-0" />
          </button>
          <button className="group/btn relative w-12 overflow-hidden bg-miraya-white text-miraya-black flex justify-center items-center shadow-lg border border-transparent hover:border-miraya-gold transition-colors">
            <span className="relative z-10 group-hover/btn:text-miraya-white transition-colors duration-300">
              <Eye size={18} />
            </span>
            <div className="absolute inset-0 h-full w-0 bg-miraya-gold transition-all duration-300 ease-out group-hover/btn:w-full z-0" />
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link href={`/product/${id}`}>
          <h3 className="text-miraya-black font-serif text-lg hover:text-miraya-gold transition-colors">{name}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="text-miraya-black font-medium">₹{price.toLocaleString('en-IN')}</span>
          {originalPrice && (
            <span className="text-miraya-black/50 line-through text-sm">₹{originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
