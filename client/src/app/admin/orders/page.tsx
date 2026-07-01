"use client";

import React, { useState } from 'react';
import { exportToExcel } from '@/utils/exportExcel';
import { Download, Search, Filter } from 'lucide-react';

// Mock Data
const mockOrders = [
  { id: 'ORD-12345', customer: 'Priya Sharma', email: 'priya@example.com', date: '2026-07-01', items: 2, total: 185000, status: 'Pending', payment: 'Razorpay' },
  { id: 'ORD-12344', customer: 'Neha Gupta', email: 'neha@example.com', date: '2026-06-30', items: 1, total: 95000, status: 'Shipped', payment: 'Credit Card' },
  { id: 'ORD-12343', customer: 'Simran Kaur', email: 'simran@example.com', date: '2026-06-28', items: 3, total: 245000, status: 'Delivered', payment: 'Razorpay' },
  { id: 'ORD-12342', customer: 'Ayesha Khan', email: 'ayesha@example.com', date: '2026-06-25', items: 1, total: 110000, status: 'Cancelled', payment: 'Refunded' },
  { id: 'ORD-12341', customer: 'Riya Patel', email: 'riya@example.com', date: '2026-06-20', items: 2, total: 150000, status: 'Delivered', payment: 'Razorpay' },
];

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleExport = () => {
    // Format data for Excel
    const dataToExport = mockOrders.map(order => ({
      'Order ID': order.id,
      'Customer Name': order.customer,
      'Email Address': order.email,
      'Order Date': order.date,
      'Total Items': order.items,
      'Total Amount (INR)': order.total,
      'Order Status': order.status,
      'Payment Method': order.payment
    }));
    
    exportToExcel(dataToExport, 'Miraya_Orders_Report');
  };

  const filteredOrders = mockOrders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-miraya-black">Orders Management</h1>
          <p className="text-gray-500 mt-1">View, track, and export all customer orders.</p>
        </div>
        
        <button 
          onClick={handleExport}
          className="flex items-center gap-2 bg-miraya-black text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-miraya-burgundy transition-colors"
        >
          <Download size={16} />
          Export to Excel
        </button>
      </div>

      <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-miraya-gold focus:border-miraya-gold"
            />
          </div>
          
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Items</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-miraya-black">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{order.customer}</div>
                    <div className="text-gray-500 text-xs">{order.email}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items}</td>
                  <td className="px-6 py-4 font-medium text-miraya-black">
                    ₹{order.total.toLocaleString('en-IN')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-miraya-burgundy font-medium hover:text-miraya-gold transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                    No orders found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50/50">
          <span className="text-sm text-gray-600">Showing 1 to {filteredOrders.length} of {filteredOrders.length} entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm bg-white" disabled>1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-sm text-sm disabled:opacity-50" disabled>Next</button>
          </div>
        </div>

      </div>
    </div>
  );
}
