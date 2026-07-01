"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, User, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import SearchModal from '@/components/ui/SearchModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full glassmorphism dark:glassmorphism-dark shadow-luxury py-2 px-6' 
            : 'top-0 left-0 w-full bg-transparent py-6 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className={`${isScrolled ? 'w-full' : 'max-w-7xl mx-auto'}`}>
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="MIRAYA by Garima" 
                  width={120} 
                  height={60} 
                  className="object-contain transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`uppercase tracking-widest text-sm font-medium transition-colors hover:text-miraya-gold ${
                    isScrolled ? 'text-miraya-black dark:text-miraya-white' : 'text-miraya-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`hover:text-miraya-gold transition-colors ${isScrolled ? 'text-miraya-black dark:text-miraya-white' : 'text-miraya-white'}`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className={`hover:text-miraya-gold transition-colors ${isScrolled ? 'text-miraya-black dark:text-miraya-white' : 'text-miraya-white'}`}
                aria-label="Search site"
              >
                <Search size={20} strokeWidth={1.5} aria-hidden="true" />
              </motion.button>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <Link href="/wishlist" className={`hover:text-miraya-gold transition-colors ${isScrolled ? 'text-miraya-black dark:text-miraya-white' : 'text-miraya-white'}`} aria-label="View Wishlist">
                  <Heart size={20} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <Link href="/cart" className={`hover:text-miraya-gold transition-colors ${isScrolled ? 'text-miraya-black dark:text-miraya-white' : 'text-miraya-white'}`} aria-label="View Cart">
                  <ShoppingBag size={20} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <Link href="/profile" className={`hover:text-miraya-gold transition-colors ${isScrolled ? 'text-miraya-black dark:text-miraya-white' : 'text-miraya-white'}`} aria-label="User Profile">
                  <User size={20} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                className={`w-11 h-11 flex items-center justify-center rounded-md ${isScrolled ? 'text-miraya-black dark:text-miraya-white hover:bg-miraya-black/5 dark:hover:bg-miraya-white/5' : 'text-miraya-white hover:bg-miraya-white/10'}`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-11 h-11 flex items-center justify-center rounded-md ${isScrolled ? 'text-miraya-black dark:text-miraya-white hover:bg-miraya-black/5 dark:hover:bg-miraya-white/5' : 'text-miraya-white hover:bg-miraya-white/10'}`}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-miraya-white dark:bg-miraya-black border-t dark:border-miraya-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block px-3 py-2 text-base font-medium text-miraya-black dark:text-miraya-white hover:text-miraya-gold uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-6 px-3 py-4 border-t dark:border-miraya-white/10 mt-4">
                 <button onClick={() => { setIsSearchOpen(true); setIsMobileMenuOpen(false); }}><Search size={20} className="text-miraya-black dark:text-miraya-white" /></button>
                 <Heart size={20} className="text-miraya-black dark:text-miraya-white" />
                 <ShoppingBag size={20} className="text-miraya-black dark:text-miraya-white" />
                 <User size={20} className="text-miraya-black dark:text-miraya-white" />
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
