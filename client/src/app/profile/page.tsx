"use client";

import React, { useState } from 'react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Garima',
    lastName: 'Sharma',
    email: 'garima@example.com',
    phone: '+91 98765 43210'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Submit to backend
  };

  return (
    <div className="bg-white border border-miraya-black/10 rounded-sm p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-serif text-miraya-black">Profile Details</h2>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm font-medium uppercase tracking-widest text-miraya-burgundy hover:text-miraya-gold transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-miraya-black/80 mb-2">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors disabled:bg-gray-50 disabled:text-miraya-black/60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-miraya-black/80 mb-2">Last Name</label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors disabled:bg-gray-50 disabled:text-miraya-black/60"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-2">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors disabled:bg-gray-50 disabled:text-miraya-black/60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-2">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors disabled:bg-gray-50 disabled:text-miraya-black/60"
          />
        </div>

        {isEditing && (
          <div className="pt-4">
            <button 
              type="submit"
              className="px-8 py-3 bg-miraya-black text-white uppercase tracking-widest text-sm font-medium hover:bg-miraya-burgundy transition-colors shadow-md"
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
