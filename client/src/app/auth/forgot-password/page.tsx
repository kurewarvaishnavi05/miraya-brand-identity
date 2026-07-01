"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Request OTP for:', email);
    
    // Mock API call to send OTP
    setTimeout(() => {
      setIsSent(true);
      // In reality, we would redirect to OTP page, but for demo we show success here first
      window.location.href = `/auth/verify-otp?email=${encodeURIComponent(email)}`;
    }, 1000);
  };

  return (
    <>
      <div>
        <h2 className="mt-6 text-3xl font-serif text-miraya-black">
          Reset Password
        </h2>
        <p className="mt-2 text-sm text-miraya-black/60">
          Enter your email and we will send you a One Time Password (OTP) to reset your password.
        </p>
      </div>

      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-miraya-black">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-3 border border-miraya-black/20 rounded-sm shadow-sm placeholder-miraya-black/30 focus:outline-none focus:ring-miraya-gold focus:border-miraya-gold sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSent}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-miraya-white uppercase tracking-widest transition-colors duration-300 ${
                isSent ? 'bg-miraya-gold' : 'bg-miraya-black hover:bg-miraya-burgundy focus:outline-none'
              }`}
            >
              {isSent ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth/login" className="text-sm font-medium text-miraya-gold hover:text-miraya-burgundy transition-colors">
            Back to login
          </Link>
        </div>
      </div>
    </>
  );
}
