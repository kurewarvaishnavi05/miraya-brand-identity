const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  image: {
    url: { type: String, required: true },
    public_id: { type: String, required: true }
  },
  link: {
    type: String // e.g., /category/lehenga
  },
  position: {
    type: String,
    enum: ['hero', 'featured', 'sidebar'],
    default: 'hero'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Banner', bannerSchema);
