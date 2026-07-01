"use client";

import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const mockAddresses = [
  {
    id: 1,
    isDefault: true,
    firstName: 'Garima',
    lastName: 'Sharma',
    address: '123 Luxury Avenue, Apartment 4B',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400050',
    country: 'India',
    phone: '+91 98765 43210'
  },
  {
    id: 2,
    isDefault: false,
    firstName: 'Garima',
    lastName: 'Sharma',
    address: '456 Corporate Park, Tower B',
    city: 'Delhi',
    state: 'Delhi',
    postalCode: '110001',
    country: 'India',
    phone: '+91 98765 43210'
  }
];

export default function AddressesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-miraya-black">Saved Addresses</h2>
        <button className="flex items-center gap-2 px-6 py-2 bg-miraya-black text-white uppercase tracking-widest text-xs font-medium hover:bg-miraya-burgundy transition-colors shadow-sm">
          <Plus size={16} />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockAddresses.map((addr) => (
          <div key={addr.id} className="bg-white border border-miraya-black/10 rounded-sm p-6 relative">
            {addr.isDefault && (
              <span className="absolute top-6 right-6 bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                Default
              </span>
            )}
            
            <h3 className="font-medium text-lg text-miraya-black mb-4">
              {addr.firstName} {addr.lastName}
            </h3>
            
            <div className="text-gray-600 text-sm space-y-1 mb-6">
              <p>{addr.address}</p>
              <p>{addr.city}, {addr.state} {addr.postalCode}</p>
              <p>{addr.country}</p>
              <p className="pt-2">Phone: {addr.phone}</p>
            </div>

            <div className="flex gap-4 border-t border-gray-100 pt-4">
              <button className="text-sm font-medium uppercase tracking-widest text-miraya-black/50 hover:text-miraya-gold transition-colors flex items-center gap-2">
                <Edit size={14} /> Edit
              </button>
              <button className="text-sm font-medium uppercase tracking-widest text-miraya-black/50 hover:text-red-500 transition-colors flex items-center gap-2">
                <Trash2 size={14} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
