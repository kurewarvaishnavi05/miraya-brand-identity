"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import AddressForm from '@/components/checkout/AddressForm';
import RazorpayButton from '@/components/checkout/RazorpayButton';
import CartSummary from '@/components/cart/CartSummary';

// Mock order info
const subtotal = 185000 + 95000; // From our mock cart
const gstRate = 0.12;
const shipping = 0;
const grandTotal = subtotal + (subtotal * gstRate) + shipping;

export default function CheckoutPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Address, 2: Payment, 3: Success
  const [address, setAddress] = useState<any>(null);

  const handleAddressSubmit = (addr: any) => {
    setAddress(addr);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = (paymentId: string) => {
    console.log('Payment Successful:', paymentId);
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentError = (err: any) => {
    console.error('Payment Error:', err);
    alert('Payment failed. Please try again.');
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-miraya-white pt-28 pb-20 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-24 h-24 bg-miraya-gold/20 rounded-full flex items-center justify-center mb-6 text-miraya-burgundy"
        >
          <Check size={40} />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-miraya-black mb-4"
        >
          Order Confirmed
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-miraya-black/60 max-w-md mx-auto mb-10 font-light"
        >
          Thank you for your purchase. Your luxury items will be handcrafted and shipped to you soon. Order #{Math.floor(Math.random() * 1000000)}
        </motion.p>

        <motion.a 
          href="/shop"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="px-10 py-4 bg-miraya-black text-miraya-white uppercase tracking-widest text-sm font-medium hover:bg-miraya-burgundy transition-colors"
        >
          Continue Shopping
        </motion.a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-miraya-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif text-miraya-black">
            Secure Checkout
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Form Steps */}
          <div className="flex-1 space-y-8">
            
            {/* Step 1: Address */}
            <div className={`p-6 md:p-8 border border-miraya-black/10 transition-opacity duration-300 ${step === 1 ? 'bg-miraya-white/50' : 'bg-transparent opacity-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-serif text-2xl text-miraya-black">1. Shipping Address</h2>
                {step === 2 && (
                  <button 
                    onClick={() => setStep(1)}
                    className="text-sm font-medium uppercase tracking-widest text-miraya-gold hover:text-miraya-burgundy transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>
              
              <AnimatePresence>
                {step === 1 ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-6"
                  >
                    <AddressForm onNext={handleAddressSubmit} />
                  </motion.div>
                ) : (
                  <div className="mt-2 text-sm text-miraya-black/70">
                    {address?.firstName} {address?.lastName}<br/>
                    {address?.address}, {address?.city}, {address?.state} {address?.postalCode}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Step 2: Payment */}
            <div className={`p-6 md:p-8 border border-miraya-black/10 transition-opacity duration-300 ${step === 2 ? 'bg-miraya-white/50' : 'bg-transparent opacity-50'}`}>
              <h2 className="font-serif text-2xl text-miraya-black mb-2">2. Payment</h2>
              
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden mt-6"
                  >
                    <RazorpayButton 
                      amount={grandTotal}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                      address={address}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Order Summary (Locked) */}
          <div className="w-full lg:w-[400px] shrink-0 opacity-80 pointer-events-none">
            {/* We reuse the CartSummary but make it read-only for checkout */}
            <CartSummary 
              subtotal={subtotal} 
              shipping={shipping} 
              gstRate={gstRate} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
