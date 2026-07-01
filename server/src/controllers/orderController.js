const Order = require('../models/Order');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ message: 'No order items' });
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create Razorpay Order (Mock)
// @route   POST /api/orders/razorpay
// @access  Private
const createRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body; // Amount in INR

    // MOCK RAZORPAY API
    const mockRazorpayOrderId = 'order_' + Math.random().toString(36).substr(2, 9);
    
    console.log('\n=== MOCK RAZORPAY ORDER CREATED ===');
    console.log(`Amount: ₹${amount}`);
    console.log(`Razorpay Order ID: ${mockRazorpayOrderId}`);
    console.log('=====================================\n');

    res.json({
      id: mockRazorpayOrderId,
      currency: 'INR',
      amount: amount * 100 // Razorpay expects amount in paise
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Verify Razorpay Payment (Mock)
// @route   POST /api/orders/razorpay/verify
// @access  Private
const verifyRazorpayPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

    // MOCK VERIFICATION
    console.log('\n=== MOCK RAZORPAY PAYMENT VERIFIED ===');
    console.log(`Payment ID: ${razorpay_payment_id}`);
    console.log(`Order ID: ${razorpay_order_id}`);
    console.log('========================================\n');

    // Update the database order to paid
    const order = await Order.findById(orderId);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: razorpay_payment_id,
        status: 'success',
        update_time: new Date().toISOString(),
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addOrderItems,
  createRazorpayOrder,
  verifyRazorpayPayment
};
