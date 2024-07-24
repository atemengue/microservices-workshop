const mongoose = require('mongoose');

const produtSchema = new mongoose.Schema({
  name: {
    type: String
  },
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  description: String,
  price: Number,
  stock: Number
}, {
  timestamps: true
});

module.exports = mongoose.model("products", produtSchema);