const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a category name'],
    unique: true,
    enum: ['Lehenga', 'Saree', 'Kurti', 'Anarkali Suit', 'Sharara Suit', 'Salwar Suit', 'Indo-Western Gown', 'Co-ord Set']
  },
  description: {
    type: String
  },
  image: {
    url: { type: String },
    public_id: { type: String }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
