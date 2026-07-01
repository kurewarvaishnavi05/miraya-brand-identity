"use client";

import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 sticky top-0">
      
      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search orders, products, or customers..." 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-miraya-gold focus:border-miraya-gold"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="relative text-gray-500 hover:text-miraya-black transition-colors">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-miraya-burgundy text-white text-[10px] font-bold flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="w-10 h-10 rounded-full bg-miraya-gold/20 flex items-center justify-center text-miraya-burgundy">
            <User size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-miraya-black">Garima</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
