const mongoose = require('mongoose');
const { app } = require('./app');
const { startConsumer } = require('./subscriber/orderQueue');

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true
};

const start = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/inventory", options);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}


// Start RabbitMQ Consumer
startConsumer();


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Inventory Management Services Service is running on port ${PORT}`)
});

start();