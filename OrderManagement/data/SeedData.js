const mongoose = require('mongoose');
const { readFileSync } = require('fs');

const Product = require('../models/productModel');
const User = require('../models/userModel');

const uri = 'mongodb://localhost:27017/orders';
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
const categories_products = readFileSync('./data.json', 'utf-8');
const users_data = readFileSync('./userData.json', 'utf-8');

const { categories } = JSON.parse(categories_products);
const users = JSON.parse(users_data)

async function seedData() {

  await connect();

  ///await Category.deleteMany();
  // await Product.deleteMany();
  // await User.deleteMany();

  categories.map(async (item, index) => {

    // items values
    const { products } = item;
    let category_value = {
      name: item.name,
      description: item.description,
      imageUrl: item.imageUrl
    };

    products.map(async (item) => {
      const product = new Product(item);
      await product.save();
    });


    await User.insertMany(users);


  });

  console.log("Products and Users data inserted successfully");
}

module.exports = seedData;

