"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Trash2 } from 'lucide-react';

const mockWishlist = [
  { id: '1', name: 'Midnight Velvet Bridal Lehenga', price: 185000, image: '/categories/lehenga-v4.png', inStock: true },
  { id: '3', name: 'Ivory Pearl Anarkali', price: 145000, image: '/categories/anarkali-v4.png', inStock: false },
];

export default function WishlistPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif text-miraya-black">My Wishlist</h2>

      {mockWishlist.length === 0 ? (
        <div className="bg-white border border-miraya-black/10 rounded-sm p-12 text-center">
          <p className="text-miraya-black/60 mb-6">Your wishlist is currently empty.</p>
          <Link href="/shop" className="inline-block px-8 py-3 bg-miraya-black text-white uppercase tracking-widest text-sm font-medium hover:bg-miraya-burgundy transition-colors">
            Discover Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockWishlist.map((item) => (
            <div key={item.id} className="bg-white border border-miraya-black/10 rounded-sm flex overflow-hidden group">
              <div className="w-32 h-40 bg-gray-100 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-miraya-black/5" />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif text-lg text-miraya-black hover:text-miraya-gold transition-colors line-clamp-2">
                      <Link href={`/product/${item.id}`}>{item.name}</Link>
                    </h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors shrink-0 ml-2">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="font-medium text-miraya-black">₹{item.price.toLocaleString('en-IN')}</p>
                </div>

                <button 
                  disabled={!item.inStock}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                    item.inStock 
                      ? 'bg-miraya-black text-white hover:bg-miraya-burgundy' 
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag size={14} />
                  {item.inStock ? 'Move to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
