"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  id, name, price, image, quantity, size, color, onUpdateQuantity, onRemove 
}) => {
  return (
    <div className="flex gap-6 py-6 border-b border-miraya-black/10 last:border-0 relative">
      {/* Product Image */}
      <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-miraya-black/5 relative overflow-hidden border border-miraya-black/5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row justify-between pr-8 sm:pr-0 gap-2 sm:gap-4">
          <div>
            <h3 className="font-serif text-lg text-miraya-black hover:text-miraya-gold transition-colors">
              <Link href={`/product/${id}`}>{name}</Link>
            </h3>
            <p className="mt-1 text-sm text-miraya-black/60 capitalize">
              Size: {size} | Color: {color}
            </p>
          </div>
          <p className="font-serif text-lg text-miraya-black">
            ₹{price.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center border border-miraya-black/20 h-10 w-28">
            <button 
              className="flex-1 h-full flex items-center justify-center hover:bg-miraya-black/5 text-miraya-black/60 hover:text-miraya-black transition-colors"
              onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
            >-</button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <button 
              className="flex-1 h-full flex items-center justify-center hover:bg-miraya-black/5 text-miraya-black/60 hover:text-miraya-black transition-colors"
              onClick={() => onUpdateQuantity(id, quantity + 1)}
            >+</button>
          </div>
          
          <button 
            onClick={() => onRemove(id)}
            className="text-sm font-medium uppercase tracking-widest text-miraya-black/50 hover:text-miraya-burgundy transition-colors underline underline-offset-4 decoration-transparent hover:decoration-miraya-burgundy"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Quick Remove (Mobile friendly top-right X) */}
      <button 
        onClick={() => onRemove(id)}
        className="absolute top-6 right-0 text-miraya-black/30 hover:text-miraya-burgundy transition-colors"
        title="Remove Item"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default CartItem;
