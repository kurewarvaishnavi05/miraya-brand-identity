const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Please add a category']
  },
  occasions: [{
    type: String,
    enum: ['Wedding', 'Engagement', 'Reception', 'Mehendi', 'Sangeet', 'Festival', 'Eid', 'Cocktail Party', 'Office Wear', 'Daily Wear', 'Casual Wear', 'Travel']
  }],
  fabric: {
    type: String,
  },
  color: {
    type: String,
  },
  images: [
    {
      url: { type: String, required: true },
      public_id: { type: String, required: true }
    }
  ],
  sizes: [
    {
      size: { type: String }, // e.g., XS, S, M, L, XL
      stock: { type: Number, default: 0 }
    }
  ],
  isFeatured: {
    type: Boolean,
    default: false
  },
  ratings: {
    type: Number,
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
