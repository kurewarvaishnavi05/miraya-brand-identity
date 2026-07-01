"use client";

import React, { useState } from 'react';

interface RazorpayButtonProps {
  amount: number;
  onSuccess: (paymentId: string) => void;
  onError: (error: any) => void;
  address: any;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ amount, onSuccess, onError, address }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // 1. Hit our backend to create a Razorpay Order
      const res = await fetch('http://localhost:5000/api/orders/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount })
      });
      
      const order = await res.json();

      // 2. Initialize Razorpay popup
      const options = {
        key: 'rzp_test_mockkey', // In real app, this comes from env
        amount: order.amount,
        currency: order.currency,
        name: 'MIRAYA by Garima',
        description: 'Luxury Fashion Order',
        order_id: order.id,
        handler: async function (response: any) {
          // 3. Verify payment on backend
          try {
            const verifyRes = await fetch('http://localhost:5000/api/orders/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId: 'mock_mongo_order_id' // In real app, we save order before or after payment
              })
            });
            const data = await verifyRes.json();
            onSuccess(response.razorpay_payment_id);
          } catch (err) {
            onError(err);
          }
        },
        prefill: {
          name: `${address?.firstName} ${address?.lastName}`,
          email: 'customer@example.com',
          contact: address?.phone || ''
        },
        theme: {
          color: '#5E0A0B' // Miraya Burgundy
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        setIsProcessing(false);
        onError(response.error);
      });
      
      rzp.open();

    } catch (error) {
      console.error(error);
      setIsProcessing(false);
      onError(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-miraya-white/50 border border-miraya-black/10 p-6 rounded-sm">
        <h3 className="text-lg font-serif mb-4">Payment Method</h3>
        <div className="flex items-center gap-3 mb-6 p-4 border border-miraya-gold bg-miraya-gold/5">
          <input type="radio" checked readOnly className="text-miraya-burgundy" />
          <span className="font-medium text-miraya-black">Credit Card / UPI / Net Banking</span>
          <span className="ml-auto text-xs text-miraya-black/50 uppercase tracking-widest">Via Razorpay</span>
        </div>
        
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-4 text-sm font-medium uppercase tracking-widest transition-colors shadow-md ${
            isProcessing 
              ? 'bg-miraya-black/50 text-miraya-white cursor-not-allowed'
              : 'bg-miraya-black text-miraya-white hover:bg-miraya-burgundy'
          }`}
        >
          {isProcessing ? 'Processing...' : `Pay ₹${amount.toLocaleString('en-IN')}`}
        </button>
      </div>
    </div>
  );
};

export default RazorpayButton;
