"use client";

import React from 'react';
import Link from 'next/link';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const mockOrders = [
  {
    id: 'ORD-12345',
    date: 'July 1, 2026',
    total: 185000,
    status: 'Processing',
    items: [
      { name: 'Midnight Velvet Bridal Lehenga', size: 'M', color: 'Burgundy', price: 185000, image: '/categories/lehenga-v4.png' }
    ]
  },
  {
    id: 'ORD-12344',
    date: 'June 15, 2026',
    total: 95000,
    status: 'Delivered',
    items: [
      { name: 'Ruby Silk Organza Saree', size: 'Free Size', color: 'Ruby Red', price: 95000, image: '/categories/saree-v4.png' }
    ]
  }
];

export default function OrderHistoryPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif text-miraya-black dark:text-miraya-white">Order History</h2>

      {mockOrders.map((order) => (
        <div key={order.id} className="bg-white dark:bg-miraya-black/40 border border-miraya-black/10 dark:border-miraya-white/10 rounded-2xl overflow-hidden shadow-sm">
          
          {/* Order Header */}
          <div className="bg-gray-50 dark:bg-miraya-white/5 p-4 border-b border-miraya-black/10 dark:border-miraya-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Order Placed</p>
                <p className="font-medium text-miraya-black dark:text-miraya-white">{order.date}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Total Amount</p>
                <p className="font-medium text-miraya-black dark:text-miraya-white">₹{order.total.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Order ID</p>
                <p className="font-medium text-miraya-black dark:text-miraya-white">{order.id}</p>
              </div>
            </div>
            
            <Link 
              href={`/profile/orders/${order.id}`}
              className="text-sm font-medium uppercase tracking-widest text-miraya-burgundy dark:text-miraya-gold hover:text-miraya-gold dark:hover:text-miraya-white transition-colors"
            >
              View Invoice
            </Link>
          </div>

          {/* Order Status & Live Tracking Timeline */}
          <div className="p-6 border-b border-miraya-black/5 dark:border-miraya-white/5">
            <div className="flex items-center gap-3 mb-2">
              {order.status === 'Processing' && <Clock className="text-yellow-500" size={20} />}
              {order.status === 'Shipped' && <Truck className="text-blue-500" size={20} />}
              {order.status === 'Delivered' && <CheckCircle className="text-green-500" size={20} />}
              <h3 className="font-medium text-lg text-miraya-black dark:text-miraya-white">{order.status}</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              {order.status === 'Processing' ? 'Your luxury piece is being handcrafted by our artisans.' : 'Package was handed to resident.'}
            </p>

            {/* Timeline UI */}
            {order.status !== 'Delivered' && (
               <div className="relative w-full max-w-3xl mx-auto mb-4">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-miraya-black/10 dark:bg-miraya-white/10 -translate-y-1/2 rounded-full"></div>
                  <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-miraya-gold -translate-y-1/2 rounded-full transition-all duration-1000"></div>
                  
                  <div className="relative flex justify-between">
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-miraya-gold border-4 border-white dark:border-miraya-black shadow-md z-10"></div>
                        <span className="text-xs font-medium uppercase tracking-widest text-miraya-black dark:text-miraya-white">Placed</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-miraya-gold border-4 border-white dark:border-miraya-black shadow-md z-10 animate-pulse"></div>
                        <span className="text-xs font-medium uppercase tracking-widest text-miraya-black dark:text-miraya-white">Processing</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-miraya-black/20 dark:bg-miraya-white/20 border-4 border-white dark:border-miraya-black z-10"></div>
                        <span className="text-xs font-medium uppercase tracking-widest text-miraya-black/40 dark:text-miraya-white/40">Shipped</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-miraya-black/20 dark:bg-miraya-white/20 border-4 border-white dark:border-miraya-black z-10"></div>
                        <span className="text-xs font-medium uppercase tracking-widest text-miraya-black/40 dark:text-miraya-white/40">Delivered</span>
                     </div>
                  </div>
               </div>
            )}
          </div>

          {/* Order Items */}
          <div className="p-6">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex gap-6 py-4 first:pt-0 last:pb-0 border-b border-gray-100 dark:border-miraya-white/10 last:border-0">
                <div className="w-20 h-24 bg-gray-100 dark:bg-miraya-white/5 flex-shrink-0 relative border border-gray-200 dark:border-miraya-white/10 rounded-md overflow-hidden">
                   <img src={item.image} alt={item.name} className="object-cover w-full h-full opacity-90" />
                </div>
                <div className="flex-1 flex flex-col md:flex-row justify-between">
                  <div>
                    <h4 className="font-serif text-miraya-black dark:text-miraya-white hover:text-miraya-gold dark:hover:text-miraya-gold transition-colors text-lg">
                      <Link href="/shop">{item.name}</Link>
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 capitalize">Size: {item.size} | Color: {item.color}</p>
                    <button className="mt-3 text-xs font-medium uppercase tracking-widest text-miraya-black/50 dark:text-miraya-white/50 hover:text-miraya-burgundy dark:hover:text-miraya-gold transition-colors underline underline-offset-4 decoration-transparent hover:decoration-miraya-burgundy dark:hover:decoration-miraya-gold">
                      Write Review
                    </button>
                  </div>
                  <p className="font-medium text-miraya-black dark:text-miraya-white md:text-right mt-4 md:mt-0">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
