const express = require('express');
const router = express.Router();
const { addOrderItems, createRazorpayOrder, verifyRazorpayPayment } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, addOrderItems);
router.post('/razorpay', protect, createRazorpayOrder);
router.post('/razorpay/verify', protect, verifyRazorpayPayment);

module.exports = router;
