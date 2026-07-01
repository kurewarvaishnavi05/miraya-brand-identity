"use client";

import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Filter } from 'lucide-react';
import Image from 'next/image';

const mockProducts = [
  { id: '1', name: 'Midnight Velvet Bridal Lehenga', category: 'Lehenga', price: 185000, stock: 12, status: 'Active', image: '/categories/lehenga-v4.png' },
  { id: '2', name: 'Ruby Silk Organza Saree', category: 'Saree', price: 95000, stock: 8, status: 'Active', image: '/categories/saree-v4.png' },
  { id: '3', name: 'Ivory Pearl Anarkali', category: 'Anarkali Suit', price: 145000, stock: 0, status: 'Out of Stock', image: '/categories/anarkali-v4.png' },
  { id: '4', name: 'Champagne Gold Sharara', category: 'Sharara Suit', price: 120000, stock: 5, status: 'Active', image: '/categories/sharara-v4.png' },
  { id: '5', name: 'Emerald Handloom Kurti', category: 'Kurti', price: 45000, stock: 24, status: 'Active', image: '/categories/kurti-v4.png' },
];

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = mockProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-miraya-black">Product Inventory</h1>
          <p className="text-gray-500 mt-1">Manage your luxury product catalog, pricing, and stock levels.</p>
        </div>
        
        <button className="flex items-center gap-2 bg-miraya-black text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-miraya-burgundy transition-colors">
          <Plus size={18} />
          Add New Product
        </button>
      </div>

      <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products by name or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-miraya-gold focus:border-miraya-gold"
            />
          </div>
          
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            Filter by Category
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-10 bg-gray-100 flex-shrink-0 relative overflow-hidden border border-gray-200">
                        {/* Placeholder for actual image */}
                        <div className="absolute inset-0 bg-miraya-black/5" />
                      </div>
                      <span className="font-medium text-miraya-black">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 font-medium text-miraya-black">
                    ₹{product.price.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-gray-400 hover:text-miraya-gold transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
