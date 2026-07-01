"use client";

import React, { useState } from 'react';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { motion } from 'framer-motion';

// Mock initial data
const initialCart = [
  {
    id: '1',
    name: 'Midnight Velvet Bridal Lehenga',
    price: 185000,
    quantity: 1,
    size: 'M',
    color: 'Burgundy',
    image: '/categories/lehenga-v4.png',
  },
  {
    id: '2',
    name: 'Ruby Silk Organza Saree',
    price: 95000,
    quantity: 1,
    size: 'Free Size',
    color: 'Ruby Red',
    image: '/categories/saree-v4.png'
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const gstRate = 0.12; // 12% GST for apparel
  const shipping = subtotal > 100000 ? 0 : 500; // Free shipping over 1L INR

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-miraya-white pt-20">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-miraya-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-miraya-black"
          >
            Your Shopping Bag
          </motion.h1>
          <p className="mt-2 text-miraya-black/60">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Items */}
          <div className="flex-1">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-miraya-black/20 text-sm font-medium uppercase tracking-widest text-miraya-black/50">
              <div className="col-span-8">Product</div>
              <div className="col-span-4 text-right">Total</div>
            </div>
            
            <div className="mt-4 md:mt-0">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CartItem 
                    {...item} 
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CartSummary 
                subtotal={subtotal} 
                shipping={shipping} 
                gstRate={gstRate} 
              />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
