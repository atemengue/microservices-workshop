const mongoose = require('mongoose');
const { readFileSync } = require('fs');
const Inventory = require('../models/inventoryModel');

const data = readFileSync('./data.json', 'utf-8');
const inventories = JSON.parse(data);

const uri = 'mongodb://localhost:27017/inventory';
const options = {
  serverSelectionTimeoutMS: 5000, // Set the timeout for selecting a server
  socketTimeoutMS: 45000,
  autoIndex: true,
};

async function connect() {
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error(err);
  }
}

async function seedData() {
  await connect();
  await Inventory.deleteMany();
  await Inventory.insertMany(inventories);
  console.log('Inventory data seeder OK!!!');
  await disconnect();
}

module.exports = seedData;