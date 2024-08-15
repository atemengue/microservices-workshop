const mongoose = require('mongoose');
const { readFileSync } = require('fs');

const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

const uri = 'mongodb://localhost:27017/products';
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

const { categories } = JSON.parse(categories_products);

async function seedData() {

  await connect();

  //await Category.deleteMany();
  //await Product.deleteMany();


  categories.map(async (item, index) => {

    // items values
    const { products } = item;
    let category_value = {
      name: item.name,
      description: item.description,
      imageUrl: item.imageUrl
    };

    const category = new Category(category_value);

    await category.save();
    // insert into category
    const { id } = category;

    // insert into products
    products.map(async (item) => {
      let product_value = { ...item, categoryId: id };
      const product = new Product(product_value);
      await product.save();
    });


  });

  console.log("Categories and Products data inserted successfully");
  // await disconnect();

}

module.exports = seedData;



