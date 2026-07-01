"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', { name, email, password });
    
    // Mock signup for now
    login(
      { _id: 'new-1', name, email, role: 'user' },
      'mock-jwt-token'
    );
    window.location.href = '/';
  };

  return (
    <>
      <div>
        <h2 className="mt-6 text-3xl font-serif text-miraya-black">
          Join the Collective
        </h2>
        <p className="mt-2 text-sm text-miraya-black/60">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-miraya-gold hover:text-miraya-burgundy transition-colors">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-miraya-black">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-miraya-black/20 rounded-sm shadow-sm placeholder-miraya-black/30 focus:outline-none focus:ring-miraya-gold focus:border-miraya-gold sm:text-sm"
                />
              </div>
            </div>

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
              <label htmlFor="password" className="block text-sm font-medium text-miraya-black">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-miraya-black/20 rounded-sm shadow-sm placeholder-miraya-black/30 focus:outline-none focus:ring-miraya-gold focus:border-miraya-gold sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-miraya-burgundy focus:ring-miraya-gold border-miraya-black/20 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-miraya-black/80">
                I agree to the{' '}
                <a href="#" className="font-medium text-miraya-gold hover:text-miraya-burgundy">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-miraya-white bg-miraya-black hover:bg-miraya-burgundy focus:outline-none transition-colors duration-300 uppercase tracking-widest"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
