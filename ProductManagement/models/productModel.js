const mongoose = require('mongoose');

const produtSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  description: String,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categoryModel'
  },
  stock: Number
}, {
  timestamps: true
});

module.exports = mongoose.model("productModel", produtSchema);