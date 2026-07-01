"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, ShoppingBag, MapPin, Heart, LogOut } from 'lucide-react';

const sidebarLinks = [
  { name: 'Profile Details', href: '/profile', icon: User },
  { name: 'Order History', href: '/profile/orders', icon: ShoppingBag },
  { name: 'Saved Addresses', href: '/profile/addresses', icon: MapPin },
  { name: 'Wishlist', href: '/profile/wishlist', icon: Heart },
];

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-miraya-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-serif text-miraya-black">My Account</h1>
          <p className="mt-2 text-miraya-black/60">Manage your profile, orders, and preferences.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white border border-miraya-black/10 rounded-sm overflow-hidden">
              <nav className="flex flex-col">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-6 py-4 border-b border-miraya-black/5 last:border-0 transition-colors ${
                        isActive 
                          ? 'bg-miraya-gold/10 text-miraya-burgundy font-medium' 
                          : 'text-miraya-black hover:bg-miraya-black/5'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-miraya-burgundy' : 'text-miraya-black/50'} />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-miraya-black/10 bg-gray-50/50">
                <button className="flex items-center gap-3 w-full px-2 py-2 text-miraya-black/70 hover:text-miraya-burgundy transition-colors">
                  <LogOut size={18} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>

        </div>
      </div>
    </div>
  );
}
