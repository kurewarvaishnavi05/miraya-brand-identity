"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, MessageCircle, Video, ArrowRight, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-miraya-black text-miraya-white pt-20 pb-10 border-t border-miraya-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <Image 
              src="/logo.png" 
              alt="MIRAYA by Garima" 
              width={140} 
              height={70} 
              className="mb-6 object-contain" 
            />
            <p className="text-sm text-miraya-white/70 mb-6 font-light leading-relaxed">
              Honoring authentic craftsmanship and timeless design. We invite you to celebrate your story through approachable, meaningful luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-miraya-white/20 flex items-center justify-center hover:bg-miraya-gold hover:border-miraya-gold transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-miraya-white/20 flex items-center justify-center hover:bg-miraya-gold hover:border-miraya-gold transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-miraya-white/20 flex items-center justify-center hover:bg-miraya-gold hover:border-miraya-gold transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-miraya-white/20 flex items-center justify-center hover:bg-miraya-gold hover:border-miraya-gold transition-colors">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-miraya-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Collections', 'Bridal Wear', 'Lookbook', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-miraya-white/70 hover:text-miraya-white text-sm font-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-xl text-miraya-gold mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {['My Account', 'Track Order', 'Shipping Policy', 'Return & Refund', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-miraya-white/70 hover:text-miraya-white text-sm font-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl text-miraya-gold mb-6">Newsletter</h4>
            <p className="text-sm text-miraya-white/70 mb-4 font-light">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-miraya-white/30 py-2 text-sm text-miraya-white placeholder-miraya-white/50 focus:outline-none focus:border-miraya-gold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-2 text-miraya-white/70 hover:text-miraya-gold transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-miraya-white/10 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-miraya-white/50 font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MIRAYA by Garima. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-miraya-white/50">
            <span>Designed with elegance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
