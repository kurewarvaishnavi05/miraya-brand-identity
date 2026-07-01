"use client";

import React, { useState } from 'react';
import { Tag, Gift } from 'lucide-react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  gstRate: number; // e.g. 0.12 for 12%
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping, gstRate }) => {
  const [couponCode, setCouponCode] = useState('');
  const [giftCard, setGiftCard] = useState('');

  const gstAmount = subtotal * gstRate;
  const grandTotal = subtotal + gstAmount + shipping;

  return (
    <div className="bg-miraya-white/50 border border-miraya-black/10 p-6 md:p-8 rounded-sm sticky top-24">
      <h2 className="font-serif text-2xl text-miraya-black mb-6">Order Summary</h2>

      {/* Promos */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-miraya-black/80 mb-2 uppercase tracking-widest">
            <Tag size={16} /> Promo Code
          </label>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Enter Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 border border-miraya-black/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:border-miraya-gold"
            />
            <button className="px-4 border border-miraya-black bg-miraya-black text-miraya-white text-sm font-medium uppercase tracking-wider hover:bg-transparent hover:text-miraya-black transition-colors">
              Apply
            </button>
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-miraya-black/80 mb-2 uppercase tracking-widest">
            <Gift size={16} /> Gift Card
          </label>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Enter Gift Card Number"
              value={giftCard}
              onChange={(e) => setGiftCard(e.target.value)}
              className="flex-1 border border-miraya-black/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:border-miraya-gold"
            />
            <button className="px-4 border border-miraya-black bg-miraya-black text-miraya-white text-sm font-medium uppercase tracking-wider hover:bg-transparent hover:text-miraya-black transition-colors">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-miraya-black/10 mb-6" />

      {/* Math */}
      <div className="space-y-4 mb-6 text-sm text-miraya-black/80">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-miraya-black">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Shipping</span>
          <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Taxes (GST 12%)</span>
          <span>₹{gstAmount.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div className="h-px w-full bg-miraya-black/10 mb-6" />

      {/* Total */}
      <div className="flex justify-between items-baseline mb-8">
        <span className="font-serif text-xl">Grand Total</span>
        <span className="font-serif text-2xl">₹{grandTotal.toLocaleString('en-IN')}</span>
      </div>

      <button className="w-full h-14 bg-miraya-gold text-miraya-black uppercase tracking-widest text-sm font-semibold hover:bg-miraya-black hover:text-miraya-gold transition-colors duration-300 shadow-md">
        Secure Checkout
      </button>
      
      <p className="text-center text-xs text-miraya-black/50 mt-4 font-light">
        Shipping & taxes calculated at checkout
      </p>
    </div>
  );
};

export default CartSummary;
