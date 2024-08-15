const mongoose = require('mongoose');
const { app } = require('./app');

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true,
  directionConnection: true
};

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/products");
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Product Management Service is running on port ${PORT}`)
});

start();