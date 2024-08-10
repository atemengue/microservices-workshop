const mongoose = require('mongoose');
const instance = require('./config/mongooseSingleton');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

const mongoInstance = connect('mongodb://localhost:27017/products', options)
Object.freeze(instance)

module.exports = mongoInstance;


