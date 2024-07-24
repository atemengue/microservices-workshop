const mongoose = require('mongoose');
const instance = require('./config/mongooseSingleton');

// ADD POO

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true
};

const connect = async (uri, options) => {
  const instance = null;
  try {
    instance = await mongoose.connect(uri, options);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
  return instance
}

const mongoInstance = connect('mongodb://127.0.0.1:27017/products', options)
Object.freeze(instance)

module.exports = mongoInstance;


