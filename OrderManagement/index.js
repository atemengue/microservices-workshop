const mongoose = require('mongoose');
const { app } = require('./app');

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true
};

const start = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/orders", options);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Order Management Services Service is running on port ${PORT}`)
});

start();