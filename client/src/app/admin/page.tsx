"use client";

import React from 'react';
import SalesChart from '@/components/admin/SalesChart';
import { IndianRupee, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const kpis = [
  { title: 'Total Revenue', value: '₹45,00,000', icon: IndianRupee, trend: '+12.5%' },
  { title: 'Total Orders', value: '1,245', icon: ShoppingBag, trend: '+5.2%' },
  { title: 'Total Customers', value: '840', icon: Users, trend: '+18.1%' },
  { title: 'Conversion Rate', value: '3.2%', icon: TrendingUp, trend: '-0.4%' },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-miraya-black">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here is what's happening with your store today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          const isPositive = kpi.trend.startsWith('+');
          return (
            <div key={kpi.title} className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                  <h3 className="text-2xl font-bold text-miraya-black mt-2">{kpi.value}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-miraya-burgundy">
                  <Icon size={20} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.trend}
                </span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Chart Area */}
      <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
        <h2 className="text-lg font-serif text-miraya-black mb-6">Revenue Analytics</h2>
        <SalesChart />
      </div>

      {/* Recent Orders Preview */}
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-serif text-miraya-black">Recent Orders</h2>
          <a href="/admin/orders" className="text-sm font-medium text-miraya-burgundy hover:text-miraya-gold transition-colors">
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Mock Data */}
              {[
                { id: 'ORD-123', name: 'Priya Sharma', date: 'Jul 1, 2026', amount: '₹1,85,000', status: 'Pending' },
                { id: 'ORD-122', name: 'Neha Gupta', date: 'Jun 30, 2026', amount: '₹95,000', status: 'Shipped' },
                { id: 'ORD-121', name: 'Simran Kaur', date: 'Jun 28, 2026', amount: '₹2,45,000', status: 'Delivered' },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-miraya-black">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.name}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 font-medium text-miraya-black">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
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
