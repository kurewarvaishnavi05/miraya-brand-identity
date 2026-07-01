"use client";

import React, { useState } from 'react';

interface Address {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface AddressFormProps {
  onNext: (address: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<Address>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-serif text-miraya-black mb-6">Shipping Address</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            required 
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            required 
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-miraya-black/80 mb-1">Address</label>
        <input 
          type="text" 
          name="address" 
          required 
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          placeholder="Street address, apartment, suite, etc."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">City</label>
          <input 
            type="text" 
            name="city" 
            required 
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">State</label>
          <input 
            type="text" 
            name="state" 
            required 
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">PIN Code</label>
          <input 
            type="text" 
            name="postalCode" 
            required 
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">Country</label>
          <select 
            name="country" 
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors bg-transparent"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-miraya-black/80 mb-1">Phone</label>
          <input 
            type="tel" 
            name="phone" 
            required 
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-miraya-black/20 p-3 focus:outline-none focus:border-miraya-gold transition-colors"
          />
        </div>
      </div>

      <div className="pt-6">
        <button 
          type="submit"
          className="w-full md:w-auto px-10 py-4 bg-miraya-black text-miraya-white uppercase tracking-widest text-sm font-medium hover:bg-miraya-burgundy transition-colors duration-300 shadow-md"
        >
          Continue to Payment
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
