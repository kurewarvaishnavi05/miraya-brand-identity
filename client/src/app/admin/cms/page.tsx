"use client";

import React from 'react';
import { Image as ImageIcon, Upload, Edit, Trash2 } from 'lucide-react';

const mockBanners = [
  { id: 1, title: 'Summer Bridal Collection', location: 'Homepage Hero', status: 'Active', image: '/hero-banner-v2.png' },
  { id: 2, title: 'Festive Offer - 20% Off', location: 'Homepage Strip', status: 'Inactive', image: '/strip.jpg' },
  { id: 3, title: 'New Arrivals: Lehengas', location: 'Category Banner', status: 'Active', image: '/cat1.jpg' },
];

export default function AdminCMSPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-miraya-black">Banner Management</h1>
        <p className="text-gray-500 mt-1">Control the visual identity and promotional banners across the storefront.</p>
      </div>

      {/* Upload New Banner Section */}
      <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
        <h2 className="text-lg font-serif text-miraya-black mb-4">Upload New Banner</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-sm p-10 flex flex-col items-center justify-center text-center hover:border-miraya-gold transition-colors cursor-pointer bg-gray-50/50">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-miraya-gold">
            <Upload size={24} />
          </div>
          <h3 className="font-medium text-miraya-black text-lg">Click or drag image to upload</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-sm">
            High resolution PNG, JPG or WebP. Suggested dimensions for Hero Banners: 1920x1080px.
          </p>
        </div>
      </div>

      {/* Existing Banners */}
      <div>
        <h2 className="text-lg font-serif text-miraya-black mb-4">Active Banners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBanners.map((banner) => (
            <div key={banner.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm group">
              <div className="aspect-[21/9] bg-gray-100 relative flex items-center justify-center">
                <ImageIcon className="text-gray-300" size={40} />
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-miraya-black hover:text-miraya-gold transition-colors shadow-lg">
                    <Edit size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-miraya-black hover:text-red-500 transition-colors shadow-lg">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-miraya-black truncate pr-4">{banner.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    banner.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {banner.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-miraya-gold"></span>
                  {banner.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
