const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

router.get('/api/products', async (req, res) => {
  const products = await Product.find({});

  res.send(products);
});

const indexProductRouter = router

module.exports = { indexProductRouter };
