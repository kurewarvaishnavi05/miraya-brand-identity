const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // If you don't have a Mongo URI in .env, this will fallback to a local instance or throw
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/miraya';
    await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
