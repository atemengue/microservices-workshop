const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

router.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product)
  } catch (error) {
    res.status(500).send(error)
  }

});

const createProductRouter = router

module.exports = { createProductRouter };
