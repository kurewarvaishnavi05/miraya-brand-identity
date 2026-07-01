"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function OTPForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verify OTP for:', email, 'OTP:', otp);
    // Mock successful password reset
    alert('Password reset successfully!');
    window.location.href = '/auth/login';
  };

  return (
    <>
      <div>
        <h2 className="mt-6 text-3xl font-serif text-miraya-black">
          Verify OTP
        </h2>
        <p className="mt-2 text-sm text-miraya-black/60">
          We sent a 6-digit code to <span className="font-medium text-miraya-black">{email}</span>. Please enter it below.
        </p>
      </div>

      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-miraya-black">
              One Time Password (OTP)
            </label>
            <div className="mt-1">
              <input
                id="otp"
                name="otp"
                type="text"
                maxLength={6}
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="appearance-none block w-full px-3 py-3 border border-miraya-black/20 rounded-sm shadow-sm placeholder-miraya-black/30 focus:outline-none focus:ring-miraya-gold focus:border-miraya-gold sm:text-sm tracking-widest text-center text-xl"
                placeholder="000000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-miraya-black">
              New Password
            </label>
            <div className="mt-1">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-3 border border-miraya-black/20 rounded-sm shadow-sm placeholder-miraya-black/30 focus:outline-none focus:ring-miraya-gold focus:border-miraya-gold sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-miraya-white bg-miraya-black hover:bg-miraya-burgundy focus:outline-none transition-colors duration-300 uppercase tracking-widest"
            >
              Reset Password
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth/forgot-password" className="text-sm font-medium text-miraya-gold hover:text-miraya-burgundy transition-colors">
            Didn't receive the code? Try again
          </Link>
        </div>
      </div>
    </>
  );
}

export default function VerifyOTPPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <OTPForm />
    </Suspense>
  );
}
