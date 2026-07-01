"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Tags, 
  Users, 
  Image as ImageIcon,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Categories', href: '/admin/categories', icon: Tags },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Banner CMS', href: '/admin/cms', icon: ImageIcon },
  { name: 'Reviews', href: '/admin/reviews', icon: MessageSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-miraya-black text-miraya-white h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="font-serif text-2xl tracking-widest text-miraya-gold">
          MIRAYA
        </Link>
        <p className="text-xs text-white/50 tracking-widest uppercase mt-1">Admin Portal</p>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors duration-200 ${
                isActive 
                  ? 'bg-miraya-burgundy text-white' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium text-sm tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm tracking-wide">Back to Store</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
